![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Logical Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Under Construction](../../diagrams/Under_construction_icon-yellow.svg )[under construction](../../using-saf/maturity.md#under-construction)|
## Example
![Physical-Logical-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Logical-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Physical Logical Mapping Viewpoint specifies the assignment of the Logical SOI Elements to the Physical SOI Elements.
## Applicability
The Physical Functional Mapping Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Presentation
A  Physical To Logical Assigment Matrix featuring
* Logical Elements
* Physical Elements
* allocation relationships from logical elements to physical elements

## Stakeholder
## Concern
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Allocate [SysML Profile]|[ILECspecifyingPU](../concept/concepts.md#ILECspecifyingPU)|
|Attribute "logical_elements" of SAF_PhysicalItem referencing SAF_LogicalElement|[LETspecifyingAPE](../concept/concepts.md#LETspecifyingAPE)|
|[SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)|[Logical Element](../concept/concepts.md#Logical-Element)|
|[SAF_LogicalInternalRole](../../stereotypes.md#SAF_LogicalInternalRole)|[Internal Logical Element Constituent](../concept/concepts.md#Internal-Logical-Element-Constituent)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Hardware Element Constituent](../concept/concepts.md#Hardware-Element-Constituent)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Physical Element Constituent](../concept/concepts.md#Physical-Element-Constituent)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Physical Hardware Constituent](../concept/concepts.md#Physical-Hardware-Constituent)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Physical Software Constituent](../concept/concepts.md#Physical-Software-Constituent)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Physical Usage](../concept/concepts.md#Physical-Usage)|
|[SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)|[Software Element Constituent](../concept/concepts.md#Software-Element-Constituent)|
|[SAF_SPV08a_View](../../stereotypes.md#SAF_SPV08a_View)|[Physical Logical Mapping Viewpoint](../concept/concepts.md#Physical-Logical-Mapping-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [Logical Functional Mapping Viewpoint](Logical-Functional-Mapping-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Physical Logical Mapping Concept](diagrams/Physical-Logical-Mapping-Concept.svg)
## Profile
![Physical Logical Mapping Profile](diagrams/Physical-Logical-Mapping-Profile.svg)
