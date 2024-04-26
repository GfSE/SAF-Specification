![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **L2_LST** Logical Structure Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../domains.md#Domain-Logical)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Logical-Structure-Viewpoint-primary-example.svg](../diagrams/vp-examples/Logical-Structure-Viewpoint-primary-example.svg)
## Purpose
The Logical Structure Viewpoint describes how the system is decomposed into a hierarchical structure of logical elements responsible for different system functions (divide & conquer principle). It covers related logical concepts and principles that support the logical operation of the system and is widely reusable among similar systems like product families, or product generations.
## Applicability
The Logical Structure Viewpoint supports the "System Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.4] and contributes to the artifact "System Architecture Description".

Furthermore, the Logical Structure Viewpoint supports the "Allocation and Partitioning of System Functions to Logical Entities" activities.
## Presentation
A block definition diagram (BDD) featuring the logical system block and logical blocks for any kind of logical element the system is composed of. These elements are connected to the system block by means of aggregation relationships. 
Note: Multiple relationships to a kind of element are allowed meaning, that this kind of element is used in several roles.

## Stakeholder
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [What is the logical breakdown of the system?](../concerns.md#_2021x_2_8710274_1674576758828_494985_23322)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* SAF_LogicalInternalRole contained in SAF_LogicalElement
* [SAF_L2_LST](../stereotypes.md#SAF_L2_LST)
* [SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)
* [SAF_LogicalSOI](../stereotypes.md#SAF_LogicalSOI)
## Input from other Viewpoints
### Required Viewpoints
* [System Functional Breakdown Structure Viewpoint](System-Functional-Breakdown-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
