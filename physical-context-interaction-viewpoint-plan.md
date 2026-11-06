# Plan — New Physical-Domain Viewpoint "Physical Context Interaction" (P4_PCXI)

Status: **PLANNED** (SCM ready to implement; SPM postponed — see §7)
Date: 2026-09-24
Author: SAF Spec Expert (model: `SAF_Specification`, open in-memory as `Untitled1`, **no save/commit applied**)

---

## 1. Goal

Close the gap in the SAF grid: the **Interaction & Collaboration** aspect (aspect 4)
has external *context interaction* viewpoints for the Operational domain
(`O4_OCXI`) and the Conceptual domain (`C4_SCXI`), but **no physical counterpart
exists** — the physical P4 cell currently only holds the *internal* variant
`P4_PIEX` (Physical Internal Exchange, WhiteBox).

The new viewpoint provides the **external, BlackBox interaction view on the
physical level**: single threads of interaction between the physical SOI and the
Physical Context Elements in a given Physical System Context, presented as a
**sequence diagram** of lifelines and messages.

## 2. Decisions (confirmed by user)

| # | Decision | Choice |
|---|---|---|
| 1 | Role hierarchy | **(a)** Introduce a new abstract `Physical Context Role` concept as parent of the existing `Physical Context Element Role` and `Physical SOI Role` (clean mirror of conceptual `System Context Role`) |
| 2 | Concern | **(a)** Create a new concern "What is the sequence of interactions among the system and physical context elements on physical level?" (mirror of the C4_SCXI interaction concern) |
| 3 | `saf_recommended_vp` | **P4_PIEX** (Physical Internal Exchange — closest physical white-box counterpart; physical domain has no process viewpoint, so the C3_SPRO analog does not exist) |
| 4 | SPM layer | **Postponed.** User will load the SAF_Profile as a second open model; changes there are **not immediately visible** in the spec model (it is a system profile that must be **re-deployed as a plugin**). Therefore the `SCM_RealizeConcept` traceability links **cannot be placed yet** — see §7. |

## 3. Framework positioning

- **Grid cell:** Physical (P) × Aspect 4 (Interaction & Collaboration)
- **Viewpoint name:** Physical Context Interaction Viewpoint
- **Short code:** `PCXI` → **vpId `P4_PCXI`** (pattern: `<domain letter><aspect><type short code>`, cf. `O4_OCXI`, `C4_SCXI`)
- **View stereotype:** `SAF_P4_PCXI` (pattern: `SAF_<domain><aspect>_<short code>`)
- **Exposure:** BlackBox (mirrors `C4_SCXI`)
- **Maturity:** proposed (to be released via release plan)

### Mirror reference: `C4_SCXI` (System Context Interaction Viewpoint)

- domain: conceptual, aspect: Interaction & Collaboration, exposure: BlackBox, maturity: released
- purpose: "describes the System external behavior based on the exchange between
  Logical SOI and Logical Context Elements Usage in a given System Context. It
  depicts the sequence of interactions between the Logical SOI, the Context
  Elements and the exchanged Domain Item Kinds needed to accomplish a given
  System Process. Note: The System Context Interaction Viewpoint may refine a
  System Use Case."
- applicability: supports the "prepare for system requirement definition"
  activity of the INCOSE SEH 2023 [§2.3.5.3] and contributes to the functional
  boundary definition.
- presentation: sequence diagram (lifelines = part properties typed by a
  System Context Element; time along vertical axis; messages between lifelines).

### Exposed concepts of `C4_SCXI` (the template for P4_PCXI)

| Concept | Type | Implementation |
|---|---|---|
| System Context Interaction Scenario | Class | direct: UML `Interaction` |
| System Context Scenario Participation | AssociationClass | direct: UML `Lifeline` |
| System Context Chronological Message | AssociationClass | direct: UML `Message` |
| Conceptual Context Element Role | AssociationClass | `SAF_ConceptualContextRole` |
| Conceptual SOI Role | AssociationClass | `SAF_ConceptualContextRole_SoI` |

> Note: `System Context Role` (the abstract parent of the two conceptual roles)
> is **not** exposed by C4_SCXI — consistent with the rule "do not expose
> abstract concepts".

### Concerns framed by `C4_SCXI` (3)

1. "How is the system being used or utilized and interacting with other external systems to satisfy user needs?" (boundary & context)
2. "What is the necessary response time for an interface or a service?" (interaction)
3. "What is the sequence of interactions among the system and context elements on concpetual level?" (interaction)

### Stakeholders of `C4_SCXI` (10, all reused — no new stakeholders needed)

Acquirer, Customer, Hardware Developer, IV&V Engineer, Operator, Safety Expert,
Security Expert, Software Developer, System Architect, User.

