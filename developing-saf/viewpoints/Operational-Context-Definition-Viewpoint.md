![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **O1_OCXD** Operational Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Context-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Operational-Context-Definition-Viewpoint-primary-example.svg)
## Purpose
The Operational Context Definition Viewpoint provides the operational contexts and the involved operational performers necessary to support a specific set of operational capabilities.
## Applicability
The Operational Context Definition Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.1] and contributes to both the problem or opportunity statement, and the Major Stakeholder Identification.
## Presentation
A block definition diagram (BDD) featuring the identified Operational Performers playing a role in the Operational Context being addressed.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Which is the operational context to achieve an operational story?](../../concerns.md#_2021x_2_8710274_1674576758994_334020_23436)
* [Which performers or resources are necessary to operate the intended solution?](../../concerns.md#_2021x_2_8710274_1674576759056_423032_23477)
* [Who are the (Major) Stakeholders involved in the intended solution?](../../concerns.md#_2021x_2_8710274_1674576759083_315449_23499)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_O1_OCXD](../../stereotypes.md#SAF_O1_OCXD)|[Operational Context Definition Viewpoint](../concept/concepts.md#Operational-Context-Definition-Viewpoint)|
|[SAF_OperationalContext](../../stereotypes.md#SAF_OperationalContext)|[Operational Context](../concept/concepts.md#Operational-Context)|
|[SAF_OperationalContextRole](../../stereotypes.md#SAF_OperationalContextRole)|[Operational Context Role](../concept/concepts.md#Operational-Context-Role)|
|[SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Context Definition Concept](diagrams/Operational-Context-Definition-Concept.svg)
## Profile
![Operational Context Definition Profile](diagrams/Operational-Context-Definition-Profile.svg)
