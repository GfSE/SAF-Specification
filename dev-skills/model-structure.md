# Specification model structure

The anatomy of the `SAF_Specification` model — what a maintainer must know to
locate, create, and change elements. Element IDs are illustrative and change on
reload; always re-discover by name/type.

## The two-layer metamodel

SAF has two metamodels. They are different things; do not mix them.

- **SCM — SAF Conceptual Model.** The *abstract* model of the systems-engineering
  domain: the terms (concepts), their relations, and which views a viewpoint
  exposes. Tool- and SysML-independent. Answers **what** a system model captures.
- **SPM — SAF Profile Model.** *How* those concepts are implemented in SysML: the
  stereotypes that extend UML metaclasses or specialize SysML/SPM stereotypes,
  plus library elements. Traces back to the SCM for compliance.

Every change is either an **SCM change** (concept, relation, view, viewpoint,
concern, stakeholder) or an **SPM change** (stereotype, tagged value,
implementation trace). Say which layer you are changing.

## Top-level packages

Root `Model`:

| Package | Content | Layer |
|---|---|---|
| `SAF_SpecLibrary` | the specification itself | SCM |
| └ `SAF_Concept` | concept area packages, grouped by area | SCM |
| └ `SAF_Viewpoint` | viewpoint packages grouped by **domain** + the grid metadata (`_SAF_Grid`, `_SAF_DomainRelationship`) | SCM |
| └ `SAF_Concern`, `SAF_Stakeholder`, `_SAF_Glossary` | concerns, stakeholders, terms | SCM |
| `SAF_Profile` (in the `SAF_VPO` model library) | the **SAF Profile** — stereotypes (`SAF_Diagram`, `SAF_VPQuery`, `SAF_AbstractItem`, validation suites, derived properties) | SPM |
| `SAF_Profile2Concept` | SCM↔SPM traceability (`SCM_RealizeConcept`, `SCM_Attribute`, `SCM_TypedBy`, `SCM_ContainedIn`) | SPM |
| `SAF_ChangeLog` | per-year change entries + `SAF_changelog Table` | maintenance |
| `SAF_ReleasePlan` | release planning, `SAF_VPreleasePlan Map` | maintenance |
| `SAF_BackLog` | open problems / backlog items | maintenance |
| `SAF_ConformingStandards` | standards the SAF conforms to | maintenance |
| `SAF_Report`, `obsolete_keep`, `__generators`, `custo` | reports, legacy, tooling | — |

## The SAF grid (how a viewpoint is placed)

- **Rows = Domains** (`_SAF_Grid::Domain`, elements `SCM_DomainLayer`):
  Operational (`O`), Conceptual (`C`), Physical (`P`), Architecture Management
  (`A`), **SAF Development (`D`)**.
- **Columns = Aspects** (`_SAF_Grid::Aspect`, elements `SCM_AspectColumn`), 1–8:
  1 Context & Exchange, 2 Taxonomy & Structure, 3 Process & Behavior,
  4 Interaction & Collaboration, 5 Interface, 6 Requirement, 7 Safety & Security,
  8 Traceability & Mapping.
- A grid cell is one viewpoint. Each `SCM_Viewpoint` carries `saf_domain` +
  `saf_aspect` references into these elements, plus a unique 4-letter `id`.

## Anatomy of a concept area

`SAF_Concept::<area>_<domain letter>` (e.g. `context_O`, `structural_F`,
`framework_C`):

```
<area>_<domain letter>/
├── <Concept>               Class <<SCM_Concept>>
├── <relation>              Association <<SCM_Concept>>   (named, undirected)
├── <derived relation>      Association <<SCM_DerivedRelationship>>
├── SAF_<area>_Definition   Diagram (d2_cotd)            — the documented concept model
└── SAF_<area>_Table        Diagram (DiagramTable)
```

The `_<domain letter>` suffix mirrors the grid domain. The `SAF_*_Definition` and
`SAF_*_Table` diagrams are what the generated concept docs come from.

## Anatomy of a viewpoint package

`SAF_Viewpoint::SAF_<Domain>::<Name>` (stereotyped `SCM_VP_Package`), for
viewpoint *name* X:

```
X/                                   <<SCM_VP_Package>>
├── X Viewpoint                      Class <<SCM_Viewpoint>> + <<TODO_Owner>>
│                                    tags: id, applicability, saf_aspect,
│                                    saf_domain, saf_exposure, saf_required_vp,
│                                    saf_recommended_vp, saf_recommendation
│                                    relationships: <<SCM_FramesConcern>> → SCM_VPConcern
├── X View                           Class <<SCM_View>>
│                                    - Conform (generalization) → X Viewpoint
│                                    - <<Expose>> → SCM_Concept elements
├── X Concept                        Diagram <<SAF_D2_VPTD>>   (concept model)
├── X Profile                        Diagram <<SAF_D2_VPTI>>   (profile implementation)
└── TRACEABILITY/                    Package
    ├── X Concept Traceability       Diagram <<RelationMap>>
    └── X Concern Traceability       Diagram <<RelationMap>>
```

## Where the maintenance packages live

The Development Domain's own viewpoints sit in `SAF_Viewpoint::SAF_DevDomain::*`.
The grid metadata is in `SAF_Viewpoint::_SAF_Grid`. Stakeholders are in
`SAF_SpecLibrary::SAF_Stakeholder`, concerns in `SAF_SpecLibrary::SAF_Concern`,
and the profile traceability data in `SAF_Profile2Concept`.
