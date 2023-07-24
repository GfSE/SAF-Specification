![System Architecture Framework](../diagrams/Logo_SAF.png)
# SAF User Documentation : System State Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Process & Behavior](../aspects.md#Aspect-Process-&-Behavior)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS System Modes and States](../diagrams/FFDS-System-Modes-and-States.svg)
## Purpose
The System State Viewpoint defines the conditions of the SOI or parts of it that constrain the execution of System Functions. System States are used as pre-condition or post-condition of Use Cases, as constraints within the definition of System Functions,  to specify states and allowed transitions in system wide concepts captured by Domain Model Items, and  are also used in Requirements. The valid transitions between System States and the conditions for transitioning are specified.
## Applicability
The System State  Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function Definition.
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
A state transition diagram featuring states and transitions between states. References to model elements that are dependent of states or transitions shall be shown as callout or compartment notation.

A table featuring states, transitions to other states and the conditons to be fullfilled for the transition to happen. References to Model Elements that are dependent of states (domain items, system functions, use cases..) shall also be shown in the table

## Profile Model Reference
* Event [UML_Standard_Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_SFV03c_View](../stereotypes.md#SAF_SFV03c_View)
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
