![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Context Definition Viewpoint
*Domain:* **Physical** *Aspect:* **Context & Exchange**
## Example
*none*
## Purpose
The physical context definition Viewpoint identifies the different context the SOI is used in, along with the associated external entities sharing a physical interface with the SOI. For each context the applicable environmental conditions may be defined. The physical context helps in discovering the interface requirement(s) needed to integrate a SOI into its environment in a specific context.
NOTE: For each candidate SOI architecture, the physical context Viewpoint is elaborated forming the baseline for the later assessment of the different system architecture solutions.
## Applicability
The physical context definition Viewpoint supports the “Architecture Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. The Viewpoint is used to define context, boundaries, and external interactions of the SOI in the physical domain.
NOTE: Only those external entities are identified that share a physical interface. Other entities connected via a network are subject of the logical system context.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How does the system or a system element interact with the test environment?
* What are necessary enabling systems?
* What are the external physical entities the system interacts with in the respective context?
* What is the system boundary definition?
* What kind of test equipment is necessary to test the system elements?
## Presentation
The following artifact(s) support the modeling activities: 
A) The physical context definition diagram defines the elements available in the context. At least one context definition diagram is generated per identified context. For each identified context a BDD featuring:
* one block representing the Physical SOI
* one block representing the Physical System Context
* several blocks representing Physical Context Elements such as Physical User, Physical External System, and Physical Environment present in the systems context
* composition relationship(s) attaching the Physical Context Elements and the Physical SOI to the Physical System Context block

## Profile Model Reference
* Association [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* [SAF_PhysicalContext](../stereotypes.md#SAF_PhysicalContext)
* [SAF_PhysicalEnvironment](../stereotypes.md#SAF_PhysicalEnvironment)
* [SAF_PhysicalExternalSystem](../stereotypes.md#SAF_PhysicalExternalSystem)
* [SAF_PhysicalSOI](../stereotypes.md#SAF_PhysicalSOI)
* [SAF_PhysicalUser](../stereotypes.md#SAF_PhysicalUser)
* [SAF_SPV01a_View](../stereotypes.md#SAF_SPV01a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
