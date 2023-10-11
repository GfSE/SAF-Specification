![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Stakeholder Requirement Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Requirement](../../aspects.md#Aspect-Requirement)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Stakeholder-Requirement-Viewpoint-example.svg](../../vp-examples/Stakeholder-Requirement-Viewpoint-example.svg)
## Purpose
The Stakeholder Requirement Viewpoint specifies all properties that the intended solution shall possess or expose from the perspective of the Stakeholders. The Stakeholder Requirement Viewpoint determines capabilities, functions, non-functional properties, and constraints.
## Applicability
The Stakeholder Requirement Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.2] and contributes to the identification of solution constraints.
## Presentation
A tabular format lisiting
* unique requirement ID, text, and attributes,
* traceability reference to justifying model artefacts.
Note: Stakeholder Requirements are to be structured in a way that the Stakeholder behind the Requirement is identifiable. When appropriate, the relationships between identified Stakeholder Requirements are and the justifying model artefacts, Operational Story, Operational Capability, Operational Performer, Operational Process, and Operational Exchange are presented.
* "One Requirement Package for each Stakeholder" is a best-practice modeling rule. A package contains the Requirements specific for one Stakeholder.
* Even if different Stakeholders may have intersecting interests and / or concerns resulting in a similar set of Requirements, each Stakeholder shall have its own set managed in a dedicated Requirement Package. Requirements must not be shared due to their different life cycles. Resolving duplications and conflicts is subject of the requirement analysis resulting in an agreed and consolidated set of System Requirements.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage, and for transport?
* What are the requirements of environmental conditions imposed on the system?
* What are the requirements that a Stakeholder imposes on the system?
* What defines a valid solution towards the customer?
* What is the range of acceptable system performance, i.e. the critical, top-level performance requirements derived from the operational needs?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Package [UML_Standard_Profile]|[SHRimposedBY](../concept/concepts.md#SHRimposedBY)|
|[SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)|[Operational Capability](../concept/concepts.md#Operational-Capability)|
|[SAF_SOV06a_View](../../stereotypes.md#SAF_SOV06a_View)|[Stakeholder Requirement Viewpoint](../concept/concepts.md#Stakeholder-Requirement-Viewpoint)|
|[SAF_Stakeholder](../../stereotypes.md#SAF_Stakeholder)|[System of Interest Stakeholder](../concept/concepts.md#System-of-Interest-Stakeholder)|
|[SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)|[Stakeholder Requirement](../concept/concepts.md#Stakeholder-Requirement)|
|[SAF_StakeholderRequirementImposition](../../stereotypes.md#SAF_StakeholderRequirementImposition)|[SHRimposedBY](../concept/concepts.md#SHRimposedBY)|
|[SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)|[SHRrefiningOSY](../concept/concepts.md#SHRrefiningOSY)|
|[SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)|[SHRrefiningOCY](../concept/concepts.md#SHRrefiningOCY)|
|[SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)|[SHRrefiningCRN](../concept/concepts.md#SHRrefiningCRN)|
|[SAF_SystemOfInterestConcern](../../stereotypes.md#SAF_SystemOfInterestConcern)|[System of Interest Concern](../concept/concepts.md#System-of-Interest-Concern)|
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Identification Viewpoint](Stakeholder-Identification-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Stakeholder Requirement Concept](diagrams/Stakeholder-Requirement-Concept.svg)
## Profile
![Stakeholder Requirement Profile](diagrams/Stakeholder-Requirement-Profile.svg)
