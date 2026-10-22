# AGENTS.md — writing SAF viewpoint recipes

This directory holds **viewpoint recipes** for the nine SAF *context* viewpoints
(3 domains × 3 kinds: Definition / Exchange / Interaction).

This file defines (a) what a recipe is and is not, (b) the hard rules, and
(c) the **generator recipe** — the guide the LLM follows to *produce* one
viewpoint recipe. Read this before touching any `.md` here.

---

## 1. What a viewpoint recipe is (and is not)

A **viewpoint recipe** is a step-by-step guide for a **modeler who is building
a SAF-conformant system model** of a concrete system of interest (SOI). It tells
the modeler how to create and populate **one view** of a given context
viewpoint *in their own model*.

It is **not** instructions for extending the SAF specification model. The spec
model (`SAF_Specification` project + the SAF profile) is the finished source of
truth: it already defines the viewpoint *types*, the SAF *concepts*, and the
`SAF_*`/SysML *stereotypes* that implement them. A modeler **consumes** those —
they never recreate them. The recipe is about *using* the profile to model a
system, not about *authoring* the profile.

So the question a recipe answers is:

> "I want to model my system's [operational / system / physical] context
> [definition / exchange / interaction]. What elements do I create, how do I
> type them, and what does the finished diagram look like?"

---

## 2. Two hard rules (the previous version got these wrong)

### Rule 1 — Model a *view*, not the viewpoint. Check existing views first.

A viewpoint **type** exists once, in the profile. A modeler creates **views**
(instances) of that viewpoint for their system — and the model may **already
contain one or more views** of the same viewpoint (e.g. a system-context
definition diagram already exists; now the modeler wants to add a
sub-context, or an exchange to it).

Therefore the **first step of every recipe** is a *reuse check*:

