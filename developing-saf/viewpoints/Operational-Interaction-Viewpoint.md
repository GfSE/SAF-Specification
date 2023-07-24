![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : Operational Interaction Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Interaction & Collaboration](../../aspects.md#Aspect-Interaction-&-Collaboration)|![Under Construction](../../diagrams/Under_construction_icon-yellow.svg )[under construction](../../using-saf/maturity.md#under-construction)|
## Example
*none*
## Purpose
The Operational Interaction Viewpoint defines single threads of interaction between roles of Operational Performers in an Operational Context on operational level. The Operational Interaction Viewpoint refines an Operational Story.
## Applicability
The Operational Interaction Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2] and contributes to the definition of operational scenario(s).
## Stakeholder
## Concern
* What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?
* What validation scenarios have to be carried out to check on the solution validity?
## Presentation
The Operational Interaction shows in a sequence diagram the flow of control or data (Operational Exchange) between Operational Roles of an Operational Context to achieve one outcome of an Operational Story. This diagram represents the sending and receiving of messages or data between the Operational Roles along with the executed Operational Activities.

## Profile Model Reference
|Stereotype | realized Concept|
|---|---|
|Interaction [UML_Standard_Profile]|[Operational Interaction Scenario](../concept/concepts.md#Operational-Interaction-Scenario)|
|Lifeline [UML_Standard_Profile]|[Operational Scenario Participant](../concept/concepts.md#Operational-Scenario-Participant)|
|Message [UML_Standard_Profile]|[Operational Chronological Message](../concept/concepts.md#Operational-Chronological-Message)|
|[SAF_OperationalRole](../../stereotypes.md#SAF_OperationalRole)|[Operational Context Performer Constituent](../concept/concepts.md#Operational-Context-Performer-Constituent)|
|[SAF_SOV04a_View](../../stereotypes.md#SAF_SOV04a_View)|[Operational Interaction Viewpoint](../concept/concepts.md#Operational-Interaction-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Interaction Concept](diagrams/Operational-Interaction-Concept.svg)
## Profile
![Operational Interaction Profile](diagrams/Operational-Interaction-Profile.svg)
