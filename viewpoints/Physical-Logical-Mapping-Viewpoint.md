![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Logical Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Traceability & Mapping](../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Physical-Logical-Mapping-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Logical-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Physical Logical Mapping Viewpoint specifies the assignment of the Logical System Elements to the Physical System Elements.
## Applicability
The Physical Functional Mapping Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Presentation
A  Physical To Logical Assigment Matrix featuring
* Logical Elements roles
* Physical Elements roles
* allocation relationships from logical elements roles to physical elements roles

## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Mechanic Developer](../stakeholders.md#Mechanic-Developer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [Which conceptual Logical Elements are allocated to Physical Elements in the physical architecture](../concerns.md#_2021x_2_8710274_1698399385413_529894_33129)
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
