<div align="right">SAF_FFDS#311,SAF_Cameo_Profile#399</div>

# System Domain Item Kind Viewpoint
*Domain:* **Functional** *Aspect:* **Structure**
## Example
![FFDS System Domain Item Definition](../diagrams/FFDS-System-Domain-Item-Definition.svg)
## Purpose
The System Domain Item Kind Viewpoint collects type definition(s) for any exchanged item, information, material, or energy of the Functional, Logical and Physical domain. Its purpose is to define those item type(s) and their relationship(s). Also, the System Domain Item Kind Viewpoint specifies the data type(s), physical entity type(s), related value type(s) and unit(s) that are used (“known”) by the SOI. 
Note: Domain Item Kind(s) are used as type(s) of function input and output in the Functional Domain and for type(s) of interface(s) in the logical domain. They specify what is to be exchanged, but not how.
## Applicability
The System Domain Item Kind Viewpoint supports [tbd].
Note:
## Stakeholder
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
## Presentation
Domain Item Kind(s) are managed in the domain knowledge package of the SOI, the Domain Item Kind(s) are visible and usable to all sub elements of the SOI. Domain Item Kind(s) shall be value type(s) or block(s). A BDD diagram featuring Domain Item Kind(s) and their relationship(s) in terms of generalization, composition or general association shall be used.

## Profile Model Reference
* FlowProperty [SysML Profile]
* ItemFlow [SysML Profile]
* Parameter [UML_Standard_Profile]
* Pin [UML_Standard_Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_DomainKindComposition](../stereotypes.md#SAF_DomainKindComposition)
* [SAF_DomainKindDerivation](../stereotypes.md#SAF_DomainKindDerivation)
* [SAF_OperationalDomainKind](../stereotypes.md#SAF_OperationalDomainKind)
* [SAF_SFV02a_View](../stereotypes.md#SAF_SFV02a_View)
* State [UML_Standard_Profile]
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
