![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F1_SCXE** System Context Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Context-Exchange-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Context-Exchange-Viewpoint-primary-example.svg)
## Purpose
The System Context Exchange Viewpoint serves for the identification and definition of external interfaces of the SOI that are used to interact, e.g., users, external systems, and other external entities defined in the given context of the SOI. The System Context Exchange Viewpoint
* identifies system interfaces on a functional level,
* states to which external entities the system interfaces are connected to,
* and defines the usage of interfaces, e.g., when only a subset of the interface is used.
## Applicability
The System Context Exchange Viewpoint supports the "prepare for system requirement definition" activity included in the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.3] and contributes to the artifact "System Requirements Definition Report".
## Presentation
An internal block diagram (IBD) - associated to a system context - featuring the SOI, the system context elements, and the connectors for each identified interface from SOI to the respective context elements. An interface is an interaction point for interaction of the SOI to with context elements. Item flows are defined for each exchange on the identified interface. Connectors/ports may contain reference to the interface documents if applicable. Ports may be structured as appropriate to manage and structure the information.
Note: more than one IBD focused on different areas of interest may be used in oder to keep the view comprehensive. Depending on the Stakeholder concerns the item exchange information might be suppressed.

A tabular format listing the identified interfaces of the soi (ports), referencing interface definitions (port types) ,connections (connector) to system context elements, and information exchange (item flows) conveyed over these connections. It is advised to have multiple tables focusing on certain aspects to keep the view comprehensive, e.g. table focusing on contexts or on certain interface partners.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Maintainer](../../stakeholders.md#Maintainer)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [How is the system interacting with the identified external entities?](../../concerns.md#_2021x_2_8710274_1674576758710_799233_23181)
* [Which are the conceptual interfaces of the system?](../../concerns.md#_2021x_2_8710274_1674576758808_527146_23298)
* [Which are the external conceptual entities the system interacts with in the given context?](../../concerns.md#_2021x_2_8710274_1674576758971_129300_23418)
* [Which are the interface requirements imposed on the system?](../../concerns.md#_2021x_2_8710274_1674576758778_979635_23258)
* [Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?](../../concerns.md#_2021x_2_8710274_1674576759154_22704_23559)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "realizingConnector" of InformationFlow referencing Connector|[LCNallowingLIE](../concept/concepts.md#LCNallowingLIE)|
|Connector [UML_Standard_Profile]|[Logical Connection](../concept/concepts.md#Logical-Connection)|
|FlowProperty contained in SAF_ConceptualInterfaceDefinition|[LIPPspecifyingDetailOfLIPD](../concept/concepts.md#LIPPspecifyingDetailOfLIPD)|
|FlowProperty typed by SAF_DomainKind|[SDKtypingLIPP](../concept/concepts.md#SDKtypingLIPP)|
|FlowProperty [SysML Profile]|[Logical Interaction Point Property](../concept/concepts.md#Logical-Interaction-Point-Property)|
|ItemFlow typed by SAF_DomainKind|[SDKtypingLIE](../concept/concepts.md#SDKtypingLIE)|
|ItemFlow [SysML Profile]|[Logical Item Exchange](../concept/concepts.md#Logical-Item-Exchange)|
|ProxyPort typed by SAF_ConceptualInterfaceDefinition|[LIPDdefiningDetailOfLIP](../concept/concepts.md#LIPDdefiningDetailOfLIP)|
|ProxyPort [SysML Profile]|[Logical Interaction Point](../concept/concepts.md#Logical-Interaction-Point)|
|[SAF_ConceptualInterfaceDefinition](../../stereotypes.md#saf_conceptualinterfacedefinition)|[Logical Interaction Point Definition](../concept/concepts.md#Logical-Interaction-Point-Definition)|
|[SAF_DomainKind](../../stereotypes.md#saf_domainkind)|[System Domain Kind](../concept/concepts.md#System-Domain-Kind)|
|[SAF_F1_SCXE](../../stereotypes.md#saf_f1_scxe)|[System Context Exchange Viewpoint](../concept/concepts.md#System-Context-Exchange-Viewpoint)|
|[SAF_F1_SCXE_Table](../../stereotypes.md#saf_f1_scxe_table)|[System Context Exchange Viewpoint](../concept/concepts.md#System-Context-Exchange-Viewpoint)|
|[SAF_LogicalContextRole](../../stereotypes.md#saf_logicalcontextrole)|[Logical Context Element Role](../concept/concepts.md#Logical-Context-Element-Role)|
|[SAF_LogicalContextRole](../../stereotypes.md#saf_logicalcontextrole)|[Logical SOI Role](../concept/concepts.md#Logical-SOI-Role)|
|[SAF_LogicalEnvironment](../../stereotypes.md#saf_logicalenvironment)|[Logical Environment](../concept/concepts.md#Logical-Environment)|
|[SAF_LogicalExternalSystem](../../stereotypes.md#saf_logicalexternalsystem)|[Logical External System](../concept/concepts.md#Logical-External-System)|
|[SAF_LogicalSOI](../../stereotypes.md#saf_logicalsoi)|[Logical Context SOI](../concept/concepts.md#Logical-Context-SOI)|
|[SAF_LogicalUser](../../stereotypes.md#saf_logicaluser)|[Logical User](../concept/concepts.md#Logical-User)|
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
# Viewpoint Concept and Profile Diagrams
## Concept
![System Context Exchange Concept](diagrams/System-Context-Exchange-Concept.svg)
## Profile
![System Context Exchange Profile](diagrams/System-Context-Exchange-Profile.svg)
