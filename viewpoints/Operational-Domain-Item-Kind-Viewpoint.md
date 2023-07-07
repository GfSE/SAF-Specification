![System Architecture Framework](../diagrams/Logo_SAF.png)
# Operational Domain Item Kind Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Structure](../aspects.md#Aspect-Structure)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![Operational Domain Item Definition](../diagrams/Operational-Domain-Item-Definition.svg)
## Purpose
The Operational Domain Item Kind Viewpoint captures enterprise wide concepts and collects type definitions for any exchanged item of the Operational Domain. Its purpose is to define these item types and their relationships.
## Applicability
The Operational Domain Item Kind Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
## Stakeholder
## Concern
* What operational exchange does the operational performers need to consume or provide?
## Presentation
Operational Domain Item Kinds are managed in the domain knowledge package of Enterprise. Operational Domain Item Kinds shall be value types or blocks. A block definition diagram (BDD) featuring Operational Domain Item Kinds and their Relationships in terms of generalization, composition or general association shall be used.

## Profile Model Reference
* ItemFlow [SysML Profile]
* ObjectFlow [UML_Standard_Profile]
* [SAF_OperationalDomainKind](../stereotypes.md#SAF_OperationalDomainKind)
* [SAF_OperationalDomainKindComposition](../stereotypes.md#SAF_OperationalDomainKindComposition)
* [SAF_SOV02a_View](../stereotypes.md#SAF_SOV02a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