### Viewpoint relationships of `C4_SCXI`

- required: `C1_SCXD` (System Context Definition Viewpoint)
- recommended: `C3_SPRO` (System Process Viewpoint)

### Existing physical concerns available for reuse

- "How do physical system elements interact to provide system functions?" (exchange & interface) — currently **unframed** (0 viewpoints)
- "How do the physical system elements interact to provide the system function?" (interaction) — framed by `P4_PIEX`

## 4. Required changes — by layer

### 4.1 SCM layer (primary model — implementable now)

**4.1.1 New concept area package** (mirrors `SAF_Concept::interaction_F` `bbc59bb1-1c8a-4fac-99f4-5338c9d29483`)

- Create `SAF_Concept::interaction_P` (physical interaction concepts; currently only `interaction_O`, `interaction_F`, `interaction_L` exist)
- Create its Definition diagram `SAF_interaction_P_Definition` (stereotype `SAF_D2_COTD`, kind `d2_cotd` — mirrors `SAF_interaction_F_Definition`)
- Create its table `SAF_interaction_P_Table` (DiagramTable — mirrors `SAF_interaction_F_Table`)

**4.1.2 New SCM concepts** (all with description; no attributes; only undirected, named
associations; realized via "direct" UML metaclasses, cf. C4_SCXI family)

| New concept | Type | Direct implementation (metaclass) |
|---|---|---|
| `Physical Context Interaction Scenario` | Class | UML `Interaction` |
| `Physical Context Scenario Participation` | AssociationClass | UML `Lifeline` |
| `Physical Context Chronological Message` | AssociationClass | UML `Message` |

**4.1.3 New role parent** (decision 1)

- Create `Physical Context Role` (SCM_Concept, Class, abstract) in `SAF_Concept::context_P`
  (package `73f44716-eead-4241-8367-144bb24ef06f`) as parent of:
  - `Physical Context Element Role` → `SAF_PhysicalContextRole` (exists)
  - `Physical SOI Role` → `SAF_PhysicalContextRole_SoI` (exists)
- **Not exposed** by the new viewpoint (abstract concept rule).

**4.1.4 Associations** (all undirected, named; multiplicity both ends; mirror the
conceptual prototypes; the conceptual family associations are remembered from
the model — verify exact ends/multiplicities against `interaction_F` at
implementation time)

- `Physical Context Scenario Participation` ↔ `Physical Context Interaction Scenario`
- `Physical Context Scenario Participation` ↔ `Physical Context Role` (via the
  parent, so the two concrete roles participate)
- `Physical Context Chronological Message` links two participations (1:1 ends)

**4.1.5 New viewpoint package** (mirrors the C4_SCXI SCM_VP_Package template
`49772e86-b97c-447d-96eb-a2a870d52685`, incl. child order)
Create under `SAF_Viewpoint::...::SAF_PhysicalDomain` — the sibling of e.g.
`Physical Context Exchange` (`d53fcf3f-66ad-4eb8-9e6c-479a0365e40e`):

```
Physical Context Interaction/                        Package   <<SCM_VP_Package>>
├── Physical Context Interaction Viewpoint          Class     <<SCM_Viewpoint>> + <<TODO_Owner>>
│     id = PCXI; saf_domain = Physical; saf_aspect = Interaction & Collaboration;
│     exposure = BlackBox; purpose/applicability (physical wording, §3 mirror +
│     INCOSE SEH §2.3.5.3); required = P1_PCXD; recommended = P4_PIEX
├── Physical Context Interaction View               Class     <<SCM_View>>
│     Conform → Viewpoint (owned by the View, as in template)
│     Expose (5, owned by the package): the 3 new concepts +
│       Physical Context Element Role + Physical SOI Role
├── Physical Context Interaction Concept           Diagram   <<SAF_D2_VPTD>>
├── Physical Context Interaction Profile           Diagram   <<SAF_D2_VPTI>>
└── TRACEABILITY/                                   Package
      ├── Physical Context Interaction Concept Traceability   Diagram <<RelationMap>>
      └── Physical Context Interaction Concern Traceability   Diagram <<RelationMap>>
```

**4.1.6 Concern + stakeholder wiring**

- Create new concern (decision 2): "What is the sequence of interactions among
  the system and physical context elements on physical level?" (category:
  interaction) — mirror of C4_SCXI concern #3.
- `SCM_FramesConcern` from the Viewpoint to the new concern; additionally frame
  the two existing physical interaction concerns where they fit (optional, see
  open question Q1).
- Link stakeholders via concern rationales — reuse the 10 C4_SCXI stakeholders;
  no new stakeholders.

### 4.2 SPM layer (postponed — decision 4)

