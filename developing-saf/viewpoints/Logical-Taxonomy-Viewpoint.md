![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Logical Taxonomy Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../../domains.md#Domain-Logical)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)||
## Example
TBD
## Purpose
The Logical Taxonomy Viewpoint is used to model the taxonomy of logical Elements of the system architecture. Elements being system elements, interfaces or connections making up the SOI. The Logical Taxonomy Viewpoint enhances re-usability within and across the SOI as well as the design of product lines by means of the virtues of specialization. The Logical Taxonomy Viewpoint support the identification of the taxonomic relationship between the architecture elements and their further use in the design process. It supports consistency when planning for changes in the design.
The Logical Taxonomy Viewpoint provides a step between the importing of re-use element libraries and the Logical Structure Viewpoint, by providing a place for the specialization of those library elements. 
## Applicability
The Logical Taxonomy Viewpoint supports the “reuse of COTS” activity of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.5.1.4], the “adaptation of system elements” activity of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.7.2.1], and the “potential to justify the setting up of the evolution of a product line organization” activity of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 8.3.1].
## Presentation
A block definition diagram (BDD) featuring the logical System block and logical blocks for each kind of Logical Element the system is importing of the re-use library. The project specific blocks are connected to the former ones by means of a Generalisation wih the arrow pointed towards the imported re-use elements.

## Stakeholder
* [Project Manager](../stakeholders.md#Project-Manager)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What must de changed in COTS to fulfill the system requirements?
    * As a System Architect I want to manage the level and scope of reutilisation that I want to be considered in my project
* How can I manage the reuse of system elements, interfaces, and connections within and across the SOI?
* How can I ensure that design changes are consistent within the system and across the system context?
* How can I reduce the amount of different system elements, interfaces and connectors in my architecture and design?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)|[Logical Element](../concept/concepts.md#Logical-Element)|
|[SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)|[Logical SOI](../concept/concepts.md#Logical-SOI)|
|[SAF_SLV02a_View](../../stereotypes.md#SAF_SLV02a_View)|[Logical Structure Viewpoint](../concept/concepts.md#Logical-Structure-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [System Functional Breakdown Structure Viewpoint](System-Functional-Breakdown-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
TBD
## Profile
TBD