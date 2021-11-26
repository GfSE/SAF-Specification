# System Requirement Viewpoint
*Domain:* **Functional** *Aspect:* **Requirement**
## Example
![System Requirement Definition Table](../diagrams/System-Requirement-Definition-Table.svg)
## Purpose
The System Requirement Viewpoint specifies function(s), non-functional property(s), or constraint(s) of the system. System Requirement(s) are captured, the interrelationships between functional and non-functional requirement(s) on the same level of abstraction and the traceability to Stakeholder Requirement(s) are depicted.
## Applicability
The System Requirement Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the system requirements verification and traceability matrix (RVTM).
Note:
## Stakeholder
* [Customer](../stakeholders.md#Customer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the range of acceptable SOI performance, i.e. the critical, top-level Performance Requirement(s) derived from the Operational Need(s)?
* What are the Non-Functional Requirement(s) imposed on the SOI?
* What are the Interface Requirement(s) imposed on the SOI?
* What are the Functional Requirement(s) imposed on the SOI?
* What are the Exchange Requirement(s) imposed on the SOI?
* What are the Requirement(s) of environmental condition(s) imposed on the SOI?
## Presentation
A System Requirement Table (RVTM) featuring
* unique requirement ID, text and attributes
* traceability reference to upstream model elements and requirements
* traceability reference to depended requirement(s) on the same abstraction level

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|[SAF_SystemRequirementDerivation](stereotypes.md#SAF_SystemRequirementDerivation)|[tbd]
|[derivingREQ](concepts.md#derivingREQ)|
|[SAF_FV06a_SystemRequirementDiagram](stereotypes.md#SAF_FV06a_SystemRequirementDiagram)|[tbd]|[System Requirement Viewpoint](concepts.md#System-Requirement-Viewpoint)|
|[SAF_StakeholderRequirement](stereotypes.md#SAF_StakeholderRequirement)|[tbd]|[Stakeholder Requirement](concepts.md#Stakeholder-Requirement)|
|[SAF_SystemNonFunctionalRequirement](stereotypes.md#SAF_SystemNonFunctionalRequirement)|[tbd]|[Nonfunctional Requirement](concepts.md#Nonfunctional-Requirement)|
|[SAF_SystemRequirementDerivation](stereotypes.md#SAF_SystemRequirementDerivation)|[tbd]
|[derivingREQ](concepts.md#derivingREQ)|
|[SAF_SystemRequirement](stereotypes.md#SAF_SystemRequirement)|[tbd]|[System Requirement](concepts.md#System-Requirement)|
|[SAF_SystemFunctionalRequirement](stereotypes.md#SAF_SystemFunctionalRequirement)|[tbd]|[Functional Requirement](concepts.md#Functional-Requirement)|
|[SAF_SystemFunctionalRequirementConstraint](stereotypes.md#SAF_SystemFunctionalRequirementConstraint)|[tbd]|[boundedBY](concepts.md#boundedBY)|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
