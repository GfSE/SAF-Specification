![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Interface](../aspects.md#Aspect-Interface)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
![Physical-Interface-Definition-Viewpoint-primary-example.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-1.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-1.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-2.svg](../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-2.svg)
## Purpose
preliminary text - work in progess
The Physical Interface Definition Viewpoint provides definitions for physical interfaces. These definitions are may be reused on different interfaces.
## Applicability
The Physical Interface Definition Viewpoint supports the "Create System Design " activity included in "Design Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 2.3.5.5] and contributes to the System Interface definition.

It also supports the "Interface Management" method of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§ 3.2.4].
## Presentation
A block definition diagram (BDD) featuring Physical Interface blocks with ports and flow properties. Compatibility between Physical Interface blocks is expressed by associations and association blocks. Physical Interface blocks may be specialisations of others (use of Generalisation).
Note: When ports are used these shall be proxy ports and be typed by interface blocks.

A tabular format listing Physical Interface blocks, their ports, and flow properties.

## Stakeholder
## Concern
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* FlowProperty contained in SAF_PhysicalInterfaceDefinition
* FlowProperty [SysML Profile]
* ProxyPort typed by SAF_PhysicalInterfaceDefinition
* ProxyPort [SysML Profile]
* [SAF_PhysicalExchangeType](../stereotypes.md#SAF_PhysicalExchangeType)
* SAF_PhysicalInterfaceDefinition contained in ProxyPort
* [SAF_PhysicalInterfaceDefinition](../stereotypes.md#SAF_PhysicalInterfaceDefinition)
* [SAF_ProtocolLayerRelationship](../stereotypes.md#SAF_ProtocolLayerRelationship)
* [SAF_ProtocolLayerRelationship](../stereotypes.md#SAF_ProtocolLayerRelationship)
* [SAF_SPV05a_View](../stereotypes.md#SAF_SPV05a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
