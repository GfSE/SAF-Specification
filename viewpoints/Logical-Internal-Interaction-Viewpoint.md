![System Architecture Framework](../diagrams/Logo_SAF.png)
# Logical Internal Interaction Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../domains.md#Domain-Logical)|[Interaction & Collaboration](../aspects.md#Aspect-Interaction-&-Collaboration)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS Internal Interaction](../diagrams/FFDS-Internal-Interaction.svg)
## Purpose
The Logical Internal Interaction Viewpoint describes System internal behavior based on the exchange between the Logical SOI Elements Usage. It depicts the sequence of interactions between the Logical SOI Elements and the Exchanged Data Items needed to accomplish a given System Partial Function.
## Applicability
The Logical Internal Interaction Viewpoint supports the "Develop Architecture Viewpoints" and the "Develop Models and Views of Candidate Architectures" activity included in the "Architecture Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the artifact "System Architecture Description".
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Operator](../stakeholders.md#Operator)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* How do internal system elements interact with each other to provide the system function or service?
* How does the system or a system element interact with the test environment?
* What additional information the system or a system element needs to generate to enable testing?
* What are the connections between the major system elements?
* What are the items exchanged between the logical system elements during the interaction?
* What is the necessary response time for an interface or a service?
* What kind of information is exchanged and processed within the system?
## Presentation
The Logical Internal Interaction Viewpoint is modeled as a sequence diagram. It describes the flow of control between logical components of the SOI.This diagram represents the sending and receiving of messages between the interacting entities called lifelines where time is represented along the vertical axis. The elements on the lifelines are part properties typed by logical system elements.

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
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)