![System Architecture Framework](../diagrams/Logo_SAF.png)
# System Capability Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Structure](../aspects.md#Aspect-Structure)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS Capability Definition](../diagrams/FFDS-Capability-Definition.svg)
## Purpose
The System Capability Viewpoint defines a taxonomy of Capabilities including composition, specialization, and dependency relationships between System Capabilities.
## Applicability
The System Capability Viewpoint supports the "Requirement Definition" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§] defining System Capabilities at a system level . The System Capability Viewpoint contributes to Requirements definition.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What are the capabilities that are supported by the system?
## Presentation
A BDD featuring System Capabilities and their composition, specialization and dependency relationships. The relationship to operational capabilities shall be shown if applicable.

A Table featuring system capabilities, and their composition specialisation and dependency relationships, as well as relations to operational capabilities.

## Profile Model Reference
* [SAF_SFV02b_View](../stereotypes.md#SAF_SFV02b_View)
* [SAF_SystemCapability](../stereotypes.md#SAF_SystemCapability)
* [SAF_SystemCapabilityComposition](../stereotypes.md#SAF_SystemCapabilityComposition)
* [SAF_SystemCapabilityDependency](../stereotypes.md#SAF_SystemCapabilityDependency)
* [SAF_SystemCapabilityGeneralization](../stereotypes.md#SAF_SystemCapabilityGeneralization)
* [SAF_SystemCapabilityMapping](../stereotypes.md#SAF_SystemCapabilityMapping)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Capability Viewpoint](Operational-Capability-Viewpoint.md)
* [System UseCase Viewpoint](System-UseCase-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
