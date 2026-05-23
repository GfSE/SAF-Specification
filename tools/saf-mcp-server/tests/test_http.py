#!/usr/bin/env python3
"""
HTTP/SSE transport test for the SAF Ontology MCP Server.

Usage:
    python tests/test_http.py                     # requires a running server
    python tests/test_http.py --spawn             # starts/stops server automatically
"""

import asyncio
import json
import os
import subprocess
import sys
import time
from pathlib import Path

SERVER_DIR = Path(__file__).resolve().parent.parent
SAF_SERVER = str(SERVER_DIR)
DATA_DIR = str(SERVER_DIR.parent.parent / "src" / "_data")
PORT = 19876
URL = f"http://127.0.0.1:{PORT}/sse"

if SAF_SERVER not in sys.path:
    sys.path.insert(0, SAF_SERVER)

os.environ["SAF_DATA_DIR"] = DATA_DIR

from mcp.client.session import ClientSession
from mcp.client.sse import sse_client


async def test_all():
    """Run all HTTP transport tests against the server at URL."""
    results = {"passed": 0, "failed": 0, "errors": []}

    async def check(name, coro):
        try:
            await coro
            results["passed"] += 1
            print(f"  PASS  {name}")
        except Exception as e:
            results["failed"] += 1
            results["errors"].append((name, str(e)))
            print(f"  FAIL  {name}: {e}")

    async with sse_client(URL) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            await check("list_tools returns 11 tools", _list_tools(session))
            await check("get_viewpoint returns data with applicability", _get_viewpoint(session))
            await check("get_stakeholder returns profile with rationales", _get_stakeholder(session))
            await check("get_concern returns viewpoints list", _get_concern(session))
            await check("list_concepts returns >=300 concepts", _list_concepts(session))
            await check("search with content flag returns results", _search(session))
            await check("not found returns error", _not_found(session))

    print(f"\nResults: {results['passed']} passed, {results['failed']} failed")
    if results["errors"]:
        for name, err in results["errors"]:
            print(f"  {name}: {err}")
    return results["failed"] == 0


async def _list_tools(session):
    result = await session.list_tools()
    assert len(result.tools) == 11, f"Expected 11 tools, got {len(result.tools)}"


async def _get_viewpoint(session):
    result = await session.call_tool("get_viewpoint", {"name": "C1_SCXD"})
    data = json.loads(result.content[0].text)
    assert data["name"] == "System Context Definition Viewpoint"
    assert data["applicability"], "applicability is empty"


async def _get_stakeholder(session):
    result = await session.call_tool("get_stakeholder", {"name": "System Architect"})
    data = json.loads(result.content[0].text)
    assert data["name"] == "System Architect"
    assert data["documentation"], "documentation is empty"
    assert len(data["rationales"]) > 0, "no rationales"


async def _get_concern(session):
    result = await session.call_tool("get_concern", {"name": "Which interface partners does the system have?"})
    data = json.loads(result.content[0].text)
    assert len(data["viewpoints"]) >= 2, f"Expected >=2 viewpoints, got {len(data['viewpoints'])}"


async def _list_concepts(session):
    result = await session.call_tool("list_concepts", {})
    data = json.loads(result.content[0].text)
    assert len(data) >= 300, f"Expected >=300 concepts, got {len(data)}"


async def _search(session):
    result = await session.call_tool("search", {"query": "interface", "include_content": True})
    data = json.loads(result.content[0].text)
    assert len(data) > 0, "search returned no results"


async def _not_found(session):
    result = await session.call_tool("get_viewpoint", {"name": "NONEXISTENT"})
    data = json.loads(result.content[0].text)
    assert "error" in data, "expected error for nonexistent viewpoint"


def main():
    spawn = "--spawn" in sys.argv

    proc = None
    if spawn:
        env = {**os.environ, "SAF_DATA_DIR": DATA_DIR, "PYTHONPATH": SAF_SERVER}
        proc = subprocess.Popen(
            [sys.executable, "-m", "saf_server.server", "--port", str(PORT)],
            env=env,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        print(f"Server PID {proc.pid} starting...")
        time.sleep(3)

    try:
        success = asyncio.run(test_all())
    finally:
        if proc:
            proc.terminate()
            try:
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                proc.kill()

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
