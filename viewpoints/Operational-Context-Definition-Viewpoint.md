![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Operational Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Operational-Context-Definition-Viewpoint-primary-example.svg](../diagrams/vp-examples/Operational-Context-Definition-Viewpoint-primary-example.svg)
## Purpose
The Operational Context Definition Viewpoint provides the Operational Contexts, and the involved Operational Performers necessary to support a specific set of Operational Capabilities.
## Applicability
The Operational Context Definition Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to both the problem or opportunity statement, and the Major Stakeholder Identification.
## Presentation
A block definition diagram (BDD) featuring the identified Operational Performers playing a role in the Operational Context being addressed.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the operational context to achieve an operational story?
* What performers or resources are necessary to operate the intended solution?
* Who are the (Major) Stakeholders involved in the intended solution?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Association [UML_Standard_Profile]
* [SAF_OperationalContextRole](../stereotypes.md#SAF_OperationalContextRole)
* [SAF_OperationalContext](../stereotypes.md#SAF_OperationalContext)
* [SAF_OperationalPerformer](../stereotypes.md#SAF_OperationalPerformer)
* [SAF_SOV01b_View](../stereotypes.md#SAF_SOV01b_View)
## Input from other Viewpoints
### Required Viewpoints
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
### Recommended Viewpoints
*none*
