# SAF Ontology & Exposure Data Files

This document describes two core JSON data files that define the SAF (System Architecture Framework) ontology and its relationship to viewpoints.

## `concepts.json` — The SAF Ontology

**Location:** `src/_data/concepts.json`

This file is a JSON array representing the full SAF metamodel ontology. Each entry is a **concept** — a model element in the SAF domain. Concepts fall into three types:

| `ClassType` | Meaning | Example |
|---|---|---|
| `Class` | A concept representing a thing/entity | `System Of Interest`, `System Function`, `Operational Story` |
| `Association` | A relationship between two concepts | `including`, `allocatedTo`, `realizing` |
| `AssociationClass` | A relationship that also has properties of a class | `Operational Chronological Message`, `General Functional Usage` |

### Structure of a concept entry

```json
{
  "Name": "System Of Interest",
  "ID": "_19_0_1_26f0132_1554446894573_10154_45796",
  "Documentation": "An abstract element representing a SOI. Base class for specific kinds of SOIs.",
  "ClassType": "Class",
  "InViewpoint": [ { "ID": "...", "Name": "System Use Case Viewpoint" } ],
  "InheritsFrom": [ { "ID": "...", "Name": "System" } ],
  "IsGeneralFor": [ { "ID": "...", "Name": "Logical SOI" } ],
  "AssociationEnds": []
}
```

### Key fields

| Field | Description |
|---|---|
| `Name` | Human-readable name of the concept |
| `ID` | Globally unique identifier (a GUID-like string from the modeling tool) |
| `Documentation` | Description of the concept |
| `ClassType` | `Class`, `Association`, or `AssociationClass` |
| `InViewpoint` | Viewpoints that reference this concept (see `exposes.json` for the formal relationship) |
| `InheritsFrom` | Parent concepts (generalization) |
| `IsGeneralFor` | Child concepts (specialization) |
| `AssociationEnds` | For associations: lists the roles, multiplicities, and referenced concepts |

### Inheritance hierarchy

The ontology uses single inheritance. For example:

```
System Of Interest → System
  ├── Logical SOI
  ├── Physical SOI → Abstract Physical Element
  ├── Logical SOI_Deprecated → Conceptual System
  └── ...
```

### Association concepts

Associations link classes and carry multiplicities. For example, `"including"` connects two `System Use Case` ends with multiplicities `0..*` and `1`. The `AssociationEnds` array specifies the role name, the target concept (`Name` referenced by `ID`), and the multiplicity.

---

## `exposes.json` — Concept-to-Viewpoint Mapping

**Location:** `src/_data/exposes.json`

This file defines the **many-to-many relationship** between ontology concepts and SAF viewpoints. Each entry declares that a concept is **exposed** by a viewpoint — meaning the viewpoint's conforming views must present that concept.

### Structure of an exposes entry

```json
{
  "Name": "",
  "ID": "_19_0_1_26f0132_1554447499722_238295_46442",
  "Documentation": "",
  "ExposedConcept": {
    "ID": "_19_0_1_26f0132_1554446894995_335285_45800",
    "Name": "System Use Case"
  },
  "Viewpoint": {
    "ID": "_19_0_1_26f0132_1554446728606_740631_45702",
    "Name": "System Use Case Viewpoint"
  }
}
```

### Key fields

| Field | Description |
|---|---|
| `ExposedConcept.ID` | Matches `ID` in `concepts.json` |
| `ExposedConcept.Name` | The concept name |
| `Viewpoint.ID` | Matches `ID` in `viewpoints.json` |
| `Viewpoint.Name` | The viewpoint name |

### Relationship type

This is the implementation of the ISO 42010 `expose` relationship — a viewpoint *exposes* certain concepts that are relevant to addressing its concerns.

---

## `viewpoints.json` — SAF Viewpoint Definitions

**Location:** `src/_data/viewpoints.json`

This file defines all **viewpoints** in the SAF framework. Each viewpoint specifies what architectural concern it addresses, which stakeholders use it, how it is presented, and which domain/aspect it belongs to in the SAF grid.

### Structure of a viewpoint entry

```json
{
  "Name": "Physical Context Exchange Viewpoint",
  "ID": "_19_0_2_26f0132_1562303526536_79296_92554",
  "Maturity": "released",
  "Purpose": "The Physical Context Exchange Viewpoint focuses on ...",
  "Applicability": "The Physical Context Exchange Viewpoint supports ...",
  "Aspect": "Context & Exchange",
  "Domain": "Physical",
  "Presentation": [ "An internal block diagram (IBD) ...", "A tabular format ..." ],
  "Stakeholders": [ "_19_0_2_ebf0350_...", "_19_0_2_26f0132_..." ],
  "Concern": [ "_2021x_2_8710274_...", "_2021x_2_8710274_..." ],
  "RecommendedVP": [ "_19_0_1_26f0132_..." ],
  "RequiredVP": [ "_19_0_1_26f0132_..." ],
  "Exposure": "BlackBox",
  "VP_ID": "P1_PCXE"
}
```

