![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Physical-Context-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Context-Definition-Viewpoint-primary-example.svg)
## Purpose
The Physical Context Definition Viewpoint identifies the various contexts the SOI is used in, along with the associated external entities sharing a physical interface with the system. For each context, the applicable environmental conditions shall be defined. The physical context helps identify the interface requirements needed to integrate a system into its environment in a given context.
## Applicability
The Physical Context Definition Viewpoint supports the "Design Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.5] and contributes to the artifacts "System Design Description" and "System Interface Definition".
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
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Which are the external physical entities the system interacts with in the given context?](../../concerns.md#_2021x_2_8710274_1674576758710_759449_23186)
* [Which are the given contexts the system is embedded and utilized in?](../../concerns.md#_2021x_2_8710274_1674576758891_776196_23368)
* [Which interface partners does the system have?](../../concerns.md#_2021x_2_8710274_1674576759091_673143_23507)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_PhysicalContext](../../stereotypes.md#SAF_PhysicalContext)|[Physical System Context](../concept/concepts.md#Physical-System-Context)|
|SAF_PhysicalContextRole contained in SAF_PhysicalContext|[Physical Context Element Role](../concept/concepts.md#Physical-Context-Element-Role)|
|SAF_PhysicalContextRole contained in SAF_PhysicalContext|[Physical SOI Role](../concept/concepts.md#Physical-SOI-Role)|
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
