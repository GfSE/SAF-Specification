![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **F3_SSTA** System State Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Process & Behavior](../aspects.md#Aspect-Process-&-Behavior)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-State-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-State-Viewpoint-primary-example.svg)
## Purpose
The System State Viewpoint defines the conditions of the SOI or parts of thereof that constrain the execution of System Functions. System States are used as pre- or post-condition of System Use Cases, and as constraints within the definition of System Functions to specifying valid transitions. Valid transitions between System States and the conditions for transitioning are specified in system wide concepts captured in System Requirements.
## Applicability
The System State  Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function Definition.
## Presentation
A block definition diagram (BDD) featuring states, and state transitions. 
Note: References to model elements that are dependent of states, or transitions shall be shown as callout, or compartment notation.

A tabular format listing states, state transitions, and the conditons to be fullfilled before the transition will occur. References to model elements that are dependent of states (Domain Item Kinds, System Functions, System Use Cases, etc.), or transitions shall be shown in the table.

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
* [Which modes and states does the system have?](../concerns.md#_2021x_2_8710274_1674576759199_155259_23602)
* [Which system functions are dependent on a systems mode or state?](../concerns.md#_2021x_2_8710274_1674576759086_661396_23504)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Event [UML_Standard_Profile]
* State [UML_Standard_Profile]
* StateMachine [UML_Standard_Profile]
* Transition [UML_Standard_Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_F3_SSTA](../stereotypes.md#SAF_F3_SSTA)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
