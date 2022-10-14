<div align="right">SAF_FFDS#311,SAF_Cameo_Profile#397</div>

# System Context Exchange Viewpoint 
*Domain:* **Functional** *Aspect:* **Context**
## Example
![FFDS Context Exchange](../diagrams/FFDS-Context-Exchange.svg)
## Purpose
The System Context Exchange Viewpoint serves for the identification and definition of External Interface(s) of the SOI used for the interaction to System’s Context, such as User(s), External System(s) and other External Entity(s) defined in the specific context of the SOI. The System Context Exchange Viewpoint
* identifies System Interface(s) on a functional level
* states to which External Entity(s) the System Interface(s) are connected to
* assigns Interface Document(s) to System Interface(s)
* defines the usage of interface(s), e.g. if only a subset of the interface is used
## Applicability
The System Context Exchange Viewpoint supports the "Prepare for Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the System Functional Interface identification.
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* What are the item(s) exchanged at the boundary of the SOI with External Entity(s)?
* What are the functional interface(s) of the SOI?
* How does the SOI or a SOI element interact with the test environment?
* Which information is exchanged between the SOI and External Entity(s)?
* What are the Interface Requirement(s) imposed on the SOI?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* How is the System interacting with the identified external entities?
## Presentation
An IBD featuring the SOI, the System Context Element(s) and Connector(s) for each identified Interface from SOI to the respective Context Element(s). An Interface is a connection resource for hooking on the SOI to other Context Element(s). Item flow(s) are defined for each exchange on the identified Interface. Connectors/ports may contain reference to the Interface Document(s) if applicable.
Note: more than one IBD focused on different areas of interest may be used in oder to keep the view comprehensive. Depending on the Stakeholder Concern(s) the Item Exchange information might be suppressed.

## Profile Model Reference
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
