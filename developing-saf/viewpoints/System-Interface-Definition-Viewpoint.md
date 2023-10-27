![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : System Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../../domains.md#Domain-Functional)|[Interface](../../aspects.md#Aspect-Interface)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![System-Interface-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/System-Interface-Definition-Viewpoint-primary-example.svg)
## Purpose
The System Interface Definition Viewpoint captures system wide concepts defining interfaces. It allows to adopt long-lived standards and to harmonize the interface definitions to improve interchangeability, interoperability, and portability.
## Applicability
The System Interface Definition Viewpoint supports the "Prepare for Interface Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§2.3.5.3] and contributes to the System Interface definition.
## Presentation
A block definition diagram (BDD) featuring System Interface blocks with ports, and flow properties.

A tabular format listing System Interface blocks, their ports, and flow properties.

## Stakeholder
* [Hardware Developer](../../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../../stakeholders.md#IV&V-Engineer)
* [Security Expert](../../stakeholders.md#Security-Expert)
* [Software Developer](../../stakeholders.md#Software-Developer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* [Which standards, protocols, and format specifications are associated with a specific interface?](../../concerns.md#_2021x_2_8710274_1674576758891_215548_23373)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Attribute "realizingConnector" of InformationFlow referencing Connector|[LCNallowingLIE](../concept/concepts.md#LCNallowingLIE)|
|Connector [UML_Standard_Profile]|[Logical Connection](../concept/concepts.md#Logical-Connection)|
|FlowProperty contained in SAF_ConceptualInterfaceDefinition|[LCPPspecifyingDetailOfLCPD](../concept/concepts.md#LCPPspecifyingDetailOfLCPD)|
|FlowProperty typed by SAF_DomainKind|[SDKtypingLCPP](../concept/concepts.md#SDKtypingLCPP)|
|FlowProperty [SysML Profile]|[Logical Connection Point Property](../concept/concepts.md#Logical-Connection-Point-Property)|
|ItemFlow typed by SAF_DomainKind|[SDKtypingLIE](../concept/concepts.md#SDKtypingLIE)|
|ItemFlow [SysML Profile]|[Logical Item Exchange](../concept/concepts.md#Logical-Item-Exchange)|
|ProxyPort typed by SAF_ConceptualInterfaceDefinition|[LCPDdefiningDetailOfLCP](../concept/concepts.md#LCPDdefiningDetailOfLCP)|
|ProxyPort [SysML Profile]|[Logical Connection Point](../concept/concepts.md#Logical-Connection-Point)|
|[SAF_ConceptualInterfaceDefinition](../../stereotypes.md#SAF_ConceptualInterfaceDefinition)|[Logical Connection Point Definition](../concept/concepts.md#Logical-Connection-Point-Definition)|
|[SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)|[System Domain Kind](../concept/concepts.md#System-Domain-Kind)|
|[SAF_SFV05a_View](../../stereotypes.md#SAF_SFV05a_View)|[System Interface Definition Viewpoint](../concept/concepts.md#System-Interface-Definition-Viewpoint)|
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
