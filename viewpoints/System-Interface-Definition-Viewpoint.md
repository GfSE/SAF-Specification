![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : System Interface Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Interface](../aspects.md#Aspect-Interface)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-Interface-Definition-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-Interface-Definition-Viewpoint-primary-example.svg)
## Purpose
The System Interface Definition Viewpoint captures system wide concepts defining interfaces. It allows to adopt long-lived standards and to harmonize the interface definitions to improve interchangeability, interoperability, and portability.
## Applicability
The System Interface Definition Viewpoint supports the "Prepare for Interface Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§2.3.5.3] and contributes to the System Interface definition.
## Presentation
A block definition diagram (BDD) featuring System Interface blocks with ports, and flow properties.

A tabular format listing System Interface blocks, their ports, and flow properties.

## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which standards, protocols, and format specifications are associated with a specific interface?
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
* [SAF_ConceptualInterfaceDefinition](../stereotypes.md#SAF_ConceptualInterfaceDefinition)
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_SFV05a_View](../stereotypes.md#SAF_SFV05a_View)
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
