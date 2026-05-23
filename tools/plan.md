# SAF Ontology MCP Server — Plan

## Goal

Create a read-only Python MCP server that lets an LLM (like opencode) efficiently query the SAF ontology to analyze alignment between the **concepts a viewpoint exposes** and the **concerns it frames**.

The driving question: *"Does viewpoint X expose enough concepts (data + relationships) to answer the information needs expressed by its concerns?"*

## Design Principles

1. **Read-only.** All data is model-generated JSON. The server is a query layer.
2. **Pre-load everything.** ~7MB across 20+ JSON files. Load into memory at startup, build index maps by GUID and by name. Zero I/O per request.
3. **Least context per query.** Tools should return fully resolved, joined data — no raw GUIDs the model must chase.
4. **One server.** Monolithic, with focused tools.
5. **Proven stack.** Python + `mcp` SDK (official Python package).
6. **Start small.** 11 tools, stdio + HTTP/SSE transport.

## Data Model (Loaded at Startup)

```
Index maps:
  concepts_by_guid: dict[str, Concept]
  concepts_by_name: dict[str, Concept]
  viewpoints_by_guid: dict[str, Viewpoint]
  viewpoints_by_name: dict[str, Viewpoint]
  viewpoints_by_vpid: dict[str, Viewpoint]
  concerns_by_guid: dict[str, Concern]
  concerns_by_text_hash: dict[str, Concern]
  concerns_by_name: dict[str, Concern]
  rationales_list: list[Rationale]
  rationales_by_concern_guid: dict[str, list[Rationale]]
  stakeholders_by_guid: dict[str, Stakeholder]
  stakeholders_by_name: dict[str, Stakeholder]
  exposes_by_viewpoint_guid: dict[str, list[Expose]]
```

All cross-references resolved at load time:

| Source | Target | Resolution |
|---|---|---|
| `Viewpoint.Concern` (bare GUIDs) | Concern objects | Inline resolved |
| `Concept.InViewpoint` | Viewpoint names | Inline resolved |
| `Concept.AssociationEnds` | Concept names | Inline resolved |
| `Concept.InheritsFrom / IsGeneralFor` | Concept names | Inline resolved |
| `Rationale.Concern` | Concern name + text | Inline resolved |
| `Rationale.Stakeholder` | Stakeholder name | Inline resolved |
| `Stakeholder.Rationales` (text-only Concern refs) | Matched to Concern objects | By SHA256 hash of normalized question text |

Concern texts are normalized (strip, lowercase, collapse whitespace) and hashed with SHA256 to create a stable synthetic ID. If two concern texts hash identically, they are the same concern. This avoids fuzzy-matching complexity until the model export includes GUIDs for these references.

## Tools — Design Tradeoff

**Key question:** One monolithic tool (`get_viewpoint` returns everything) or many granular tools (model asks for exactly what it needs)?

**Tradeoff:**

| Approach | Pros | Cons |
|---|---|---|
| **Monolithic** (1-2 tools) | Fewer definitions to remember; one call gets all data | Returns concept details + concern rationales even when model only wanted names; wastes context on irrelevant data |
| **Granular** (4-5 tools) | Model requests only what it needs; each response is minimal; less context waste | More tool definitions (~200 bytes each); more roundtrips |

**Decision: Granular.** The context savings per request outweigh the small overhead of additional tool definitions.

**Reasoning flow example:**
1. `list_viewpoints` → browse the grid (~1 KB)
2. `get_viewpoint("Operational Story Viewpoint")` → metadata, concept names, concern questions (~1 KB)
3. `get_viewpoint_concepts(...)` → full concept details (~3 KB, only when model decides it needs them)
4. `get_concept("Operational Context Role")` → specific concept deep-dive (~1 KB)
5. `get_viewpoint_concerns(...)` → concerns with rationales (~2 KB)

vs monolithic: step 1 alone returns 5-15 KB regardless of what the model needs.

## Tools

### 1. `get_viewpoint`

Returns viewpoint metadata, list of exposed concept names, list of concern questions, applicability, required/recommended VP links.

```json
{
  "name": "Operational Story Viewpoint",
  "vp_id": "O1_OSTY",
  "domain": "Operational",
  "aspect": "Context & Exchange",
  "purpose": "...",
  "applicability": "...",
  "exposure": "NotApplicable",
  "maturity": "released",
  "stakeholders": ["Acquirer", "System Architect", "User"],
  "concern_questions": ["Which is the operational scenario...?", "..."],
  "exposed_concept_names": ["Operational Story", "Operational Story Scenario", "..."],
  "required_viewpoints": ["O2_OCD"],
  "recommended_viewpoints": []
}
```

### 2. `get_viewpoint_concepts`

Returns all concepts exposed by a viewpoint, fully resolved (relationships, inheritance, documentation, multiplicities).

### 3. `get_viewpoint_concerns`

Returns all concerns framed by a viewpoint, with stakeholder rationales.

### 4. `get_concept`

Returns a single concept with full resolved neighborhood (inheritance, relationships, which viewpoints expose it).

### 5. `search`

