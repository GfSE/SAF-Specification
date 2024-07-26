![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **P5_PIFD** Physical Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Interface](../aspects.md#Aspect-Interface)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Physical-Interface-Definition-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-1.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-1.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-2.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-2.svg)
## Purpose
The Physical Interface Definition Viewpoint captures definitions for physical interfaces. It allows to adopt long-lived standards and to harmonize physical interface definitions to improve interchangeability, interoperability, and portability.
## Applicability
The Physical Interface Definition Viewpoint supports the "create system design" activity included in the "Design Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.5] and contributes to the artifact "System Interface Definition".

Furthermore, the viewpoint supports the "Interface Management" approach of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§3.2.4].
## Presentation
A block definition diagram (BDD) featuring Physical Interface blocks with ports, and flow properties. Compatibility between Physical Interface blocks is expressed by associations and association blocks. Physical Interface blocks may be specialisations of others (use of generalisation).
Note: When ports are used these shall be proxy ports and be typed by interface blocks.

A tabular format listing Physical Interface blocks, their ports, and flow properties.

## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [Mechanic Developer](../stakeholders.md#Mechanic-Developer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [Which are the interface definitions for the physical architecture?](../concerns.md#_2021x_2_8710274_1698695280731_979013_48719)
* [Which are the protocols used for exchanging information?](../concerns.md#_2021x_2_8710274_1674576759093_319282_23509)
* [Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system?](../concerns.md#_2021x_2_8710274_1697542838788_945785_24608)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* FlowProperty [SysML Profile]
* FlowProperty contained in SAF_PhysicalInterfaceDefinition
* FlowProperty typed by SAF_PhysicalExchangeType
* ProxyPort [SysML Profile]
* ProxyPort typed by SAF_PhysicalInterfaceDefinition
* SAF_PhysicalInterfaceDefinition contained in ProxyPort
* [SAF_InterfaceLayerRelationship](../stereotypes.md#saf_interfacelayerrelationship)
* [SAF_P5_PIFD](../stereotypes.md#saf_p5_pifd)
* [SAF_PhysicalExchangeType](../stereotypes.md#saf_physicalexchangetype)
* [SAF_PhysicalInterfaceDefinition](../stereotypes.md#saf_physicalinterfacedefinition)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
