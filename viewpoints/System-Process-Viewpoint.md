![System Architecture Framework](../diagrams/Logo_SAF.png)
# System Process Viewpoint
*Domain:* **Functional** *Aspect:* **Process & Behavior**
## Example
![FFDS A Day in the Life of FFDS](../diagrams/FFDS-A-Day-in-the-Life-of-FFDS.svg)
## Purpose
The System Process Viewpoint provides the functional representation of the system using a black-box approach
* the representation of the SOI and all Context Element(s)
* the System Function(s) the SOI shall be able to perform
* the Context Function(s) the Context Element(s) are expected to perform
* the exchange between SOI System Function(s) and Context Function(s) of Context Element(s)
* the functional flow(s) crossing the boundary between SOI and Context Element(s)

## Applicability
The System Process Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function Definition and the System Functional Interface Identification.
## Stakeholder
* [Customer](../stakeholders.md#Customer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* How does a system function interact with its environment?
* How is the system interacting with the identified external entities?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the functional interfaces of the system?
* What are the scenarios a system function is utilized in?
* What is the functional scope of the system?
* What services are expected from external entities?
* Which functions are out of scope of the system?
* Which functions will the system provide?
## Presentation
The Functional Scenario Activity(s) and their sequence related to a System UseCase are represented in activity diagram(s) featuring swim lanes. The swim lanes are typed with Context Element(s) and SOI usage from the System Context(s). 
Note: It is recommended to compile separate activity diagrams refining Use Case and System Context.

## Profile Model Reference
* Allocate [SysML Profile]
* Allocate [SysML Profile]
* Association [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* ControlFlow [UML_Standard_Profile]
* InputPin [UML_Standard_Profile]
* ObjectFlow [UML_Standard_Profile]
* OutputPin [UML_Standard_Profile]
* [SAF_ContextFunction](../stereotypes.md#SAF_ContextFunction)
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
* [SAF_SFV03a_View](../stereotypes.md#SAF_SFV03a_View)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* [SAF_SystemProcess](../stereotypes.md#SAF_SystemProcess)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
