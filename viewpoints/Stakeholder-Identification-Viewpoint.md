![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **O2_STID** Stakeholder Identification Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Stakeholder-Identification-Viewpoint-primary-example.svg](../diagrams/vp-examples/Stakeholder-Identification-Viewpoint-primary-example.svg)
## Purpose
The Stakeholder Identification Viewpoint of the operational domain strives to identify Stakeholders, who's concerns shall be considered, and adequatley adressed by the intended solution. Relations 
## Applicability
The Stakeholder Identification Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.1, §2.3.5.2] and contributes to the major Stakeholder identification.
## Presentation
A block definition diagram (BDD) depicting the identified, analysed, and classified Stakeholders, their interrelaions and their relations to the Intended Solution. Relations to represented Operational Performers shall also be shown.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [In which phases of the life cycle is a Stakeholder involved in the project?](../concerns.md#_2021x_2_8710274_1674576758728_957718_23218)
* [What concerns and rationals does a Stakeholder have?](../concerns.md#_2021x_2_8710274_1674576759190_739382_23597)
* [What relevant relations and influences exist between Stakeholders?](../concerns.md#_2021x_2_8710274_1674576759059_36560_23481)
* [Which Stakeholders are relevant to the system and might impose requirements?](../concerns.md#_2021x_2_8710274_1674576758881_572143_23359)
* [Which external entities (external systems, environments, etc.) does a Stakeholder represent?](../concerns.md#_2021x_2_8710274_1674576758668_120660_23139)
* [Who are the (Major) Stakeholders involved in the intended solution?](../concerns.md#_2021x_2_8710274_1674576759083_315449_23499)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Attribute "concern" of Stakeholder referencing SAF_SystemOfInterestConcern
* [SAF_ContextElementRepresentation](../stereotypes.md#saf_contextelementrepresentation)
* [SAF_O2_STID](../stereotypes.md#saf_o2_stid)
* [SAF_StakeholderRelation](../stereotypes.md#saf_stakeholderrelation)
* [SAF_StakeholderRepresenting](../stereotypes.md#saf_stakeholderrepresenting)
* [SAF_Stakeholder](../stereotypes.md#saf_stakeholder)
* [SAF_SystemOfInterestConcern](../stereotypes.md#saf_systemofinterestconcern)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