### Key fields

| Field | Description |
|---|---|
| `Name` | Viewpoint name (e.g., "Physical Context Exchange Viewpoint") |
| `ID` | Globally unique identifier matching `Viewpoint.ID` in `exposes.json` |
| `Maturity` | Development status: `released`, `proposed`, or `under construction` |
| `Purpose` | Why the viewpoint exists |
| `Applicability` | Which processes/activities the viewpoint supports (references INCOSE handbook) |
| `Aspect` | Grid column — e.g., `Context & Exchange`, `Process & Behavior`, `Taxonomy & Structure`, `Traceability & Mapping`, `Interaction & Collaboration`, `Interface`, `Safety & Security` |
| `Domain` | Grid row — e.g., `Operational`, `Conceptual`, `Physical`, `Architecture Management`, `SAF Development` |
| `Presentation` | Array of recommended presentation forms (diagrams, tables, matrices) |
| `Stakeholders` | Array of stakeholder IDs (referencing `stakeholders.json`) |
| `Concern` | Array of concern IDs (referencing `concerns.json`) |
| `RecommendedVP` | Related viewpoints that are recommended but not required |
| `RequiredVP` | Viewpoints that must be used together with this one |
| `Exposure` | Visibility: `BlackBox` (external only), `WhiteBox` (internal), `Both`, or `NotApplicable` |
| `VP_ID` | Unique short identifier for the grid cell, e.g., `P1_PCXE` = Physical domain, Aspect 1, Context Exchange |

### Aspect × Domain grid (the SAF Grid)

Each viewpoint occupies a cell in a 2D grid defined by its `Aspect` (column) and `Domain` (row):

| Domain | Context | Structure | Behavior | Interaction | Interface | Traceability | Security |
|---|---|---|---|---|---|---|---|
| **Operational** | O1_OSTY, O1_OCXD, O1_OCXE | O2_OCYD, O2_OPRF, O2_OETD | O3_OPRO, O3_OSTA | O4_OCXI | — | O8_OCYM, O8_OPRM | — |
| **Conceptual** | — | — | — | — | — | — | C7_ASID, C7_IMAN |
| **Physical** | P1_PCXD, P1_PCXE | P2_PETD | — | P4_PIEX | P5_PIFD | P8_PFUM | — |
| **Architecture Mgmt** | — | A2_ARAS, A2_CSTD, A2_GRID | — | — | — | A8_EATR | — |
| **SAF Development** | — | D2_COTD, D2_VPTD, D2_VPTO, D2_STYD, D2_STKD | — | — | — | D2_VPTI | — |

The `VP_ID` encodes the grid position: **{Domain}{AspectNumber}\_{Abbreviation}** (e.g., `P1_PCXE` = Physical domain, Aspect 1 "Context", Context Exchange).

### Maturity levels

- **released**: Finalized viewpoint ready for use
- **proposed**: Draft viewpoint available for review
- **under construction**: Being developed, not yet stable

---

## Relationship between the files

```
concepts.json (ontology)          exposes.json                   viewpoints.json
                     \               |               /
  System Function  ──────►  exposed by  ◄──────  System Process Viewpoint
  System Function  ──────►  exposed by  ◄──────  Physical Functional Mapping Viewpoint
  Physical SOI     ──────►  exposed by  ◄──────  Physical Context Definition Viewpoint
  Physical SOI     ──────►  exposed by  ◄──────  Physical Structure Definition Viewpoint
  Physical SOI     ──────►  exposed by  ◄──────  Physical Context Exchange Viewpoint
  ...
```

- `concepts.json` defines **what** exists in the SAF domain
- `viewpoints.json` defines **which views** architects can create
- `exposes.json` defines **which concepts are relevant** for each viewpoint

### Example traversal

1. **Physical Context Definition Viewpoint** exposes: `Physical System Context`, `Physical SOI Role`, `Physical User`, `Physical External System`, `Physical SOI`, `Physical Environment`, `Physical Context Element Role`.
2. Each of these concepts is defined in `concepts.json` with its documentation and inheritance chain.
3. The viewpoint is defined in `viewpoints.json` with its purpose, applicability, presentation forms, stakeholders, and concerns.

