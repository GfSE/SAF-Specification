# Framework Stakeholder and Concern Definition Viewpoint (`D2_STKD`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** under construction
- **Purpose:** Define the architecture-framework **stakeholders** who have an
  interest in SAF viewpoints. The interest is formulated using **concerns**; a
  **rationale** states why a stakeholder has a given concern.

## What it specifies

- `SCM_VPStakeholder` elements (with documentation, and inheritance where
  applicable).
- `SCM_VPConcern` elements (the concerns of stakeholders regarding SAF
  viewpoints).
- `SCM_ConcernRationale` elements connecting a stakeholder to a concern.

Supports the ISO 42010 "Stakeholders and concerns" and "Specification of an
architecture description framework" constructs.

## Presentation

- A **BDD** of `SCM_VPStakeholder` elements, with inheritance where applicable.
- A **matrix** with stakeholders and concerns as rows and columns, marked where a
  `SCM_ConcernRationale` connects them.
- **Tables** of the rationales (stakeholder, concern, rationale documentation).

## Where it lives in the model

Stakeholders in `SAF_SpecLibrary::SAF_Stakeholder`; concerns in
`SAF_SpecLibrary::SAF_Concern`. Query the live set before adding
(`spec_list_stakeholders`, `spec_list_concerns`) — reuse, don't duplicate.

## Maintaining a stakeholder / concern here

1. **Reuse before creating** — list existing stakeholders and concerns first.
2. Add a stakeholder (with documentation) in `SAF_Stakeholder`, a concern in
   `SAF_Concern`, and a `SCM_ConcernRationale` linking them.
3. When adding a concern that a viewpoint frames, wire `<<SCM_FramesConcern>>`
   from the viewpoint to the concern.
4. Regenerate the affected stakeholder/concern docs.
