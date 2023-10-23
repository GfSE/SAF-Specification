![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Stakeholder Identification Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Taxonomy & Structure](../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Stakeholder-Identification-Viewpoint-primary-example.svg](../diagrams/vp-examples/Stakeholder-Identification-Viewpoint-primary-example.svg)
## Purpose
The Stakeholder Identification Viewpoint of the Operational Domain strives to identify Stakeholders, whose Needs shall be considered during the operation of the intended solution and the execution of the Operational Processes to support the identified Operational Capabilities. 
A Stakeholder identification is distinguishing which parties are classified as Stakeholders in a project, either because they can influence the project or because they are directly affected by the result. A Stakeholder analysis is a process of analyzing individuals, teams, or organizations throughout the project life cycle, grouping them according to their levels of participation, interest, and influence in the project, and determining how best to involve and communicate with each of these Stakeholder groups throughout. During the realization of the Intended Solution additional Stakeholders shall be identified having additional Needs and Requirements, e.g., regarding production of system elements or certain technologies.
## Applicability
The Stakeholder Identification Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.1, §2.3.5.2] and contributes to the Major Stakeholder Identification.
## Presentation
A block definition diagram (BDD) depicting the identified, analysed, and classified Stakeholders and their relations to the Intended Solution.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Project Manager](../stakeholders.md#Project-Manager)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* In which phases of the life cycle is a Stakeholder involved in the project?
* What concerns and rationals does a Stakeholder have?
* What relevant relations and influences exist between Stakeholders?
* Which Stakeholders are relevant to the system and might impose requirements?
* Which external entities (external systems, environments, etc.) does a Stakeholder represent?
* Who are the (Major) Stakeholders involved in the intended solution?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Attribute "concern" of Stakeholder referencing SAF_SystemOfInterestConcern
* [SAF_ContextElementRepresentation](../stereotypes.md#SAF_ContextElementRepresentation)
* [SAF_OperationalStakeholderRepresentation](../stereotypes.md#SAF_OperationalStakeholderRepresentation)
* [SAF_SOV02d_View](../stereotypes.md#SAF_SOV02d_View)
* [SAF_StakeholderRelation](../stereotypes.md#SAF_StakeholderRelation)
* [SAF_Stakeholder](../stereotypes.md#SAF_Stakeholder)
* [SAF_SystemOfInterestConcern](../stereotypes.md#SAF_SystemOfInterestConcern)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
