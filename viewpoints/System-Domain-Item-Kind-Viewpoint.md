![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **F2_SDIK** System Domain Item Kind Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-Domain-Item-Kind-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-Domain-Item-Kind-Viewpoint-primary-example.svg)
## Purpose
The System Domain Item Kind Viewpoint captures system wide concepts and collects type definitions for any exchanged item, e.g., information, material, or energy, of the Functional and Logical domain. Its purpose is to define these item types and their relationships. Furthermore, the System Domain Item Kind Viewpoint specifies the data types, entity types, related value types, and units that are used by the SOI.
Note: Domain Item Kinds are used as types of function input and output in the Functional Domain, and for types of interfaces in the Logical Domain. They specify what is to be exchanged but not how.
## Applicability
The System Domain Item Kind Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function, and the System Interface definition.
## Presentation
A block definition diagram (BDD) featuring Domain Item Kinds and their relationships in terms of generalization, composition, or general association. 
Note: Domain Item Kinds are managed in the domain knowledge package of the SOI, the Domain Item Kinds are visible and usable to all sub elements of the SOI. Domain Item Kinds shall be value types or blocks. 

A tabular format listing the Domain Item Kinds, and their relationships.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system?](../concerns.md#_2021x_2_6d8019d_1693308265004_421376_24972)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* [SAF_DomainKindComposition](../stereotypes.md#saf_domainkindcomposition)
* [SAF_DomainKind](../stereotypes.md#saf_domainkind)
* [SAF_F2_SDIK](../stereotypes.md#saf_f2_sdik)
* [SAF_F2_SDIK_Table](../stereotypes.md#saf_f2_sdik_table)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
