# Framework Implementation Traceability Viewpoint

- **Domain:** SAF Development (`D`) · **Aspect:** Traceability & Mapping (8)
- **Maturity:** proposed · **VP_ID:** not yet assigned
- **Purpose:** An overview of **which concepts and viewpoints are implemented**
  using stereotypes or other model elements.

## What it specifies

The implementation matrix: concepts × viewpoints × stereotypes of the SAF
profile. For each concept, which stereotypes implement it; for each viewpoint,
which concepts it exposes and how they are implemented.

Supports the ISO 42010 "Specification of an architecture description framework"
construct.

## Presentation

A **matrix** featuring the concepts, the viewpoints, and the profile
stereotypes.

## Where it lives in the model

The data is the `SCM_RealizeConcept` / `SCM_Attribute` / `SCM_TypedBy` /
`SCM_ContainedIn` traces in `SAF_Profile2Concept`, plus each viewpoint's `Expose`
relations. Query them with `spec_get_special_implementations` and
`spec_get_concept_stereotypes` rather than from memory.

## Maintaining the traceability here

- Every implementation trace added in the profile (see Framework Viewpoint
  Implementation) feeds this matrix.
- Keep it complete: a concept exposed by a viewpoint but with no implementation
  trace is a gap (an orphan) — `saf_check_consistency` flags these.
- This is the "is the framework's implementation complete and traceable" check.
