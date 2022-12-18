<div align="right">SAF_FFDS#321,SAF_Cameo_Profile#413</div>

# Physical Context Exchange Viewpoint
*Domain:* **Physical** *Aspect:* **Context**
## Example
*none*
## Purpose
The physical context exchange Viewpoint focuses on the identification of the physical interface(s) with external entities and the identification of relevant documentation. It is used to capture interface requirement(s) for IRS, applicable standard(s), protocol(s) and format specification(s) that are agreed upon the interface(s).
NOTE: Trace physical interface(s) to logical interface(s) 
(the physical interface(s) fulfill the exchange requirement(s) stated on logical level)

## Applicability
The physical context exchange Viewpoint supports the “Architecture Definition process” activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.4]. The physical context interface Viewpoint is applied early in the life cycle to generate a complete view of all the relevant external interface(s) together with relevant standard(s). The Viewpoint guides the identification of expected interactions of the SOI with entities external to the SOI (control) boundary as defined in negotiated ICDs. The Viewpoint is used to capture the interface requirement(s) with the relevant Stakeholder(s) and any relevant documentation, requirement(s), standard(s), format specification(s) and protocol(s).
Note:
## Stakeholder
* [System Architect](../stakeholders.md#System-Architect)
* [Software Developer](../stakeholders.md#Software-Developer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Maintainer](../stakeholders.md#Maintainer)
* [Hardware Developer](../stakeholders.md#Hardware-Developer)
## Concern
* What are the interface requirements regarding bandwidth, data throughput and latency?
* How to connect the system or a system element to a test equipment?
* Which SW interfaces are necessary?
* Which interfaces are necessary?
* How does the system or a system element interact with the test environment?
* What are the external physical entities the system interacts with in the respective context?
## Presentation
The following artifact(s) support the modeling activities:
A) For each identified context a physical context interface IBD is used to identify the physical interface(s), the item flow(s) that are exchanged on that interface and related documentation 
B) A physical context interface table provides a list of all the defined external interfaces and the applicable documentation
* context element kind (environment / external entity / physical user)
* context element role name
* port name and reference to port type
* reference to context element type
C) A context interface table is used to define the applicable standard(s), protocol(s) and format(s) for the item flow(s) exchanged via the identified interface(s)

## Profile Model Reference
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
