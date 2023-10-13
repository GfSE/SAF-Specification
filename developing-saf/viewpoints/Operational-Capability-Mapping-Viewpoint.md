![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Operational Capability Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Capability-Mapping-Viewpoint-primary-example.svg](../../vp-examples/Operational-Capability-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Operational Capability Mapping Viewpoint describes the relationships of Operational Capabilities. The reasoning for Operational Capabilities as support for Operational Stories and the contribution of Operational Processes to Capabilities are described. Operational Capabilities encoded in Stakeholder Requirements are identified.
## Applicability
The Operational Capability Mapping Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the definition of Operational Capabilities.
## Presentation
A tabular format listing the relationships of Operational Capabilities to Stakeholder Requirements, Operational Stories, and Operational Process Activities.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Portfolio Manager](../../stakeholders.md#Portfolio-Manager)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_OperationalCapabilityComposition](../../stereotypes.md#SAF_OperationalCapabilityComposition)|[OCYcomposedOF](../concept/concepts.md#OCYcomposedOF)|
|[SAF_OperationalCapabilityDependency](../../stereotypes.md#SAF_OperationalCapabilityDependency)|[OCYdependingON](../concept/concepts.md#OCYdependingON)|
|[SAF_OperationalCapabilityGeneralization](../../stereotypes.md#SAF_OperationalCapabilityGeneralization)|[OCYspecializedBY](../concept/concepts.md#OCYspecializedBY)|
|[SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_OperationalCapabilitySupport](../../stereotypes.md#SAF_OperationalCapabilitySupport)|[OCYsupportingOSY](../concept/concepts.md#OCYsupportingOSY)|
|[SAF_OperationalPerformerExhibit](../../stereotypes.md#SAF_OperationalPerformerExhibit)|[OPRexhibitingOCY](../concept/concepts.md#OPRexhibitingOCY)|
|[SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
|[SAF_OperationalProcessEnabling](../../stereotypes.md#SAF_OperationalProcessEnabling)|[OPSenablingOCY](../concept/concepts.md#OPSenablingOCY)|
|[SAF_OperationalProcess](../../stereotypes.md#SAF_OperationalProcess)|[Operational Process](../concept/concepts.md#Operational-Process)|
|[SAF_OperationalStory](../../stereotypes.md#SAF_OperationalStory)|[Operational Story](../concept/concepts.md#Operational-Story)|
|[SAF_SOV08a_View](../../stereotypes.md#SAF_SOV08a_View)|[Operational Capability Mapping Viewpoint](../concept/concepts.md#Operational-Capability-Mapping-Viewpoint)|
|[SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)|[SHRrefiningOCY](../concept/concepts.md#SHRrefiningOCY)|
|[SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)|[Stakeholder Requirement](../concept/concepts.md#Stakeholder-Requirement)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Capability Viewpoint](Operational-Capability-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Capability Mapping Concept](diagrams/Operational-Capability-Mapping-Concept.svg)
## Profile
![Operational Capability Mapping Profile](diagrams/Operational-Capability-Mapping-Profile.svg)
