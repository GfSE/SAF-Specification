# C1_SCXD — System Context Definition (view)

**Grid cell:** Conceptual domain × Context & Exchange (aspect 1) · **Maturity:** released
**Presentation:** a Block Definition Diagram (BDD) — optionally also a table.
**What a view gives you:** a BDD of where your system of interest (SOI) sits in one
context — the SOI's boundary and the external entities (users, external systems,
environmental conditions) it interacts with in that context.

> This is a recipe for a **modeler building a system model**: it tells you how to
> create one *view* of the System Context Definition viewpoint in your own model,
> using the SAF profile. It does not add anything to the spec.

## Purpose / when to use

You use this view to define, at the conceptual level, how your system is embedded
in a **specific context**: where the boundary of the SOI is, and who the external
entities are that the SOI interacts with (users, other external systems,
environmental conditions, …). It also serves as the architecture concept that shows
how the architecture described in the **Operational Context Definition** view is
realized. Make **one view per context** you care about (e.g. "factory context",
"transport context").

## Preconditions

- A top-level **SOI Block** for your system. (Reuse it; if it doesn't exist, create one.)
- The **Operational Context Definition** view (O1_OCXD) is **recommended** first — it
  frames the operational context that this view realizes. It is not strictly required.
- **No per-viewpoint package** (Rule 2 in `AGENTS.md`). Put the elements in an
  existing package (your system's package, or a context package you already use).

## Step 0 — Reuse check (always do this first)

A context block — and a BDD view of it — may **already exist**. Look before you create:

1. `find_elements_by_type(stereotype="SAF_ConceptualContext")` → existing context blocks.
2. Find existing views of this viewpoint: a BDD marked `SAF_C1_SCXD`
   (`saf_get_viewpoint_views(domain="C")` or `find_elements_by_type(stereotype="SAF_C1_SCXD")`).
3. `find_elements_by_type(stereotype="SAF_ConceptualSystem")` → your SOI block (and any external systems already typed this way).

- **If a context block + BDD for the context you want already exists → extend it**: add the new
  context elements / roles to the existing view.
- **Otherwise → create a new context block and a new view** (steps below).

## Create the view

### Elements to model

| Element | Create via | SAF stereotype | Meaning in your model |
|---|---|---|---|
| Your system of interest (SOI) | `saf_create_element(kind="conceptual_system")` — or reuse an existing block | `SAF_ConceptualSystem` | the system you are modeling |
| The addressed context | `saf_create_element(kind="conceptual_system_context")` | `SAF_ConceptualContext` | the setting the SOI is embedded in (one per context) |
| Each external system | `saf_create_element(kind="conceptual_external_system")` | `SAF_ConceptualSystem` | a system outside the SOI that interacts with it (power grid, network, …) |
| Each human actor | `saf_create_element(kind="conceptual_user")` | `SAF_ConceptualUser` | a person who uses or interacts with the SOI |
| Each environmental condition | `saf_create_element(kind="conceptual_environment")` | `SAF_ConceptualEnvironment` | air, sun, road, temperature, … |
| SOI's membership in the context | part (Property) of the context block | `SAF_ConceptualContextRole_SoI` (+ `PartProperty`) | the composition that places the SOI in the context |
| Each context element's membership | part (Property) of the context block | `SAF_ConceptualContextRole` (+ `PartProperty`) | the composition that places a context element in the context |

> **Why `saf_create_element`, not `create_element(type="Block")`:** these SAF
> stereotypes generalize to the SysML `Block` stereotype in the profile, so an
> element carrying one *is* a Block by virtue of the stereotype. Create them as a
> plain Class + the SAF stereotype — exactly what `saf_create_element` does — and
> do **not** also stamp the explicit SysML `Block` marker
> (`create_element(type="Block", stereotype="SAF_…")` double-applies it; the
> physical context in this model carries no explicit Block).

### Build steps

1. **SOI block** — reuse the existing SOI block; if it lacks the stereotype,
   `apply_stereotype(elementId=<soi>, name="SAF_ConceptualSystem")`. If none
   exists, `saf_create_element(kind="conceptual_system", name="<System>", parentId=<pkg>)`.
2. **Context block** — `saf_create_element(kind="conceptual_system_context", name="<Context> Context", parentId=<existing package>)`.
3. **Context element blocks** — create only the ones that apply:
   - external system → `saf_create_element(kind="conceptual_external_system", name="PowerGrid", parentId=<pkg>)`
   - human actor → `saf_create_element(kind="conceptual_user", name="Operator", parentId=<pkg>)`
   - environmental condition → `saf_create_element(kind="conceptual_environment", name="AmbientTemperature", parentId=<pkg>)`
4. **Place them in the context (composition)** — make the SOI and each element a *part*
   of the context block:
   - `create_part(wholeBlockId=<context>, name="soi", partTypeBlockId=<soi>, roleStereotype="SAF_ConceptualContextRole_SoI")`
   - `create_part(wholeBlockId=<context>, name="powerGrid", partTypeBlockId=<powerGrid>, roleStereotype="SAF_ConceptualContextRole")`
   - … one per context element.
   `create_part` (default `aggregation="composite"`) applies `PartProperty` and
   auto-creates the companion composition Association — the BDD line with the
   diamond on the context's end ("the SOI is identified by the part stereotype").
   Do **not** also call `create_relationship(type="composition")` for the same pair.
5. **Draw the BDD** — `saf_create_diagram(name="<Context> Context Definition", parentId=<pkg>, viewpoint="C1_SCXD", elementIds=[<context>, <soi>, <each element>])`.
   The `viewpoint` fixes the diagram kind (BDD) and marks the diagram with the view
   stereotype `SAF_C1_SCXD`. Pass the blocks (classifiers) in `elementIds`; the role
   parts are internal structure and are not BDD shapes.
6. **Draw the composition lines** — `saf_add_relationship_paths(diagramId=<diagram>, relationshipIds=<the relationshipsSkipped returned by step 5>)`.

## How it looks when done

A BDD with the context block, the SOI block, and the context-element blocks, and
composition edges (diamond on the context side) from the context to the SOI and to
each element. Reference diagrams:

- Concept diagram: `../src/diagrams/examples_md/exa_19_0_4_6d8019d_1618589544269_483151_337.svg`
- Profile diagram: `../src/diagrams/examples_md/exa_19_0_4_6d8019d_1618589544368_728518_358.svg`
- Worked example: `../src/diagrams/examples_md/exa_18_1_3c00182_1450814089865_467303_50732.svg` (FFDS Context Definition) and its table `exa_18_2_3c00182_1453968521162_750998_20510.svg`.

A tabular form is also acceptable: a table listing the context roles, the context
elements, and a short description of each.

## Tool-call sketch (copy this; resolve every ID by name in-session)

```text
# 0. reuse
find_elements_by_type(stereotype="SAF_ConceptualContext")              # existing context blocks
find_elements_by_type(stereotype="SAF_ConceptualSystem")                  # SOI + external systems

# 2. context block
saf_create_element(kind="conceptual_system_context", name="Factory Context", parentId=<pkg>)

# 3. context elements (only those that apply)
saf_create_element(kind="conceptual_external_system", name="PowerGrid", parentId=<pkg>)
saf_create_element(kind="conceptual_user", name="Operator",  parentId=<pkg>)

# 4. roles = composition (parts of the context)
create_part(wholeBlockId=<context>, name="soi",       partTypeBlockId=<soi>,       roleStereotype="SAF_ConceptualContextRole_SoI")
create_part(wholeBlockId=<context>, name="powerGrid", partTypeBlockId=<powerGrid>, roleStereotype="SAF_ConceptualContextRole")
create_part(wholeBlockId=<context>, name="operator",  partTypeBlockId=<operator>,  roleStereotype="SAF_ConceptualContextRole")

# 5. diagram (BDD, marked SAF_C1_SCXD)
saf_create_diagram(name="Factory Context Definition", parentId=<pkg>, viewpoint="C1_SCXD",
                  elementIds=[<context>, <soi>, <powerGrid>, <operator>])
#    -> returns { diagramId, relationshipsSkipped }

# 6. composition lines
saf_add_relationship_paths(diagramId=<diagramId>, relationshipIds=<relationshipsSkipped>)
```

## Verify

- `get_block_structure(<context>)` → the context's parts (the roles) with their types and the
  `SAF_ConceptualContextRole*` stereotypes are present.
- `get_stereotype_tags(<context>)` → has `SAF_ConceptualContext`; the SOI block has `SAF_ConceptualSystem`.
- The BDD is marked `SAF_C1_SCXD` (a view of this viewpoint) and shows the composition lines.
- `saf_check_consistency` → no orphan concepts / broken chains.

## Who it's for / what it answers

- **Stakeholders:** Acquirer, Customer, IV&V Engineer, Safety Expert, Security Expert,
  Supplier, System Architect.
- **Answers:** Which external conceptual entities does the system interact with in this
  context? In which contexts is the system embedded and used? Which interface partners
  does it have? Where (geographically/physically) are the elements?
