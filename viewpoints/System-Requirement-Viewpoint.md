![System Architecture Framework](../diagrams/Logo_SAF.png)
# SAF User Documentation : System Requirement Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Requirement](../aspects.md#Aspect-Requirement)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![System Requirement Definition Table](../diagrams/System-Requirement-Definition-Table.svg)
## Purpose
The System Requirement Viewpoint specifies functions, non-functional properties, or constraints of the System. System Requirements are captured, the interrelationships between Functional and Non-Functional Requirements on the same level of abstraction and the traceability to Stakeholder Requirements are depicted.
## Applicability
The System Requirement Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Requirements Verification and Traceability Matrix (RVTM).
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What are the Interface Requirements imposed on the system?
* What are the exchange requirements imposed on the system?
* What are the functional requirements imposed on the system?
* What are the non-functional requirements imposed on the system?
* What are the requirements of environmental conditions imposed on the system?
* What is the range of acceptable system performance, i.e. the critical, top-level performance requirements derived from the operational needs?
* Which Stakeholder Requirements are addressed by System Requirements?
## Presentation
A System Requirement Table (RVTM), a tabular format, featuring
* unique requirement ID, text, and attributes
* traceability reference to Stakeholder Requirements
* traceability reference to depended requirements on the same abstraction level

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
