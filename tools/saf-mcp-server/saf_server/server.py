import json
import os
import sys
import asyncio
from pathlib import Path

from mcp.server import Server
from mcp.server.models import InitializationOptions
import mcp.server.stdio
import mcp.types as types

from mcp.types import ServerCapabilities, ToolsCapability

from .loader import create_store, DataStore

store: DataStore | None = None


def _err(msg: str) -> list[types.TextContent]:
    return [types.TextContent(type="text", text=json.dumps({"error": msg}, indent=2))]


def _ok(data) -> list[types.TextContent]:
    return [types.TextContent(type="text", text=json.dumps(data, indent=2, ensure_ascii=False))]


server = Server("saf-ontology")


@server.list_tools()
async def list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="get_viewpoint",
            description=(
                "Get a concise overview of a viewpoint: its purpose, domain/aspect in the grid, "
                "list of exposed concept names, list of concern questions, and viewpoint dependencies. "
                "Use this first when analyzing a viewpoint."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Viewpoint name (e.g. 'Operational Story Viewpoint') or VP_ID (e.g. 'O1_OSTY')",
                    }
                },
                "required": ["name"],
            },
        ),
        types.Tool(
            name="get_viewpoint_concepts",
            description=(
                "Get all concepts exposed by a viewpoint, fully resolved with their relationships, "
                "inheritance hierarchy, and documentation. Use this to analyze what data structures "
                "a viewpoint makes available."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "viewpoint_name": {
                        "type": "string",
                        "description": "Viewpoint name or VP_ID",
                    }
                },
                "required": ["viewpoint_name"],
            },
        ),
        types.Tool(
            name="get_viewpoint_concerns",
            description=(
                "Get all concerns framed by a viewpoint, with stakeholder rationales explaining "
                "why each stakeholder cares about each concern. Use this to understand the information "
                "needs a viewpoint must satisfy."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "viewpoint_name": {
                        "type": "string",
                        "description": "Viewpoint name or VP_ID",
                    }
                },
                "required": ["viewpoint_name"],
            },
        ),
        types.Tool(
            name="get_concept",
            description=(
                "Get a single concept with its full neighborhood: inheritance (parents/children), "
                "relationships (association ends with multiplicities), and which viewpoints expose it. "
                "Use this to drill into a specific concept of interest."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Concept name",
                    }
                },
                "required": ["name"],
            },
        ),
        types.Tool(
            name="search",
            description=(
                "Search across viewpoints, concepts, concerns, and stakeholders by name. "
                "Returns matching entities with their type and identifier for drill-down."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search term",
                    },
                    "type": {
                        "type": "string",
                        "description": "Filter by entity type: 'viewpoint', 'concept', 'concern', 'stakeholder', or omit for all",
                        "enum": ["viewpoint", "concept", "concern", "stakeholder"],
                    },
                },
                "required": ["query"],
            },
        ),
        types.Tool(
            name="list_viewpoints",
            description=(
                "List all viewpoints, optionally filtered by domain, aspect, or maturity. "
                "Returns concise entries suitable for browsing the SAF grid."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "domain": {
                        "type": "string",
                        "description": "Filter by domain name (e.g. 'Operational', 'Conceptual', 'Physical', 'Architecture Management')",
                    },
                    "aspect": {
                        "type": "string",
                        "description": "Filter by aspect name (e.g. 'Taxonomy & Structure', 'Context & Exchange')",
                    },
                    "maturity": {
                        "type": "string",
                        "description": "Filter by maturity (e.g. 'released', 'proposed', 'under construction')",
                    },
                },
            },
        ),
    ]


@server.call_tool()
async def call_tool(name: str, arguments: dict) -> list[types.TextContent]:
    global store
    if store is None:
        return _err("Data store not initialized")

    try:
        if name == "get_viewpoint":
            vp = store.find_viewpoint(arguments["name"])
            if not vp:
                return _err(f"Viewpoint not found: {arguments['name']}")
            return _ok(store.get_viewpoint_overview(vp))

        elif name == "get_viewpoint_concepts":
            vp = store.find_viewpoint(arguments["viewpoint_name"])
            if not vp:
                return _err(f"Viewpoint not found: {arguments['viewpoint_name']}")
            return _ok(store.get_viewpoint_concepts(vp))

        elif name == "get_viewpoint_concerns":
            vp = store.find_viewpoint(arguments["viewpoint_name"])
            if not vp:
                return _err(f"Viewpoint not found: {arguments['viewpoint_name']}")
            return _ok(store.get_viewpoint_concerns(vp))

        elif name == "get_concept":
            c = store.find_concept(arguments["name"])
            if not c:
                return _err(f"Concept not found: {arguments['name']}")
            return _ok(store.get_concept_neighborhood(c))

        elif name == "search":
            results = store.search(
                arguments["query"],
                type_filter=arguments.get("type"),
            )
            return _ok(results)

        elif name == "list_viewpoints":
            results = store.list_viewpoints(
                domain=arguments.get("domain"),
                aspect=arguments.get("aspect"),
                maturity=arguments.get("maturity"),
            )
            return _ok(results)

        else:
            return _err(f"Unknown tool: {name}")

    except Exception as e:
        return _err(str(e))


async def main():
    global store

    data_dir = Path(__file__).resolve().parent.parent.parent.parent / "src" / "_data"
    env_dir = os.environ.get("SAF_DATA_DIR")
    if env_dir:
        data_dir = Path(env_dir)

    store = create_store(str(data_dir))

    async with mcp.server.stdio.stdio_server() as (read, write):
        await server.run(
            read,
            write,
            InitializationOptions(
                server_name="saf-ontology",
                server_version="0.1.0",
                capabilities=ServerCapabilities(tools=ToolsCapability(listChanged=False)),
            ),
        )


if __name__ == "__main__":
    asyncio.run(main())
