![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : System Requirement Traceability Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.svg.png )[released](../../using-saf/maturity.md#released)|
## Example
![System Requirement Traceability Matrix](../../diagrams/System-Requirement-Traceability-Matrix.svg)
## Purpose
The System Requirement Traceability Viewpoint specifies for every System Requirement the traceability to the functional domain level
* System Use Case
* System Capability
* System Context Definition
* System Context Exchange
* System Context Interaction
* System Process
* System State
## Applicability
The System Requirement Traceability Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Requirements Traceability. The System Requirement Traceability Viewpoint also contributes to the System Requirements Verification and Traceability Matrix (RVTM).
## Stakeholder
* [Project Manager](../../stakeholders.md#Project-Manager)
## Concern
* What is the rationale for this system requirement?
* Which Stakeholder Requirements are addressed by System Requirements?
* Which system interface is addressed by a system requirement?
## Presentation
A dependency matrix featuring relationships for every System Requirement to the functional domain level
* System Use Case
* System Capability
* System Context Definition
* System Context Exchange
* System Context Interaction
* System Process
* System State

## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_SFV08b_View](../../stereotypes.md#SAF_SFV08b_View)|[System Requirement Traceability Viewpoint](../concept/concepts.md#System-Requirement-Traceability-Viewpoint)|
|[SAF_SystemFunctionalRequirement](../../stereotypes.md#SAF_SystemFunctionalRequirement)|[Functional Requirement](../concept/concepts.md#Functional-Requirement)|
|[SAF_SystemFunctionalRequirementConstraint](../../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)|[FRboundedByNFR](../concept/concepts.md#FRboundedByNFR)|
|[SAF_SystemFunctionalRequirementRefinement](../../stereotypes.md#SAF_SystemFunctionalRequirementRefinement)|[FRrefiningSFN](../concept/concepts.md#FRrefiningSFN)|
|[SAF_SystemNonFunctionalRequirement](../../stereotypes.md#SAF_SystemNonFunctionalRequirement)|[Non-functional Requirement](../concept/concepts.md#Non-functional-Requirement)|
|[SAF_SystemRequirement](../../stereotypes.md#SAF_SystemRequirement)|[System Requirement](../concept/concepts.md#System-Requirement)|
|[SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)|[SRderivingFromSHR](../concept/concepts.md#SRderivingFromSHR)|
|[SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)|[SRderivingFromSR](../concept/concepts.md#SRderivingFromSR)|
|[SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)|[SRrefiningSUC](../concept/concepts.md#SRrefiningSUC)|
|[SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)|[SRrefiningSCY](../concept/concepts.md#SRrefiningSCY)|
|[SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)|[SRrefiningLICP](../concept/concepts.md#SRrefiningLICP)|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
* [System Requirement Viewpoint](System-Requirement-Viewpoint.md)
### Recommended Viewpoints
* [System Use Case Viewpoint](System-Use-Case-Viewpoint.md)
* [System Capability Viewpoint](System-Capability-Viewpoint.md)
* [System Context Exchange Viewpoint](System-Context-Exchange-Viewpoint.md)
* [System Context Interaction Viewpoint](System-Context-Interaction-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
* [System State Viewpoint](System-State-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Requirement Traceability Concept](diagrams/System-Requirement-Traceability-Concept.svg)
## Profile
![System Requirement Traceability Profile](diagrams/System-Requirement-Traceability-Profile.svg)
