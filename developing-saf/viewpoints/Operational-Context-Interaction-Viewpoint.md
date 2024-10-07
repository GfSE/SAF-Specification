![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **O4_OCXI** Operational Context Interaction Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Interaction & Collaboration](../../aspects.md#Aspect-Interaction-&-Collaboration)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Context-Interaction-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Operational-Context-Interaction-Viewpoint-primary-example.svg)
## Purpose
The Operational Context Interaction Viewpoint describes single threads of interaction between Operational Performers in an Operational Context on an operational domain level. 
Note: The Operational Interaction Viewpoint may refine an Operational Story.
## Applicability
The Operational Interaction Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 2.3.5.1 § 2.3.5.2] and contributes to the definition of operational scenarios and identification of interface boundaries and interfacing systems.
## Presentation
A sequence diagram featuring the flow of control between Operational Performers of an Operational Context to achieve one outcome of an Operational Story. 
Note: This diagram depicts the sending and receiving of messages between the interacting entities called lifelines where time is represented along the vertical axis. The lifelines representatives are part properties typed by Operational Performers.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?](../../concerns.md#_2021x_2_8710274_1674576759199_457359_23612)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Interaction [UML_Standard_Profile]|[Operational Interaction Scenario](../concept/concepts.md#Operational-Interaction-Scenario)|
|Lifeline [UML_Standard_Profile]|[Operational Scenario Participation](../concept/concepts.md#Operational-Scenario-Participation)|
|Message [UML_Standard_Profile]|[Operational Chronological Message](../concept/concepts.md#Operational-Chronological-Message)|
|[SAF_O4_OCXI](../../stereotypes.md#saf_o4_ocxi)|[Operational Context Interaction Viewpoint](../concept/concepts.md#Operational-Context-Interaction-Viewpoint)|
|[SAF_OperationalContextRole](../../stereotypes.md#saf_operationalcontextrole)|[Operational Context Role](../concept/concepts.md#Operational-Context-Role)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Context Interaction Concept](diagrams/Operational-Context-Interaction-Concept.svg)
## Profile
![Operational Context Interaction Profile](diagrams/Operational-Context-Interaction-Profile.svg)
