![System Architecture Framework](../diagrams/Logo_SAF.png)
# SAF User Documentation : Stakeholder Requirement Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../domains.md#Domain-Operational)|[Requirement](../aspects.md#Aspect-Requirement)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![Stakeholder Requirement Definition Table](../diagrams/Stakeholder-Requirement-Definition-Table.svg)
## Purpose
The Stakeholder Requirement Viewpoint specifies all properties that the intended solution shall possess or expose from the perspective of the Stakeholders. The Stakeholder Requirement Viewpoint determines capabilities, functions, non-functional properties, and constraints.
## Applicability
The Stakeholder Requirement Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.2] and contributes to the identification of solution constraints.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the requirements of environmental conditions imposed on the system?
* What are the requirements that a Stakeholder imposes on the system?
* What defines a valid solution towards the customer?
* What is the range of acceptable system performance, i.e. the critical, top-level performance requirements derived from the operational needs?
## Presentation
Stakeholder requirements are to be structured in a way that the Stakeholder behind the Requirement is identifiable. When appropriate, the relationships between identified Stakeholder Requirements are and the justifying model artefacts, Operational Story, Operational Capability, Operational Performer, Operational Process, and Operational Exchange are presented.
Note 1: "One Requirement Package for each Stakeholder" is a best-practice modeling rule. A package contains the Requirements specific for one Stakeholder.
Note 2: Even if different Stakeholders may have intersecting interests and / or concerns resulting in a similar set of Requirements, each Stakeholder shall have its own set managed in a dedicated Requirement Package. Requirements must not be shared due to their different life cycles. Resolving duplications and conflicts is subject of the requirement analysis resulting in an agreed and consolidated set of System Requirements.

## Profile Model Reference
* Package [UML_Standard_Profile]
* [SAF_OperationalCapability](../stereotypes.md#SAF_OperationalCapability)
* [SAF_SOV06a_View](../stereotypes.md#SAF_SOV06a_View)
* [SAF_Stakeholder](../stereotypes.md#SAF_Stakeholder)
* [SAF_StakeholderRequirement](../stereotypes.md#SAF_StakeholderRequirement)
* [SAF_StakeholderRequirementImposition](../stereotypes.md#SAF_StakeholderRequirementImposition)
* [SAF_StakeholderRequirementRefinement](../stereotypes.md#SAF_StakeholderRequirementRefinement)
* [SAF_StakeholderRequirementRefinement](../stereotypes.md#SAF_StakeholderRequirementRefinement)
* [SAF_StakeholderRequirementRefinement](../stereotypes.md#SAF_StakeholderRequirementRefinement)
* [SAF_SystemOfInterestConcern](../stereotypes.md#SAF_SystemOfInterestConcern)
## Input from other Viewpoints
### Required Viewpoints
* [Stakeholder Identification Viewpoint](Stakeholder-Identification-Viewpoint.md)
### Recommended Viewpoints
* [Operational Story Viewpoint](Operational-Story-Viewpoint.md)
* [Operational Performer Viewpoint](Operational-Performer-Viewpoint.md)
