![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : Operational Context Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.svg.png )[released](../../using-saf/maturity.md#released)|
## Example
![FDN Context Exchange](../../diagrams/FDN-Context-Exchange.svg)
## Purpose
The Operational Context Exchange Viewpoint provides the Operational Exchange between Operational Performers of information, systems, personnel, energy, etc.
## Applicability
The Operational Context Exchange Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
## Stakeholder
## Concern
* What operational exchange does the operational performers need to consume or provide?
## Presentation
An internal block diagram (IBD) associated to the Operational Context defining the connected Operational Performers in their respective Operational Role, and the Operational Item Exchange per Operational Connection.

A tabular format listing [tbd].

## Profile Model Reference
|Stereotype | realized Concept|
|---|---|
|Connector [UML_Standard_Profile]|[Operational Connection](../concept/concepts.md#Operational-Connection)|
|ItemFlow [SysML Profile]|[OCNallowingOIE](../concept/concepts.md#OCNallowingOIE)|
|ItemFlow [SysML Profile]|[Operational Item Exchange](../concept/concepts.md#Operational-Item-Exchange)|
|[SAF_OperationalContext](../../stereotypes.md#SAF_OperationalContext)|[Operational Context](../concept/concepts.md#Operational-Context)|
|[SAF_OperationalDomainKind](../../stereotypes.md#SAF_OperationalDomainKind)|[Operational Domain Kind](../concept/concepts.md#Operational-Domain-Kind)|
|[SAF_OperationalRole](../../stereotypes.md#SAF_OperationalRole)|[Operational Context Performer Constituent](../concept/concepts.md#Operational-Context-Performer-Constituent)|
|[SAF_SOV01c_View](../../stereotypes.md#SAF_SOV01c_View)|[Operational Context Exchange Viewpoint](../concept/concepts.md#Operational-Context-Exchange-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Context Exchange Concept](diagrams/Operational-Context-Exchange-Concept.svg)
## Profile
![Operational Context Exchange Profile](diagrams/Operational-Context-Exchange-Profile.svg)
