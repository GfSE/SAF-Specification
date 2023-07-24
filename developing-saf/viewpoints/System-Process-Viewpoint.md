![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : System Process Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Process & Behavior](../../aspects.md#Aspect-Process-&-Behavior)|![Released](../../diagrams/Symbol_confirmed.svg.png )[released](../../using-saf/maturity.md#released)|
## Example
![FFDS A Day in the Life of FFDS](../../diagrams/FFDS-A-Day-in-the-Life-of-FFDS.svg)
## Purpose
The System Process Viewpoint provides the functional representation of the system using a black-box approach
* the representation of the SOI and all Context Elements
* the System Functions the SOI shall be able to perform
* the Context Functions the Context Elements are expected to perform
* the exchange between SOI System Functions and Context Functions of Context Elements
* the functional flows crossing the boundary between SOI and Context Elements
## Applicability
The System Process Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function Identification and the System Functional Interface Identification.
## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Operator](../../stakeholders.md#Operator)
* [Project Manager](../../stakeholders.md#Project-Manager)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
* [User](../../stakeholders.md#User)
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
The System Process Activities and their sequence related to a System UseCase are represented in activity diagrams featuring swim lanes. The swim lanes are typed with Context Element usage and SOI usage from the same System Context of the abovementioned Use case. 
In order to improve the clarity of diagrams it may be appropriate to use several activity diagrams for one system process.

A table listing all identified system functions, the system processes in which they appera and the functional exchange with the context elements.

## Profile Model Reference
|Stereotype | realized Concept|
|---|---|
|Allocate [SysML Profile]|[LETperformingSFN](../concept/concepts.md#LETperformingSFN)|
|Allocate [SysML Profile]|[LCEperformingCFN](../concept/concepts.md#LCEperformingCFN)|
|ControlFlow [UML_Standard_Profile]|[GFNcontrolledAFTER](../concept/concepts.md#GFNcontrolledAFTER)|
|InputPin [UML_Standard_Profile]|[GFFtoGFP](../concept/concepts.md#GFFtoGFP)|
|ObjectFlow [UML_Standard_Profile]|[General Functional Flow](../concept/concepts.md#General-Functional-Flow)|
|OutputPin [UML_Standard_Profile]|[GFFfromGFP](../concept/concepts.md#GFFfromGFP)|
|Parameter [UML_Standard_Profile]|[General Functional Parameter](../concept/concepts.md#General-Functional-Parameter)|
|[SAF_ContextAction](../../stereotypes.md#SAF_ContextAction)|[Context Function IN System Process](../concept/concepts.md#Context-Function-IN-System-Process)|
|[SAF_ContextFunction](../../stereotypes.md#SAF_ContextFunction)|[Context Function](../concept/concepts.md#Context-Function)|
|[SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)|[System Function IN System Process](../concept/concepts.md#System-Function-IN-System-Process)|
|[SAF_LogicalRole](../../stereotypes.md#SAF_LogicalRole)|[Logical SOI Constituent](../concept/concepts.md#Logical-SOI-Constituent)|
|[SAF_LogicalRole](../../stereotypes.md#SAF_LogicalRole)|[Logical Context Element Constituent](../concept/concepts.md#Logical-Context-Element-Constituent)|
|[SAF_SFV03a_View](../../stereotypes.md#SAF_SFV03a_View)|[System Process Viewpoint](../concept/concepts.md#System-Process-Viewpoint)|
|[SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)|[System Function](../concept/concepts.md#System-Function)|
|[SAF_SystemProcess](../../stereotypes.md#SAF_SystemProcess)|[System Process](../concept/concepts.md#System-Process)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Process Concept](diagrams/System-Process-Concept.svg)
## Profile
![System Process Profile](diagrams/System-Process-Profile.svg)
