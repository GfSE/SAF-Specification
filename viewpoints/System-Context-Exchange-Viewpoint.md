<div align="right">SAF_FFDS#244,SAF_Cameo_Profile#343</div>

# System Context Exchange Viewpoint
*Domain:* **Functional** *Aspect:* **Context**
## Example
![FFDS Context Exchange](../diagrams/FFDS-Context-Exchange.svg)
## Purpose
The System Context Exchange Viewpoint serves for the identification and definition of External Interface(s) of the SOI used for the interaction to System’s Context, such as User(s), External System(s) and other External Entity(s) defined in the specific context of the SOI. The System Context Exchange Viewpoint
* identifies System Interface(s) on a functional level
* states to which External Entity(s) the System Interface(s) are connected to
* assigns Interface Document(s) to System Interface(s)
* defines the usage of interface(s), e.g. if only a subset of the interlace is used
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
* What are the item(s) exchanged at the boundary of the SOI with external entity(s)?
* What kind of physical item(s) (energy, material, information) are exchanged between the SOI and external entity(s)?
* What are the functional interface(s) of the SOI?
* How is the SOI interacting with the identified external entities?
* How does the SOI or a SOI element interact with the test environment?
* Which information is exchanged between the SOI and external entity(s)?
* What are the Interface Requirement(s) imposed on the SOI?
## Presentation
An IBD featuring the SOI, the System Context Element(s) and Connector(s) for each identified Interface from SOI to the respective Context Element(s). An Interface is a connection resource for hooking on the SOI to other Context Element(s). Item flow(s) are defined for each exchange on the identified Interface. Connectors/ports may contain reference to the Interface Document(s) if applicable.
Note: more than one IBD focused on different areas of interest may be used in oder to keep the view comprehensive. Depending on the Stakeholder Concern(s) the Item Exchange information might be suppressed.

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|InterfaceBlock||[Logical Interface Specification](../concepts.md#Logical-Interface-Specification)|
|[SAF_FV01c_SystemContextExchangeDiagram](../stereotypes.md#SAF_FV01c_SystemContextExchangeDiagram)|[tbd]|[System Context Exchange Viewpoint](../concepts.md#System-Context-Exchange-Viewpoint)|
|ProxyPort||[Logical Interface](../concepts.md#Logical-Interface)|
|[SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)|[tbd]|[Logical Context Constituent](../concepts.md#Logical-Context-Constituent)|
|[SAF_LogicalSOI](../stereotypes.md#SAF_LogicalSOI)|[tbd]|[Logical SOI](../concepts.md#Logical-SOI)|
|[SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)|[tbd]|[Logical External System](../concepts.md#Logical-External-System)|
|[SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)|[tbd]|[Logical SOI Constituent](../concepts.md#Logical-SOI-Constituent)|
|[SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)|[tbd]|[Logical Environment](../concepts.md#Logical-Environment)|
|[SAF_DomainKind](../stereotypes.md#SAF_DomainKind)|[tbd]|[System Domain Kind](../concepts.md#System-Domain-Kind)|
|Connector||[Logical Interface Connection](../concepts.md#Logical-Interface-Connection)|
|ItemFlow||[Logical Item Exchange](../concepts.md#Logical-Item-Exchange)|
|[SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)|[tbd]|[Logical User](../concepts.md#Logical-User)|
## Input from other Viewpoints
### Required Viewpoints
* [System Story Viewpoint](System-Story-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [System Process Viewpoint](System-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
