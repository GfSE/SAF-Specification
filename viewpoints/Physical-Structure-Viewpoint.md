![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Structure Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Physical-Structure-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Structure-Viewpoint-primary-example.svg)
## Purpose
The Physical Structure Viewpoint is used to model the internal structure of the SOI and to identify the internal system elements making up the SOI. The SOI breakdown structure identifies system elements and finally on implementation level hardware, software, mechanics. The SOI breakdown structure determines items that are reused and make or buy (COTS) items. The Physical Structure Viewpoint is elaborated for each candidate physical SOI architecture. It provides the basis for further assessment of the architecture candidates by identifying the system elements in each candidate solution.

## Applicability
The Physical Structure Viewpoint supports the "Allocation and Partitioning of Logical Entities to Physical Entities" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4.2.7]. The Physical Structure Viewpoint presents the product breakdown structure of a technical solution for the SOI providing all the identified external interface(s), a structure capable to implement the functionality identified in the logical Viewpoint(s).

The Physical Physical Structure Viewpoint supports the “Design Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 2.3.5.5]. and contributes to the artifact "System Design Description".
 
The Viewpoint is used to identify system elements of the physical architecture.

## Presentation
## Stakeholder
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the physical breakdown of the system?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* [SAF_PhysicalElement](../stereotypes.md#SAF_PhysicalElement)
* [SAF_PhysicalHardwareElement](../stereotypes.md#SAF_PhysicalHardwareElement)
* [SAF_PhysicalInternalRole](../stereotypes.md#SAF_PhysicalInternalRole)
* [SAF_PhysicalSoftwareElement](../stereotypes.md#SAF_PhysicalSoftwareElement)
* [SAF_PhysicalSystem](../stereotypes.md#SAF_PhysicalSystem)
* [SAF_SPV02a_View](../stereotypes.md#SAF_SPV02a_View)
* [](../stereotypes.md#)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
