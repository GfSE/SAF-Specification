![System Architecture Framework](../diagrams/Logo_SAF.png)
# Functional Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Interface](../aspects.md#Aspect-Interface)|![Proposed](../diagrams/Under_construction_icon-red.svg )[proposed](../using-saf/maturity.md#proposed)|
## Example
![SOI Interface Definitions](../diagrams/SOI-Interface-Definitions.svg)
## Purpose
The Functional Interface Definition Viewpoint provides definitions used on functional Interfaces used in the system context. It allows to structure interface definitions to improve clarity and managability.
## Applicability
The Functional Interface Definition Viewpoint supports The System Context Definition Viewpoint supports the "Prepare for Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the system Functional Interface Identification.
## Stakeholder
## Concern
## Presentation
A BDD featuring Interface Blocks with ports and flow properties. If ports are used they shall be proxy ports, and be typed by interface blocks.

A Table featuringt interface blocks and their ports and flow properties.

## Profile Model Reference
* FlowProperty [SysML Profile]
* InterfaceBlock [SysML Profile]
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_SFV05a_View](../stereotypes.md#SAF_SFV05a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
