![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : Physical Protocol Stack Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Physical](../domains.md#Domain-Physical)|[Interface](../aspects.md#Aspect-Interface)|![Under Construction](../diagrams/Under_construction_icon-yellow.svg )[under construction](../using-saf/maturity.md#under-construction)|
## Example
![Physical Protocol Stack Definition](../diagrams/Physical-Protocol-Stack-Definition.png)
## Purpose
The Physical Protocol Stack Definition Viewpoint provides the definitions for formats and protocols used on top of physical interfaces to exchange information entities. These definitions may be reused for different interfaces.

In the context of complex exchanges between system elements in information technology (IT) systems, a protocol is seen as a physical interface that carries exchanges of data (acc. INCOSE Hdbk, §4.4.2.5 Notion of Interfaces). 

Protocol and format standards are defined in SCV02 Common Standards Definition. For transferring data via an interface several protocol standards may be available. One or more protocols are used to transfer the information, while a higher level protocol relies on the services of a lower level protocol that ends not before the physical layer defining the technology how data is transferred via a physical media. 

This protocol stacks are structured e.g. according to the Open Systems Interconnection model (OSI model) standardized by ISO/IEC. The SPV05c Protocol Stack Definition defines protocol stacks that are used to exchange data or information items. The defined protocol stacks are utilized in interface identification.

*See:*
**ISO/IEC 7498-1:1994**  Information technology -- Open Systems Interconnection -- Basic Reference Model: The Basic Model
"Publicly Available Standards". Standards.iso.org. Retrieved 04 January 2020.
## Applicability
The SPV05c Protocol Stack Definition viewpoint is applied as a starting point in modelling the details of physical interfaces.
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Security Expert](../stakeholders.md#Security-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What protocol stacks are used to transfer data items and information via a physical interface?
* What are the different protocols constituting a protocol stack?
## Presentation
The following artifact(s) support the modeling activities:
* ProtocolStack represents the protocol stack itself
* transfers dependency to indicate the items a protocol stack is used to exchange
* over dependency indicates elements an protocols of a stack
* composition relationship(s) attaching a protocol standard to a protocol stack

## Profile Model Reference
* SAF_ProtocolItem
* SAF_ProtocolStack
* SAF_ProtocolStandard
* SAF_FormatStandard
* SAF_InterfaceContract
* SAF_FlowDefinition
* AppliedStandard
* transfer
* over
## Input from other Viewpoints
### Required Viewpoints
* [Common-Standards-Definition-Viewpoint](Common-Standards-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
