# Framework Viewpoint Definition Viewpoint (`D2_VPTD`)

- **Domain:** SAF Development (`D`) · **Aspect:** Taxonomy & Structure (2)
- **Maturity:** under construction
- **Purpose:** Serve as the specification for any SAF viewpoint. This is the
  "define a viewpoint" viewpoint.

## What it specifies

For a viewpoint, this viewpoint requires:

- an example of a **conforming view**;
- the **purpose**;
- the **applicability**;
- the **exposed concepts**;
- the **presentation forms** for the conforming views;
- the **related viewpoints**;
- the **stereotypes** used in the conforming views.

Supports the ISO 42010 "Specification of an architecture description framework"
construct. **Requires** the Framework Concept Definition viewpoint (`D2_COTD`).

## Presentation

A **View & Viewpoint diagram** featuring one `SCM_Viewpoint`, one `SCM_View`, the
**conform** relationship between them, plus the `SCM_Concept` elements of interest
and the **expose** relationships for the concepts that satisfy the viewpoint's
concerns.

> Exposing a concept is a commitment: its implementation must appear in the
> diagram/table/matrix that implements the viewpoint.

## Where it lives in the model

A viewpoint is a package `SAF_Viewpoint::SAF_<Domain>::<Name>`
(`SCM_VP_Package`) containing `X Viewpoint` (`SCM_Viewpoint`) and `X View`
(`SCM_View`), the `X Concept` diagram (`SAF_D2_VPTD`), the `X Profile` diagram
(`SAF_D2_VPTI`), and a `TRACEABILITY` package.

## Defining a viewpoint here

1. Decide the grid cell (domain + aspect) and the 4-letter `id`; confirm no
   viewpoint exists yet.
2. Create the `SCM_VP_Package` under the right domain package.
3. Create `X Viewpoint` + `X View`; wire **conform** View→Viewpoint; set the tags
   (`purpose`, `applicability`, `saf_domain`, `saf_aspect`, `id`, …).
4. Run the five development questions (who cares → why → what → how related → how
   presented); add/reuse concepts, concerns, stakeholders.
5. Wire `<<SCM_FramesConcern>>` Viewpoint→Concerns and `<<Expose>>` View→Concepts.
6. Add the `TRACEABILITY` package; create the `X Concept` diagram.
