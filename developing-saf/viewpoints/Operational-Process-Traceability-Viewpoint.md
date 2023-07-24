![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : Operational Process Traceability Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Mapping & Crossreference](../../aspects.md#Aspect-Mapping-&-Crossreference)|![Released](../../diagrams/Symbol_confirmed.svg.png )[released](../../using-saf/maturity.md#released)|
## Example
![SAR and FDN Capability Traceability Table](../../diagrams/SAR-and-FDN-Capability-Traceability-Table.svg)
## Purpose
The Operational Process Traceability Viewpoint describes the relationships of Operational Processes. The reasoning for Operational Processes from Operational Stories and their contribution to Capabilities is described. The assignment of Operational Processes to Operational Performers is captured.
## Applicability
The Operational Process Traceability Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the definition of operational scenarios.
## Stakeholder
## Concern
* Show in a concise manner the relationships from operational process to operational story and to operational performer.
## Presentation
The relationships of Operational Process Activities to Operational Stories, and to Operational Performers are represented in a table.

## Profile Model Reference
|Stereotype | realized Concept|
|---|---|
|[SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
|[SAF_OperationalProcess](../../stereotypes.md#SAF_OperationalProcess)|[Operational Process](../concept/concepts.md#Operational-Process)|
|[SAF_OperationalProcessContribution](../../stereotypes.md#SAF_OperationalProcessContribution)|[OPScontributingToOCY](../concept/concepts.md#OPScontributingToOCY)|
|[SAF_OperationalProcessRefinement](../../stereotypes.md#SAF_OperationalProcessRefinement)|[OPSrefiningOSY](../concept/concepts.md#OPSrefiningOSY)|
|[SAF_OperationalStory](../../stereotypes.md#SAF_OperationalStory)|[Operational Story](../concept/concepts.md#Operational-Story)|
|[SAF_SOV08b_View](../../stereotypes.md#SAF_SOV08b_View)|[Operational Process Traceability Viewpoint](../concept/concepts.md#Operational-Process-Traceability-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Process Traceability Concept](diagrams/Operational-Process-Traceability-Concept.svg)
## Profile
![Operational Process Traceability Profile](diagrams/Operational-Process-Traceability-Profile.svg)
