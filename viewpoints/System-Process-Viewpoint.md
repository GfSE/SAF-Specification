<div align="right">SAF_FFDS#245,SAF_Cameo_Profile#346</div>

# System Process Viewpoint
*Domain:* **Functional** *Aspect:* **Behavior**
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
Note:
## Stakeholder
* [Customer](../stakeholders.md#Customer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* What is the functional scope of the SOI?
* How is the SOI interacting with the identified external entities?
* Which function(s) will the SOI provide?
* What kind of physical item(s) (energy, material, information) are exchanged between the SOI and external entity(s)?
* What are the functional interface(s) of the SOI?
* What is the functional scope of each system delivery standard?
* What Function(s) do the SOI provide?
* What are the System Function(s) and service(s)?
* What are the Functional Requirement(s) imposed on the SOI?
* What are the Function(s) and service(s) to be implemented?
## Presentation
The Functional Scenario Activity(s) and their sequence related to a System Story are represented in activity diagram(s) featuring swim lanes. The swim lanes are typed with Context Element(s) and SOI usage from the System Context(s). 
Note: It is recommended to compile separate activity diagrams refining Use Case and System Context.

## Profile Model Reference
|Stereotype | Description|
|---|---|
|Allocate||
|Allocate||
|Association||
|Association||
|ControlFlow||
|InputPin||
|ObjectFlow||
|OutputPin||
|[SAF_ContextFunction](../stereotypes.md#SAF_ContextFunction)|[tbd]|
|[SAF_FV03a_SystemProcessDiagram](../stereotypes.md#SAF_FV03a_SystemProcessDiagram)|[tbd]|
|[SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)|[tbd]|
|[SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)|[tbd]|
|[SAF_SystemProcess](../stereotypes.md#SAF_SystemProcess)|[tbd]|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Requirement Viewpoint](Stakeholder-Requirement-Viewpoint.md)
* [System Story Viewpoint](System-Story-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
*none*
