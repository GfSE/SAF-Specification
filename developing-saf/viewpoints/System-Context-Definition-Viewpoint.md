![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F1_SCXD** System Context Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Context-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Context-Definition-Viewpoint-primary-example.svg)
![System-Context-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/System-Context-Definition-Viewpoint-primary-example-1.svg)
## Purpose
The System Context Definition Viewpoint defines how the SOI is embedded in its environment, i.e., where the boundary of the SOI is and who the external entities are the SOI interacts with (e.g., users, other external systems, environmental conditions, etc.).  In addition, the System Context Definition Viewpoint serves as architecture concept to demonstrate how the architecture description defined in the Operational Context Definition Viewpoint is realized.
## Applicability
The System Context Definition Viewpoint supports the "prepare for system requirement definition" activity included in the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.3] and contributes to the artifact "System Requirements Definition Report".
## Presentation
A block definition diagram (BDD) featuring the following elements
* a Logical element block representing SOI in the logical domain
* a Logical context block representing the addressed context in the logical domain
* Logical context element blocks for each relevant context element
* a composition relationship from context block to each context element used in the context
* a composition relationship from context block to the SOI

A tabular format listing context roles, context elements, and respective descriptions.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Where and what are the geographical and physical locations of the intended or proposed elements of the solution?](../../concerns.md#_2021x_2_8710274_1674576759075_442496_23491)
* [Which are the external conceptual entities the system interacts with in the given context?](../../concerns.md#_2021x_2_8710274_1674576758971_129300_23418)
* [Which are the given contexts the system is embedded and utilized in?](../../concerns.md#_2021x_2_8710274_1674576758891_776196_23368)
* [Which interface partners does the system have?](../../concerns.md#_2021x_2_8710274_1674576759091_673143_23507)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_F1_SCXD](../../stereotypes.md#saf_f1_scxd)|[System Context Definition Viewpoint](../concept/concepts.md#System-Context-Definition-Viewpoint)|
|[SAF_F1_SCXD_Table](../../stereotypes.md#saf_f1_scxd_table)|[System Context Definition Viewpoint](../concept/concepts.md#System-Context-Definition-Viewpoint)|
|[SAF_LogicalContext](../../stereotypes.md#saf_logicalcontext)|[Logical System Context](../concept/concepts.md#Logical-System-Context)|
|[SAF_LogicalContextRole](../../stereotypes.md#saf_logicalcontextrole)|[Logical Context Element Role](../concept/concepts.md#Logical-Context-Element-Role)|
|[SAF_LogicalContextRole](../../stereotypes.md#saf_logicalcontextrole)|[Logical SOI Role](../concept/concepts.md#Logical-SOI-Role)|
|[SAF_LogicalEnvironment](../../stereotypes.md#saf_logicalenvironment)|[Logical Environment](../concept/concepts.md#Logical-Environment)|
|[SAF_LogicalExternalSystem](../../stereotypes.md#saf_logicalexternalsystem)|[Logical External System](../concept/concepts.md#Logical-External-System)|
|[SAF_LogicalSOI](../../stereotypes.md#saf_logicalsoi)|[Logical Context SOI](../concept/concepts.md#Logical-Context-SOI)|
|[SAF_LogicalUser](../../stereotypes.md#saf_logicaluser)|[Logical User](../concept/concepts.md#Logical-User)|
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
