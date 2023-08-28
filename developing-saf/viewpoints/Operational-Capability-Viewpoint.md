![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : Operational Capability Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../../diagrams/Symbol_confirmed.svg.png )[released](../../using-saf/maturity.md#released)|
## Example
![SAR and FDN Capability Definition](../../diagrams/SAR-and-FDN-Capability-Definition.svg)
## Purpose
The Operational Capability Viewpoint defines a taxonomy of Capabilities from a Stakeholder’s perspective including composition, specialization, and dependency relationships between Operational Capabilities.
## Applicability
The Operational Capability Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] defining Capabilities at an operational level (e.g., business or mission profile, and operational scenarios). The Operational Capability Viewpoint contributes to the problem or opportunity statement.
## Stakeholder
* [Customer](../../stakeholders.md#Customer)
* [Portfolio Manager](../../stakeholders.md#Portfolio-Manager)
## Concern
* What operational Capabilities are required for each phase and mode of operation?
* What operational capabilities are defined?
## Presentation
A block definition diagram (BDD) featuring Operational Capabilities, their composition, specialization, and dependency relationships.

## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_OperationalCapabilityComposition](../../stereotypes.md#SAF_OperationalCapabilityComposition)|[OCYcomposedOF](../concept/concepts.md#OCYcomposedOF)|
|[SAF_OperationalCapabilityDependency](../../stereotypes.md#SAF_OperationalCapabilityDependency)|[OCYdependingON](../concept/concepts.md#OCYdependingON)|
|[SAF_OperationalCapabilityGeneralization](../../stereotypes.md#SAF_OperationalCapabilityGeneralization)|[OCYspecializedBY](../concept/concepts.md#OCYspecializedBY)|
|[SAF_SOV02c_View](../../stereotypes.md#SAF_SOV02c_View)|[Operational Capability Viewpoint](../concept/concepts.md#Operational-Capability-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Capability Concept](diagrams/Operational-Capability-Concept.svg)
## Profile
![Operational Capability Profile](diagrams/Operational-Capability-Profile.svg)
