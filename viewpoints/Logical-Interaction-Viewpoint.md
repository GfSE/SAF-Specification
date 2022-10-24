<div align="right">SAF_FFDS#313,SAF_Cameo_Profile#404</div>

# Logical Interaction Viewpoint
*Domain:* **Logical** *Aspect:* **Interaction and Collaboration**
## Example
![FFDS Internal Interaction](../diagrams/FFDS-Internal-Interaction.svg)
## Purpose
The Logical Interaction Viewpoint describes system internal behavior based on the exchange between the logical component(s) of the SOI. It depicts the sequence of interactions between the logical components and the exchanged data item(s) needed to accomplish a given system function.
## Applicability
The Logical Interaction Viewpoint supports the "Develop Architecture Viewpoints" and the "Develop Models and Views of Candidate Architectures" activity included in the "Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the artifact "System Architecture Description".
Note:
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Mechanic Developer](../stakeholders.md#Mechanic-Developer)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What kind of information is exchanged and processed within the system?
* What is the necessary response time for an interface or a service?
* How do internal system elements interact with each other to provide the system function or service?
* What are the items exchanged between the logical system elements during the interaction?
* How does the system or a system element interact with the test environment?
* What additional information the system or a system element needs to generate to enable testing?
## Presentation
The Logical Interaction Viewpoint is modeled as a sequence diagram. It describes the flow of control between logical components of the SOI.This diagram represents the sending and receiving of messages between the interacting entities called lifelines where time is represented along the vertical axis. The elements on the lifelines are part properties typed by logical system elements.

## Profile Model Reference
* Association [UML_Standard_Profile]
* Interaction [UML_Standard_Profile]
* Lifeline [UML_Standard_Profile]
* Message [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* [SAF_SLV04a_View](../stereotypes.md#SAF_SLV04a_View)
## Input from other Viewpoints
### Required Viewpoints
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