1. Find existing **views** of this viewpoint (by the viewpoint association /
   the diagram's `SAF_*` presentation stereotype / the concept stereotypes).
2. If a suitable view exists, **integrate** the new information into it where
   it makes sense.
3. Only if it does not fit, **create a new view** of the viewpoint.

Never phrase it as "create the viewpoint".

### Rule 2 — No package per viewpoint.

A view is a **diagram + the model elements it shows**. Do **not** tell the
modeler to create a package to hold a viewpoint. Two reasons:

- It is not how the model is organized: the elements belong in the modeler's
  existing system packages (the SOI block's package, the context package, …).
- It is **actively wrong** for behavior viewpoints: state-machine and
  interaction/sequence diagrams are owned by a **classifier / state machine**,
  not by a package — you cannot put them under a package. A blanket "create a
  package per viewpoint" rule is dangerous across the whole framework, not just
  the context viewpoints.

---

## 3. Process — the LLM is the generator (no scripts)

There is **no code generator**. The LLM reads the spec data and the MCP
surface, **reasons** about what a modeler needs, and **writes** the recipe
markdown. We iterate:

1. **Generator recipe** (§4) is the guide the LLM follows.
2. The LLM **executes** it for a *subset* of viewpoints → writes the `.md` files.
3. The **user reviews** each recipe and **tests** it by actually following it in
   Cameo through the `cameo-model` MCP tools (does the view come out right?).
4. **Fine-tune** the generator recipe from that feedback → **regenerate** the
   affected recipes → **re-test**. Repeat until the recipes are trustworthy.

Regenerating means the LLM re-runs §4 for the affected viewpoints and rewrites
the files — not a script run.

---

## 4. The generator recipe (how to produce ONE viewpoint recipe)

Work through A → B → C → D for the target viewpoint. The value is in **C
(reasoning)**; A and B are inputs.

### A — Read the spec data

From `../src/_data/*.json` (the exported spec model). The authoritative live
read is the `cameo-model` `spec_*` tools (`spec_get_viewpoint`,
`spec_list_concepts`, `spec_get_concept`, `spec_get_concept_stereotypes`,
`spec_get_viewpoint_concepts`, …) — prefer those when the model is open, fall
back to the JSON.

For the target `VP_ID`, gather:

| Data | File / tool | What you take |
|---|---|---|
| Purpose, Applicability, Presentation, Domain, Aspect, Maturity | `viewpoints.json` / `spec_get_viewpoint` | what the view captures, how to present it, grid cell |
| Stakeholders, Concern (raw IDs) | `viewpoints.json` | resolve to names via `stakeholders.json` / `concerns.json` |
| RequiredVP, RecommendedVP (raw IDs) | `viewpoints.json` | resolve to names; these are **precondition views** |
| Exposed concepts | `exposes.json` (join `Viewpoint.ID == VP.ID` → `ExposedConcept`) | the concepts a view contains |
| Each concept's definition + relations | `concepts.json` (`Documentation`, `AssociationEnds`) | what it is; what it connects to + multiplicity |
| Each concept's implementation | `realizeconcept.json` + `stereotypes.json` + `sysmlstereotypes.json` + `special-implementations.json` | the SysML element and/or the `SAF_*` stereotype a modeler applies — **this is the "how to type an element" table** |
| Concept + profile reference diagrams | `concept-viewpointdiags.json`, `profile-viewpointdiags.json` (keyed by element `ID`) | what a correct view looks like |
| Worked examples | `mdexamples.json` (keyed by `ExampleForVPID == VP_ID`) | concrete SVG references |

### B — Consult the MCP surface (build tools)

The recipe's "how to build" may use **only real** `cameo-model` tools. The
context-relevant ones:

- **Reuse / discovery:** `find_elements`, `find_elements_by_type`,
  `list_owned_elements`, `get_block_structure`.
- **Create + type:** `create_element`, `create_relationship`,
  `create_connector`, `create_part`, `create_flow_property`,
  `create_information_flow`, `apply_stereotype`, `set_type`, `set_multiplicity`,
  `set_tagged_values`, `set_tagged_values` (stereotype properties).
- **Present:** `saf_create_diagram`, `saf_add_shapes`,
  `saf_add_relationship_paths`, `diagram_add_sequence_message`.
- **Check:** `saf_check_consistency`, `saf_build_traceability_chain`,
  `get_stereotype_tags`, `get_block_structure`.

**IDs are context-dependent** — never hard-code them. The recipe resolves every
element **by name in-session** (`find_elements` by name/stereotype) and passes
the returned ID to the build tools.

### C — Think about what the modeler actually has to do

Before writing, decide explicitly:

- **What is the view?** A diagram of type **T** (BDD / sequence / … — from
  `Presentation` + the viewpoint's diagram type) showing the exposed concepts
  as typed model elements.
- **Preconditions:** which other views / elements must already exist (from
  `RequiredVP` + the exposed concepts' `AssociationEnds` — e.g. the SOI block,
  the context block, the performers).
- **Per element:** SysML type + `SAF_*` stereotype + tagged values + *what it
  represents in the modeler's system* (the modeler-facing "meaning", not just
  the ontology name).
- **Relationships:** what connects which elements, at what multiplicity
  (composition, association, flow, connection).
- **Reuse:** how the modeler detects an existing view/element and decides
  integrate-vs-new.
- **What is *not* needed:** no package; no re-creating the profile/concepts.

### D — Write the recipe (markdown template)

Produce one `<VP_ID>.md` with this shape (adapt to the viewpoint):

1. **Title** + grid cell (Domain × Aspect) + one line: what a view gives the
   modeler.
2. **Purpose / when to use** — modeler-oriented (what system information this
   view captures), from `Purpose`/`Applicability`.
3. **Preconditions** — the views/elements that must exist first (reuse-first).
4. **Step 0 — Reuse check:** find existing views of this viewpoint; decide
   integrate vs. new view (Rule 1).
5. **Create / update the view** — numbered steps:
   - the diagram type to create (or extend);
   - the elements to add, each with its **SysML type → `SAF_*` stereotype →
     tagged values → meaning**;
   - the relationships/associations + multiplicities;
   - a **`| element | SysML type | SAF stereotype | meaning |`** table.
6. **How it looks when done** — reference the concept/profile diagram SVGs +
   worked examples (paths under `../src/_site/diagrams/…`).
7. **Tool-call sketch** — the `cameo-model` calls by name with the key
   arguments (the sequence the LLM follows; IDs resolved by name).
8. **Verify** — how to confirm the view is right (stereotypes applied via
   `get_stereotype_tags`, elements typed, diagram populated,
   `saf_check_consistency` clean).
9. **Who it's for / what it answers** — stakeholders + concerns (brief).

---

## 5. Conventions

- **Names, not IDs.** Resolve IDs in-session via `find_elements`.
- **Reuse before create** (Rule 1).
- **No package per viewpoint** (Rule 2).
- **Ground every build call** in a real `cameo-model` tool.
- A recipe is **done** when a modeler can follow it in Cameo via the MCP tools
  and produce a correct view.
- Keep model, profile and docs consistent; report violations, don't invent.

---

## 6. Files in this directory

- `AGENTS.md` — this file: the concept + generator recipe. Hand-maintained.
- `SAF_MODELING.md` — the general **router** skill (user-facing): explains the
  grid and directs the modeler to the right per-viewpoint recipe. Deployed as
  `saf-modeling`.
- `<VP_ID>.md` — the **user** (modeler-facing) recipe for one context viewpoint,
  **written by the LLM** per §4. Only `C1_SCXD` follows the current template so
  far; the rest are pending regeneration.
- `README.md` — small index of the user recipes + pointers to the router and to
  spec maintenance.
- `deploy.py` — deploys the user recipes + the router to `.omp/`, and by
  default (`--set all`) the spec-maintenance skill from `../dev-skills/` as
  `saf-spec-modeling`.

The **spec-focused (v0)** per-viewpoint drafts — the "create a viewpoint"
procedures (SCM_VP_Package, View/Viewpoint, Expose, FramesConcern, traceability)
— are **not** user recipes and do not live here. They are in `../spec-recipes/`
(starting point for §4 regeneration); spec maintenance in general is owned by
`../../saf-spec-expert/`.
