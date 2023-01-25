![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Internal Exchange Viewpoint
*Domain:* **Physical** *Aspect:* **Interaction & Collaboration**
## Example
*none*
## Purpose
The Physical Internal Exchange Viewpoint serves for the identification and definition of interface(s) of element(s) of the SOI. Also, the delegation of SOI element interface(s) to SOI boundary interface(s) is covered.
The Phyiscal Internal Exchange Viewpoint
* identifies SOI element interface(s) on a physical level
* states to which other SOI element(s) the interface(s) are connected to
* assigns interface specification(s) to interface(s)
* defines the usage of interface(s), e.g. if only a subset of the interface(s) is used 
* defines the delegation of SOI element interface(s) to SOI boundary interface(s)
## Applicability
The Logical Internal Exchange Viewpoint supports the "Develop Models and Views of Candidate Architecture" activity included in the "Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4] and contributes to the preliminary interface definition and system architecture description.
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How do internal system elements interact with each other to provide the system function or service?
* What additional information the system or a system element needs to generate to enable testing?
* What are data / information items exchanged?
* What kind of information is exchanged and processed within the system?
* Which Interface Design Items are on an interface of a Physical Architecture Element?
* Which SW interfaces are necessary?
* Which interface partners does a HW item have?
* Which interface partners does a SW item have?
* Which interfaces are necessary?
## Presentation
One or more IBD featuring the physical element(s) of the SOI, and the SOI boundary, containing connector(s) for each identified SOI interface delegation to SOI element(s), as well as connector(s) between related interface(s) of SOI parts. An interface is a connection resource for hooking on the physical SOI element(s) to other physical SOI element(s). Item flows are defined for each exchange on the identified interface.  Recommendation: Use more than one IBD focused on different areas of interest to keep the view comprehensive. Depending on the Stakeholder concern(s) the physical item exchange information might be suppressed.

## Profile Model Reference
## Input from other Viewpoints
### Required Viewpoints
* [Physical Structure Viewpoint](Physical-Structure-Viewpoint.md)
### Recommended Viewpoints
*none*
