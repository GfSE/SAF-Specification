![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F4_SCXI** System Context Interaction Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Interaction & Collaboration](../../aspects.md#Aspect-Interaction-&-Collaboration)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Context-Interaction-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Context-Interaction-Viewpoint-primary-example.svg)
## Purpose
The System Context Interaction Viewpoint describes the System external behavior based on the exchange between Logical SOI and Logical Context Elements Usage in a given System Context. It depicts the sequence of interactions between the Logical SOI, the Context Elements and the exchanged Domain Item Kinds needed to accomplish a given System Process. 
Note: The System Context Interaction Viewpoint may refine a System Use Case.
## Applicability
The System Context Interaction Viewpoint supports the "prepare for requirement definition" activity part of the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the identification of expected interactions with systems external to the SOI.
## Presentation
A sequence diagram featuring the flow of control between SOI and Context Elements Roles of a System Context to achieve one outcome of a System Use Case. 
Note: This diagram depicts the sending and receiving of messages between the interacting entities called lifelines, where time is represented along the vertical axis. The lifelines representatives are part properties typed by a System Context Elements.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Operator](../../stakeholders.md#Operator)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
* [User](../../stakeholders.md#User)
## Concern
* [How is the system being used or utilized and interacting with other external systems to satisfy user needs?](../../concerns.md#_2021x_2_8710274_1674576758841_451500_23327)
* [What is the necessary response time for an interface or a service?](../../concerns.md#_2021x_2_8710274_1674576759095_626726_23511)
* [What is the sequence of interactions among the system and context elements on concpetual level?](../../concerns.md#_2021x_2_8710274_1697718624828_512543_29114)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Interaction [UML_Standard_Profile]|[System Context Interaction Scenario](../concept/concepts.md#System-Context-Interaction-Scenario)|
|Lifeline [UML_Standard_Profile]|[System Context Scenario Participation](../concept/concepts.md#System-Context-Scenario-Participation)|
|Message [UML_Standard_Profile]|[System Context Chronological Message](../concept/concepts.md#System-Context-Chronological-Message)|
|[SAF_F4_SCXI](../../stereotypes.md#SAF_F4_SCXI)|[System Context Interaction Viewpoint](../concept/concepts.md#System-Context-Interaction-Viewpoint)|
|[SAF_LogicalContext](../../stereotypes.md#SAF_LogicalContext)|[Logical System Context](../concept/concepts.md#Logical-System-Context)|
|[SAF_LogicalContextRole](../../stereotypes.md#SAF_LogicalContextRole)|[Logical Context Element Role](../concept/concepts.md#Logical-Context-Element-Role)|
|[SAF_LogicalContextRole](../../stereotypes.md#SAF_LogicalContextRole)|[Logical SOI Role](../concept/concepts.md#Logical-SOI-Role)|
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Context Interaction Concept](diagrams/System-Context-Interaction-Concept.svg)
## Profile
![System Context Interaction Profile](diagrams/System-Context-Interaction-Profile.svg)
