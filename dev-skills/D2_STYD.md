# Framework Stereotype Overview Viewpoint (`D2_STYD`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** proposed
- **Purpose:** An overview of **all stereotypes** provided by the SAF profile.

## What it specifies

The set of SAF profile stereotypes, each with its documentation.

## Presentation

A **table** of the SAF profile stereotypes and their documentation. (The
`stereotypes.csv` export is the machine-readable form of this overview — see
`src/devdoc/dev-guideline.md`.)

## Where it lives in the model

The stereotypes live in `SAF_Profile` (in the `SAF_VPO` model library), all
eventually inheriting `SAF_AbstractItem` (elements) or `SAF_Diagram` (diagrams).

## Maintaining the overview here

- When a stereotype is added/changed in `SAF_Profile`, the overview and the
  `stereotypes.csv` export must be **regenerated from the model** — never
  hand-edited.
- This is the "what does the profile offer" reference.
