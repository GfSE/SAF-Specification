![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Functional Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Physical-Functional-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Functional-Mapping-Viewpoint-primary-example.svg)
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
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Mechanic Developer](../../stakeholders.md#Mechanic-Developer)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [What is the allocation of functions to the Physical Elements in the physical architecture?](../../concerns.md#_2021x_2_8710274_1674576758941_524652_23399)
* [Which funcions need to be tested in IV&V activities](../../concerns.md#_2021x_2_8710274_1698399553646_852568_33150)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Allocate [SysML Profile]|[USEAGEallocatedTO](../concept/concepts.md#USEAGEallocatedTO)|
|Attribute "function" of SAF_PhysicalItem referencing SAF_SystemFunction|[SFNallocatedToAPE](../concept/concepts.md#SFNallocatedToAPE)|
|[SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)|[General Functional Usage](../concept/concepts.md#General-Functional-Usage)|
|[SAF_PhysicalElement](../../stereotypes.md#SAF_PhysicalElement)|[Physical Element](../concept/concepts.md#Physical-Element)|
|[SAF_PhysicalHardwareElement](../../stereotypes.md#SAF_PhysicalHardwareElement)|[Hardware Element](../concept/concepts.md#Hardware-Element)|
|[SAF_PhysicalSoftwareElement](../../stereotypes.md#SAF_PhysicalSoftwareElement)|[Software Element](../concept/concepts.md#Software-Element)|
|[SAF_SPV08b_View](../../stereotypes.md#SAF_SPV08b_View)|[Physical Functional Mapping Viewpoint](../concept/concepts.md#Physical-Functional-Mapping-Viewpoint)|
|[SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)|[System Function](../concept/concepts.md#System-Function)|
|[SAF_SystemPartialFunction](../../stereotypes.md#SAF_SystemPartialFunction)|[System Partial Function](../concept/concepts.md#System-Partial-Function)|
## Input from other Viewpoints
### Required Viewpoints
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
* [Logical Functional Mapping Viewpoint](Logical-Functional-Mapping-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Physical Functional Mapping Concept](diagrams/Physical-Functional-Mapping-Concept.svg)
## Profile
![Physical Functional Mapping Profile](diagrams/Physical-Functional-Mapping-Profile.svg)
