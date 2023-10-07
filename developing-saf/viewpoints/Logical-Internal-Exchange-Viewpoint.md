![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Logical Internal Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../../domains.md#Domain-Logical)|[Interaction & Collaboration](../../aspects.md#Aspect-Interaction-&-Collaboration)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Logical-Internal-Exchange-Viewpoint-example.svg](../../vp-examples/Logical-Internal-Exchange-Viewpoint-example.svg)
## Purpose
The Logical Internal Exchange Viewpoint serves for the identification and definition of interfaces of elements of the Logical System. Also, the delegation of system element interfaces to the Logical System boundary interfaces is covered.
The Logical Internal Exchange Viewpoint
* identifies system element interfaces on a Logical Level
* states to which other system elements the interfaces are connected to
* assigns interface specifications to interfaces
* defines the usage of interfaces, e.g., if only a subset of the interfaces is used 
* defines the delegation of system element interfaces to the system boundary interfaces
## Applicability
The Logical Internal Exchange Viewpoint supports the "Develop Models and Views of Candidate Architecture" activity included in the "Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the preliminary interface definition and system architecture description.
## Presentation
One or more IBD featuring the Logical Elements of the SOI, and the SOI boundary, containing connectors for each identified SOI interface delegation to SOI elements, as well as connectors between related interfaces of SOI parts. An interface is a connection resource for hooking on the Logical SOI Elements to other Logical SOI Elements. Item flows are defined for each exchange on the identified interface.  Recommendation: Use more than one IBD focused on different areas of interest to keep the view comprehensive. Depending on the Stakeholder Concerns the logical item exchange information might be suppressed.

## Stakeholder
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Regulation Authority](../../stakeholders.md#Regulation-Authority)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* How do internal system elements interact with each other to provide the system function or service?
* How do the logical system elements interact to fulfill the designated system function?
* What additional information the system or a system element needs to generate to enable testing?
* What are data / information items exchanged?
* What are the items exchanged between the logical system elements during the interaction?
* Which requirements apply to a logical interface?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "" of InformationFlow referencing Connector|[LCNallowingLIE](../concept/concepts.md#LCNallowingLIE)|
|Connector [UML_Standard_Profile]|[Logical Connection](../concept/concepts.md#Logical-Connection)|
|FlowProperty contained in InterfaceBlock|[LCPspecifyingDetailOfLCPD](../concept/concepts.md#LCPspecifyingDetailOfLCPD)|
|FlowProperty typed by SAF_DomainKind|[SDKtypingLCP](../concept/concepts.md#SDKtypingLCP)|
|FlowProperty [SysML Profile]|[Logical Connection Property](../concept/concepts.md#Logical-Connection-Property)|
|ItemFlow typed by SAF_DomainKind|[SDKtypingLIE](../concept/concepts.md#SDKtypingLIE)|
|ItemFlow [SysML Profile]|[Logical Item Exchange](../concept/concepts.md#Logical-Item-Exchange)|
|ProxyPort typed by InterfaceBlock|[LCPDdefiningDetailOfLCP](../concept/concepts.md#LCPDdefiningDetailOfLCP)|
|ProxyPort [SysML Profile]|[Logical Connection Point](../concept/concepts.md#Logical-Connection-Point)|
|[SAF_ConceptualInterfaceDefinition](../../stereotypes.md#SAF_ConceptualInterfaceDefinition)|[Logical Connection Point Definition](../concept/concepts.md#Logical-Connection-Point-Definition)|
|[SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)|[System Domain Kind](../concept/concepts.md#System-Domain-Kind)|
|[SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)|[Logical Element](../concept/concepts.md#Logical-Element)|
|[SAF_SLV04b_View](../../stereotypes.md#SAF_SLV04b_View)|[Logical Internal Exchange Viewpoint](../concept/concepts.md#Logical-Internal-Exchange-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [Logical Structure Viewpoint](Logical-Structure-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![Logical Internal Exchange Concept](diagrams/Logical-Internal-Exchange-Concept.svg)
## Profile
![Logical Internal Exchange Profile](diagrams/Logical-Internal-Exchange-Profile.svg)
