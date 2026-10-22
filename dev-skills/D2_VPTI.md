# Framework Viewpoint Implementation Viewpoint (`D2_VPTI`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** under construction
- **Purpose:** Define the **implementation** of the SE concepts exposed by a
  viewpoint. This is the basis for profile implementations of the SAF.

## What it specifies

- For **each exposed concept**, an implementation.
- An implementation **for each presentation** of the viewpoint.
- **Full traceability** from the implementation back to the concept.

Supports the ISO 42010 "Specification of an architecture description framework"
construct.

## Presentation

A **Profile diagram** featuring the `SCM_Concept` elements of the exposed
concepts, the SAF profile **stereotypes** implementing them, and
`<<SCM_RealizeConcept>>` traces from implementation to concept. Concepts
implemented directly by UML metaclasses or SysML elements are shown and related.
`<<SCM_Attribute>>`, `<<SCM_TypedBy>>`, and `<<SCM_ContainedIn>>` specify
implementation detail (e.g. a concept realized because one element is part of
another).

## Where it lives in the model

The profile stereotypes live in `SAF_Profile` (in the `SAF_VPO` model library);
the traces live in `SAF_Profile2Concept`. The viewpoint's `X Profile` diagram
(`SAF_D2_VPTI`) carries the content that the generated documentation is built
from.

## Implementing a viewpoint here

1. For each exposed concept, create or reuse the implementing profile stereotype
   (prefix `SAF_`; diagram stereotypes `SAF_<D><aspect>_<id>` + `_Table`/
   `_Matrix`).
2. Trace it: `<<SCM_RealizeConcept>>` (Abstraction) from the stereotype to the
   concept; add `<<SCM_Attribute>>` / `<<SCM_TypedBy>>` / `<<SCM_ContainedIn>>`
   where the implementation is by tag, by type, or by containment.
3. Ensure the `X Profile` diagram shows all viewpoint-relevant implementation and
   nothing irrelevant (the documentation is generated from it).
4. Update the `SAF_VPreleasePlan Map` if the change affects release scope.
