![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **O2_OCYD** Operational Capability Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Capability-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Operational-Capability-Definition-Viewpoint-primary-example.svg)
## Purpose
The Operational Capability Definition Viewpoint defines a taxonomy of Capabilities from a Stakeholder’s perspective including composition, specialization, and dependency relationships between Operational Capabilities.
## Applicability
The Operational Capability Definition Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 2.3.5.1] defining Capabilities at an operational level (e.g., business or mission profile, and operational scenarios). The Operational Capability Viewpoint contributes to the problem or opportunity statement.
## Presentation
A block definition diagram (BDD) featuring Operational Capabilities, their composition, specialization, and dependency relationships.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Portfolio Manager](../../stakeholders.md#Portfolio-Manager)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [What operational capabilities are defined?](../../concerns.md#_2021x_2_8710274_1674479775616_727128_23367)
* [What operational capabilities are required for each phase and mode of operation?](../../concerns.md#_2021x_2_8710274_1674576759229_963784_23628)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_O2_OCYD](../../stereotypes.md#saf_o2_ocyd)|[Operational Capability Definition Viewpoint](../concept/concepts.md#Operational-Capability-Definition-Viewpoint)|
|[SAF_OperationalCapabilityComposition](../../stereotypes.md#saf_operationalcapabilitycomposition)|[OCYcomposedOF](../concept/concepts.md#OCYcomposedOF)|
|[SAF_OperationalCapabilityDependency](../../stereotypes.md#saf_operationalcapabilitydependency)|[OCYdependingON](../concept/concepts.md#OCYdependingON)|
|[SAF_OperationalCapabilityGeneralization](../../stereotypes.md#saf_operationalcapabilitygeneralization)|[OCYspecializedBY](../concept/concepts.md#OCYspecializedBY)|
|[SAF_OperationalCapability](../../stereotypes.md#saf_operationalcapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Capability Definition Concept](diagrams/Operational-Capability-Definition-Concept.svg)
## Profile
![Operational Capability Definition Profile](diagrams/Operational-Capability-Definition-Profile.svg)
