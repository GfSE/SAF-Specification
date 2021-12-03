<div align="right">SAF_FFDS#245,SAF_Cameo_Profile#345</div>

# System Story Viewpoint
*Domain:* **Functional** *Aspect:* **Context**
## Example
![FFDS Use Case A Day in Life of the System](../diagrams/FFDS-Use-Case-A-Day-in-Life-of-the-System.svg)
## Purpose
The System Story Viewpoint provides an outside view on the System Functionality from the perspective of the System User(s) and contributes to the definition of System Requirement(s) and System Usage. The intended system use may be captured as free text use case description, a storytelling approach on a coarse detail level. The main System Exchange Partner(s) participating in the intended system use are identified. System use case(s) are related to a specific System Context.
## Applicability
The Sytem Story Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" and "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.2 & §4.3] and contributes to the System Function Identification.
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* What is the functional scope of the SOI?
* Which function(s) are out of scope of the SOI?
* Which function(s) will the SOI provide?
* What are the external entity(s) the SOI interacts with in the respective context?
* What are the external entity(s) the SOI interacts with in the respective context?
* What service(s) are expected from external entity(s)?
* What are necessary inputs for operating the SOI expected to be provided by other external entity(s)?
* What is the range of acceptable SOI performance, i.e. the critical, top-level Performance Requirement(s) derived from the Operational Need(s)?
## Presentation
A use case diagram depicting model elements representing System Story(s) and System Context Element(s) shall be used.
Note: [tbd]

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|Include||[includingSSTRY](../concepts.md#includingSSTRY)|
|[SAF_FV01a_SystemStoryDiagram](../stereotypes.md#SAF_FV01a_SystemStoryDiagram)|[tbd]|[System Story Viewpoint](../concepts.md#System-Story-Viewpoint)|
|[SAF_LogicalContextElementActing](../stereotypes.md#SAF_LogicalContextElementActing)|[tbd]|[LEactingInSSTRY](../concepts.md#LEactingInSSTRY)|
|[SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)|[tbd]|[Logical Environment](../concepts.md#Logical-Environment)|
|[SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)|[tbd]|[Logical External System](../concepts.md#Logical-External-System)|
|[SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)|[tbd]|[Logical User](../concepts.md#Logical-User)|
|[SAF_SystemStory](../stereotypes.md#SAF_SystemStory)|[tbd]|[SSTRYtakingPlaceInLSC](../concepts.md#SSTRYtakingPlaceInLSC)|
|[SAF_SystemStory](../stereotypes.md#SAF_SystemStory)|[tbd]|[System Story](../concepts.md#System-Story)|
|[SAF_SystemStoryContribution](../stereotypes.md#SAF_SystemStoryContribution)|[tbd]
|[SScontributingToOS](../concepts.md#SScontributingToOS)|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Capability Viewpoint](Operational-Capability-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Story Concept](System-Story-Concept.svg)
## Profile
![System Story Profile](System-Story-Profile.svg)
