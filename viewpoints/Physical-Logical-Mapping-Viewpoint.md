![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Logical Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Traceability & Mapping](../aspects.md#Aspect-Traceability-&-Mapping)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
![Physical-Logical-Mapping-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Logical-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Physical Logical Mapping Viewpoint specifies the assignment of the Logical SOI Elements to the Physical SOI Elements.
## Applicability
The Physical Functional Mapping Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Presentation
A  Physical To Logical Assigment Matrix featuring
* Logical Elements roles
* Physical Elements roles
* allocation relationships from logical elements roles to physical elements roles

## Stakeholder
## Concern
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Allocate [SysML Profile]
* Attribute "logical_element" of SAF_PhysicalItem referencing SAF_LogicalElement
* SAF_LogicalInternalRole contained in SAF_LogicalElement
* SAF_PhysicalInternalRole contained in SAF_PhysicalItem
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_PhysicalInternalRole](../stereotypes.md#SAF_PhysicalInternalRole)
* [SAF_SPV08a_View](../stereotypes.md#SAF_SPV08a_View)
## Input from other Viewpoints
### Required Viewpoints
* [Logical Functional Mapping Viewpoint](Logical-Functional-Mapping-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
### Recommended Viewpoints
*none*
