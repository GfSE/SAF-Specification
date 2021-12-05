<div align="right">SAF_FFDS#246,SAF_Cameo_Profile#346</div>

# System State Viewpoint
*Domain:* **Functional** *Aspect:* **Behavior**
## Example
![FFDS System Mode & State](../diagrams/FFDS-System-Mode-&-State.svg)
## Purpose
The System State Viewpoint defines the condition(s) of the SOI or parts of it that constrain the execution of System Function(s). A System State is a pre-condition or post-condition of a Use Case, or is used in Requirement(s). The valid transition(s) between System State(s) and the condition(s) for transitioning are specified.
## Applicability
[tbd]
Note:
## Stakeholder
* [Customer](../stakeholders.md#Customer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* Which Mode(s) and State(s) do the SOI have?
* How are Error State(s) handled?
## Presentation
[tbd]
Note:

## Profile Model Reference
* Event [UML_Standard_Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_FV03b_SystemStateMachineDiagram](../stereotypes.md#SAF_FV03b_SystemStateMachineDiagram)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* State [UML_Standard_Profile]
* StateMachine [UML_Standard_Profile]
* StateMachine [UML_Standard_Profile]
* Transition [UML_Standard_Profile]
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
