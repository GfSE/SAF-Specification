![System Architecture Framework](../diagrams/Logo_SAF.png)
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
* What are the interface requirements regarding bandwidth, data throughput and latency?
* What are the Functional Requirements imposed on the systemI?
* What are the Requirements of environmental conditions imposed on the system?
* What are the Exchange Requirements imposed on the system?
* What are the Non-Functional Requirements imposed on the system?
* What is the range of acceptable system performance, i.e. the critical, top-level Performance Requirements derived from the Operational Needs?
* What are the Interface Requirements imposed on the system?
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
