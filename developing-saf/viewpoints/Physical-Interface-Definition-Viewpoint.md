![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Physical Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../../domains.md#Domain-Physical)|[Interface](../../aspects.md#Aspect-Interface)|![Under Construction](../../diagrams/Under_construction_icon-yellow.svg )[under construction](../../using-saf/maturity.md#under-construction)|
## Example
![Physical-Interface-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-1.svg)
![Physical-Interface-Definition-Viewpoint-primary-example-2.svg](../../diagrams/vp-examples/Physical-Interface-Definition-Viewpoint-primary-example-2.svg)
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
|Stereotype | realized Concept|
|---|---|
|FlowProperty contained in SAF_PhysicalInterfaceDefinition|[PCPspecifyingDetailOfPCPD](../concept/concepts.md#PCPspecifyingDetailOfPCPD)|
|FlowProperty [SysML Profile]|[Physical Connection Point Property](../concept/concepts.md#Physical-Connection-Point-Property)|
|ProxyPort typed by SAF_PhysicalInterfaceDefinition|[PCPDdefiningPCP](../concept/concepts.md#PCPDdefiningPCP)|
|ProxyPort [SysML Profile]|[Physical Connection Point](../concept/concepts.md#Physical-Connection-Point)|
|[SAF_PhysicalExchangeType](../../stereotypes.md#SAF_PhysicalExchangeType)|[Physical Exchange Kind](../concept/concepts.md#Physical-Exchange-Kind)|
|SAF_PhysicalInterfaceDefinition contained in ProxyPort|[PCPisPartOfPCPD](../concept/concepts.md#PCPisPartOfPCPD)|
|[SAF_PhysicalInterfaceDefinition](../../stereotypes.md#SAF_PhysicalInterfaceDefinition)|[Physical Connection Point Definition](../concept/concepts.md#Physical-Connection-Point-Definition)|
|[SAF_ProtocolLayerRelationship](../../stereotypes.md#SAF_ProtocolLayerRelationship)|[PCPOverPCP](../concept/concepts.md#PCPOverPCP)|
|[SAF_ProtocolLayerRelationship](../../stereotypes.md#SAF_ProtocolLayerRelationship)|[PCPPOverPCPP](../concept/concepts.md#PCPPOverPCPP)|
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
