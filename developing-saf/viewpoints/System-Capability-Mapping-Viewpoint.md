![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F8_SCYM** System Capability Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Capability-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Capability-Mapping-Viewpoint-primary-example.svg)
## Purpose
The System Capability Mapping Viewpoint describes the relationships of System Capabilities. The reasoning for System Capabilities as support for System Use Cases and the contribution of System Processes to Capabilities are described. Furthermore, the mapping of System Capabilities to Operational Capabilities are identified.
## Applicability
The System Capability Mapping Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" and "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.2 & §4.3] and contributes to the identification of System Functions, and definition of System Requirements.
## Presentation
A tabular format listing the relationships of System Capabilities to Operational Capabilities, System Use Cases, System Process Activities, and System Requirements.

## Stakeholder
## Concern
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_F8_SCYM_Table](../../stereotypes.md#SAF_F8_SCYM_Table)|[System Capability Mapping Viewpoint](../concept/concepts.md#System-Capability-Mapping-Viewpoint)|
|[SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)|[Stakeholder Requirement](../concept/concepts.md#Stakeholder-Requirement)|
|[SAF_SystemCapabilityComposition](../../stereotypes.md#SAF_SystemCapabilityComposition)|[SCYcomposedOF](../concept/concepts.md#SCYcomposedOF)|
|[SAF_SystemCapabilityDependency](../../stereotypes.md#SAF_SystemCapabilityDependency)|[SCYdependingON](../concept/concepts.md#SCYdependingON)|
|[SAF_SystemCapabilityEnabling](../../stereotypes.md#SAF_SystemCapabilityEnabling)|[SCYenablingOCY](../concept/concepts.md#SCYenablingOCY)|
|[SAF_SystemCapabilityGeneralization](../../stereotypes.md#SAF_SystemCapabilityGeneralization)|[SCYspecializedBY](../concept/concepts.md#SCYspecializedBY)|
|[SAF_SystemCapabilitySupport](../../stereotypes.md#SAF_SystemCapabilitySupport)|[SCYsupportingSUC](../concept/concepts.md#SCYsupportingSUC)|
|[SAF_SystemCapability](../../stereotypes.md#SAF_SystemCapability)|[System Capability](../concept/concepts.md#System-Capability)|
|[SAF_SystemFunctionSupport](../../stereotypes.md#SAF_SystemFunctionSupport)|[SFNsupportingSCY](../concept/concepts.md#SFNsupportingSCY)|
|[SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)|[System Function](../concept/concepts.md#System-Function)|
|[SAF_SystemProcessEnabling](../../stereotypes.md#SAF_SystemProcessEnabling)|[SPSenablingSCY](../concept/concepts.md#SPSenablingSCY)|
|[SAF_SystemProcess](../../stereotypes.md#SAF_SystemProcess)|[System Process](../concept/concepts.md#System-Process)|
|[SAF_SystemRequirement](../../stereotypes.md#SAF_SystemRequirement)|[System Requirement](../concept/concepts.md#System-Requirement)|
|[SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)|[System Use Case](../concept/concepts.md#System-Use-Case)|
## Input from other Viewpoints
### Required Viewpoints
* [System Capability Definition Viewpoint](System-Capability-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Capability Definition Viewpoint](Operational-Capability-Definition-Viewpoint.md)
* [System Use Case Viewpoint](System-Use-Case-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Capability Mapping Concept](diagrams/System-Capability-Mapping-Concept.svg)
## Profile
![System Capability Mapping Profile](diagrams/System-Capability-Mapping-Profile.svg)
