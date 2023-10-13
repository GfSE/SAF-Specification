![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Stakeholder Identification Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Under Construction](../../diagrams/Under_construction_icon-yellow.svg )[under construction](../../using-saf/maturity.md#under-construction)|
## Example
![Stakeholder-Identification-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Stakeholder-Identification-Viewpoint-primary-example.svg)
## Purpose
The Stakeholder Identification Viewpoint of the Operation Domain strives to identify the Stakeholders, i.e., those Stakeholders, who’s Needs shall be considered during the operation of the intended solution and the execution of the Operational Processes to support the identified Operational Capabilities. A Stakeholder Identification is a process of analyzing individuals, teams, or organizations throughout the project life cycle, grouping them according to their levels of participation, interest, and influence in the project, and determining how best to involve and communicate with each of these Stakeholder groups throughout.
Note: During the realization of the Intended Solution additional Stakeholders shall be identified having additional Needs and Requirements e.g. regarding production of system elements or certain technologies. 
## Applicability
The Stakeholder Identification Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2] and contributes to the Major Stakeholder Identification.
## Presentation
A block definition diagram (BDD) depicting the identified Operational Stakeholders and their relations  towards the Intended Solution.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* How to involve a Stakeholder and to what degree?
* In which life cycles is a Stakeholder involved in the project?
* What are the consequences not considering a Stakeholder?
* What concerns does a Stakeholder have?
* What impact does a Stakeholder have on the project?
* What relevant relations and influences exist between Stakeholders?
* Which Stakeholder are relevant to the system and might impose requirements?
* Which external entities (external systems, roles, environment, etc.) does a Stakeholder represent?
* Who are the Stakeholders involved in the intended solution?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "concern" of SAF_Stakeholder referencing SAF_SystemOfInterestConcern|[SSHhavingCRN](../concept/concepts.md#SSHhavingCRN)|
|[SAF_ContextElementRepresentation](../../stereotypes.md#SAF_ContextElementRepresentation)|[SSHrepresentingSCE](../concept/concepts.md#SSHrepresentingSCE)|
|[SAF_OperationalStakeholderRepresentation](../../stereotypes.md#SAF_OperationalStakeholderRepresentation)|[SSHrepresentingOPR](../concept/concepts.md#SSHrepresentingOPR)|
|[SAF_SOV02d_View](../../stereotypes.md#SAF_SOV02d_View)|[Stakeholder Identification Viewpoint](../concept/concepts.md#Stakeholder-Identification-Viewpoint)|
|[SAF_StakeholderRelation](../../stereotypes.md#SAF_StakeholderRelation)|[SSHrelatedToSSH](../concept/concepts.md#SSHrelatedToSSH)|
|[SAF_Stakeholder](../../stereotypes.md#SAF_Stakeholder)|[System of Interest Stakeholder](../concept/concepts.md#System-of-Interest-Stakeholder)|
|[SAF_SystemOfInterestConcern](../../stereotypes.md#SAF_SystemOfInterestConcern)|[System of Interest Concern](../concept/concepts.md#System-of-Interest-Concern)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Stakeholder Identification Concept](diagrams/Stakeholder-Identification-Concept.svg)
## Profile
![Stakeholder Identification Profile](diagrams/Stakeholder-Identification-Profile.svg)
