# SAF Specification — Modeling Rule Compliance Assessment

| | |
|---|---|
| **Date** | 2026-09-24 |
| **Model** | `SAF_Specification` (primary root `Model`, 5 055 elements) |
| **Mode** | Assessment read-only; **one remediation applied** (issue #1, 2026-09-24) |
| **Basis** | `docs/rules.md` rule set (SCM / SPM / Views–Viewpoints / hygiene), `metamodel-guideline`, `dev-guideline` |
| **Status** | Assessment complete; **issue #1 fixed**; remaining backlog in §9 |

---

## 1. Executive Summary

The released core of the SAF specification model is **highly conformant**: SCM↔SPM traceability is complete and disciplined, every View conforms one-to-one to a Viewpoint, SPM naming is ~97 % compliant, and the consistency check reports zero issues. **Almost all rule violations cluster in the proposed security area (X-Concept / ASID·THSC·RIAN·SECT·IMAN)**, which is under construction and predates the rule set; the C3 package-stereotype gap for that area has since been **fixed (issue #1, 2026-09-24)**. A small number of structural defects and naming deviations exist in the profiles and viewpoint layer.

### Verdict overview

| Rule group | Verdict | Headline |
|---|---|---|
| **A — SCM conceptual model** | ⚠️ | Clean outside the security area; X-Concept has unnamed/typo'd concepts, verbal-phrase "concepts", unnamed associations, missing descriptions |
| **B — SPM profile model** | ⚠️ | Duplicate `SAF_Diagram` stereotype; 7 `SysML *Diagram` leftovers; `SCM_*` namespace needs explicit exemption; traceability (B4) is exemplary |
| **C — Views / Viewpoints** | ⚠️ | 55/56 packages `FULL`; 1 `PARTIAL` (double-space names); 5 security packages' missing `SCM_VP_Package` **fixed (issue #1)**; every View has exactly one `Conform` |
| **D — Hygiene** | ❌ | Typos, anonymous elements, leftover diagrams/tags concentrated in the security area and legacy packages |

### Key numbers

- 26 concept areas, **~325 `SCM_Concept` classes**, 20 associations in `SAF_Concept`; **387 `SCM_RealizeConcept`** + 18 `SCM_ContainedIn` + 9 `SCM_TypedBy` + 17 `SCM_Attribute` trace links.
- **56** SAF viewpoints (42 released / 7 proposed / 7 under construction; domain split: conceptual 23, operational 13, physical 8, saf_development 7, architecture_management 5).
- **51** `<Name> View` elements with **exactly one `Conform`** each (verified package-by-package); 57 `SCM_View` / 57 `SCM_Viewpoint` / 56 `SAF_Viewpoint` / **56 `SCM_VP_Package`** applied model-wide (residual diff explained in §5.1).
- `saf_check_consistency`: **0 issues** (its requirement/system checks are vacuous on this model — 0 requirements, 0 systems — so it is not a meaningful compliance signal here).
- The two validation suites could not be executed headless (see §2.2); all checks in this report were replicated by direct model reads against the rule bodies.

---

## 2. Scope, Method, Limitations

### 2.1 Scope

Primary model `SAF_Specification` including its used modules/profiles: `SAF_Profile` (240 stereotypes), `SAF_SCM_Profile` (21 stereotypes), `saf-util-jsongen` (7), plus the generated/link content in `SAF_SpecLibrary::SAF_Concept` and `SAF_Profile2Concept`. Legacy content in `obsolete_keep` was noted but not audited in detail.

### 2.2 Method

Audited manually against the rule **bodies** of `SAF_ConceptValidationSuite` (10 rules, Jython) and `SAF_ValidationSuite` (9 rules) in `SAF_SCM_Profile` / `SAF_Profile`:

- `ConceptMustHaveDocu` → comment non-empty (`getComment(THIS).strip() != ""`)
- `ConceptMustHaveRealization` → has `SCM_RealizeConcept` supplier dependency or abstract
- `ViewpointPackageStructure` → per `SCM_VP_Package`: `<Name> Concept` Diagram, `<Name> Profile` Diagram, `<Name> Viewpoint` `SCM_Viewpoint`, `<Name> View` `SCM_View`
- `RealizationRelationLocation` / `RealizationkindRelationLocation` / `ViewpointMustHaveRealization` → checked structurally

Cross-checks run: `saf_check_consistency`; viewpoint metadata via `spec_list_viewpoints` (56 records); special implementations (43 `SCM_TypedBy`/`SCM_ContainedIn`/`SCM_Attribute` traces); association/concept structure via element reads.

### 2.3 Limitations (could not verify with available read tooling)

| # | Item | Why |
|---|---|---|
| L1 | Association member-end **`type`, `aggregation`, navigability** per end | Read DTO exposes owned children only; ends are class-owned `Property`s whose type/aggregation values are not serialized |
| L2 | `Expose` dependency **targets** (vs abstract concepts) | `Expose` (407) dependencies show no client/supplier in the DTO; only counts verifiable |
| L3 | `isAbstract` flags on `SCM_Concept` classes | Not exposed by the DTO |
| L4 | Endpoints of **anonymous** `SCM_RealizeConcept`/`SCM_TypedBy` links | 414 of 431 link elements are unnamed; suppliers/clients not serialized |
| L5 | Validation suite execution (`modelcode_validation_run`) | Engine error headless: `RuleSelector … because "this.filter" is null`; rules are Jython while `modelcode_validation_eval` only supports Groovy |

Items L1/L2/L3/L4 require a Cameo GUI pass or a scripted Jython/API audit to close.

---

## 3. A — SCM Conceptual Model (`SAF_SpecLibrary::SAF_Concept`)

### A1 — No attributes/types on `SCM_Concept` classes; meaning in description

| Check | Verdict | Finding |
|---|---|---|
| No attribute/type properties on concepts | ⚠️ | `SCM_Concept` classes in X-Concept own many unnamed `Property` children (e.g. `Adversary` 6, `Security Context` 4, `Consequence` 4, `Risk` 2, `Threat Scenario` 2). These are most likely **navigable association ends owned by the class** (legitimate UML), but the DTO shows neither `type` nor `aggregation`, so attribute-vs-end cannot be fully resolved here (L1). **Requires GUI/scripted verification.** |
| Every concept has a description (comment) | ❌ | Missing Comment children in X-Concept: `S0-No Effect`, `S1-Minor`, `S2-Major`, `S3-Hazardous`, `S4-Catastrophic`, `L0-Unlikely` … `L4-Almost Certain`, `SAL1-Low` … `SAL3-High`, `Likelyhood Parameter`, `Attack Vector (old)`. The security severity/likelihood/SAL scales are modeled as concept classes without any description. |

### A2 — Only undirected, named associations; no composition/aggregation

| Check | Verdict | Finding |
|---|---|---|
| Every association named | ❌ | **4 unnamed associations** in X-Concept: `6a99eecb-ded0-4571-a41f-aa13fd78b05d`, `39b20d0d-f93e-44a6-90ae-ac26ac499cc8`, `a7089976-32c7-4d66-8f65-b4bcb7122627`, `df89b032-f45f-4b05-84bd-00d3febbbab0` |
| Meaningful association names | ⚠️ | Named association names are cryptic abbreviation codes, not prose: `ADVtargetsASS`, `ADexploidsVNA`, `TSChasPBL`, `LOSSofSO`, `ASShasSA`, `ADisPartOfTSC`, `EFhasDES`, `CShasEF`, `SEMareRealisedInSER`, `SALdefinesRigorOfSEM`, `CONderivesSEV`, `SERmitigateRI`, `SEEcanHaveASU`, `EFhasSV`, `RSresultsFromViolationOfAS` (readable as text but no word separators) |
| No composition/aggregation | ❓ | Not resolvable via DTO (L1); associations carry no stereotypes and no association-owned ends |
| Relations modeled as associations, not classes | ❌ | **5 verbal-phrase classes** carry `SCM_Concept` instead of being associations: `occures in`, `uses`, `ADV use Attack Path to attack SO`, `CON has Effect On AA`, `SF is Asset in Security Context`. Also **2 unnamed `SCM_Concept` classes**: `ca849340-cecd-4c32-b179-bdabdb34e84f`, `8c5385f9-9c5b-48ca-a48b-e8432a601080` |

### A3 — Concept structure & hierarchy

✅ **Conformant.** Generalization hierarchies are present and coherent (e.g. `Asset` has 3 generalizations; `System Of Interest` → `System`, documented as abstract; `Availability`/`Integrity`/`Confidentiality` → `Security Objective`). All concept areas are covered by the 387 `SCM_RealizeConcept` relations in `SAF_Profile2Concept` (satisfies `ConceptMustHaveRealization` structurally).

**Note:** The A1/A2 violations are almost entirely confined to the **X-Concept security area** (the proposed, unreleased viewpoint set). The released areas (system/operational/physical/functional/argumentation) are clean on every sampled check.

---

## 4. B — SPM Profile Model

### B1 — Stereotype structure

| Verdict | Finding |
|---|---|
| ❌ | **Duplicate `SAF_Diagram` stereotype**: two distinct UML stereotype elements with the same name in `SAF_Profile` — Base package (`93046889-bfc9-45e0-93d6-0a3e5f780581`, parent `74535e38-…`) and main profile package (`62546e9a-ba33-4372-a15d-3c74640fdde5`, parent `0e21cca6-…`) |
| ⚠️ | **7 `SysML *Diagram` stereotypes** in `SAF_Profile` (spaces in names, lowercase+capital mix), duplicating SysML built-in diagram concepts: `SysML ActivityDiagram`, `SysML BlockDiagram`, `SysML InternalBlockDiagram`, `SysML RequirementDiagram`, `SysML SequenceDiagram`, `SysML StateMaschineDiagram` (typo), `SysML UseCaseDiagram` — likely stale copies |
| ⚠️ | 6 stereotypes encode deprecation in the name: `SAF_ContextFunction_deprecated`, `SAF_LogicalExternalSystem_deprecated`, `SAF_LogicalSOI_deprecated`, `SAF_PhysicalExternalSystem_deprecated`, `SAF_PhysicalSystem_deprecated`, `SAF_SystemPartialFunction_deprecated` (legacy migration pattern) |

### B2 — Naming: all SPM stereotypes prefixed `SAF_`

Stereotype inventory across SAF projects (269 instances):

| Project | Total | `SAF_`-prefixed | Non-compliant |
|---|---|---|---|
| SAF_Profile | 240 | 233 | 7 (`SysML *Diagram`) |
| SAF_SCM_Profile | 21 | 0 | 21 (all `SCM_*`) |
| saf-util-jsongen | 7 | 0 | 7 (lowercase `saf_*`) |
| SAF_Specification (primary) | 1 | 0 | 1 (`refactor-ref`) |

- **SAF_Profile**: 233/240 ✅ — the 7 `SysML *Diagram` are B2 violations (also B1 leftovers).
- **SAF_SCM_Profile**: all 21 use the `SCM_` prefix (`SCM_Concept`, `SCM_View`, `SCM_Viewpoint`, `SCM_AspectColumn`, `SCM_RealizeConcept`, …). This is a **deliberate, consistent sub-namespace** separating the SCM meta-language from the SPM profile. **Decision required:** exempt the `SCM_*` namespace from B2 or rename the profile stereotypes — as literally written, "all SPM stereotypes shall be prefixed SAF_", the entire SCM profile fails.
- `saf-util-jsongen` uses lowercase `saf_` + snake_case (generator infrastructure profile); `refactor-ref` in the primary model is a stray element.

### B4 — SCM ↔ SPM traceability (`SAF_Profile2Concept`)

✅ **Conformant and exemplary.** The package is a clean, flat linkage namespace (450 top-level elements):

| Kind | Count | Notes |
|---|---|---|
| `SCM_RealizeConcept` | 387 | all anonymous (endpoints need scripted pass, L4) |
| `SCM_ContainedIn` | 18 | anonymous |
| `SCM_TypedBy` | 9 | anonymous |
| `SCM_Attribute` | 17 | named (subject, Post-/PreConditionStates, saf_aspect, saf_domain, logical_element, realizingConnector, concern, function, diagrams …) |
| Constraint | 11 | SCM concept constraints (e.g. `SCM_StateConvention1/2`, `SCM_SOI.ExposureConvention1/2`, `SCM_Allocation.Constraint`, `SCM_SystemProcess.Derivation`) |
| Diagram | 5 | 3 mapping matrices + `SAF_stereotypeDocu Table` + example table |
| Package | 1 | `UML Metaclasses` sub-package (metaclass mappings) |

No classifiers, no stray UML Abstraction/Dependency elements; the 4 mapping diagrams are DependencyMatrix/DiagramTable views of the realizations.

### B5 — Abstract stereotypes / base structure

✅ **Conformant.** `SAF_AbstractItem` + `SAF_Diagram` + `SAF_VPQuery` + `SAF_VPSearchScope` sit in a dedicated "Base" package of `SAF_Profile`; SCM bases (`SCM_Concept`, `SCM_View`, `SCM_Viewpoint`, `SCM_AspectColumn`, `SCM_InformationItem`, `SCM_DomainLayer`, `SCM_VP_Package`, `SCM_ChangeRecord`, `SCM_Attribute`) live together in the core package of `SAF_SCM_Profile`. (Generalization relations themselves are not serialized in the DTO — base status inferred from placement/names; see L4.)

---

## 5. C — Views & Viewpoints

### C1 — View conforms one-to-one to a Viewpoint; only SAF concepts exposed

| Check | Verdict | Finding |
|---|---|---|
| Exactly one `Conform` per View | ✅ | **All 51 `SCM_View` elements carry exactly one `Conform`** child (verified per-package, incl. the 5 security packages); no missing, no multi-conforms |
| No duplicate View/Viewpoint per package | ✅ | None found — exactly one `<Name> View` + one `<Name> Viewpoint` in each of the 51 audited packages |
| Expose targets only SAF concepts / no abstract exposure | ❓ | 407 `Expose` dependencies present; targets not serialized in the read DTO (L2). Spot check (`f2f66655-…` in Argumentation Assurance): anonymous dependency, no inspectable supplier/client |

### C2 — Viewpoint tagged values

Sampled `Argumentation Assurance Viewpoint` (`08125186-97f9-4b68-a447-5eb8cef3d5d8`) — `SCM_Viewpoint` tags:

| Tag | Value |
|---|---|
| `id` | ✅ `ARAS` |
| `applicability` | ✅ filled (evidence-pattern paragraph) |
| `saf_aspect` | ✅ (reference to aspect element) |
| `saf_domain` | ✅ (reference to domain-layer element) |
| `saf_exposure` | ✅ (enumeration literal) |
| `saf_recommendation` | ⚠️ **empty** |
| `saf_required_vp` | ⚠️ **empty** |
| `saf_recommended_vp` | ⚠️ **empty** |
| `TODO_Owner.TODO` | ⚠️ leftover `"ToDo\n\nDone"` |

**Decision required:** are `saf_required_vp`/`saf_recommended_vp`/`saf_recommendation` mandatory for *released* viewpoints? If yes, all released VPs need a fill pass; if only recommended, the rule text should say so.

### C3 — Viewpoint package structure (`ViewpointPackageStructure`)

51 viewpoint packages audited across the four non-AM domains:

| Domain | FULL | PARTIAL | NO-STEREOTYPE | Total |
|---|---|---|---|---|
| Conceptual | 23 | 0 | 0 | 23 |
| Operational | 12 | 1 | 0 | 13 |
| Physical | 8 | 0 | 0 | 8 |
| Dev / saf_development | 7 | 0 | 0 | 7 |
| **Total** | **50** | **1** | **0** | **51** |

Architecture Management domain (5 packages) verified separately as structurally complete → **55/56 full** overall (counts reflect the post-fix state; the Conceptual row previously showed 18 FULL / 5 NO-STEREOTYPE).

**Violations / deviations:**

1. ✅ **FIXED 2026-09-24 (issue #1):** `SCM_VP_Package` applied to the 5 fully-formed security packages — **Asset Identification** (`6a712b9f-610a-444a-8d09-25eefe086ffc`), **Threat Szenario** (`5d062936-2275-4ef8-92bb-5e12a78d15e3`), **Security Risk Analysis** (`59de3edf-b361-4da8-9b59-4b8dd8b08e2a`), **Security Context** (`43f30ead-050b-4842-bb83-ace2350b8a59`), **Impact Analysis** (`d8e784b6-1168-4cd1-995f-a3f7a903e8b8`). Each contains a `<Name> View`, `<Name> Viewpoint`, `<Name> Concept`, `<Name> Profile` (13–21 children each); model-wide `SCM_VP_Package` count is now **56** (was 51). Maturity finalization (proposed → released) remains an open governance decision.
2. ⚠️ **`Operational Exchange Type Definition` (PARTIAL):** View and Profile artifacts exist but with **double-space names** — `Operational Exchange Type Definition␣␣View` (`SCM_View`) and `…␣␣Profile` (`d2_vpti`) instead of single-space. Viewpoint/Concept names are correct.
3. ⚠️ **Extra `Traceability` grouping sub-package in every package (51/51)** with inconsistent casing: `TRACEABILITY` ×24, `Traceability` ×25, **`Tracability` ×1 (misspelled, in Physical Logical Mapping)**. Each contains two `RelationMap` diagrams (`<X> Concept Traceability`, `<X> Concern Traceability`). If the four-artifact rule is strict, this is a systematic deviation; if tolerated, standardize the casing.
4. ⚠️ German spelling **"Threat Szenario"** used consistently for the package and its four artifacts (mismatch with English "Scenario" used by the `SAF_ThreatScenario` stereotype).
5. ⚠️ `EA Traceability` (AM domain, `A8_EATR`) has no `SCM_VP_Package`.

### C4 — Diagram content & naming

- ✅ Viewpoint-package diagrams are limited to the two required kinds per package (`d2_vptd` Concept, `d2_vpti` Profile) — no stray diagram kinds inside VP packages.
- ✅ All `_Table`/`_Matrix`/`_Map` artifacts live at **domain root** (outside VP packages):
  - Conceptual: `SAF_SFVgrid Table`, `refactoring_ConceptualDomain` (matrix)
  - Operational: `SAF_SOVgrid Table`
  - Physical: `SAF_SPVgrid Table`
  - Dev: `SAF_SDgrid Table`, `SAF_framedConcern Table`, `SAF_VP2concern Map`
  - AM: `SAF_SCVgrid Table`
- ❌ **Leftover / duplicate concept diagrams in X-Concept:** `Concept_Sec_ContextAndAssetIdentification` + `…_documented` + `Concept_ContextAndAssetIdentification_old`; `Concept_Sec_ImpactAnalysis` + `Concept_ImpactAnalysis` + `…_documented`; `Concept_Sec_ThreatScenario`, `Concept_Sec_RiskAnalysis`, `Concept_Sec_Context`; generic `inheritance` matrix. Names do not follow the `<Name> Concept` convention.

### 5.1 Viewpoint metadata anomalies

- **`Framework Implementation Traceability Viewpoint`** (saf_development, proposed): **empty `vpId`** — the only viewpoint without a 4-letter code.
- `Threat Scenario Viewpoint` is titled **"Threat Szenario"** (code `THSC`) — consistent within itself but misspelled vs. the English stereotype/concept `Threat Scenario`.
- Count reconciliation: 57 `SCM_View` / 57 `SCM_Viewpoint` applied vs 56 `SAF_Viewpoint` and 56 viewpoint records — 51 (four domains) + 5 (AM) = 56, with one extra `SCM_View`/`SCM_Viewpoint` (likely `EA Traceability`); `SCM_VP_Package` now applied **56×**, covering all 56 viewpoint packages after issue #1 (was 51× before).

---

## 6. D — Hygiene

| Verdict | Finding |
|---|---|
| ❌ | **Typos:** concept `Likelyhood Parameter`, `Security Enviromental Element`, `Affected Acteurs`; association/relation names `occures in`, `ADexploidsVNA` (exploits); stereotypes `SAF_SecurityEnviromentalElement`, `SAF_SecurityRecuirements`, `SysML StateMaschineDiagram`; sub-package `Tracability` |
| ❌ | **Anonymous elements:** 2 unnamed `SCM_Concept` classes, 4 unnamed associations, 2 unnamed `Element Tagged Value` in `SAF_Profile2Concept`, 414 anonymous trace-link elements (structural, see B4) |
| ⚠️ | **Leftovers:** `SAF Stereotype Table (example)` (kind `d2_styd_table`, `SAF_Example`) in `SAF_Profile2Concept`; `Old Concepts` sub-package in X-Concept; `refactor-ref` stereotype in primary model; WIP comments in X-Concept ("23.09 [ah] … this does not work"); `TODO_Owner.TODO` capsule on `Argumentation Assurance Viewpoint`; top-level `obsolete_keep` package; diagram names `…_documented`, `…_old` |
| ⚠️ | Inconsistent case in diagrams' tagged values / namespaces (`TRACEABILITY` vs `Traceability` vs `Tracability`, §5 C3) |

---

## 7. Viewpoint Inventory Summary (metadata)

| Domain | Viewpoints | Released | Proposed | Under construction |
|---|---|---|---|---|
| Conceptual | 23 | 18 | 5 (security) | 0 |
| Operational | 13 | 13 | 0 | 0 |
| Physical | 8 | 8 | 0 | 0 |
| saf_development | 7 | 4 | 1 | 2 |
| Architecture Management | 5 | ? | ? | ? |
| **Total** | **56** | **42** | **7** | **7** |

(Per-domain maturity values above for saf_development are indicative; the 7 proposed include the 5 security VPs and Framework Implementation Traceability.)

---

## 8. Bottom Line

1. **Released core is conformant.** B4 traceability (387 realizations), one-to-one `Conform`, package structure 55/56 `FULL` (post-fix), B2 233/240 in SAF_Profile, zero `saf_check_consistency` issues. The rule enforcement itself is credible: two validation suites exist (SCM-concept rules + system-model rules) and match the written rules.
2. **The security area (X-Concept, ASID/THSC/RIAN/SECT/IMAN) carried nearly every real violation** — the missing `SCM_VP_Package` stereotype is now **fixed (issue #1, 2026-09-24)**; remaining: undocumented concepts, unnamed associations, verbal-phrase concept classes, leftover diagrams, typos, WIP comments. It is consistent with an under-construction area that predates the rules.
3. **Three decisions, not fixes:** (a) `SCM_*` namespace vs literal B2; (b) mandated `Traceability` sub-package (casing) vs the four-artifact package rule; (c) mandatory vs recommended viewpoint tags.
4. **Four structural defects to schedule:** duplicate `SAF_Diagram`; 7 stale `SysML *Diagram` stereotypes; `Framework Implementation Traceability` without `vpId`; `Operational Exchange Type Definition` double-space names + `Tracability`.
5. **Verification gap:** L1–L4 (§2.3) need a GUI or scripted pass before A1/A2/C1 can be certified end-to-end.

---

## 9. Backlog (item 1 fixed 2026-09-24; remainder proposed)

Priority-ordered remediation candidates:

| # | Item | Rule | Location | Suggested fix |
|---|---|---|---|---|
| 1 | ✅ **FIXED 2026-09-24** — applied `SCM_VP_Package` to 5 security VPs | C3 | ASID, THSC, RIAN, SECT, IMAN | stereotype applied & model saved; *maturity finalization (proposed → released): open governance decision* |
| 2 | Add descriptions to undocumented concepts | A1 | X-Concept severity/likelihood/SAL scales + `Likelyhood Parameter`, `Attack Vector (old)` | write comments |
| 3 | Rename/convert 7 verbal-phrase + 2 unnamed concept classes | A2 | X-Concept | re-model as associations; delete/name anonymous |
| 4 | Name the 4 unnamed associations; reword cryptic names | A2 | X-Concept | `Adversary targets Asset` style |
| 5 | Resolve duplicate `SAF_Diagram` | B1 | SAF_Profile | merge/delete one |
| 6 | Remove or re-home the 7 `SysML *Diagram` stereotypes | B1/B2 | SAF_Profile | delete or mark deprecated |
| 7 | Empty-vpId viewpoint | C2 | Framework Implementation Traceability | assign code (e.g. `FITR`) |
| 8 | Double-space names + `Tracability` | C3 | OETD, Physical Logical Mapping | rename |
| 9 | Clean X-Concept leftover diagrams / `Old Concepts` / WIP comments | C4/D | X-Concept | delete or archive |
| 10 | Standardize `Traceability` sub-package casing; codify in rule | C3 | all 51 VP packages | rule text + rename |
| 11 | Decide `SCM_*` exemption and `saf_required/recommended/recommendation` tag policy | B2/C2 | SAF_SCM_Profile / Viewpoints | rules.md amendment |
| 12 | Remove stray `refactor-ref`, example table, TODO capsule | D | primary model / SAF_Profile2Concept | delete |

---

## 10. Appendix — Evidence & Tooling Notes

- **Validation suites:** `SAF_Profile::SAF_ValidationSuite` (`3fb02ce1-1698-4315-a2dc-90e7b8b83ac5`, 9 rules) and `SAF_SCM_Profile::SAF_ConceptValidationSuite` (`df8cee12-a87a-4b64-a5d2-f1331990585a`, 10 rules). Rule bodies read; execution blocked headless (L5).
- **Key element IDs:** root `2b8e19a5-a236-4e1c-ab82-a5b66c953472`; `SAF_Concept` `4b98a27a-eadd-484e-8cc9-b4a09141c1dc`; `SAF_Viewpoint` `762feaf2-49aa-405b-a3e3-88be3ef3208b`; `SAF_Profile2Concept` `4f95a757-58c2-4410-8d6a-b7af66adce5c`; X-Concept `ab7eb2a7-ceb9-4442-9645-b36df6a2c42e`; ARAS Viewpoint `08125186-97f9-4b68-a447-5eb8cef3d5d8`; domains: Conceptual `9775ed46-0d1b-4091-a046-ee55ecc7640a`, Operational `6d6849fe-a027-4d08-8575-5ec053ce53b7`, Physical `09bbf316-b43d-47d9-aba2-9d30ce5bf376`, AM `97d8bd8c-052e-46bd-9feb-80856443a09f`, Dev `f73792c4-e90e-4e66-9c48-0227b51c8178`.
- **Association example lacking owned ends:** `tbd-soi-of-stk` (`3065aba6-a678-4deb-b4ca-caa571e72330`) — comment body contains typo "holds the steak"; see L1. Associations carry no owned ends; ends live as class-owned `Property` elements (e.g. `Adversary` owns 6 unnamed properties).
- **Scripted verification suggested** (GUI or Jython API, not possible via read DTO): association member-end type/aggregation/navigability (L1), Expose supplier/target sets (L2), `isAbstract` (L3), trace-link endpoints (L4), and running both validation suites inside MagicDraw.