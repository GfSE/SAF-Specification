![System Architecture Framework](../diagrams/Logo_SAF.png)
# System State Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Process & Behavior](../aspects.md#Aspect-Process-&-Behavior)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS System Modes and States](../diagrams/FFDS-System-Modes-and-States.svg)
## Purpose
The System State Viewpoint defines the condition(s) of the SOI or parts of it that constrain the execution of System Functions. A System State is a pre-condition or post-condition of a Use Case, or is used in Requirements. The valid transition(s) between System States and the conditions for transitioning are specified.
## Applicability
[tbd]
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which modes and states does the system have?
* Which system functions are dependent on a systems mode or state?
## Presentation
[tbd]

## Profile Model Reference
* Event [UML_Standard_Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_SFV03b_View](../stereotypes.md#SAF_SFV03b_View)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* State [UML_Standard_Profile]
* StateMachine [UML_Standard_Profile]
* StateMachine [UML_Standard_Profile]
* Transition [UML_Standard_Profile]
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
