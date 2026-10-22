# SAF Specification Modeling

How to **develop and maintain the SAF specification model** — the
`SAF_Specification` Cameo project and the companion documentation repository.
This is the spec-maintenance side of the house: it is **not** the user-facing
recipes for modeling a system (those live in [`../user-skills/`](../user-skills/)),
and it is **not** the per-viewpoint spec-focused (v0) drafts (those live in
[`../spec-recipes/`](../spec-recipes/)).

## The key idea: the Development Domain is the meta-level

SAF organizes its viewpoints in a grid of **domains × aspects**. Four domains
describe a system (Operational, Conceptual, Physical, Architecture Management).
The fifth, the **SAF Development Domain** (`D`), is different: its viewpoints
describe **how the SAF framework itself is developed and maintained** — its
concepts, stakeholders and concerns, its viewpoints, and their profile
implementation.

Maintaining the specification *is* exercising the Development Domain's
viewpoints: adding a concept uses **Framework Concept Definition**, defining a
new viewpoint uses **Framework Viewpoint Definition** + **Framework Viewpoint
Implementation**, and so on. The seven viewpoints are deployed as their own
OMP skills (`saf-d2-cotd`, `saf-d2-stkd`, …) — see the table below for the
development flow that ties them together.

## Global policies

These rules apply to **every** change to the specification model. They come from
the Metamodeling Guideline (`src/devdoc/metamodel-guideline/modelguideline.md`);
the full per-rule checklist with rationale and "how to check" is in
`../../saf-spec-expert/docs/rules.md`.

### SCM — Conceptual Model
- No attributes or types on concepts; `SCM_Concept` classes are pure terms; all
  meaning goes in `description`.
- Every concept item shall be described (non-empty documentation).
- Every relationship item shall be described (non-empty documentation).
- No composition or aggregation. Use **undirected** associations only.
- Name every association, with a reading-direction arrow (a sentence).
- Prefer explicit multiplicities on both ends; role names only when the same
  concept appears in multiple roles.
- If the relation itself is a concept, use an `AssociationClass`; do not
  reinterpret the stereotype or the name on the relation line.
- Derived relationships: plain relation marked `SCM_DerivedRelationship`; the
  description must say how it is derived. Redundancy is fine if the derivation
  is specified.
- Use constraints sparsely, only easy ones, but use them if necessary. A simple
  constraint can replace an over-complex inheritance hierarchy.

### SPM — Profile Model
- A stereotype is specialized from one SysML stereotype; another SPM stereotype
  may be an extension of a UML metaclass. All eventually inherit
  `SAF_AbstractItem` (elements) or `SAF_Diagram` (diagrams).
- Relations between SPM elements are shown on diagrams; SysML internal relations
  may be omitted.
- All SPM stereotypes prefixed `SAF_`. Diagram stereotypes:
  `SAF_<domain letter><aspect>_<viewpoint short code>`; tables postfixed
  `_Table`, matrices postfixed `_Matrix`.
- A tagged value is a property of the stereotype, a relation to another SPM
  stereotype, or a relation to a UML metaclass. Use abstract stereotypes only to
  pass tagged values to inheriting stereotypes.
- Traceability SCM ↔ SPM (the SPM demonstrates compliance with the SCM):
  - `SCM_RealizeConcept`: the UML implementation of a concept.
  - `SCM_Attribute`: a stereotype's tag implements a concept relation.
  - `SCM_TypedBy`: "is of type" of the concept is realized by a type.
  - `SCM_ContainedIn`: "is contained in" — containment realizes a concept relation.

### Views & Viewpoints
- A View is related *one-to-one* to a Viewpoint via the **generalization-based
  conform** relationship (not a plain dependency).
- A View exposes **SAF concepts** (never system-model elements).
- A viewpoint specifies via tags: `purpose`, `applicability`, `saf_concernX`
  (via `SCM_FramesConcern`), `interested_stakeholder` (derived), `saf_domain`,
  `saf_aspect`, `saf_required_vp`, `saf_recommended_vp`, and a unique 4-letter
  `id`.
- Package structure is generated from the diagram elements: show all
  implementation relevant to the viewpoint; show nothing irrelevant.
- One stereotype per presentation kind (BDD, Table, Matrix, …).
- Concepts implemented directly by metaclasses are shown, graphically separated.
  If implemented by SAF stereotypes, show the inheritance to SysML stereotypes —
  UML metaclasses and special elements are not shown in stereotypes.
- Lay out diagrams so all relationships are clearly visible; overlap only when
  all relations go to one SysML element (e.g. inheritance).

### Hygiene
No attributes on concepts; no composition; naming prefixes; traceability
present; view/viewpoint pairing intact; diagrams complete but scoped.

### Reuse before creating
Duplicate concepts/viewpoints/stakeholders/concerns are a **violation in
spirit** — every change stays traceable: concept → viewpoint → concern →
stakeholder, and concept → profile realization.

### Verification workflow
After any change, in order:
1. `saf_check_consistency` (orphan requirements, broken chains,
   stereotype_compliance, cross-domain alignment).
