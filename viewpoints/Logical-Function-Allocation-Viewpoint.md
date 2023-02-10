![System Architecture Framework](../diagrams/Logo_SAF.png)
# Logical Function Allocation Viewpoint
*Domain:* [Logical](../domains.md#Domain-Logical) *Aspect:* [Mapping & Crossreference](../aspects.md#Aspect-Mapping-&-Crossreference)
## Example
![FFDS Context Definition Allocation of Usage](../diagrams/FFDS-Context-Definition-Allocation-of-Usage.svg)
## Purpose
The Logical Function Allocation Viewpoint specifies the allocation of Function(s) to the logical SOI element(s).
## Applicability
The Function Allocation Viewpoint supports the "System Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015  .
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which functions/functional requirements are assigned to a logical item?
## Presentation
A  Function  Allocation Matrix featuring
* the call behavior action representing usage of Function(s)
* the part property(s) representing usage of logical SOI Element(s)

## Profile Model Reference
* Allocate [SysML Profile]
* Property [UML_Standard_Profile]
* [SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)
* [SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)
## Input from other Viewpoints
### Required Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
