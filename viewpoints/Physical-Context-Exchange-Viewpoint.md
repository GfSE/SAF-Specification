![System Architecture Framework](../diagrams/Logo_SAF.png)
# Physical Context Exchange Viewpoint
*Domain:* **Physical** *Aspect:* **Context & Exchange**
## Example
![Physical Context Exchanges](../diagrams/Physical-Context-Exchange.png)
## Purpose
The physical context exchange Viewpoint focuses on the identification of the physical interface(s) with external entities and the identification of relevant documentation. It is used to capture interface requirement(s) for IRS, applicable standard(s), protocol(s) and format specification(s) that are agreed upon the interface(s).

Note: Trace physical interface(s) to logical interface(s) 
(the physical interface(s) fulfill the exchange requirement(s) stated on logical level)
## Applicability
The physical context exchange viewpoint supports the “Architecture Definition process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. 
The physical context exchange viewpoint is applied early in the life cycle to generate a complete view of all the relevant external interface(s) together with relevant standard(s).
The viewpoint guides the identification of expected interactions of the system with entities external to its system (control) boundary as defined in negotiated ICDs.
The viewpoint is used to capture the interface requirement(s) with the relevant stakeholder(s) and any relevant documentation, requirement(s), standard(s), format specification(s) and protocol(s).
## Stakeholder
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Software Developer](../stakeholders.md#Software-Developer)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What are the external physical entities the system interacts with in the respective context?
* What are the interface requirements regarding bandwidth, data throughput and latency?
* Which SW interfaces are necessary?
* Which interfaces are necessary?
* How does the system or a system element interact with the test environment?
* How to connect the system or a system element to a test equipment?
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
[Physical Context Definition Viewpoint](Physical-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
*none*
