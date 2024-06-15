![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F6_SRQD** System Requirement Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Requirement](../../aspects.md#Aspect-Requirement)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Requirement-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Requirement-Definition-Viewpoint-primary-example.svg)
## Purpose
The System Requirement Definition Viewpoint specifies functions, non-functional properties, or constraints of the System. System Requirements are captured, the interrelationships between Functional and Non-Functional Requirements on the same level of abstraction and the traceability to Stakeholder Requirements are depicted.
## Applicability
The System Requirement Definition Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Requirements Verification and Traceability Matrix (RVTM).
## Presentation
A tabular format listing
* unique requirement ID, text, and attributes,
* traceability reference to Stakeholder Requirements,
* traceability reference to depended Requirements on the same level of abstraction.

## Stakeholder
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Project Manager](../../stakeholders.md#Project-Manager)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [What are the exchange requirements imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758978_464279_23425)
* [What are the functional requirements imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758860_195868_23350)
* [What are the non-functional requirements imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758640_180559_23118)
* [What are the requirements of environmental conditions imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758798_122991_23285)
* [What is the range of acceptable system performance, i.e. the critical, top-level performance requirements derived from the operational needs?](../../concerns.md#_2021x_2_8710274_1674576759042_480392_23467)
* [Which System Requirements are derived from Stakeholder Requirements?](../../concerns.md#_2021x_2_8710274_1674576758563_692887_23057)
* [Which are the interface requirements imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758778_979635_23258)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_F6_SRQD_Table](../../stereotypes.md#SAF_F6_SRQD_Table)|[System Requirement Definition Viewpoint](../concept/concepts.md#System-Requirement-Definition-Viewpoint)|
|[SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)|[Stakeholder Requirement](../concept/concepts.md#Stakeholder-Requirement)|
|[SAF_SystemFunctionalRequirementConstraint](../../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)|[FRboundedByNFR](../concept/concepts.md#FRboundedByNFR)|
|[SAF_SystemFunctionalRequirement](../../stereotypes.md#SAF_SystemFunctionalRequirement)|[Functional Requirement](../concept/concepts.md#Functional-Requirement)|
|[SAF_SystemNonFunctionalRequirement](../../stereotypes.md#SAF_SystemNonFunctionalRequirement)|[Non-functional Requirement](../concept/concepts.md#Non-functional-Requirement)|
|[SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)|[SRderivingFromSR](../concept/concepts.md#SRderivingFromSR)|
|[SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)|[SRderivingFromSTKR](../concept/concepts.md#SRderivingFromSTKR)|
|[SAF_SystemRequirement](../../stereotypes.md#SAF_SystemRequirement)|[System Requirement](../concept/concepts.md#System-Requirement)|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Definition Viewpoint](Stakeholder-Requirement-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Context Exchange Viewpoint](Operational-Context-Exchange-Viewpoint.md)
* [Operational Capability Definition Viewpoint](Operational-Capability-Definition-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Context Interaction Viewpoint](Operational-Context-Interaction-Viewpoint.md)
* [Operational Capability Mapping Viewpoint](Operational-Capability-Mapping-Viewpoint.md)
* [Operational Process Mapping Viewpoint](Operational-Process-Mapping-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Requirement Definition Concept](diagrams/System-Requirement-Definition-Concept.svg)
## Profile
![System Requirement Definition Profile](diagrams/System-Requirement-Definition-Profile.svg)
