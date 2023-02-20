![System Architecture Framework](../diagrams/Logo_SAF.png)
# System Requirement Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Requirement](../aspects.md#Aspect-Requirement)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![System Requirement Definition Table](../diagrams/System-Requirement-Definition-Table.svg)
## Purpose
The System Requirement Viewpoint specifies function(s), non-functional property(s), or constraint(s) of the system. System Requirement(s) are captured, the interrelationships between functional and non-functional requirement(s) on the same level of abstraction and the traceability to Stakeholder Requirement(s) are depicted.
## Applicability
The System Requirement Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the system requirements verification and traceability matrix (RVTM).
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What are the exchange requirements imposed on the system?
* What are the functional requirements imposed on the system?
* What are the interface requirements imposed on the system?
* What are the non-functional requirements imposed on the system?
* What are the requirements of environmental conditions imposed on the system?
* What is the range of acceptable system performance, i.e. the critical, top-level performance requirements derived from the operational needs?
* Which stakeholder requirements are addressed by system requirements?
## Presentation
A System Requirement Table (RVTM) featuring
* unique requirement ID, text and attributes
* traceability reference to upstream model elements and requirements
* traceability reference to depended requirement(s) on the same abstraction level

## Profile Model Reference
* [SAF_SFV06a_View](../stereotypes.md#SAF_SFV06a_View)
* [SAF_StakeholderRequirement](../stereotypes.md#SAF_StakeholderRequirement)
* [SAF_SystemFunctionalRequirement](../stereotypes.md#SAF_SystemFunctionalRequirement)
* [SAF_SystemFunctionalRequirementConstraint](../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)
* [SAF_SystemNonFunctionalRequirement](../stereotypes.md#SAF_SystemNonFunctionalRequirement)
* [SAF_SystemRequirement](../stereotypes.md#SAF_SystemRequirement)
* [SAF_SystemRequirementDerivation](../stereotypes.md#SAF_SystemRequirementDerivation)
* [SAF_SystemRequirementDerivation](../stereotypes.md#SAF_SystemRequirementDerivation)
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Context Exchange Viewpoint](Operational-Context-Exchange-Viewpoint.md)
* [Operational Capability Viewpoint](Operational-Capability-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [Operational Capability Traceability Viewpoint](Operational-Capability-Traceability-Viewpoint.md)
* [Operational Process Traceability Viewpoint](Operational-Process-Traceability-Viewpoint.md)
