![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Function Allocation Viewpoint
*Domain:* [Physical](../domains.md#Domain-Physical) *Aspect:* [Mapping & Crossreference](../aspects.md#Aspect-Mapping-&-Crossreference)
## Example
*none*
## Purpose
The Physical Function Allocation Viewpoint specifies the allocation of Function(s) to the Physical SOI Element(s).
## Applicability
The Physical Function Allocation Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the allocation of functions to the physical architecture?
* Which functions and services need to be implemented in SW?
* Which functions need to be realized by HW?
## Presentation
A  Physical Function Allocation Matrix featuring
* the call behavior action representing usage of Function(s)
* the part property(s) representing usage of Physical SOI Element(s)

## Profile Model Reference
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
## Input from other Viewpoints
### Required Viewpoints
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
* [Logical Function Allocation Viewpoint](Logical-Function-Allocation-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
