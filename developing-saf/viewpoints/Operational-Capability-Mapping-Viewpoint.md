![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **O8_OCYM** Operational Capability Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Capability-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Operational-Capability-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Operational Capability Mapping Viewpoint describes the relationships of Operational Capabilities. The reasoning for Operational Capabilities as support for Operational Stories and the contribution of Operational Processes to Capabilities are described. Operational Capabilities encoded in Stakeholder Requirements are identified.
## Applicability
The Operational Capability Mapping Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 4.1] and contributes to the definition of Operational Capabilities.
## Presentation
A tabular format listing the relationships of Operational Capabilities to Stakeholder Requirements, Operational Stories, and Operational Process Activities.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Portfolio Manager](../../stakeholders.md#Portfolio-Manager)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.](../../concerns.md#_2021x_2_8710274_1674576758591_594647_23070)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_O8_OCYM_Table](../../stereotypes.md#saf_o8_ocym_table)|[Operational Capability Mapping Viewpoint](../concept/concepts.md#Operational-Capability-Mapping-Viewpoint)|
|[SAF_OperationalCapabilityComposition](../../stereotypes.md#saf_operationalcapabilitycomposition)|[OCYcomposedOF](../concept/concepts.md#OCYcomposedOF)|
|[SAF_OperationalCapabilityDependency](../../stereotypes.md#saf_operationalcapabilitydependency)|[OCYdependingON](../concept/concepts.md#OCYdependingON)|
|[SAF_OperationalCapabilityGeneralization](../../stereotypes.md#saf_operationalcapabilitygeneralization)|[OCYspecializedBY](../concept/concepts.md#OCYspecializedBY)|
|[SAF_OperationalCapability](../../stereotypes.md#saf_operationalcapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_OperationalCapabilitySupport](../../stereotypes.md#saf_operationalcapabilitysupport)|[OCYsupportingOSY](../concept/concepts.md#OCYsupportingOSY)|
|[SAF_OperationalPerformerExhibit](../../stereotypes.md#saf_operationalperformerexhibit)|[OPRexhibitingOCY](../concept/concepts.md#OPRexhibitingOCY)|
|[SAF_OperationalPerformer](../../stereotypes.md#saf_operationalperformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
|[SAF_OperationalProcessEnabling](../../stereotypes.md#saf_operationalprocessenabling)|[OPSenablingOCY](../concept/concepts.md#OPSenablingOCY)|
|[SAF_OperationalProcess](../../stereotypes.md#saf_operationalprocess)|[Operational Process](../concept/concepts.md#Operational-Process)|
|[SAF_OperationalStory](../../stereotypes.md#saf_operationalstory)|[Operational Story](../concept/concepts.md#Operational-Story)|
|[SAF_StakeholderRequirementRefinement](../../stereotypes.md#saf_stakeholderrequirementrefinement)|[SHRrefiningOCY](../concept/concepts.md#SHRrefiningOCY)|
|[SAF_StakeholderRequirement](../../stereotypes.md#saf_stakeholderrequirement)|[Stakeholder Requirement](../concept/concepts.md#Stakeholder-Requirement)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Capability Definition Viewpoint](Operational-Capability-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Capability Mapping Concept](diagrams/Operational-Capability-Mapping-Concept.svg)
## Profile
![Operational Capability Mapping Profile](diagrams/Operational-Capability-Mapping-Profile.svg)
