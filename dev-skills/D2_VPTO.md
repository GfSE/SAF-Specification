# Framework Viewpoint Overview Viewpoint (`D2_VPTO`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** under construction
- **Purpose:** An overview of the viewpoints in the SAF from a **SAF developer's**
  perspective.

## What it specifies

- The viewpoints **available**.
- Their **location in the grid** (by domain and aspect).
- Their **maturity** of development.

Supports the ISO 42010 "Specification of an architecture description framework"
construct.

## Presentation

- A **grid diagram** — a graphical grid of aspects (columns) × domains (rows)
  with the viewpoints placed in their cells.
- A **table** of the viewpoints, their domain, aspect, implementation diagram, and
  maturity.

## Where it lives in the model

The grid metadata is in `SAF_Viewpoint::_SAF_Grid` (`Domain` elements
`SCM_DomainLayer`, `Aspect` elements `SCM_AspectColumn`). The overview is
effectively a projection of the `SAF_Viewpoint` packages onto the grid.

## Maintaining the overview here

- Keep the grid metadata in `_SAF_Grid` in sync with the domain/aspect of each
  viewpoint package.
- When a viewpoint is added, changed, or its maturity changes, the overview
  (grid + table) must reflect it — regenerate from the model.
- This is the "where am I in the framework" reference for a developer.
