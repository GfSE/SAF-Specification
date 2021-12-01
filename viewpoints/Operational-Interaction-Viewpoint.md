<div align="right">SAF_FFDS#245,SAF_Cameo_Profile#345</div>

# Operational Interaction Viewpoint
*Domain:* **Operational** *Aspect:* **Interaction and Collaboration**
## Example
*none*
## Purpose
The Operational Interaction Viewpoint defines single threads of interaction between roles of Operational Performer(s) in an Operational Context on operational level. The Operational Interaction Viewpoint refines an Operational Story.
## Applicability
The Operational Interaction Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2] and contributes to the definition of operational scenario(s).
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What validation scenarios have to be carried out to check on the solution validity?
* What possible threads of Operational Process Activity(s) have to be carried out to achieve the Operational Story main and alternative goals?
## Presentation
The Operational Interaction shows in a sequence diagram the flow of control or data (Operational Exchange) between Operational Role(s) of an Operational Context to achieve one outcome of an Operational Story. This diagram represents the sending and receiving of messages or data between the Operational Role(s) along with the executed Operational Activity(s).

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|Interaction||[Operational Interaction Scenario](../concepts.md#Operational-Interaction-Scenario)|
|[SAF_OV04a_OperationalInteractionDiagram](../stereotypes.md#SAF_OV04a_OperationalInteractionDiagram)|The SAF Operational Interaction Diagram contains a Sequence Diagram. It is a refinement of an Operational Story.
It contains
* lifelines typed by roles from the Operational Context 
* messages representing the sequence of interactions between the roles of an Operational Context|[Operational Interaction Viewpoint](../concepts.md#Operational-Interaction-Viewpoint)|
|Lifeline||[Operational Scenario Participant](../concepts.md#Operational-Scenario-Participant)|
|Message||[Operational Chronological Message](../concepts.md#Operational-Chronological-Message)|
|[SAF_OperationalRole](../stereotypes.md#SAF_OperationalRole)|[tbd]|[Operational Context Constituent](../concepts.md#Operational-Context-Constituent)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Exchange Viewpoint](Operational-Context-Exchange-Viewpoint.md)
### Recommended Viewpoints
*none*
