<div align="right">SAF_FFDS#245,SAF_Cameo_Profile#345</div>

# Operational Process Viewpoint
*Domain:* **Operational** *Aspect:* **Behavior**
## Example
![Fire Detection and Notification Process](../diagrams/Fire-Detection-and-Notification-Process.svg)
## Purpose
The Operational Process Viewpoint describes the Operational Process Activity(s) related to a specific Operational Story, the sequence of execution and/or their operational exchange. The assignment of Operational Process Activity(s) to Operational Performer(s) is captured.
## Applicability
The Operational Process Viewpoint supports the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2] and contributes to the definition of operational scenario(s).
Note:
## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [Supplier](../stakeholders.md#Supplier)
* [System Architect](../stakeholders.md#System-Architect)
## Concern
* Which Operational Activity shall be executed by which Operational Performer in the Operational Story?
* What Operational Process Activity(s) shall be executed during the execution of an Operational Story?
## Presentation
The Operational Process related to an Operational Story is represented in an activity diagram showing the ordered execution of Operational Process Activity(s). Operational Process Activity(s) may be linked in terms of control flow and/or data flow visualizing Operational Exchange needed. 
Note: Operational Process Activity(s) are assigned to Operational Role(s) and therefore in a more general manner to the Operational Performer(s).

## Profile Model Reference
|Stereotype | Description|realized Concept
|---|---|---|
|Allocate||[performingTSK](../concepts.md#performingTSK)|
|InputPin||[TO](../concepts.md#TO)|
|ObjectFlow||[Operational Process Exchange](../concepts.md#Operational-Process-Exchange)|
|OutputPin||[FROM](../concepts.md#FROM)|
|[SAF_OperationalProcessAction](../stereotypes.md#SAF_OperationalProcessAction)|[tbd]|[Operational Process Usage](../concepts.md#Operational-Process-Usage)|
|ControlFlow||[controlledAFTER](../concepts.md#controlledAFTER)|
|[SAF_OV03a_OperationalProcessDiagram](../stereotypes.md#SAF_OV03a_OperationalProcessDiagram)|[tbd]|[Operational Process Viewpoint](../concepts.md#Operational-Process-Viewpoint)|
|[SAF_OperationalProcess](../stereotypes.md#SAF_OperationalProcess)|[tbd]|[Operational Process](../concepts.md#Operational-Process)|
|[SAF_OperationalPerformer](../stereotypes.md#SAF_OperationalPerformer)|[tbd]|[Operational Performer](../concepts.md#Operational-Performer)|
|[SAF_OperationalRole](../stereotypes.md#SAF_OperationalRole)|[tbd]|[Operational Context Constituent](../concepts.md#Operational-Context-Constituent)|
## Input from other Viewpoints
### Required Viewpoints
* [Operational Context Exchange Viewpoint](Operational-Context-Exchange-Viewpoint.md)
### Recommended Viewpoints
*none*
