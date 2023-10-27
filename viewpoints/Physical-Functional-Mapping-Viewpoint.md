![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Functional Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Traceability & Mapping](../aspects.md#Aspect-Traceability-&-Mapping)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
![Physical-Functional-Mapping-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Functional-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Physical Functional Mapping Viewpoint analyses the assignment of the System Functions and the System Partial Functions to the Physical SOI Elements.
## Applicability
The Physical Functional Mapping Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Presentation
A  Physical Functional Mapping Matrix featuring
* the call behavior action representing usage of System Functions
*  Physical SOI Elements 
or Physical SOI
* a derived relationship

## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Mechanic Developer](../stakeholders.md#Mechanic-Developer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the allocation of functions to the Physical Elements in the physical architecture?
* Which funcions need to be tested in IV&V activities
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Allocate [SysML Profile]
* Attribute "function" of SAF_PhysicalItem referencing SAF_SystemFunction
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
* [Logical Functional Mapping Viewpoint](Logical-Functional-Mapping-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
