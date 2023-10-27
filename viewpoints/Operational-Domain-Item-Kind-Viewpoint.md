![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Operational Domain Item Kind Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Operational-Domain-Item-Kind-Viewpoint-primary-example.svg](../diagrams/vp-examples/Operational-Domain-Item-Kind-Viewpoint-primary-example.svg)
## Purpose
The Operational Domain Item Kind Viewpoint captures enterprise wide concepts and collects type definitions for any exchanged item of the Operational Domain. Its purpose is to define these item types and their relationships.
## Applicability
The Operational Domain Item Kind Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
## Presentation
A block definition diagram (BDD) featuring Operational Domain Item Kinds and their relationships in terms of generalization, composition, or general association.
Note: Operational Domain Item Kinds are managed in the domain knowledge package of the Enterprise. Operational Domain Item Kinds shall be value types or blocks. 

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?](../concerns.md#_2021x_2_6d8019d_1693570065115_738458_24748)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* ItemFlow [SysML Profile]
* ObjectFlow [UML_Standard_Profile]
* [SAF_OperationalDomainKindComposition](../stereotypes.md#SAF_OperationalDomainKindComposition)
* [SAF_OperationalDomainKind](../stereotypes.md#SAF_OperationalDomainKind)
* [SAF_SOV02a_View](../stereotypes.md#SAF_SOV02a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
