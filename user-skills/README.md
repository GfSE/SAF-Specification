# SAF Context Viewpoint Skills (user)

> **User** (modeler-facing) recipes for building SAF **context** views of a
> system of interest (SOI) in your own Cameo model. There are nine SAF context
> viewpoints (3 fidelity domains × 3 kinds: Definition / Exchange / Interaction);
> one user recipe per viewpoint.
>
> This is **not** where the SAF *specification* is maintained. Spec-maintenance
> lives elsewhere: the expert recipe is `../../saf-spec-expert/AGENTS.md`, and the
> per-viewpoint spec-focused (v0) drafts are in `../spec-recipes/`.

## User recipes (deployed to `.omp/` as `saf-<vp>`)

| VP_ID | Viewpoint | Status |
|---|---|---|
| `C1_SCXD` | System Context Definition | ready |
| `C1_SCXE` | System Context Exchange | pending |
| `C4_SCXI` | System Context Interaction | pending |
| `O1_OCXD` | Operational Context Definition | pending |
| `O1_OCXE` | Operational Context Exchange | pending |
| `O4_OCXI` | Operational Context Interaction | pending |
| `P1_PCXD` | Physical Context Definition | pending |
| `P1_PCXE` | Physical Context Exchange | pending |
| `P4_PCXI` | Physical Context Interaction | pending |

Only recipes that follow the current modeler-facing template (they carry a
**"Reuse check"** step) are deployed. `C1_SCXD` is the reference; the rest are
pending regeneration per `AGENTS.md` §4.

## Not sure which one?

Use the general **SAF Context Modeling** skill (`SAF_MODELING.md`, deployed as
`saf-modeling`): it explains the grid and routes you to the right recipe.

## Regenerate

`python3 deploy.py` (or `--dry-run`) deploys the user recipes + the `saf-modeling`
router, and — by default (`--set all`) — the spec-maintenance skill from
[`../dev-skills/`](../dev-skills/README.md) as `saf-spec-modeling`. Use
`--set user` or `--set dev` to deploy one side only. `AGENTS.md` and this
`README.md` are dev docs and are never deployed.
