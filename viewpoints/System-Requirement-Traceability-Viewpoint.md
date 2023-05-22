![System Architecture Framework](../diagrams/Logo_SAF.png)
# System Requirement Traceability Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Mapping & Crossreference](../aspects.md#Aspect-Mapping-&-Crossreference)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![System Requirement Traceability Table](../diagrams/System-Requirement-Traceability-Table.svg)
## Purpose
The System Requirement Traceability Viewpoint specifies for every System Requirement the traceability to functional domain level
* System Story
* System Context Definition
* System Context Exchange
* System Process
* System Context Interaction
## Applicability
The System Requirement Traceability Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Requirements Traceability. The System Requirement Traceability Viewpoint contributes to System Requirements Verification and Traceability Matrix (RVTM).
## Stakeholder
* [Project Manager](../stakeholders.md#Project-Manager)
## Concern
* What is the rationale for this system requirement?
* Which Stakeholder Requirements are addressed by System Requirements?
* Which system interface is addressed by a system requirement?
## Presentation
A System Requirement Dependency Matrix featuring relationships from every SOI System Requirements to modeling elements such as
* System Story
* System Context Definition
* System Context Exchange
* System Functional Scenario
* System Context Interaction
Referring to a Stakeholder Requirement the dependency relation is <<derive>>, otherwise <<refine>>.

## Profile Model Reference
* [SAF_SFV08a_View](../stereotypes.md#SAF_SFV08a_View)
* [SAF_SystemFunctionalRequirement](../stereotypes.md#SAF_SystemFunctionalRequirement)
* [SAF_SystemFunctionalRequirementConstraint](../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)
* [SAF_SystemFunctionalRequirementRefinement](../stereotypes.md#SAF_SystemFunctionalRequirementRefinement)
* [SAF_SystemNonFunctionalRequirement](../stereotypes.md#SAF_SystemNonFunctionalRequirement)
* [SAF_SystemRequirement](../stereotypes.md#SAF_SystemRequirement)
* [SAF_SystemRequirementDerivation](../stereotypes.md#SAF_SystemRequirementDerivation)
* [SAF_SystemRequirementDerivation](../stereotypes.md#SAF_SystemRequirementDerivation)
* [SAF_SystemRequirementRefinement](../stereotypes.md#SAF_SystemRequirementRefinement)
* [SAF_SystemRequirementRefinement](../stereotypes.md#SAF_SystemRequirementRefinement)
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
* [System Requirement Viewpoint](System-Requirement-Viewpoint.md)
### Recommended Viewpoints
* [System Use Case Viewpoint](System-Use-Case-Viewpoint.md)
* [System Context Exchange Viewpoint](System-Context-Exchange-Viewpoint.md)
* [System Capability Viewpoint](System-Capability-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System State Viewpoint](System-State-Viewpoint.md)
* [System Context Interaction Viewpoint](System-Context-Interaction-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
