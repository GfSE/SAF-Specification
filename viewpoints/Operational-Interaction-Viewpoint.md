![System Architecture Framework](../diagrams/Logo_SAF.png)
# Operational Interaction Viewpoint
*Domain:* **Operational** *Aspect:* **Interaction & Collaboration**
## Example
*none*
## Purpose
The Operational Interaction Viewpoint defines single threads of interaction between roles of Operational Performer(s) in an Operational Context on operational level. The Operational Interaction Viewpoint refines an Operational Story.
## Applicability
The Operational Interaction Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2] and contributes to the definition of operational scenario(s).
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?
* What validation scenarios have to be carried out to check on the solution validity?
## Presentation
The Operational Interaction shows in a sequence diagram the flow of control or data (Operational Exchange) between Operational Role(s) of an Operational Context to achieve one outcome of an Operational Story. This diagram represents the sending and receiving of messages or data between the Operational Role(s) along with the executed Operational Activity(s).

## Profile Model Reference
* Interaction [UML_Standard_Profile]
* Lifeline [UML_Standard_Profile]
* Message [UML_Standard_Profile]
* [SAF_OperationalRole](../stereotypes.md#SAF_OperationalRole)
* [SAF_SOV04a_View](../stereotypes.md#SAF_SOV04a_View)
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
