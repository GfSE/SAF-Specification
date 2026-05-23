import asyncio
import json
import os
import sys
import signal
from pathlib import Path

import pytest

SERVER_DIR = Path(__file__).resolve().parent.parent
SAF_SERVER = str(SERVER_DIR)
DATA_DIR = str(SERVER_DIR.parent.parent / "src" / "_data")

if SAF_SERVER not in sys.path:
    sys.path.insert(0, SAF_SERVER)

os.environ["SAF_DATA_DIR"] = DATA_DIR

from mcp.client.session import ClientSession
from mcp.client.stdio import stdio_client, StdioServerParameters
from mcp.client.sse import sse_client

from saf_server.server import create_store
from saf_server.loader import DataStore


# ── Helpers ───────────────────────────────────────────────────────────────────

def load_store() -> DataStore:
    return create_store(DATA_DIR)


async def stdio_session():
    """Context manager yielding a connected ClientSession over stdio."""
    env = {**os.environ, "SAF_DATA_DIR": DATA_DIR, "PYTHONPATH": SAF_SERVER}
    params = StdioServerParameters(command=sys.executable, args=["-m", "saf_server.server"], env=env)
    async with stdio_client(params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            yield session


async def call(stdio_params, tool_name: str, arguments: dict):
    """Call a tool via stdio and return parsed JSON."""
    async with stdio_client(stdio_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            result = await session.call_tool(tool_name, arguments)
            return json.loads(result.content[0].text)


# ── Fixtures ──────────────────────────────────────────────────────────────────

@pytest.fixture(scope="session")
def store():
    return load_store()


@pytest.fixture(scope="module")
def stdio_params():
    env = {**os.environ, "SAF_DATA_DIR": DATA_DIR, "PYTHONPATH": SAF_SERVER}
    return StdioServerParameters(command=sys.executable, args=["-m", "saf_server.server"], env=env)


# ══════════════════════════════════════════════════════════════════════════════
# Data Integrity Tests
# ══════════════════════════════════════════════════════════════════════════════

class TestDataIntegrity:
    def test_viewpoints_loaded(self, store):
        assert len(store.viewpoints) >= 57

    def test_concepts_loaded(self, store):
        assert len(store.concepts) >= 300

    def test_concerns_loaded(self, store):
        assert len(store.concerns) >= 100

    def test_stakeholders_loaded(self, store):
        assert len(store.stakeholders) >= 15

    def test_viewpoints_have_required_fields(self, store):
        for v in store.viewpoints.values():
            assert v.name
            assert v.id
            assert v.domain
            assert v.aspect
            assert v.purpose

    def test_concepts_have_required_fields(self, store):
        for c in store.concepts.values():
            assert c.id
        # Most concepts should have names; a few unnamed may exist in the model
        unnamed = [c.id for c in store.concepts.values() if not c.name]
        assert len(unnamed) < 5, f"Too many unnamed concepts: {len(unnamed)}"

    def test_concerns_have_required_fields(self, store):
        for cn in store.concerns.values():
            assert cn.name
            assert cn.category

    def test_stakeholders_have_required_fields(self, store):
        for sh in store.stakeholders.values():
            assert sh.name
            assert sh.id

    def test_viewpoint_lookup_by_name(self, store):
        vp = store.find_viewpoint("System Context Definition Viewpoint")
        assert vp is not None and vp.vp_id == "C1_SCXD"

    def test_viewpoint_lookup_by_vpid(self, store):
        vp = store.find_viewpoint("C1_SCXD")
        assert vp is not None

    def test_viewpoint_lookup_case_insensitive(self, store):
        assert store.find_viewpoint("SYSTEM CONTEXT DEFINITION VIEWPOINT") is not None

    def test_concept_lookup_by_name(self, store):
        c = store.find_concept("Conceptual System Context")
        assert c is not None

    def test_stakeholder_lookup(self, store):
        sh = store.find_stakeholder("System Architect")
        assert sh is not None and sh.documentation

    def test_concern_lookup(self, store):
        cn = store.find_concern("Which interface partners does the system have?")
        assert cn is not None and cn.category == "boundary & context"

    def test_missing_viewpoint_returns_none(self, store):
        assert store.find_viewpoint("nonexistent") is None

    def test_missing_concept_returns_none(self, store):
        assert store.find_concept("nonexistent") is None

    def test_missing_stakeholder_returns_none(self, store):
        assert store.find_stakeholder("nonexistent") is None

    def test_missing_concern_returns_none(self, store):
        assert store.find_concern("nonexistent") is None


# ══════════════════════════════════════════════════════════════════════════════
# Store Query Tests
# ══════════════════════════════════════════════════════════════════════════════

class TestStoreQueries:
    def test_viewpoint_overview_has_applicability(self, store):
        vp = store.find_viewpoint("C1_SCXD")
        overview = store.get_viewpoint_overview(vp)
        assert overview["applicability"]

    def test_viewpoint_overview_full(self, store):
        vp = store.find_viewpoint("C1_SCXD")
        o = store.get_viewpoint_overview(vp)
        for key in ("name", "vp_id", "domain", "aspect", "purpose",
                     "applicability", "exposure", "maturity", "stakeholders",
                     "concern_questions", "exposed_concept_names",
                     "required_viewpoints", "recommended_viewpoints"):
            assert key in o, f"Missing key: {key}"

    def test_viewpoint_concepts_resolved(self, store):
        vp = store.find_viewpoint("C1_SCXD")
        concepts = store.get_viewpoint_concepts(vp)
        assert len(concepts) > 0
        for c in concepts:
            assert "inherits_from" in c
            assert "relationships" in c
            assert "exposed_in_viewpoints" in c

    def test_viewpoint_concerns_resolved(self, store):
        vp = store.find_viewpoint("C1_SCXD")
        concerns = store.get_viewpoint_concerns(vp)
        assert len(concerns) > 0
        for cn in concerns:
            assert "question" in cn
            assert "stakeholders" in cn

    def test_concept_neighborhood(self, store):
        c = store.find_concept("Conceptual System Context")
        nh = store.get_concept_neighborhood(c)
        assert nh["name"] == "Conceptual System Context"

    def test_stakeholder_profile(self, store):
        sh = store.find_stakeholder("System Architect")
        p = store.get_stakeholder_profile(sh)
        assert p["name"] == "System Architect"
        assert p["documentation"]
        assert len(p["rationales"]) > 0
        for r in p["rationales"]:
            assert "concern" in r
            assert "rationale" in r

    def test_concern_detail(self, store):
        cn = store.find_concern("Which interface partners does the system have?")
        d = store.get_concern_detail(cn)
        assert d["name"] == "Which interface partners does the system have?"
        assert len(d["viewpoints"]) >= 2
        vp_names = [v["name"] for v in d["viewpoints"]]
        assert "System Context Definition Viewpoint" in vp_names

    def test_search_name(self, store):
        r = store.search("Operational")
        assert len(r) > 0

    def test_search_type_filter(self, store):
        r = store.search("System", type_filter="concept")
        assert all(item["type"] == "concept" for item in r)

    def test_search_include_content(self, store):
        name_only = store.search("integration", include_content=False)
        with_content = store.search("integration", include_content=True)
        assert len(with_content) >= len(name_only)

    def test_list_viewpoints(self, store):
        r = store.list_viewpoints()
        assert len(r) >= 57
        assert all("domain" in v for v in r)

    def test_list_viewpoints_filtered(self, store):
        r = store.list_viewpoints(domain="Conceptual")
        assert all(v["domain"] == "Conceptual" for v in r)

    def test_list_concepts(self, store):
        r = store.list_concepts()
        assert len(r) >= 300
        assert all("type" in c for c in r)
        names = [c["name"].lower() for c in r]
        assert names == sorted(names)

    def test_list_concerns(self, store):
        r = store.list_concerns()
        assert len(r) >= 100
        assert all("category" in c for c in r)

    def test_list_stakeholders(self, store):
        r = store.list_stakeholders()
        assert len(r) >= 15
        assert all("name" in s for s in r)


# ══════════════════════════════════════════════════════════════════════════════
# Stdio Transport Tests
# ══════════════════════════════════════════════════════════════════════════════

class TestStdioTransport:
    @pytest.mark.asyncio
    async def test_server_initializes(self, stdio_params):
        async with stdio_client(stdio_params) as (read, write):
            async with ClientSession(read, write) as session:
                result = await session.initialize()
                assert result.serverInfo.name == "saf-ontology"

    @pytest.mark.asyncio
    async def test_list_tools(self, stdio_params):
        async with stdio_client(stdio_params) as (read, write):
            async with ClientSession(read, write) as session:
                await session.initialize()
                result = await session.list_tools()
                names = [t.name for t in result.tools]
                expected = [
                    "get_viewpoint", "get_viewpoint_concepts", "get_viewpoint_concerns",
                    "get_concept", "search", "list_viewpoints",
                    "list_concepts", "list_concerns", "list_stakeholders",
                    "get_stakeholder", "get_concern",
                ]
                for name in expected:
                    assert name in names, f"Missing: {name}"
                assert len(result.tools) == 11

    @pytest.mark.asyncio
    async def test_get_viewpoint(self, stdio_params):
        data = await call(stdio_params, "get_viewpoint", {"name": "C1_SCXD"})
        assert data["name"] == "System Context Definition Viewpoint"
        assert data["applicability"]

    @pytest.mark.asyncio
    async def test_get_viewpoint_not_found(self, stdio_params):
        data = await call(stdio_params, "get_viewpoint", {"name": "NONEXISTENT"})
        assert "error" in data

    @pytest.mark.asyncio
    async def test_get_viewpoint_concepts(self, stdio_params):
        data = await call(stdio_params, "get_viewpoint_concepts", {"viewpoint_name": "C1_SCXD"})
        assert len(data) > 0
        assert data[0]["name"]

    @pytest.mark.asyncio
    async def test_get_viewpoint_concerns(self, stdio_params):
        data = await call(stdio_params, "get_viewpoint_concerns", {"viewpoint_name": "C1_SCXD"})
        assert len(data) > 0
        assert data[0]["question"]

    @pytest.mark.asyncio
    async def test_get_concept(self, stdio_params):
        data = await call(stdio_params, "get_concept", {"name": "Conceptual System Context"})
        assert data["name"] == "Conceptual System Context"

    @pytest.mark.asyncio
    async def test_get_concept_not_found(self, stdio_params):
        data = await call(stdio_params, "get_concept", {"name": "NONEXISTENT"})
        assert "error" in data

    @pytest.mark.asyncio
    async def test_search(self, stdio_params):
        data = await call(stdio_params, "search", {"query": "Operational"})
        assert len(data) > 0

    @pytest.mark.asyncio
    async def test_search_with_content(self, stdio_params):
        data = await call(stdio_params, "search", {"query": "safety", "include_content": True})
        assert len(data) > 0

    @pytest.mark.asyncio
    async def test_search_type_filter(self, stdio_params):
        data = await call(stdio_params, "search", {"query": "System", "type": "concept"})
        assert all(item["type"] == "concept" for item in data)

    @pytest.mark.asyncio
    async def test_list_viewpoints(self, stdio_params):
        data = await call(stdio_params, "list_viewpoints", {})
        assert len(data) >= 57

    @pytest.mark.asyncio
    async def test_list_viewpoints_filtered(self, stdio_params):
        data = await call(stdio_params, "list_viewpoints", {"domain": "Conceptual"})
        assert all(v["domain"] == "Conceptual" for v in data)

    @pytest.mark.asyncio
    async def test_list_concepts(self, stdio_params):
        data = await call(stdio_params, "list_concepts", {})
        assert len(data) >= 300

    @pytest.mark.asyncio
    async def test_list_concerns(self, stdio_params):
        data = await call(stdio_params, "list_concerns", {})
        assert len(data) >= 100

    @pytest.mark.asyncio
    async def test_list_stakeholders(self, stdio_params):
        data = await call(stdio_params, "list_stakeholders", {})
        assert len(data) >= 15

    @pytest.mark.asyncio
    async def test_get_stakeholder(self, stdio_params):
        data = await call(stdio_params, "get_stakeholder", {"name": "System Architect"})
        assert data["name"] == "System Architect"
        assert data["documentation"]
        assert len(data["rationales"]) > 0

    @pytest.mark.asyncio
    async def test_get_stakeholder_not_found(self, stdio_params):
        data = await call(stdio_params, "get_stakeholder", {"name": "NONEXISTENT"})
        assert "error" in data

    @pytest.mark.asyncio
    async def test_get_concern(self, stdio_params):
        data = await call(stdio_params, "get_concern", {"name": "Which interface partners does the system have?"})
        assert data["name"] == "Which interface partners does the system have?"
        assert len(data["viewpoints"]) >= 2

    @pytest.mark.asyncio
    async def test_get_concern_not_found(self, stdio_params):
        data = await call(stdio_params, "get_concern", {"name": "NONEXISTENT"})
        assert "error" in data

    @pytest.mark.asyncio
    async def test_unknown_tool(self, stdio_params):
        data = await call(stdio_params, "nonexistent_tool", {})
        assert "error" in data



