![System Architecture Framework](../diagrams/Logo_SAF.png)
# Operational Context Exchange Viewpoint
*Domain:* [Operational](../domains.md#Domain-Operational) *Aspect:* [Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)
## Example
![FDN Context Exchange](../diagrams/FDN-Context-Exchange.svg)
## Purpose
The Operational Context Exchange Viewpoint defines connectivity and exchange between Operational Performer(s).
## Applicability
The Operational Context Exchange Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What operational exchange does the operational performers need to consume or provide?
## Presentation
An internal block diagram (IBD) associated to an Operational Context showing the connected Operational Performer(s) in their respective Operational Role and the Operational Exchange per connection.

## Profile Model Reference
* Connector [UML_Standard_Profile]
* ItemFlow [SysML Profile]
* ItemFlow [SysML Profile]
* [SAF_OperationalContext](../stereotypes.md#SAF_OperationalContext)
* [SAF_OperationalDomainKind](../stereotypes.md#SAF_OperationalDomainKind)
* [SAF_OperationalRole](../stereotypes.md#SAF_OperationalRole)
* [SAF_SOV01c_View](../stereotypes.md#SAF_SOV01c_View)
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
