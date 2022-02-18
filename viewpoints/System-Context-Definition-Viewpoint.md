<div align="right">SAF_FFDS#285,SAF_Cameo_Profile#353</div>

# System Context Definition Viewpoint
*Domain:* **Functional** *Aspect:* **Context**
## Example
![FFDS Context Definition](../diagrams/FFDS-Context-Definition.svg)
## Purpose
The System Context Definition Viewpoint defines how the SOI is embedded in its Environment, i.e. where the boundary of the SOI is and who the External Entity(s) are the SOI interacts with (e.g. User(s), other External System(s), Environmental Condition(s), etc.). The SOI provides and requests Context Function(s). The SOI shall be able handle Event(s) and Effect(s) from the outside.
## Applicability
The System Context Definition Viewpoint supports the "Prepare for Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the system Functional Interface Identification.
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* What is the SOI boundary definition?
* What are the external entity(s) the SOI interacts with in the respective context?
* What are the different context(s) the SOI is embedded and utilized in?
* What are the different context(s) the SOI is embedded and utilized in?
* What are necessary enabling system(s)?
* What is the System Boundary definition?
## Presentation
A BDD featuring the following elements
* a Logical Element block representing SOI in the logical domain
* a Logical Context block representing the addressed context in the logical domain
* Logical Context Element blocks for each relevant context element
* a Composition relationship from Context block to each Context Element used in the context
* a Composition relationship from Context block to the SOI

## Profile Model Reference
* Association [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* [SAF_FV01b_SystemContextDefinitionDiagram](../stereotypes.md#SAF_FV01b_SystemContextDefinitionDiagram)
* [SAF_LogicalContext](../stereotypes.md#SAF_LogicalContext)
* [SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)
* [SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)
* [SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)
* [SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)
* [SAF_LogicalSOI](../stereotypes.md#SAF_LogicalSOI)
* [SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)
## Input from other Viewpoints
### Required Viewpoints
* [System Story Viewpoint](System-Story-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
