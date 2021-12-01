<div align="right">SAF_FFDS#245,SAF_Cameo_Profile#345</div>

# Logical Internal Exchange Viewpoint
*Domain:* **Logical** *Aspect:* **Interaction and Collaboration**
## Example
![FFDS Logical Internal Exchange](../diagrams/FFDS-Logical-Internal-Exchange.svg)
## Purpose
The Logical Internal Exchange Viewpoint serves for the identification and definition of interface(s) of element(s) of the SOI. Also, the delegation of SOI element interface(s) to SOI boundary interface(s) is covered.
The Logical Internal Exchange Viewpoint
* identifies SOI element interface(s) on a logical level
* states to which other SOI element(s) the interface(s) are connected to
* assigns interface specification(s) to interface(s)
* defines the usage of interface(s), e.g. if only a subset of the interface(s) is used 
* defines the delegation of SOI element interface(s) to SOI boundary interface(s)
## Applicability
The Logical Internal Exchange Viewpoint supports the "Develop Models and Views of Candidate Architecture" activity included in the "Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the preliminary interface definition and system architecture description.
Note:
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which requirement(s) apply to a logical interface?
* How do internal system elements interact with each other to provide the system function or service?
* How do the logical system elements interact to fulfill the designated system function?
* Which interface partners does a SW item have?
* What are the item(s) exchanged between the logical system elements during the interaction?
* Which interface(s) are necessary?
* What additional interface(s) are necessary to expose internal properties, states and modes for testing?
* Which SW interface(s) are necessary?
* What are data / information item(s) exchanged?
* What additional information the SOI or a SOI element needs to generate to enable testing?
## Presentation
One or more IBD featuring the logical element(s) of the SOI, and the SOI boundary, containing connector(s) for each identified SOI interface delegation to SOI element(s), as well as connector(s) between related interface(s) of SOI parts. An interface is a connection resource for hooking on the logical SOI element(s) to other logical SOI element(s). Item flows are defined for each exchange on the identified interface.  Recommendation: Use more than one IBD focused on different areas of interest to keep the view comprehensive. Depending on the Stakeholder concern(s) the logical item exchange information might be suppressed.

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|[SAF_LogicalElement](../stereotypes.md#SAF_LogicalElement)|[tbd]|[Logical Element](../concepts.md#Logical-Element)|
|InterfaceBlock||[Logical Interface Specification](../concepts.md#Logical-Interface-Specification)|
|ProxyPort||[Logical Interface](../concepts.md#Logical-Interface)|
|[SAF_LV04b_LogicalInternalExchangeDiagram](../stereotypes.md#SAF_LV04b_LogicalInternalExchangeDiagram)|[tbd]|[Logical Internal Exchange Viewpoint](../concepts.md#Logical-Internal-Exchange-Viewpoint)|
|Property||[LIapplyingToLE](../concepts.md#LIapplyingToLE)|
|[SAF_DomainKind](../stereotypes.md#SAF_DomainKind)|[tbd]|[System Domain Kind](../concepts.md#System-Domain-Kind)|
|Connector||[Logical Interface Connection](../concepts.md#Logical-Interface-Connection)|
|ItemFlow||[Logical Item Exchange](../concepts.md#Logical-Item-Exchange)|
## Input from other Viewpoints
### Required Viewpoints
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
