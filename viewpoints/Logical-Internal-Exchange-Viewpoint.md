![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **L4_LIEX** Logical Internal Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Logical](../domains.md#Domain-Logical)|[Interaction & Collaboration](../aspects.md#Aspect-Interaction-&-Collaboration)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![Logical-Internal-Exchange-Viewpoint-primary-example.svg](../diagrams/vp-examples/Logical-Internal-Exchange-Viewpoint-primary-example.svg)
## Purpose
The Logical Internal Exchange Viewpoint serves for the identification and definition of interfaces of elements of the logical system. also, the delegation of system element interfaces to the logical system boundary interfaces is covered.
The Logical Internal Exchange Viewpoint
* identifies system element interfaces on a logical level
* states to which other logical elements the interfaces are connected to
* assigns conceptual interface definitions to interfaces
* defines the usage of interfaces, e.g., if only a subset of the interfaces is used 
* defines the delegation of logical system element interfaces to the logical system boundary interfaces
## Applicability
The Logical Internal Exchange Viewpoint supports the "System Architecture Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.4] and contributes to the artifacts "System Architecture Description" and "System Interface Definition".
## Presentation
One or more IBDs featuring the SOI boundary, the logical elements of the SOI, as well as the connectors for each identified SOI interface delegation to logical SOI elements. An interface is a connection resource for hooking on the logical SOI elements to other logical SOI elements. Item flows are defined for each exchange on the identified interface.
Note: Please use more than one IBD focused on different areas of interest to keep the view comprehensive.

## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* [How do the logical system elements interact to provide the system functions?](../concerns.md#_2021x_2_8710274_1674576758760_611640_23247)
* [What are the items exchanged between logical system elements during an interaction?](../concerns.md#_2021x_2_8710274_1674576758991_165534_23433)
* [Which conceptual items (energy, material, information, etc.) are exchanged within the system?](../concerns.md#_2021x_2_8710274_1674576758825_79081_23317)
* [Which requirements apply to a logical interface?](../concerns.md#_2021x_2_8710274_1674576758878_612030_23357)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Attribute "realizingConnector" of InformationFlow referencing Connector
* Connector [UML_Standard_Profile]
* FlowProperty [SysML Profile]
* FlowProperty contained in SAF_ConceptualInterfaceDefinition
* FlowProperty typed by SAF_DomainKind
* ItemFlow [SysML Profile]
* ItemFlow typed by SAF_DomainKind
* ProxyPort [SysML Profile]
* ProxyPort typed by SAF_ConceptualInterfaceDefinition
* [SAF_ConceptualInterfaceDefinition](../stereotypes.md#saf_conceptualinterfacedefinition)
* [SAF_DomainKind](../stereotypes.md#saf_domainkind)
* [SAF_L4_LIEX](../stereotypes.md#saf_l4_liex)
* [SAF_LogicalElement](../stereotypes.md#saf_logicalelement)
## Input from other Viewpoints
### Required Viewpoints
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
* [Logical Structure Definition Viewpoint](Logical-Structure-Definition-Viewpoint.md)
### Recommended Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
* [System Functional Refinement Viewpoint](System-Functional-Refinement-Viewpoint.md)
