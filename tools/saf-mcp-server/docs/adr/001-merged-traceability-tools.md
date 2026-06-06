# ADR 001: Merged Concept-to-Stereotype Traceability Tools

**Date:** 2026-06-06  
**Status:** Accepted  
**Deciders:** SAF designer, MCP server implementer  

## Context

The SAF ontology MCP server exposes tools that let an LLM query the relationship between abstract SAF concepts and their UML/SysML stereotype implementations. This traceability spans two data sources:

1. **realizeconcept.json** — Direct mapping: `SAF Concept → SAF Stereotype` (e.g., `Conceptual Exchange Type → SAF_ConceptualExchangeType`).
2. **special-implementations.json** — Metamodel-level relations (`SCM_TypedBy`, `SCM_ContainedIn`, `SCM_Attribute`) linking UML/SysML metaclasses (e.g., `FlowProperty`, `ProxyPort`) to SAF stereotypes.

A third data source, **stereotypes.json**, provides documentation for each stereotype but does not encode traceability edges itself.

An LLM in a fresh session cannot know, without being told, that it needs to:

- Call `get_concept_stereotypes` for direct realizations.
- Call `get_special_implementations` for indirect UML-metaclass links.
- Then mentally join the two results to see the full picture.
- Interpret generic terms like "client" and "supplier" differently depending on the relation stereotype.

## Decision

We will merge the two traceability paths into a single tool output and use semantically transparent role labels.

### 1. Single entry point for traceability

`get_concept_stereotypes` returns **both**:
- Direct `realizeconcept.json` realizations (stereotype → concept).
- Indirect `special-implementations.json` relations (UML metaclass → relation → stereotype → concept) — fully resolved to concept level.

The LLM gets the complete trace in one call:

```json
[
  {
    "stereotype_name": "SAF_ConceptualExchangeType",
    "stereotype_id": "...",
    "stereotype_documentation": "...",
    "realized_concepts": ["Conceptual Exchange Type"],
    "special_implementations": [
      {
        "relation_type": "SCM_TypedBy",
        "typed_element": "FlowProperty",
        "type_definition": "SAF_ConceptualExchangeType"
      },
      {
        "relation_type": "SCM_TypedBy",
        "typed_element": "ItemFlow",
        "type_definition": "SAF_ConceptualExchangeType"
      }
    ]
  }
]
```

### 2. Semantic role labels instead of generic "client"/"supplier"

The return shape uses role labels that vary by relation stereotype:

| SCM Stereotype | Field A | Field B |
|---|---|---|
| `SCM_TypedBy` | `typed_element` | `type_definition` |
| `SCM_ContainedIn` | `contained_element` | `container` |
| `SCM_Attribute` | `owner` | `value` |

The `get_special_implementations` tool (retained as a secondary filter) uses the same labels.

### 3. Cross-reference hints in tool descriptions

Every tool description explicitly mentions the chain so an LLM can navigate:

- `get_concept_stereotypes`: "Returns both direct stereotype realizations and indirect UML metaclass mappings via special implementations. Each entry includes `realized_concepts` and `special_implementations` (SCM_TypedBy, SCM_ContainedIn, SCM_Attribute). Use `get_stereotype` to drill into a specific stereotype for full detail."
- `get_stereotype`: "Shows which concepts this stereotype realizes and which special implementations involve it (as typed_element, container, etc.). To trace from a concept forward, use `get_concept_stereotypes`."
- `get_special_implementations`: "Filter view of UML↔SAF mapping relations. Typically reached via `get_concept_stereotypes` or `get_stereotype` which already resolve these."

## Consequences

**Good:**
- LLM gets the full trace in one call — no manual joining.
- Role labels are self-documenting; an LLM can read `typed_element: "FlowProperty"` without knowing the special-implementations model.
- Tool descriptions form a navigable graph; an LLM can discover the chain by reading tool names and descriptions alone.
- Backward compatible: the old `client`/`supplier` fields are replaced, not appended to, so an LLM always sees the better shape.

**Risks:**
- Increased payload size per `get_concept_stereotypes` call (more data returned). Mitigated by the fact that most SAF concepts have few special-implementations; the 44 entries across all concepts average well under 1 per concept.

**Non-goals:**
- Removing the `get_special_implementations` standalone tool — it remains useful for ad-hoc queries (e.g., "show me all `SCM_ContainedIn` relations involving `StateMachine`").
