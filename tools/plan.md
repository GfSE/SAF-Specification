# SAF Ontology MCP Server — Plan

## Goal

Create a read-only Python MCP server that lets an LLM (like opencode) efficiently query the SAF ontology to analyze alignment between the **concepts a viewpoint exposes** and the **concerns it frames**.

The driving question: *"Does viewpoint X expose enough concepts (data + relationships) to answer the information needs expressed by its concerns?"*

## Design Principles

1. **Read-only.** All data is model-generated JSON. The server is a query layer.
2. **Pre-load everything.** ~7MB across 20+ JSON files. Load into memory at startup, build index maps by GUID and by name. Zero I/O per request.
3. **Least context per query.** Tools should return fully resolved, joined data — no raw GUIDs the model must chase.
4. **One server.** Monolithic, with focused tools.
5. **Proven stack.** Python + `mcp` SDK (official Python package). `pip install mcp`.
6. **Start small.** 4–5 tools, no CLI scaffolding beyond `python server.py`.

## Data Model (Loaded at Startup)

```
Index maps:
  concepts_by_guid: dict[str, Concept]
  concepts_by_name: dict[str, Concept]
  viewpoints_by_guid: dict[str, Viewpoint]
  viewpoints_by_name: dict[str, Viewpoint]
  concerns_by_guid: dict[str, Concern]
  concerns_by_text_hash: dict[str, Concern]
  rationales_list: list[Rationale]
  stakeholders_by_guid: dict[str, Stakeholder]
  exposes_by_viewpoint: dict[str, list[Expose]]  # viewpoint GUID -> expose entries
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

**Decision: Granular.** The context savings per request outweigh the small overhead of additional tool definitions. A viewpoint exposing 15 concepts each with relationships could return 5-10KB of concept detail the model didn't ask for yet. With granular tools, the model gets a ~1KB overview first, then requests detail only where needed.

**Reasoning flow example:**
1. `get_viewpoint("Operational Story Viewpoint")` → metadata, concept names, concern questions (~1 KB)
2. `get_viewpoint_concepts("Operational Story Viewpoint")` → full concept details (~3 KB, only when model decides it needs them)
3. `get_concept("Operational Context Role")` → specific concept deep-dive (~1 KB)
4. `get_viewpoint_concerns("Operational Story Viewpoint")` → concerns with rationales (~2 KB)

vs monolithic: step 1 alone returns 5-15 KB regardless of what the model needs.

## Proposed Tools

### 1. `get_viewpoint`

Returns viewpoint metadata, list of exposed concept names, list of concern questions, and required/recommended VP links.

*Purpose: lightweight overview — enough for the model to decide what to investigate further.*

```json
{
  "name": "Operational Story Viewpoint",
  "vp_id": "O1_OSTY",
  "domain": "Operational",
  "aspect": "Context & Exchange",
  "purpose": "...",
  "exposure": "NotApplicable",
  "maturity": "released",
  "stakeholders": ["Acquirer", "System Architect", "User"],
  "concern_questions": [
    "Which is the operational scenario...?",
    "For what purpose is the system developed or adapted?"
  ],
  "exposed_concept_names": [
    "Operational Story",
    "Operational Story Scenario",
    "Operational Story Participation"
  ],
  "required_viewpoints": ["O2_OCD"],
  "recommended_viewpoints": []
}
```

### 2. `get_viewpoint_concepts`

Returns all concepts exposed by a viewpoint, fully resolved (relationships, inheritance, documentation, multiplicities).

*Purpose: the data-side of the coverage analysis — what information can this viewpoint capture?*

### 3. `get_viewpoint_concerns`

Returns all concerns framed by a viewpoint, with stakeholder rationales.

*Purpose: the information-need side of the coverage analysis — what questions must this viewpoint answer?*

### 4. `get_concept`

Query: concept name.

Returns a single concept with full resolved neighborhood.

```json
{
  "name": "System Function",
  "type": "Class",
  "documentation": "...",
  "inherits_from": ["General Function"],
  "is_general_for": [...],
  "relationships": [
    {"target": "System", "via": "System Function Allocation", "multiplicity": "1..*"}
  ],
  "exposed_in_viewpoints": [
    {"name": "System Process Viewpoint", "vp_id": "C4_SPR"}
  ]
}
```

### 5. `search`

Fuzzy search across all entity types (viewpoints, concepts, concerns, stakeholders) by name. Returns flat list of matches with type, name, and identifier for the model to drill into.

### 6. `list_viewpoints`

Filterable by domain, aspect, maturity. Returns concise summaries (name, VP_ID, domain, aspect, exposure). For browsing the grid.

## Why This Design Minimizes Context

- **No GUID chasing.** Every tool call returns names, not IDs. The model reads prose immediately.
- **Lazy loading of concept detail.** Concept data (the largest payload) is only returned when explicitly requested via `get_viewpoint_concepts`.
- **No opinionated analysis.** The server provides structure; the model does reasoning. Keeps tools simple and reusable.

## Future Optimization

- If concern GUIDs are exported from the modeling tool, replace text hashing with direct GUID resolution in stakeholders.json references.
- If tool definitions themselves become too numerous, reconsider monolithic vs granular — but for 5-6 tools this is not a concern.

## Running the Server

The MCP server uses stdio transport. Run it from the repo root:

```bash
cd /workspace/SAF-Specification
python -m tools.saf-mcp-server.saf_server.server
```

The data directory defaults to `src/_data/` relative to the repo root. Override with `SAF_DATA_DIR`:

```bash
SAF_DATA_DIR=/custom/path python -m tools.saf-mcp-server.saf_server.server
```

### Python venv setup (first time)

**Using pip:**
```bash
python3 -m venv /path/to/venv
/path/to/venv/bin/pip install -r tools/saf-mcp-server/saf_server/requirements.txt
```

**Using uv (recommended):**
```bash
uv venv /path/to/venv
uv pip install -r tools/saf-mcp-server/saf_server/requirements.txt
```

Or run directly without a persistent venv:
```bash
uv run --with-requirements tools/saf-mcp-server/saf_server/requirements.txt \
  python -m tools.saf-mcp-server.saf_server.server
```

## Configuring opencode

Add an entry to opencode's config (`~/.config/opencode/opencode.json`):

```json
{
  "mcp": {
    "saf-ontology": {
      "type": "local",
      "command": ["/path/to/venv/bin/python", "-m", "tools.saf-mcp-server.saf_server.server"],
      "env": {
        "SAF_DATA_DIR": "/workspace/SAF-Specification/src/_data"
      }
    }
  }
}
```

Replace `/path/to/venv/bin/python` with the actual path to your venv's Python interpreter. The server must be started from the repo root (since `-m` resolves the module path relative to CWD), or pass the full absolute module path.

### Reloading without restarting opencode

After editing `opencode.json`, type `/reload` (or `/restart`, `/refresh`) in the opencode TUI to reload the config and restart all MCP servers immediately — no need to exit and relaunch.

## Project Structure

```
tools/
  plan.md                    # This file
  saf-mcp-server/
    saf_server/
      __init__.py
      server.py                # MCP server entry point
      loader.py                # JSON loading + index building + cross-reference resolution
      models.py                # Pydantic models / dataclasses
      requirements.txt         # Dependencies: mcp
```

## Non-Goals

- No write tools (no mutate, no create).
- No web UI.
- No caching layer beyond the in-memory index.
- No diagram generation.
- No validation of inconsistencies in the source data.
