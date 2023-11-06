![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Interface](../../aspects.md#Aspect-Interface)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Physical-Interface-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-1.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-2.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-2.svg)
## Purpose
The Physical Interface Definition Viewpoint provides definitions for physical interfaces. These definitions are may be reused on different interfaces.
## Applicability
The Physical Interface Definition Viewpoint supports the "Create System Design " activity included in "Design Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 2.3.5.5] and contributes to the System Interface definition.

It also supports the "Interface Management" method of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 3.2.4].
## Presentation
A block definition diagram (BDD) featuring Physical Interface blocks with ports and flow properties. Compatibility between Physical Interface blocks is expressed by associations and association blocks. Physical Interface blocks may be specialisations of others (use of Generalisation).
Note: When ports are used these shall be proxy ports and be typed by interface blocks.

A tabular format listing Physical Interface blocks, their ports, and flow properties.

## Stakeholder
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [Mechanic Developer](../../stakeholders.md#Mechanic-Developer)
* [Safety Expert](../../stakeholders.md#Safety-Expert)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [What are the protocols used for exchanging information?](../../concerns.md#_2021x_2_8710274_1674576759093_319282_23509)
* [Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the systemI?](../../concerns.md#_2021x_2_8710274_1697542838788_945785_24608)
* [what are the interface definitions for the physical architecture](../../concerns.md#_2021x_2_8710274_1698695280731_979013_48719)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|FlowProperty contained in SAF_PhysicalInterfaceDefinition|[PIPPspecifyingDetailOfPIPD](../concept/concepts.md#PIPPspecifyingDetailOfPIPD)|
|FlowProperty [SysML Profile]|[Physical Interaction Point Property](../concept/concepts.md#Physical-Interaction-Point-Property)|
|ProxyPort typed by SAF_PhysicalInterfaceDefinition|[PIPDdefiningDetailOfPIP](../concept/concepts.md#PIPDdefiningDetailOfPIP)|
|ProxyPort [SysML Profile]|[Physical Interaction Point](../concept/concepts.md#Physical-Interaction-Point)|
|[SAF_InterfaceLayerRelationship](../../stereotypes.md#SAF_InterfaceLayerRelationship)|[PCPOverPCP](../concept/concepts.md#PCPOverPCP)|
|[SAF_InterfaceLayerRelationship](../../stereotypes.md#SAF_InterfaceLayerRelationship)|[PCPPOverPCPP](../concept/concepts.md#PCPPOverPCPP)|
|[SAF_PhysicalExchangeType](../../stereotypes.md#SAF_PhysicalExchangeType)|[Physical Exchange Kind](../concept/concepts.md#Physical-Exchange-Kind)|
|SAF_PhysicalInterfaceDefinition contained in ProxyPort|[PCPisPartOfPCPD](../concept/concepts.md#PCPisPartOfPCPD)|
|[SAF_PhysicalInterfaceDefinition](../../stereotypes.md#SAF_PhysicalInterfaceDefinition)|[Physical Interaction Point Definition](../concept/concepts.md#Physical-Interaction-Point-Definition)|
|[SAF_SPV05a_View](../../stereotypes.md#SAF_SPV05a_View)|[Physical Interface Definition Viewpoint](../concept/concepts.md#Physical-Interface-Definition-Viewpoint)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Physical Interface Definition Concept](diagrams/Physical-Interface-Definition-Concept.svg)
## Profile
![Physical Interface Definition Profile](diagrams/Physical-Interface-Definition-Profile.svg)
