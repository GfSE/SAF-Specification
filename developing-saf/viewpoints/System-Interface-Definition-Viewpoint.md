![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **F5_SIFD** System Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Interface](../../aspects.md#Aspect-Interface)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Interface-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Interface-Definition-Viewpoint-primary-example.svg)
## Purpose
The System Interface Definition Viewpoint captures system wide concepts defining interfaces. It allows to adopt long-lived standards and to harmonize conceptual interface definitions to improve interchangeability, interoperability, and portability.
## Applicability
The System Interface Definition Viewpoint supports the "prepare for system requirement definition" activity part of the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.3] and contributes to the artifact "System Requirements Definition Report".

Furthermore, the viewpoint supports the "Interface Management" approach of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§3.2.4].
## Presentation
A block definition diagram (BDD) featuring Conceptual Interface blocks with ports, and flow properties.

A tabular format listing Conceptual Interface blocks, their ports, and flow properties.

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
* [Which are the interface definitions for the logical architecture?](../../concerns.md#_2021x_2_8710274_1698695260372_8568_48717)
* [Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?](../../concerns.md#_2021x_2_8710274_1674576759154_22704_23559)
* [Which standards, protocols, and format specifications apply to a physical interface?](../../concerns.md#_2021x_2_8710274_1674576758891_215548_23373)
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
|[SAF_ConceptualInterfaceDefinition](../../stereotypes.md#SAF_ConceptualInterfaceDefinition)|[Logical Interaction Point Definition](../concept/concepts.md#Logical-Interaction-Point-Definition)|
|[SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)|[System Domain Kind](../concept/concepts.md#System-Domain-Kind)|
|[SAF_F5_SIFD](../../stereotypes.md#SAF_F5_SIFD)|[System Interface Definition Viewpoint](../concept/concepts.md#System-Interface-Definition-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![System Interface Definition Concept](diagrams/System-Interface-Definition-Concept.svg)
## Profile
![System Interface Definition Profile](diagrams/System-Interface-Definition-Profile.svg)
