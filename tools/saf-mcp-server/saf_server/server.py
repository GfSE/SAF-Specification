import argparse
import json
import os
import sys
import asyncio
import logging
from pathlib import Path

from mcp.server import Server
from mcp.server.models import InitializationOptions
import mcp.server.stdio
from mcp.server.sse import SseServerTransport
import mcp.types as types

from mcp.types import ServerCapabilities, ToolsCapability
from starlette.applications import Starlette
from starlette.routing import Mount, Route
from starlette.responses import Response

from .loader import create_store, DataStore

logger = logging.getLogger(__name__)

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
                "Returns matching entities with their type and identifier for drill-down. "
                "Set include_content=true to also search documentation and purpose fields."
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
                    "include_content": {
                        "type": "boolean",
                        "description": "When true, also search documentation and purpose fields (default: false)",
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
        types.Tool(
            name="list_concepts",
            description=(
                "List all concepts with their name, type, and identifier. "
                "Useful for browsing the full concept catalog before drilling into a specific one."
            ),
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="list_concerns",
            description=(
                "List all concerns with their name, owner, and identifier. "
                "Useful for browsing what concerns are defined in SAF."
            ),
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="list_stakeholders",
            description=(
                "List all stakeholders with their name and identifier. "
                "Useful for browsing who the stakeholders are in SAF."
            ),
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="get_stakeholder",
            description=(
                "Get a stakeholder's full profile: documentation, and all their "
                "concerns with rationales explaining why they care. "
                "Use this to understand a stakeholder's information needs."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Stakeholder name (e.g. 'System Architect')",
                    }
                },
                "required": ["name"],
            },
        ),
        types.Tool(
            name="get_concern",
            description=(
                "Get a concern's details: the question it frames, its owner, "
                "and which viewpoints address it. "
                "Use this to understand how a concern is covered across viewpoints."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "Concern name or question text",
                    }
                },
                "required": ["name"],
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
                include_content=arguments.get("include_content", False),
            )
            return _ok(results)

        elif name == "list_viewpoints":
            results = store.list_viewpoints(
                domain=arguments.get("domain"),
                aspect=arguments.get("aspect"),
                maturity=arguments.get("maturity"),
            )
            return _ok(results)

        elif name == "list_concepts":
            return _ok(store.list_concepts())

        elif name == "list_concerns":
            return _ok(store.list_concerns())

        elif name == "list_stakeholders":
            return _ok(store.list_stakeholders())

        elif name == "get_stakeholder":
            sh = store.find_stakeholder(arguments["name"])
            if not sh:
                return _err(f"Stakeholder not found: {arguments['name']}")
            return _ok(store.get_stakeholder_profile(sh))

        elif name == "get_concern":
            cn = store.find_concern(arguments["name"])
            if not cn:
                return _err(f"Concern not found: {arguments['name']}")
            return _ok(store.get_concern_detail(cn))

        else:
            return _err(f"Unknown tool: {name}")

    except Exception as e:
        return _err(str(e))


def _get_data_dir() -> Path:
    data_dir = Path(__file__).resolve().parent.parent.parent.parent / "src" / "_data"
    env_dir = os.environ.get("SAF_DATA_DIR")
    if env_dir:
        data_dir = Path(env_dir)
    return data_dir


def _init_store():
    global store
    if store is None:
        store = create_store(str(_get_data_dir()))


async def run_stdio():
    _init_store()
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


async def run_http(host: str, port: int):
    _init_store()

    sse = SseServerTransport("/messages/")

    async def handle_sse(request):
        async with sse.connect_sse(
            request.scope, request.receive, request._send
        ) as streams:
            await server.run(
                streams[0],
                streams[1],
                InitializationOptions(
                    server_name="saf-ontology",
                    server_version="0.1.0",
                    capabilities=ServerCapabilities(tools=ToolsCapability(listChanged=False)),
                ),
            )
        return Response()

    routes = [
        Route("/sse", endpoint=handle_sse, methods=["GET"]),
        Mount("/messages/", app=sse.handle_post_message),
    ]

    app = Starlette(routes=routes)

    import uvicorn
    config = uvicorn.Config(app, host=host, port=port, log_level="info")
    server_uv = uvicorn.Server(config)
    logger.info(f"Starting HTTP server on {host}:{port}")
    await server_uv.serve()


async def main():
    parser = argparse.ArgumentParser(description="SAF Ontology MCP Server")
    parser.add_argument("--port", type=int, default=None, help="Port for HTTP/SSE transport (omit for stdio)")
    parser.add_argument("--host", type=str, default="127.0.0.1", help="Host for HTTP/SSE transport")
    parser.add_argument("--data-dir", type=str, default=None, help="Path to SAF data directory (overrides SAF_DATA_DIR env)")
    args = parser.parse_args()

    if args.data_dir:
        os.environ["SAF_DATA_DIR"] = args.data_dir

    if args.port:
        await run_http(args.host, args.port)
    else:
        await run_stdio()


if __name__ == "__main__":
    asyncio.run(main())
