![System Architecture Framework](../diagrams/Logo_SAF.png)
# SAF User Documentation : Physical Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
*none*
## Purpose
The Physical Context Definition Viewpoint identifies the different context the system is used in, along with the associated external entities sharing a physical interface with the system. For each context the applicable environmental conditions may be defined. The physical context helps in discovering the Interface Requirements needed to integrate a system into its environment in a specific context.
Note: For each candidate system architecture, the physical context Viewpoint is elaborated forming the baseline for the later assessment of the different system architecture solutions.
## Applicability
The Physical Context Definition Viewpoint supports the “Architecture Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. The Viewpoint is used to define context, boundaries, and external interactions of the SOI in the physical domain.
Note: Only those external entities are identified that share a physical interface. Other entities connected via a network are subject of the logical system context.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How does the system or a system element interact with the test environment?
* What are necessary enabling systems?
* What are the external physical entities the system interacts with in the respective context?
* What is the system boundary definition?
* What kind of test equipment is necessary to test the system elements?
## Presentation
The following artifacts support the modeling activities: 
The physical context definition diagram (BDD) defines the elements available in a specific context. At least one physical context definition diagram is used per identified context, featuring
* one block representing the Physical System i.e. the system of interest
* one block representing the specific Physical System Context
* several blocks representing Physical Context Elements such as Physical User, Physical External System, and Physical Environment present in the systems context
* composition relationships attaching the Physical Context Elements and the Physical System to the Physical System Context block

## Profile Model Reference
* Association [UML_Standard_Profile]
* Association [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* Property [UML_Standard_Profile]
* [SAF_PhysicalContext](../stereotypes.md#SAF_PhysicalContext)
* [SAF_PhysicalEnvironment](../stereotypes.md#SAF_PhysicalEnvironment)
* [SAF_PhysicalExternalSystem](../stereotypes.md#SAF_PhysicalExternalSystem)
* [SAF_PhysicalSystem](../stereotypes.md#SAF_PhysicalSystem)
* [SAF_PhysicalUser](../stereotypes.md#SAF_PhysicalUser)
* [SAF_SPV01a_View](../stereotypes.md#SAF_SPV01a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
