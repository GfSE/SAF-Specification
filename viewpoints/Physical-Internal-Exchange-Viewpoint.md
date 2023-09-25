![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Internal Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Interaction & Collaboration](../aspects.md#Aspect-Interaction-&-Collaboration)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
*none*
## Purpose
The Physical Internal Exchange Viewpoint serves for the identification and definition of interfaces of elements of the SOI. Also, the delegation of SOI element interfaces to SOI boundary interfaces is covered.
The Phyiscal Internal Exchange Viewpoint
* identifies SOI element interfaces on a Physical Level
* states to which other SOI elements the interfaces are connected to
* assigns interface specifications to interfaces
* defines the usage of interfaces, e.g., if only a subset of the interfaces is used 
* defines the delegation of SOI element interfaces to SOI boundary interfaces
## Applicability
The Logical Internal Exchange Viewpoint supports the "Develop Models and Views of Candidate Architecture" activity included in the "Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the preliminary interface definition and system architecture description.
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Regulation Authority](../stakeholders.md#Regulation-Authority)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How do internal system elements interact with each other to provide the system function or service?
* What additional information the system or a system element needs to generate to enable testing?
* What are data / information items exchanged?
* What kind of information is exchanged and processed within the system?
* Which HW interfaces are necessary?
* Which SW interfaces are necessary?
* Which interface design items are on an interface of a physical architecture element?
* Which interface partners does a HW item have?
* Which interface partners does a SW item have?
## Presentation
One or more IBD featuring the Physical Elements of the SOI, and the SOI boundary, containing connectors for each identified SOI interface delegation to SOI elements, as well as connectors between related interfaces of SOI parts. An interface is a connection resource for hooking on the Physical SOI Elements to other Physical SOI Elements. Item flows are defined for each exchange on the identified interface.  Recommendation: Use more than one IBD focused on different areas of interest to keep the view comprehensive. Depending on the Stakeholder Concerns the physical item exchange information might be suppressed.

## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Connector [UML_Standard_Profile]
* FlowProperty [SysML Profile]
* ItemFlow [SysML Profile]
* ProxyPort [SysML Profile]
* [SAF_PhysicalElement](../stereotypes.md#SAF_PhysicalElement)
* [SAF_PhysicalExchangeType](../stereotypes.md#SAF_PhysicalExchangeType)
* [SAF_PhysicalHardwareElement](../stereotypes.md#SAF_PhysicalHardwareElement)
* [SAF_PhysicalSoftwareElement](../stereotypes.md#SAF_PhysicalSoftwareElement)
* [SAF_SPV04b_View](../stereotypes.md#SAF_SPV04b_View)
## Input from other Viewpoints
### Required Viewpoints
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
### Recommended Viewpoints
*none*