This enables traceability from architectural concerns → viewpoints → ontology concepts.

## Usage by the site generator

The Jekyll site generator reads these JSON data files to:

1. Render specification pages for each viewpoint
2. Show which concepts appear in which viewpoint
3. Generate the SAF grid (Domain × Aspect matrix)
4. Generate concept documentation with inheritance and relationships
5. Provide the complete framework metamodel reference

The cross-referencing via GUIDs (`ID` fields) allows the site to link between concept definitions, viewpoint definitions, and exposure relationships.

## Stakeholders

**File:** `stakeholders.json`

An array of stakeholder entries. Each entry:

| Field | Type | Description |
|-------|------|-------------|
| `Name` | string | Stakeholder role name |
| `ID` | string | GUID |
| `Documentation` | string | Definition with source reference (ISO/IEC 15288, etc.) |
| `Rationales` | array | List of {Rationale, Concern} links to concerns |

**Stakeholders defined:** Acquirer, Configuration Manager, Customer, Customer (Representative), Hardware Developer, IV&V Engineer, Maintainer, Mechanic Developer, Operator, Portfolio Manager, Project Manager, Regulation Authority, SAF Developer, SAF MBSE approach planer, SAF System model user, Safety Expert, Security Expert, Software Developer, Supplier, System Architect, User.

**Rationales linking:** Each entry in `Rationales` references a concern by its question text (the `Concern` field). The `Rationale` field provides the stakeholder's reason for having that concern (may be empty).

Example structure:
- **Acquirer** has 46 rationales covering concerns about standard items, system purpose, enabling systems, capabilities, costs, schedules, risks, interfaces, etc.
- **Hardware Developer** has 30 rationales about error handling, interfaces, requirements, power, weight, reliability, etc.
- **IV&V Engineer** has 26 rationales focused on integration, testing, interfaces, states, modes.
- **Configuration Manager** has 3 rationales all related to EA traceability.
- **Customer (Representative)** has an empty `Rationales` array.

## Concerns

**File:** `concerns.json`

An array of concern entries. Each entry:

| Field | Type | Description |
|-------|------|-------------|
| `Name` | string | The concern as a question (e.g. "What are the functional requirements imposed on the system?") |
| `ID` | string | GUID |
| `Documentation` | string | Optional documentation (most are empty) |
| `Owner` | string | Category tag grouping the concern |
| `ConcernsViewpoints` | array | Backlinks to viewpoints that address this concern |

**Owner categories:** boundary & context, capability, exchange & interface, functional, interaction, meta-framework, organization, reliability, requirement, stakeholder, story, terms and standards, traceability & mapping, X-Concern (security extension).

**ConcernsViewpoints backlinks:** Each entry in `ConcernsViewpoints` contains `Name` and `ID` of a viewpoint that addresses this concern. Some concerns have empty arrays (no viewpoint currently addresses them).

Example:
- `"What are the non-functional requirements imposed on the system?"` -> Owner: `requirement` -> addressed by `System Requirement Definition Viewpoint`
- `"Which Stakeholders are relevant to the system?"` -> Owner: `stakeholder` -> addressed by `Stakeholder Identification Viewpoint`
- `"What is the necessary response time for an interface or a service?"` -> Owner: `interaction` -> addressed by `System Context Interaction Viewpoint` and `System Internal Interaction Viewpoint`
- Several reliability concerns have empty `ConcernsViewpoints` arrays, indicating gaps in viewpoint coverage.

## Rationales

**File:** `rationales.json`

An array of rationale entries that explicitly link a Concern to a Stakeholder with a reason. Each entry:

| Field | Type | Description |
|-------|------|-------------|
| `Name` | string | Always empty |
| `ID` | string | GUID |
| `Documentation` | string | The rationale text explaining why the stakeholder has this concern |
| `Concern` | object | Embedded {ID, Name} of the concern |
| `Stakeholder` | object | Embedded {ID, Name} of the stakeholder |

This is the direct many-to-many resolution of the stakeholder-to-concern links. Each rationale represents one stakeholder's reason for being interested in one concern.

Example entries:
- Concern "For what purpose is the system developed or adapted?" is linked to:
  - **System Architect** -> "I need to know this in order to be able to further design the system in an appropriate way."
  - **Project Manager** -> "In my role, I need to check whether the project order is implemented correctly."
  - **Acquirer** -> "In my role, I need to check whether the overall system purpose is supported."

This file enables cross-referencing: given a concern, find all stakeholders who care about it and why; given a stakeholder, find all concerns they have and why.
