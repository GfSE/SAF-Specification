![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : System Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Context-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Context-Definition-Viewpoint-primary-example.svg)
![System-Context-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/System-Context-Definition-Viewpoint-primary-example-1.svg)
## Purpose
The System Context Definition Viewpoint defines how the SOI is embedded in its Environment, i.e., where the boundary of the SOI is and who the External Entities are the SOI interacts with (e.g., Users, other External Systems, Environmental Conditions, etc.). The SOI provides and requests Context Functions. The SOI shall be able handle events and effects from the outside.
Furthermore, the System Context Definition Viewpoint serves as architecture concept to demonstrate how the architecture defined in the The Operational Context Definition Viewpoint is realized.
## Applicability
The System Context Definition Viewpoint supports the "Prepare for Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the System Interface definition.
## Presentation
A block definition diagram (BDD) featuring the following elements
* a Logical Element block representing SOI in the logical domain
* a Logical Context block representing the addressed context in the logical domain
* Logical Context Element blocks for each relevant context element
* a composition relationship from Context block to each Context Element used in the context
* a composition relationship from Context block to the SOI

A tabular format listing Context Roles, Context Elements, and respective descriptions

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Operator](../../stakeholders.md#Operator)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
* [User](../../stakeholders.md#User)
## Concern
* [What are the different contexts the system is embedded and utilized in?](../../concerns.md#_2021x_2_8710274_1674576758891_776196_23368)
* [What are the external conceptual entities the system interacts with in the respective context?](../../concerns.md#_2021x_2_8710274_1674576758971_129300_23418)
* [What are the geographical and physical locations of the intended / proposed elements of the solution?](../../concerns.md#_2021x_2_8710274_1674576759075_442496_23491)
* [Which interface partners does the system have?](../../concerns.md#_2021x_2_8710274_1674576759091_673143_23507)
* [Which users does the system support? ](../../concerns.md#_2021x_2_6d8019d_1675459822996_961402_23325)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_LogicalContext](../../stereotypes.md#SAF_LogicalContext)|[Logical System Context](../concept/concepts.md#Logical-System-Context)|
|SAF_LogicalContextRole contained in SAF_LogicalContext|[Logical SOI Constituent](../concept/concepts.md#Logical-SOI-Constituent)|
|SAF_LogicalContextRole contained in SAF_LogicalContext|[Logical Context Element Constituent](../concept/concepts.md#Logical-Context-Element-Constituent)|
|[SAF_LogicalEnvironment](../../stereotypes.md#SAF_LogicalEnvironment)|[Logical Environment](../concept/concepts.md#Logical-Environment)|
|[SAF_LogicalExternalSystem](../../stereotypes.md#SAF_LogicalExternalSystem)|[Logical External System](../concept/concepts.md#Logical-External-System)|
|[SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)|[Logical SOI](../concept/concepts.md#Logical-SOI)|
|[SAF_LogicalUser](../../stereotypes.md#SAF_LogicalUser)|[Logical User](../concept/concepts.md#Logical-User)|
|[SAF_SFV01b_View](../../stereotypes.md#SAF_SFV01b_View)|[System Context Definition Viewpoint](../concept/concepts.md#System-Context-Definition-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Context Definition Concept](diagrams/System-Context-Definition-Concept.svg)
## Profile
![System Context Definition Profile](diagrams/System-Context-Definition-Profile.svg)
