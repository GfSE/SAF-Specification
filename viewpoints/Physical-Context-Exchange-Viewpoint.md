![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Context Exchange Viewpoint
*Domain:* [Physical](../domains.md#Domain-Physical) *Aspect:* [Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)
## Example
*none*
## Purpose
The physical context exchange Viewpoint focuses on the identification of the physical interfaces with external entities and the identification of relevant documentation. It is used to capture interface requirements for IRS, applicable standards, protocols and format specifications that are agreed upon the interfaces.
Note: Trace physical interfaces to logical interfaces 
(the physical interfaces fulfill the exchange requirements stated on Logical Level)
## Applicability
The physical context exchange Viewpoint supports the “Architecture Definition process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. The physical context interface Viewpoint is applied early in the life cycle to generate a complete view of all the relevant external interface(s) together with relevant standard(s). The Viewpoint guides the identification of expected interactions of the SOI with entities external to the SOI (control) boundary as defined in negotiated ICDs. The Viewpoint is used to capture the interface requirement(s) with the relevant Stakeholder(s) and any relevant documentation, requirement(s), standard(s), format specification(s) and protocol(s).
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [Software Developer](../stakeholders.md#Software-Developer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* How does the system or a system element interact with the test environment?
* How to connect the system or a system element to a test equipment?
* What are the external physical entities the system interacts with in the respective context?
* What are the interface requirements regarding bandwidth, data throughput and latency?
* Which HW interfaces are necessary?
* Which SW interfaces are necessary?
* Which interface partners does a HW item have?
* Which interface partners does a SW item have?
## Presentation
The following artifact(s) support the modeling activities:
A) For each identified context a physical context interface IBD is used to identify the physical interface(s), the item flow(s) that are exchanged on that interface and related documentation.
B) A physical context interface table provides a list of all the defined external interfaces and the applicable documentation
* context element kind (environment / external entity / physical user)
* context element role name
* port name and reference to port type
* reference to context element type
C) A context interface table is used to define the applicable standard(s), protocol(s) and format(s) for the item flow(s) exchanged via the identified interface(s).

## Profile Model Reference
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
