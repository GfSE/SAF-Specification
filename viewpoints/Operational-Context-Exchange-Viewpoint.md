# Operational Context Exchange Viewpoint
*Domain:* **Operational** *Aspect:* **Context**
## Example
![FDN Context Exchange](../diagrams/FDN-Context-Exchange.svg)
## Purpose
The Operational Context Exchange Viewpoint defines connectivity and exchange between Operational Performer(s).
## Applicability
The Operational Context Exchange Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What Operational Exchange the Operational Performer(s) need to consume or provide?
## Presentation
An internal block diagram (IBD) associated to an Operational Context showing the connected Operational Performer(s) in their respective Operational Role and the Operational Exchange per connection.

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|Connector||[Operational Connection](concepts.md#Operational-Connection)|
|[SAF_OV01c_OperationalContextExchangeDiagram](stereotypes.md#SAF_OV01c_OperationalContextExchangeDiagram)|[tbd]|[Operational Context Exchange Viewpoint](concepts.md#Operational-Context-Exchange-Viewpoint)|
|ItemFlow||[allowing](concepts.md#allowing)|
|ItemFlow||[Operational Item Exchange](concepts.md#Operational-Item-Exchange)|
|[SAF_OperationalDomainKind](stereotypes.md#SAF_OperationalDomainKind)|[tbd]|[Operational Domain Kind](concepts.md#Operational-Domain-Kind)|
|[SAF_OperationalRole](stereotypes.md#SAF_OperationalRole)|[tbd]|[Operational Context Constituent](concepts.md#Operational-Context-Constituent)|
|[SAF_OperationalContext](stereotypes.md#SAF_OperationalContext)|[tbd]|[Operational Context](concepts.md#Operational-Context)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
*none*