- Create view stereotype **`SAF_P4_PCXI`** in the SAF_Profile (second open model).
- Create `SCM_RealizeConcept` traceability **after the re-deployed profile is
  visible** to the spec model (elements in `SAF_Profile2Concept`).
- Create the direct-metaclass realization wiring for the 3 new concepts
  (`Interaction`, `Lifeline`, `Message`) — check how the C4_SCXI family encodes
  "kind: direct" and mirror it.

## 5. Definition of done / validation

1. `saf_check_consistency` — all four checks (orphan_requirements,
   broken_chains, stereotype_compliance, cross_domain_alignment).
2. `modelcode_validation_run` on the SIGNAF validation suites (currently blocked
   headless in this session — see §7).
3. Rule spot checks (per `docs/rules.md` + metamodel guideline):
   - no attributes/types on SCM_Concept classes (meaning in description);
   - every concept has a description;
   - undirected named associations only, no composition/aggregation;
   - abstract concepts not exposed;
   - View conforms 1:1 to the Viewpoint and exposes only SAF concepts;
   - naming rules: `SAF_` prefixes, `SAF_P4_PCXI`, `_Table`/`_Matrix` postfixes;
   - viewpoint package naming `<Name>`, `<Name> View`, `<Name> Viewpoint`,
     `<Name> Concept` diagram, `<Name> Profile` diagram.
4. Regenerate derived content (docs `src/_data/*`, stereo types.csv, generated
   viewpoint/concept markdown, exported diagrams) from the model — never hand-edit.

## 6. Implementation order

1. SCM: `interaction_P` package + Definition/Table diagrams.
2. SCM: 3 new concepts + associations; `Physical Context Role` parent in `context_P`.
3. SCM: `SAF_PhysicalDomain` SCM_VP_Package "Physical Context Interaction"
   (View, Viewpoint, Conform, 5× Expose, Concept/Profile diagrams, TRACEABILITY).
4. SCM: new concern + `SCM_FramesConcern` + stakeholder wiring.
5. SPM (postponed): `SAF_P4_PCXI` + `SCM_RealizeConcept` links (after profile
   re-deploy).
6. Validation + docgen regeneration (after SPM wiring completes) + release-plan /
   change-log entries (maturity: proposed → released).

## 7. Constraints, blockers, deferrals

- **SPM blocked (deferred by decision):** SAF_Profile is a *system profile*;
  changes to it are only visible in the spec model after it is **re-deployed as
  a plugin**. The `SCM_RealizeConcept` traceability links can therefore **not be
  placed yet** — they reference the new stereotype, which does not exist in the
  spec model's view until redeploy. Implementation of §4.2 is a **follow-up
  phase** gated on the user re-deploying the profile.
- **No save / no commit** of the model in this session (in-memory `Untitled1`).
- **Validation engine headless-blocked** in this environment
  (`modelcode_validation_run`: `"this.filter" is null`); Jython rules cannot be
  evaluated via Groovy eval. Full rule validation must run on a GUI session.
- **SAF_Profile read-only via MCP** (`writable:false`) — SPM edits happen in the
  profile project itself (second open model), not through this session.
- Read-DTO limits (L1–L4): member-end type/aggregation/navigability, Expose
  targets, `isAbstract`, anonymous trace endpoints unverifiable headless — verify
  on Expose/conform/association ends in GUI.

## 8. Open questions (non-blocking for SCM start)

- **Q1:** Should the new Viewpoint also frame the two *existing* physical
  interaction concerns (§3) in addition to the new one? (Default: yes, if their
  wording fits; the "exchange & interface" one is currently unframed.)
- **Q2:** Confirm the exact association end multiplicities for the 3 new concepts
  by re-reading the conceptual family at implementation time (recommended) rather
  than hard-coding from memory.

## 9. Appendices — reference data (model IDs)

- `SAF_Concept` root: `4b98a27a-eadd-484e-8cc9-b4a09141c1dc`
- `context_P` (physical context concepts): `73f44716-eead-4241-8367-144bb24ef06f`
- `interaction_F` (conceptual interaction concepts, template):
  `bbc59bb1-1c8a-4fac-99f4-5338c9d29483`
- `SAF_PhysicalDomain`: `09bbf316-b43d-47d9-aba2-9d30ce5bf376`
- Template SCM_VP_Package (C4_SCXI): `49772e86-b97c-447d-96eb-a2a870d52685`
- Sibling SCM_VP_Package (Physical Context Exchange): `d53fcf3f-66ad-4eb8-9e6c-479a0365e40e`
- Spec: Physical Context Definition Viewpoint `P1_PCXD` (`_19_0_1_26f0132_1547202202696_824153_42420`)