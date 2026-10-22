# Framework Concept Definition Viewpoint (`D2_COTD`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** under construction
- **Purpose:** Define the systems-engineering concepts and their relationships
  that the SAF supports.

## What it specifies

- The **concepts**, with comprehensive documentation.
- The **relationships** between concepts, with documentation and allowable
  multiplicities.
- **Constraints** among relations and concepts, if applicable.

Intended for development or extension of the SAF. Supports the ISO 42010
"Architecture description (AD) elements", "AD element correspondence", and
"Specification of an architecture description framework" constructs.

## Presentation

- A **BDD** of `SCM_Concept` elements — the concepts (classes) and their relations
  (associations and association classes). For relational concepts, show the
  direction and define the multiplicities.
- A **table** of `SCM_Concept`s and their descriptions (for relational concepts,
  the related concepts are shown too).

## Where it lives in the model

Concepts are `SCM_Concept` classes in `SAF_SpecLibrary::SAF_Concept::<area>_<domain
letter>` area packages. Each area has a `SAF_<area>_Definition` (d2_cotd) diagram
and a `SAF_<area>_Table` diagram — the documentation is generated from these.

## Maintaining a concept here

1. **Reuse before creating** — search `SAF_Concept` for an existing concept
   before adding one.
2. Create a `Class` in the owning area package, apply `SCM_Concept`, give it a
   **description** (mandatory) and a name that reads as a noun phrase.
3. No attributes/types — content goes in the description.
4. Relations are **undirected**, named with a reading direction, multiplicities on
   both ends; use an `AssociationClass` if the relation itself is a concept.
5. Update the area's `SAF_<area>_Definition` and `SAF_<area>_Table` diagrams so
   the new concept is documented.
6. If a profile element already implements it, check the
   `SCM_RealizeConcept` / `SCM_Attribute` / `SCM_TypedBy` / `SCM_ContainedIn`
   traces.