Fuzzy search across all entity types (viewpoints, concepts, concerns, stakeholders) by name. Optional `include_content=true` flag also searches documentation, purpose, and applicability fields. Optional `type` filter limits to one entity type.

### 6. `list_viewpoints`

Filterable by domain, aspect, maturity. Returns concise summaries for browsing the SAF grid.

### 7. `list_concepts`

Returns all concepts with name, type, and identifier. Sorted alphabetically.

### 8. `list_concerns`

Returns all concerns with name, owner, and identifier. Sorted alphabetically.

### 9. `list_stakeholders`

Returns all stakeholders with name and identifier. Sorted alphabetically.

### 10. `get_stakeholder`

Returns a stakeholder's full profile: documentation, and all their concerns with rationales explaining why they care.

### 11. `get_concern`

Returns a concern's details: the question it frames, its owner, and which viewpoints address it.

## Why This Design Minimizes Context

- **No GUID chasing.** Every tool call returns names, not IDs. The model reads prose immediately.
- **Lazy loading of concept detail.** Concept data (the largest payload) is only returned when explicitly requested via `get_viewpoint_concepts`.
- **No opinionated analysis.** The server provides structure; the model does reasoning. Keeps tools simple and reusable.

## Running the Server

The MCP server supports two transport modes: **stdio** (for opencode integration) and **HTTP/SSE** (for remote access).

### Stdio mode (default)

```bash
cd /workspace/SAF-Specification
python -m saf_server.server
```

The data directory defaults to `src/_data/` relative to the repo root. Override with `SAF_DATA_DIR`:

```bash
SAF_DATA_DIR=/custom/path python -m saf_server.server
```

### HTTP/SSE mode

```bash
python -m saf_server.server --port 8000 --host 0.0.0.0
```

This starts a Starlette server with:
- `GET /sse` — establishes SSE connection
- `POST /messages/?session_id=...` — client sends JSON-RPC messages

Connect using any MCP client that supports SSE transport:
```python
from mcp.client.session import ClientSession
from mcp.client.sse import sse_client

async with sse_client("http://host:8000/sse") as (read, write):
    async with ClientSession(read, write) as session:
        await session.initialize()
        tools = await session.list_tools()
```

### Python venv setup (first time)

```bash
python3 -m venv /path/to/venv
/path/to/venv/bin/pip install -r saf_server/requirements.txt
```

**Using uv (recommended):**
```bash
uv venv /path/to/venv
uv pip install -r saf_server/requirements.txt
```

## Configuring opencode

### Stdio transport (local process)

Add an entry to opencode's config (`~/.config/opencode/opencode.json`):

```json
{
  "mcp": {
    "saf-ontology": {
      "type": "local",
      "command": ["/path/to/venv/bin/python", "-m", "saf_server.server"],
      "environment": {
        "SAF_DATA_DIR": "/workspace/SAF-Specification/src/_data",
        "PYTHONPATH": "/workspace/SAF-Specification/tools/saf-mcp-server"
      },
      "enabled": true
    }
  }
}
```

Replace `/path/to/venv/bin/python` with your actual venv path. After editing, type `/reload` in the opencode TUI.

### HTTP/SSE transport (remote server)

opencode also supports connecting to a remotely running MCP server. This is useful when you want to run the SAF server on a different machine, in a container, or keep it running persistently.

First, start the server in HTTP mode:

```bash
python -m saf_server.server --port 8000 --host 0.0.0.0
```

Then configure opencode to connect via `remote` type:

```json
{
  "mcp": {
    "saf-ontology": {
      "type": "remote",
      "url": "http://localhost:8000/sse",
      "enabled": true
    }
  }
}
```

| Scenario | `url` value |
|---|---|
| Same machine | `http://localhost:8000/sse` |
| Different machine (LAN) | `http://192.168.1.100:8000/sse` |
| Docker container | `http://host.containers.internal:8000/sse` |
| Kubernetes / remote host | `https://saf.example.com/sse` |

The server runs independently — you can restart opencode without restarting the SAF server, and vice versa. After editing `opencode.json`, type `/reload` in the opencode TUI to connect.

## Project Structure

```
tools/
  plan.md                    # This file
  saf-mcp-server/
    saf_server/
      __init__.py
      server.py                # MCP server entry point (stdio + HTTP/SSE)
      loader.py                # JSON loading + index building + cross-reference resolution
      models.py                # Dataclasses for Concept, Viewpoint, Concern, etc.
      requirements.txt         # Dependencies: mcp, uvicorn, starlette
    tests/
      __init__.py
      test_server.py           # 61 tests: data integrity, store queries, stdio transport, HTTP transport
    .venv/                     # Virtual environment (not checked in)
```

## Running Tests

```bash
# Core tests (data integrity + stdio transport, 54 tests)
cd tools/saf-mcp-server
pytest tests/test_server.py -v -k "not Http"

# Full suite including HTTP transport (requires --run-http flag, starts server on port 19876)
pytest tests/test_server.py -v --run-http
```

## Non-Goals

- No write tools (no mutate, no create).
- No caching layer beyond the in-memory index.
- No diagram generation.
- No validation of inconsistencies in the source data.
