![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Functional Assignment Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Mapping & Crossreference](../aspects.md#Aspect-Mapping-&-Crossreference)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
*none*
## Purpose
The Physical Functional Assignment Viewpoint analyses the assignment of the System Functions and the System Partial Functions to the Physical SOI Elements.
## Applicability
The Physical Functional Assignment Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the allocation of functions to the physical architecture?
* Which functions and services need to be implemented in SW?
* Which functions need to be realized by HW?
## Presentation
A  Physical Functional Assignment Matrix featuring
* the call behavior action representing usage of System Functions
*  Physical SOI Elements 
or Physical SOI
* a derived relationship

## Profile Model Reference
* Allocate [SysML Profile]
* Property [UML_Standard_Profile]
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
* [SAF_PhysicalElement](../stereotypes.md#SAF_PhysicalElement)
* [SAF_PhysicalHardwareElement](../stereotypes.md#SAF_PhysicalHardwareElement)
* [SAF_PhysicalSoftwareElement](../stereotypes.md#SAF_PhysicalSoftwareElement)
* [SAF_SPV08b_View](../stereotypes.md#SAF_SPV08b_View)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* [SAF_SystemPartialFunction](../stereotypes.md#SAF_SystemPartialFunction)
## Input from other Viewpoints
### Required Viewpoints
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
* [Logical Functional Assignment Viewpoint](Logical-Functional-Assignment-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
