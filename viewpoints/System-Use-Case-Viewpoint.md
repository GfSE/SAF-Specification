![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : **F1_SUCS** System Use Case Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-Use-Case-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-Use-Case-Viewpoint-primary-example.svg)
![System-Use-Case-Viewpoint-primary-example-1.svg](../diagrams/vp-examples/System-Use-Case-Viewpoint-primary-example-1.svg)
## Purpose
The System Use Case Viewpoint provides an outside view on the system functionality from the perspective of the system users and contributes to the definition of system requirements and system usage. The intended system use may be captured as free-text use case description, as well as storytelling approach on a coarse level of detail. The main system exchange partners participating in the intended system use are identified. System use cases are related to a specific system context. System use cases are derived from operational scenarios elaborated during mission analysis.
## Applicability
The System Use Case Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" and the "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.2, §2.3.5.3] and contributes to the definition of the system boundary and the identification of the expected system function.
## Presentation
A use case diagram featuring model elements representing System Use Cases, System Context, and System Context Elements. The System Context shall be used as subject of the use case. The System Context Elements playing a Role in the Use Case shall be connected to the Use Case by associations.
Note: System Use Case pre- and postconditions shall be represented either by callout or compartment notation.
Relationship to operational stories can be related to the use case in order trace to mission analysis.

A tabular format listing the System Use Cases, the System Use Case pre- and postconditions, the System Context, and the System Context Elements. Additionaly, the relationship to operational stories, if applicable.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Operator](../stakeholders.md#Operator)
* [Project Manager](../stakeholders.md#Project-Manager)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* [For what purpose is the system developed or adapted?](../concerns.md#_2021x_2_6d8019d_1674945898325_22078_35809)
* [How is the system being used or utilized and interacting with other external systems to satisfy user needs?](../concerns.md#_2021x_2_8710274_1674576758841_451500_23327)
* [What has the system to accomplish for its users?](../concerns.md#_2021x_2_8710274_1697469571914_800497_36599)
* [Which are the system scenarios, i.e., course of action, for the system context in which the system solution will exist?](../concerns.md#_2021x_2_6d8019d_1674922633861_96675_24986)
* [Which users does the system support? ](../concerns.md#_2021x_2_6d8019d_1675459822996_961402_23325)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Attribute "PostConditionStates" of SAF_SystemUseCase referencing State
* Attribute "PreConditionStates" of SAF_SystemUseCase referencing State
* Attribute "subject" of UseCase referencing SAF_LogicalContext
* Include [UML_Standard_Profile]
* State [UML_Standard_Profile]
* [SAF_F1_SUCS](../stereotypes.md#saf_f1_sucs)
* [SAF_F1_SUCS_Table](../stereotypes.md#saf_f1_sucs_table)
* [SAF_LogicalContextElementActing](../stereotypes.md#saf_logicalcontextelementacting)
* [SAF_LogicalContext](../stereotypes.md#saf_logicalcontext)
* [SAF_LogicalEnvironment](../stereotypes.md#saf_logicalenvironment)
* [SAF_LogicalExternalSystem](../stereotypes.md#saf_logicalexternalsystem)
* [SAF_LogicalUser](../stereotypes.md#saf_logicaluser)
* [SAF_SystemUseCaseEnabling](../stereotypes.md#saf_systemusecaseenabling)
* [SAF_SystemUseCase](../stereotypes.md#saf_systemusecase)
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
