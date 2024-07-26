![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **C2_GRID** Grid Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Common](../../domains.md#Domain-Common)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Under Construction](../../diagrams/Under_construction_icon-yellow.svg )[under construction](../../using-saf/maturity.md#under-construction)|
## Example
![Grid-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Grid-Definition-Viewpoint-primary-example.svg)
![Grid-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/Grid-Definition-Viewpoint-primary-example-1.svg)
## Purpose
The Grid Definition Viewpoint serves as overview about the of the Views present in a System Model.
## Applicability
The Grid Definition Viewpoint supports the "System Viewpoints, Views and Models" input/output of various Technical Processes in INCOSE SYSTEMS ENGINEERING HANDBOOK 2023.
## Presentation
A content diagram featuring a matrix view for the SAF Viewpoint conceptual model: Rows represent Domains, and columns represent Aspects, and the cells manage the Views.

A table featuring the saf viewpoints, the views (diagrams, tables, ..) of the system model conforming to those viewpoints, domain and aspect information

## Stakeholder
* [SAF System model user](../../stakeholders.md#SAF-System-model-user)
## Concern
* [Which viewpoints are used in the system model](../../concerns.md#_2021x_2_8710274_1696579743010_350358_24968)
* [Which views of the frameworks viewpoints are present in the system model?](../../concerns.md#_2024x_26f0132_1719133841790_534930_15826)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "diagrams" of SAF_Viewpoint referencing SAF_Diagram|[VWconformingToVP](../concept/concepts.md#VWconformingToVP)|
|[SAF_C2_GRID](../../stereotypes.md#saf_c2_grid)|[GDcontainingAT](../concept/concepts.md#GDcontainingAT)|
|[SAF_C2_GRID](../../stereotypes.md#saf_c2_grid)|[GDcontainingDN](../concept/concepts.md#GDcontainingDN)|
|[SAF_C2_GRID](../../stereotypes.md#saf_c2_grid)|[GDcontainingVP](../concept/concepts.md#GDcontainingVP)|
|[SAF_C2_GRID](../../stereotypes.md#saf_c2_grid)|[Grid](../concept/concepts.md#Grid)|
|[SAF_C2_GRID](../../stereotypes.md#saf_c2_grid)|[Grid Definition Viewpoint](../concept/concepts.md#Grid-Definition-Viewpoint)|
|[SAF_C2_GRID_Table](../../stereotypes.md#saf_c2_grid_table)|[Grid Definition Viewpoint](../concept/concepts.md#Grid-Definition-Viewpoint)|
|[SAF_Diagram](../../stereotypes.md#saf_diagram)|[View](../concept/concepts.md#View)|
|[SAF_Viewpoint](../../stereotypes.md#saf_viewpoint)|[VPbelongingToAT](../concept/concepts.md#VPbelongingToAT)|
|[SAF_Viewpoint](../../stereotypes.md#saf_viewpoint)|[VPbelongingToDN](../concept/concepts.md#VPbelongingToDN)|
|[SAF_Viewpoint](../../stereotypes.md#saf_viewpoint)|[Viewpoint](../concept/concepts.md#Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Grid Definition Concept](diagrams/Grid-Definition-Concept.svg)
## Profile
![Grid Definition Profile](diagrams/Grid-Definition-Profile.svg)
