# SAF Context Modeling — pick the right viewpoint

You are helping model a **SAF context view of a system of interest (SOI)** in a
Cameo/SysML model, using the SAF profile. There are nine SAF *context*
viewpoints — 3 fidelity domains × 3 kinds of context information. This skill
routes you to the right one; then you follow that viewpoint's user recipe.

> **User side only.** Building a view of *your* system. Maintaining the SAF
> **specification** (the spec model, SCM/SPM, viewpoint packages, rules) is a
> separate concern: `../../saf-spec-expert/AGENTS.md`, with per-viewpoint
> spec-focused drafts in `../spec-recipes/`.

## The context grid

| Domain (fidelity) | Definition — where it sits | Exchange — what flows | Interaction — how it behaves |
|---|---|---|---|
| **Operational** (O) | `O1_OCXD` | `O1_OCXE` | `O4_OCXI` |
| **Conceptual** (C) | `C1_SCXD` | `C1_SCXE` | `C4_SCXI` |
| **Physical** (P) | `P1_PCXD` | `P1_PCXE` | `P4_PCXI` |

Each cell is one user recipe, deployed as an OMP skill `saf-<vp>`
(e.g. `C1_SCXD` → `saf-c1-scxd`).

**Currently available:** `C1_SCXD` (System Context Definition). The other eight
user recipes are **pending** regeneration per `AGENTS.md` §4. Route to `C1_SCXD`
when the request is a conceptual context definition; otherwise confirm which
viewpoint is intended and note that its user recipe is not deployed yet.

## How to pick

Two independent questions — answer both, then read the cell.

**1. Which domain?** (the fidelity layer of the SOI you are capturing)
- **Operational (O)** — what the system *does*: use cases, operational roles,
  operational scenarios.
- **Conceptual (C)** — the system's *conceptual* context: the conceptual SOI
  and the external conceptual systems / users / environmental conditions it
  interacts with.
- **Physical (P)** — the *realized / deployed* context: the physical SOI block
  and the deployed / physical external entities.

If the domain is not clear from the request, **ask** — do not guess the
fidelity layer.

**2. Which kind of context?** (what you need to state about it)
- **Definition (XD)** — *where* the SOI sits and the external entities it
  interacts with: the SOI's boundary and its role parts.
- **Exchange (XE)** — *what information / data* crosses the boundary between
  the SOI and its context.
- **Interaction (XI)** — *how* the SOI and its context behave together: the
  interactions and scenarios.

## Then follow the recipe

Open the matching `<VP_ID>.md` (deployed as `saf-<vp>`). Every context recipe
follows the same shape:

1. **Reuse check** — locate existing elements of the same kind before creating
   anything (a second SOI / context / external system is a bug).
2. Create the **context block**, the **SOI** element, the **external
   elements**, and the **role parts** that tie them to the context.
3. Draw the **BDD** — composition lines context→SOI and context→external; the
   SOI↔external links are role parts, not composition.
4. **Validate** — `get_stereotype_tags` shows the expected SAF stereotypes, the
   BDD shows the composition, `saf_check_consistency` is clean.

### Two rules you must not break

- **Reuse before creating.** Locate existing SOI / context / external-system
  elements first; never create a duplicate.
- **No package per viewpoint.** Place elements in an existing package (your
  system's or context's package). Viewpoint membership is expressed by the SAF
  stereotype/tag, never by a dedicated package.
