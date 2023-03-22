![System Architecture Framework](../diagrams/Logo_SAF.png)
# System Functional Breakdown Structure Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Structure](../aspects.md#Aspect-Structure)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
![FFDS Function Breakdown Structure Definition](../diagrams/FFDS-Function-Breakdown-Structure-Definition.svg)
## Purpose
The System Functional Breakdown Strcuture Viewpoint defines the functional hierarchy of the SOI beginning with System Processes, over identified System Functions further refined down to partial Functions. The reuse of System Functions and System Partial Functions over Function Trees of the SOI is facilitated. 
## Applicability
The System Functional Breakdown Strcuture Viewpoint supports the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.3] and contributes to the System Function Definition.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How are the system functions decomposed into sub-functions decomposed? 
* What is the breakdown of functions into sub-functions?
* Which functions will the system provide?
## Presentation
The content is in one or more more block definition diagrams (BDD) featuring activities representing System Processes, System Functions, System Partial Functions and aggregation repesenting the functional breakdown structure.

Tool specific analysis diagram displaying the relationships between System Processes, System Functions and System Partial Functions.

## Profile Model Reference
* Activity [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
* [SAF_SFV02c_View](../stereotypes.md#SAF_SFV02c_View)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* [SAF_SystemPartialFunction](../stereotypes.md#SAF_SystemPartialFunction)
* [SAF_SystemProcess](../stereotypes.md#SAF_SystemProcess)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
