![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **P1_PCXE** Physical Context Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Context & Exchange](../../aspects.md#Aspect-Context-&-Exchange)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Physical-Context-Exchange-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Context-Exchange-Viewpoint-primary-example.svg)
![Physical-Context-Exchange-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/Physical-Context-Exchange-Viewpoint-primary-example-1.svg)
## Purpose
The Physical Context Exchange Viewpoint focuses on the identification of the physical interfaces with external entities and relevant documentation. It is used to capture interface design requirements, applicable standards, protocols and format specifications, that are agreed upon the interfaces.
## Applicability


The Physical Context Exchange Viewpoint supports the "create system design" activity part of the "Design Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.5] and contributes to the artifacts "System Design Description" and "System Interface Definition".

Furthermore, the viewpoint supports the "Interface Management" approach of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§3.2.4].
## Presentation
A) For each given context, an internal block diagram (IBD is used to identify the physical interfaces, the item flows, that are exchanged on that interfaces, and related documentation.
Note: To understand the interfaces, a mapping of protocol layers may be depicted.

B) A tabular format providing a list of all the defined external interfaces and the applicable documentation
* context element kind (environment, external entity, physical user, etc.)
* context element role name
* port name and reference to port type
* reference to context element type

C) A tabular format listing the applicable standards, protocols and formats for the item flows exchanged via the identified interfaces.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Mechanic Developer](../../stakeholders.md#Mechanic-Developer)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [Supplier](../../stakeholders.md#Supplier)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Which are the external physical entities the system interacts with in the given context?](../../concerns.md#_2021x_2_8710274_1674576758710_759449_23186)
* [Which are the protocols for exchanging physical items on a specific interface?](../../concerns.md#_2021x_2_8710274_1674576759247_884832_23642)
* [Which kind of physical items (energy, material, information, etc.) are exchanged between the system and external entities?](../../concerns.md#_2021x_2_8710274_1674576758698_132348_23172)
* [Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element?](../../concerns.md#_2021x_2_8710274_1674576758561_575110_23056)
* [Which standards, protocols, and format specifications apply to a physical interface?](../../concerns.md#_2021x_2_8710274_1674576758891_215548_23373)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "realizingConnector" of InformationFlow referencing Connector|[PCNallowingPIE](../concept/concepts.md#PCNallowingPIE)|
|Connector [UML_Standard_Profile]|[Physical Connection](../concept/concepts.md#Physical-Connection)|
|FlowProperty contained in SAF_PhysicalInterfaceDefinition|[PIPPspecifyingDetailOfPIPD](../concept/concepts.md#PIPPspecifyingDetailOfPIPD)|
|FlowProperty typed by SAF_PhysicalExchangeType|[PEKtypingPIPP](../concept/concepts.md#PEKtypingPIPP)|
|FlowProperty [SysML Profile]|[Physical Interaction Point Property](../concept/concepts.md#Physical-Interaction-Point-Property)|
|ItemFlow typed by SAF_PhysicalExchangeType|[PEKtypingPIE](../concept/concepts.md#PEKtypingPIE)|
|ItemFlow [SysML Profile]|[Physical Item Exchange](../concept/concepts.md#Physical-Item-Exchange)|
|ProxyPort contained in SAF_PhysicalItem|[PIPapplyingToAPE](../concept/concepts.md#PIPapplyingToAPE)|
|ProxyPort typed by SAF_PhysicalInterfaceDefinition|[PIPDdefiningDetailOfPIP](../concept/concepts.md#PIPDdefiningDetailOfPIP)|
|ProxyPort [SysML Profile]|[Physical Interaction Point](../concept/concepts.md#Physical-Interaction-Point)|
|[SAF_InterfaceLayerRelationship](../../stereotypes.md#saf_interfacelayerrelationship)|[PCPOverPCP](../concept/concepts.md#PCPOverPCP)|
|[SAF_P1_PCXE](../../stereotypes.md#saf_p1_pcxe)|[Physical Context Exchange Viewpoint](../concept/concepts.md#Physical-Context-Exchange-Viewpoint)|
|[SAF_P1_PCXE_Table](../../stereotypes.md#saf_p1_pcxe_table)|[Physical Context Exchange Viewpoint](../concept/concepts.md#Physical-Context-Exchange-Viewpoint)|
|[SAF_PhysicalEnvironment](../../stereotypes.md#saf_physicalenvironment)|[Physical Environment](../concept/concepts.md#Physical-Environment)|
|[SAF_PhysicalExchangeType](../../stereotypes.md#saf_physicalexchangetype)|[Physical Exchange Kind](../concept/concepts.md#Physical-Exchange-Kind)|
|[SAF_PhysicalExternalSystem](../../stereotypes.md#saf_physicalexternalsystem)|[Physical External System](../concept/concepts.md#Physical-External-System)|
|[SAF_PhysicalInterfaceDefinition](../../stereotypes.md#saf_physicalinterfacedefinition)|[Physical Interaction Point Definition](../concept/concepts.md#Physical-Interaction-Point-Definition)|
|[SAF_PhysicalSystem](../../stereotypes.md#saf_physicalsystem)|[Physical SOI](../concept/concepts.md#Physical-SOI)|
|[SAF_PhysicalUser](../../stereotypes.md#saf_physicaluser)|[Physical User](../concept/concepts.md#Physical-User)|
## Input from other Viewpoints
### Required Viewpoints
* [Physical Context Definition Viewpoint](Physical-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Physical Context Exchange Concept](diagrams/Physical-Context-Exchange-Concept.svg)
## Profile
![Physical Context Exchange Profile](diagrams/Physical-Context-Exchange-Profile.svg)
