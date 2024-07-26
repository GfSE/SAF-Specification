![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **P2_PSTD** Physical Structure Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Physical-Structure-Definition-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Structure-Definition-Viewpoint-primary-example.svg)
![Physical-Structure-Definition-Viewpoint-primary-example-1.svg](../diagrams/vp-examples/Physical-Structure-Definition-Viewpoint-primary-example-1.svg)
![Physical-Structure-Definition-Viewpoint-primary-example-2.svg](../diagrams/vp-examples/Physical-Structure-Definition-Viewpoint-primary-example-2.svg)
![Physical-Structure-Definition-Viewpoint-primary-example-3.svg](../diagrams/vp-examples/Physical-Structure-Definition-Viewpoint-primary-example-3.svg)
## Purpose
The Physical Structure Viewpoint is used to model the internal structure of the SOI and to identify the internal system elements making up the SOI. The SOI breakdown structure identifies system elements and finally at the implementation level hardware, software, and mechanics. The SOI breakdown structure determines items that are reused and make-or-buy (COTS) items. The Physical Structure Viewpoint is elaborated for each candidate physical SOI architecture. It provides the basis for further assessment of the architecture candidates by identifying the system elements in each candidate solution.
## Applicability
The Physical Structure Viewpoint supports the “Design Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.5] and contributes to the artifact "System Design Description". 

Furthermore, the Physical Structure Viewpoint supports the "Allocation and Partitioning of Logical Entities to Physical Entities" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.4.2.7].
## Presentation
A block definition diagram (BDD) featuring the physical system block and physical blocks for any kind of physical element, HW or SW elements, the system is composed of. These elements are connected to the system block by means of aggregation relationships. 
Note: Multiple relationships to a kind of element are allowed meaning, that this kind of element is used in several roles.

## Stakeholder
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [What is the physical breakdown of the system?](../concerns.md#_2021x_2_8710274_1674576759117_113432_23531)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* [SAF_P2_PSTD](../stereotypes.md#saf_p2_pstd)
* [SAF_PhysicalElement](../stereotypes.md#saf_physicalelement)
* [SAF_PhysicalHardwareElement](../stereotypes.md#saf_physicalhardwareelement)
* [SAF_PhysicalInternalRole](../stereotypes.md#saf_physicalinternalrole)
* [SAF_PhysicalSoftwareElement](../stereotypes.md#saf_physicalsoftwareelement)
* [SAF_PhysicalSystem](../stereotypes.md#saf_physicalsystem)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
