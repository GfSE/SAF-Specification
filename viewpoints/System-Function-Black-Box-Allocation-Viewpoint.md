# System Function Black Box Allocation Viewpoint
*Domain:* **Functional** *Aspect:* **Crossreference and Mapping**
## Example
![FFDS Context Definition Allocation of Usage](../diagrams/FFDS-Context-Definition-Allocation-of-Usage.svg)
## Purpose
The System Function Black Box Allocation Viewpoint specifies the allocation of System Function(s) to the SOI element(s) together with the allocation of Context Function(s) to Context Element(s). It dissects functionality explicitly between the SOI and its environment elements.
## Applicability
The System Function Black Box Allocation Viewpoint supports the "System Requirements Definition process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.3] and contributes to the System Function Definition and the system Functional Interface identification.
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Safety Expert](../stakeholders.md#Safety-Expert)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* What is the functional scope of each system delivery standard?
* What are the Function(s) and service(s) to be implemented?
* What service(s) are expected from external entity(s)?
* What are the System Function(s) and service(s)?
* What Function(s) do the SOI provide?
## Presentation
A System Function Black Box Allocation Matrix featuring
* the Context Element(s) and Context Function(s) and
* the call behavior action representing usage of Context Function(s)
* the part property(s) representing usage of Context Element(s);
* the SOI Element(s) and System Function(s) and
* the call behavior action representing usage of System Function(s)
* the part property(s) representing usage of SOI Element(s)

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|[SAF_FunctionAction](../stereotypes.md#SAF_FunctionAction)|[tbd]|[Functional Usage](../concepts.md#Functional-Usage)|
|Allocate||[performingContextTSK](../concepts.md#performingContextTSK)|
|Allocate||[performingSystemTSK](../concepts.md#performingSystemTSK)|
|Association||[Logical SOI Constituent](../concepts.md#Logical-SOI-Constituent)|
|[SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)|[tbd]|[Logical Context Constituent](../concepts.md#Logical-Context-Constituent)|
|[SAF_LogicalRole](../stereotypes.md#SAF_LogicalRole)|[tbd]|[Logical SOI Constituent](../concepts.md#Logical-SOI-Constituent)|
|Association||[Logical Context Constituent](../concepts.md#Logical-Context-Constituent)|
## Input from other Viewpoints
### Required Viewpoints
* [System Process Viewpoint](System-Process-Viewpoint.md)
### Recommended Viewpoints
* [Operational Process Viewpoint](Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](Operational-Interaction-Viewpoint.md)
* [System Functional Breakdown Viewpoint](System-Functional-Breakdown-Viewpoint.md)
