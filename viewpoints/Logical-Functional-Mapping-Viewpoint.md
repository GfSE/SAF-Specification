![System Architecture Framework](../diagrams/Logo_SAF.png)
# SAF User Documentation : Logical Functional Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../domains.md#Domain-Logical)|[Traceability & Mapping](../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS Context Definition Mapping of Usage](../diagrams/FFDS-Context-Definition-Mapping-of-Usage.svg)
## Purpose
The Logical Functional Mapping Viewpoint specifies the assignment of the System Functions and the System Partial Functions to the Logical SOI and the Logical SOI Elements.
## Applicability
The Logical Function Allocation Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which (system and system partial) functions are assigned to a logical item and logical item components?
Note: if allocation of usage is used, then allocation of definition is a derived relationship XOR.
## Presentation
A  Logical Functional Mapping Matrix featuring
* the call behavior action representing usage of System Functions and or System Partial Functions
* the part properties representing usage of Logical SOI Elements
* the allocation relationship between abovementioned elements

## Profile Model Reference
* Allocate [SysML Profile]
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)
* [SAF_LogicalSOI](../stereotypes.md#SAF_LogicalSOI)
* [SAF_SLV08a_View](../stereotypes.md#SAF_SLV08a_View)
* [SAF_SystemFunction](../stereotypes.md#SAF_SystemFunction)
* [SAF_SystemPartialFunction](../stereotypes.md#SAF_SystemPartialFunction)
## Input from other Viewpoints
### Required Viewpoints
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
### Recommended Viewpoints
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
