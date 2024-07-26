![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **O8_OPRM** Operational Process Mapping Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Traceability & Mapping](../../aspects.md#Aspect-Traceability-&-Mapping)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Process-Mapping-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Operational-Process-Mapping-Viewpoint-primary-example.svg)
## Purpose
The Operational Process Mapping Viewpoint describes the relationships of Operational Processes. The reasoning for Operational Processes from Operational Stories and their contribution to Capabilities is described. The assignment of Operational Processes to Operational Performers is captured.
## Applicability
The Operational Process Mapping Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the definition of operational scenarios.
## Presentation
A tabular format listing the relationships of Operational Process Activities to Operational Capabilities, Operational Stories, and Operational Performers.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Portfolio Manager](../../stakeholders.md#Portfolio-Manager)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Show in a concise manner the relationships from operational process to operational story and to operational performer.](../../concerns.md#_2021x_2_8710274_1674576758928_485242_23392)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_O8_OPRM_Table](../../stereotypes.md#saf_o8_oprm_table)|[Operational Process Mapping Viewpoint](../concept/concepts.md#Operational-Process-Mapping-Viewpoint)|
|[SAF_OperationalCapability](../../stereotypes.md#saf_operationalcapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_OperationalPerformer](../../stereotypes.md#saf_operationalperformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
|[SAF_OperationalProcessEnabling](../../stereotypes.md#saf_operationalprocessenabling)|[OPSenablingOCY](../concept/concepts.md#OPSenablingOCY)|
|[SAF_OperationalProcess](../../stereotypes.md#saf_operationalprocess)|[Operational Process](../concept/concepts.md#Operational-Process)|
|[SAF_OperationalProcessRefinement](../../stereotypes.md#saf_operationalprocessrefinement)|[OPSrefiningOSY](../concept/concepts.md#OPSrefiningOSY)|
|[SAF_OperationalStory](../../stereotypes.md#saf_operationalstory)|[Operational Story](../concept/concepts.md#Operational-Story)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Process Mapping Concept](diagrams/Operational-Process-Mapping-Concept.svg)
## Profile
![Operational Process Mapping Profile](diagrams/Operational-Process-Mapping-Profile.svg)
