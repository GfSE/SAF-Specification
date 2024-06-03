![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **L8_LFUM** Logical Functional Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../../domains.md#Domain-Logical)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Logical-Functional-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Logical-Functional-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Logical Functional Mapping Viewpoint supports the definition of assignment of system functions and system partial functions to conceptual logical system elements.
## Applicability
The Logical Functional Mapping Viewpoint supports the “System Architecture Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.4] and contributes to the artifact "Traceability Mapping".

Furthermore, the Logical Functional Mapping Viewpoint supports the "Allocation and Partitioning of Functional Entities to Logical Entities" activities.
## Presentation
A FBS_to_LBS mapping matrix featuring
* Functional Breakdown Structure (FBS)
* Logical Breakdown Structure (LBS)
* Allocation from system functions and system partial functions to conceptual logical system elements

## Stakeholder
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Which functions are allocated to which parts of the logical SOI architecture?](../../concerns.md#_2021x_2_8710274_1674576759104_328839_23526)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Allocate [SysML Profile]|[USAGEallocatedTo](../concept/concepts.md#USAGEallocatedTo)|
|[SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)|[General Functional Usage](../concept/concepts.md#General-Functional-Usage)|
|[SAF_L8_LFUM](../../stereotypes.md#SAF_L8_LFUM)|[Logical Functional Mapping Viewpoint](../concept/concepts.md#Logical-Functional-Mapping-Viewpoint)|
|[SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)|[Logical Element](../concept/concepts.md#Logical-Element)|
|SAF_LogicalInternalRole contained in SAF_LogicalElement|[Logical Element Role](../concept/concepts.md#Logical-Element-Role)|
|[SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)|[Logical Context SOI](../concept/concepts.md#Logical-Context-SOI)|
|[SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)|[System Function](../concept/concepts.md#System-Function)|
|[SAF_SystemPartialFunction](../../stereotypes.md#SAF_SystemPartialFunction)|[System Partial Function](../concept/concepts.md#System-Partial-Function)|
## Input from other Viewpoints
### Required Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
* [Logical Structure Definition Viewpoint](Logical-Structure-Definition-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Logical Functional Mapping Concept](diagrams/Logical-Functional-Mapping-Concept.svg)
## Profile
![Logical Functional Mapping Profile](diagrams/Logical-Functional-Mapping-Profile.svg)
