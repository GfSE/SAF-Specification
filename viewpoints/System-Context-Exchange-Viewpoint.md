![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : System Context Exchange Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-Context-Exchange-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-Context-Exchange-Viewpoint-primary-example.svg)
## Purpose
The System Context Exchange Viewpoint serves for the identification and definition of external interfaces of the SOI used for the interaction to System’s Context, such as Users, External Systems and other External Entities defined in the specific context of the SOI. The System Context Exchange Viewpoint
* identifies System interfaces on a functional level,
* states to which External Entities the System interfaces are connected to,
* assigns Interface Documents to System Interfaces,
* and defines the usage of interfaces, e.g., if only a subset of the interface is used.
## Applicability
The System Context Exchange Viewpoint supports the "Prepare for Requirement Definition" activity included in "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the System Interface definition.
## Presentation
An internal block diagram (IBD) - associated to the System Context - featuring the SOI, the System Context Elements, and the connectors for each identified interface from SOI to the respective Context Elements. An interface is a connection resource for hooking on the SOI to other Context Elements. Item flows are defined for each exchange on the identified Interface. Connectors/ports may contain reference to the Interface Documents if applicable. Ports may be structured as appropriate to manage and structure the information.
Note: more than one IBD focused on different areas of interest may be used in oder to keep the view comprehensive. Depending on the Stakeholder Concerns the Item Exchange information might be suppressed.

A tabular format listing [tbd].

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How is the system interacting with the identified external entities?
* What are the Interface Requirements imposed on the system?
* What are the external conceptual entities the system interacts with in the respective context?
* What are the functional interfaces of the system?
* What kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Connector [UML_Standard_Profile]
* FlowProperty [SysML Profile]
* ItemFlow [SysML Profile]
* ProxyPort [SysML Profile]
* SAF_LogicalContextRole contained in SAF_LogicalContext
* [SAF_DomainKind](../stereotypes.md#SAF_DomainKind)
* [SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)
* [SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)
* [SAF_LogicalSOI](../stereotypes.md#SAF_LogicalSOI)
* [SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)
* [SAF_SFV01c_View](../stereotypes.md#SAF_SFV01c_View)
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
* [System Domain Item Kind Viewpoint](System-Domain-Item-Kind-Viewpoint.md)
### Recommended Viewpoints
* [Operational Domain Item Kind Viewpoint](Operational-Domain-Item-Kind-Viewpoint.md)