2. `<model>_validation_run` on the SAF validation suite.
3. Spot-check the affected rules by reading back the changed elements.
4. Regenerate affected generated docs (never hand-patch).
5. If release-relevant, add a `SAF_ChangeLog` entry and update
   `SAF_ReleasePlan`.

## The seven Development Domain viewpoints

Maintaining the specification *is* working through these viewpoints. Each is
deployed as its own OMP skill, named `saf-<vp>` — the same convention as the
user recipes (`C1_SCXD` → `saf-c1-scxd`).

| VP_ID | Viewpoint | Skill | Aspect |
|---|---|---|---|
| `D2_COTD` | Framework Concept Definition | `saf-d2-cotd` | Taxonomy & Structure |
| `D2_STKD` | Framework Stakeholder and Concern Definition | `saf-d2-stkd` | Taxonomy & Structure |
| `D2_VPTD` | Framework Viewpoint Definition | `saf-d2-vptd` | Taxonomy & Structure |
| `D2_VPTI` | Framework Viewpoint Implementation | `saf-d2-vpti` | Taxonomy & Structure |
| `D2_VPTO` | Framework Viewpoint Overview | `saf-d2-vpto` | Taxonomy & Structure |
| `D2_STYD` | Framework Stereotype Overview | `saf-d2-styd` | Taxonomy & Structure |
| — (unassigned) | Framework Implementation Traceability | `saf-framework-implementation-traceability` | Traceability & Mapping |

Six sit in aspect **2 — Taxonomy & Structure**; the traceability matrix sits in
aspect **8 — Traceability & Mapping**. All are "under construction" or
"proposed" — the framework's own development viewpoints are still being
elaborated.

### The development flow

The viewpoints form a pipeline. The dependency edges come from each viewpoint's
`saf_required_vp` / `saf_recommended_vp`:

```
Framework Concept Definition ──requires──▶ Framework Viewpoint Definition
   (D2_COTD)                          (D2_VPTD)
        │                                   │
        └─recommends→ Stakeholder &        └─then→ Framework Viewpoint
                      Concern Definition          Implementation
                      (D2_STKD)                   (D2_VPTI)

Cross-cutting: Viewpoint Overview (D2_VPTO), Stereotype Overview (D2_STYD),
Implementation Traceability (matrix) — the "where am I" views.
```

1. **Define the concepts** (D2_COTD) — the SCM terms the framework supports.
   This recommends also defining the **stakeholders and concerns** (D2_STKD).
2. **Define a viewpoint** (D2_VPTD) — requires the concepts; specifies purpose,
   applicability, exposed concepts, presentation, related viewpoints, and the
   stereotypes used.
3. **Implement the viewpoint** (D2_VPTI) — the profile stereotypes + traces for
   each exposed concept and each presentation.
4. **Keep the overview views current** — viewpoint overview (D2_VPTO), stereotype
   overview (D2_STYD), and the implementation traceability matrix.

### Mapping a maintenance task

| You want to… | Work in |
|---|---|
| Add / change a concept or relation | Framework Concept Definition (D2_COTD) |
| Add / change a stakeholder, concern, or rationale | Framework Stakeholder and Concern Definition (D2_STKD) |
| Add / change a viewpoint's specification | Framework Viewpoint Definition (D2_VPTD) |
| Add / change a viewpoint's profile implementation | Framework Viewpoint Implementation (D2_VPTI) |
| See which viewpoints exist and their maturity | Framework Viewpoint Overview (D2_VPTO) |
| See all profile stereotypes | Framework Stereotype Overview (D2_STYD) |
| See which concepts are implemented by which stereotypes / viewpoints | Framework Implementation Traceability |

## Bundled reference

| File | What it covers |
|---|---|
| [`model-structure.md`](model-structure.md) | the anatomy of the spec model — the two-layer metamodel, top-level packages, the grid, and how a viewpoint package and a concept area are structured |

The **global policies** above are the always-on rules; the bundled
`model-structure.md` gives the anatomy, and the seven viewpoint skills above
carry the per-viewpoint procedures.

## How this is deployed

This directory is the source. `deploy.py` (default `--set all`, or `--set dev`)
deploys it to `.omp/`:
- **`saf-spec-modeling`** (this file → `SKILL.md`) — the router, carrying the
  global policies above; `model-structure.md` is bundled as a reference file
  reachable via `skill://saf-spec-modeling/model-structure.md`.
- **The seven viewpoint skills** — `saf-d2-cotd`, `saf-d2-stkd`, `saf-d2-styd`,
  `saf-d2-vptd`, `saf-d2-vpti`, `saf-d2-vpto`, and
  `saf-framework-implementation-traceability` — one OMP skill each, named
  `saf-<vp>`, the same convention as the user recipes.

## Source of truth

The specification model is the master. Most content in the documentation
repository is **generated from the model** (see `src/devdoc/dev-guideline.md`),
so the model always wins. The agent that applies changes is the **SAF
Specification Expert** — its recipe is `../../saf-spec-expert/AGENTS.md`, with
the full rule set in `../../saf-spec-expert/docs/rules.md` and the live model
map in `../../saf-spec-expert/docs/model-map.md`. This skill distills the
navigation and rules a maintainer needs; the live model (via the
`cameo-model` MCP tools) is authoritative for anything that changed.
