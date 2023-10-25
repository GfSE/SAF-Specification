![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Physical-Context-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Context-Definition-Viewpoint-primary-example.svg)
## Purpose
The Physical Context Definition Viewpoint identifies the different context the system is used in, along with the associated external entities sharing a physical interface with the system. For each context the applicable environmental conditions shall be defined. The physical context helps in discovering the Interface Requirements needed to integrate a system into its environment in a specific context.
Note: For each candidate system architecture, the physical context Viewpoint is elaborated forming the functional baseline for the later assessment of the different system architecture solutions.
## Applicability
The Physical Context Definition Viewpoint supports the “System Architecture Definition Process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.4] and contributes to the artifacts "System Architecture Description" and "System Interface Definition".
## Presentation
A block definition diagram (BDD) depicting the elements available in a specific context. At least one BDD is used per identified context featuring
* one block representing the Physical System, i.e., the system of interest
* one block representing the specific Physical System Context
* several blocks representing Physical Context Elements such as Physical User, Physical External System, and Physical Environment that are present in the Physical System Context
* composition relationships attaching the Physical Context Elements and the Physical System to the Physical System Context block

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* What are the different contexts the system is embedded and utilized in?
* What are the external physical entities the system interacts with in the respective context?
* Which interface partners does the system have?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_PhysicalContext](../../stereotypes.md#SAF_PhysicalContext)|[Physical System Context](../concept/concepts.md#Physical-System-Context)|
|[SAF_PhysicalContextRole](../../stereotypes.md#SAF_PhysicalContextRole)|[Physical Context Constituent](../concept/concepts.md#Physical-Context-Constituent)|
|[SAF_PhysicalContextRole](../../stereotypes.md#SAF_PhysicalContextRole)|[Physical SOI Constituent](../concept/concepts.md#Physical-SOI-Constituent)|
|[SAF_PhysicalEnvironment](../../stereotypes.md#SAF_PhysicalEnvironment)|[Physical Environment](../concept/concepts.md#Physical-Environment)|
|[SAF_PhysicalExternalSystem](../../stereotypes.md#SAF_PhysicalExternalSystem)|[Physical External System](../concept/concepts.md#Physical-External-System)|
|[SAF_PhysicalSystem](../../stereotypes.md#SAF_PhysicalSystem)|[Physical SOI](../concept/concepts.md#Physical-SOI)|
|[SAF_PhysicalUser](../../stereotypes.md#SAF_PhysicalUser)|[Physical User](../concept/concepts.md#Physical-User)|
|[SAF_SPV01b_View](../../stereotypes.md#SAF_SPV01b_View)|[Physical Context Definition Viewpoint](../concept/concepts.md#Physical-Context-Definition-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Physical Context Definition Concept](diagrams/Physical-Context-Definition-Concept.svg)
## Profile
![Physical Context Definition Profile](diagrams/Physical-Context-Definition-Profile.svg)
