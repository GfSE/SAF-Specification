<div style="text-align: right; font-family: courier; color:gray;font-size: 50%">SAF_FFDS#244,SAF_Cameo_Profile#343</div>

# Physical Context Definition Viewpoint
*Domain:* **Physical** *Aspect:* **Context**
## Example
*none*
## Purpose
The physical context definition Viewpoint identifies the different context the SOI is used in, along with the associated external entities sharing a physical interface with the SOI. For each context the applicable environmental conditions may be defined. The physical context helps in discovering the interface requirement(s) needed to integrate a SOI into its environment in a specific context.
NOTE: For each candidate SOI architecture, the physical context Viewpoint is elaborated forming the baseline for the later assessment of the different system architecture solutions.
## Applicability
The physical context definition Viewpoint supports the “Architecture Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. The Viewpoint is used to define context, boundaries, and external interactions of the SOI in the physical domain.
NOTE: Only those external entities are identified that share a physical interface. Other entities connected via a network are subject of the logical system context.
## Stakeholder
* [System Architect](../stakeholders.md#System-Architect)
* [Customer](../stakeholders.md#Customer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Acquirer](../stakeholders.md#Acquirer)
## Concern
* What kind of test equipment is necessary to test the system elements?
* What are the external entity(s) the SOI interacts with in the respective context?
* What is the SOI boundary definition?
* What are necessary enabling system(s)?
* What is the System Boundary definition?
* How does the SOI or a SOI element interact with the test environment?
## Presentation
The following artifact(s) support the modeling activities: 
A) The physical context definition diagram defines the elements available in the context. At least one context definition diagram is generated per identified context. For each identified context a BDD featuring:
* one block representing the Physical SOI
* one block representing the Physical System Context
* several blocks representing Physical Context Elements such as Physical User, Physical External System, and Physical Environment present in the systems context
* composition relationship(s) attaching the Physical Context Elements and the Physical SOI to the Physical System Context block

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|Association||[Physic SOI Constituent](../concepts.md#Physic-SOI-Constituent)|
|Association||[Physic Context Constituent](../concepts.md#Physic-Context-Constituent)|
|[SAF_PhysicalExternalSystem](../stereotypes.md#SAF_PhysicalExternalSystem)|[tbd]|[Physical External System](../concepts.md#Physical-External-System)|
|Property||[Physic Context Constituent](../concepts.md#Physic-Context-Constituent)|
|[SAF_PhysicalUser](../stereotypes.md#SAF_PhysicalUser)|[tbd]|[Physical User](../concepts.md#Physical-User)|
|Property||[Physic SOI Constituent](../concepts.md#Physic-SOI-Constituent)|
|[SAF_PhysicalEnvironment](../stereotypes.md#SAF_PhysicalEnvironment)|[tbd]|[Physical Environment](../concepts.md#Physical-Environment)|
|[SAF_PhysicalContext](../stereotypes.md#SAF_PhysicalContext)|[tbd]|[Physical System Context](../concepts.md#Physical-System-Context)|
|[SAF_PhysicalSOI](../stereotypes.md#SAF_PhysicalSOI)|[tbd]|[Physical SOI](../concepts.md#Physical-SOI)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
