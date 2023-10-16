![System Architecture Framework](../diagrams/Banner_SAF.png)
# SAF User Documentation : System Use Case Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Released](../diagrams/Symbol_confirmed.png )[released](../using-saf/maturity.md#released)|
## Example
![System-Use-Case-Viewpoint-primary-example.svg](../diagrams/vp-examples/System-Use-Case-Viewpoint-primary-example.svg)
## Purpose
The System Use Case Viewpoint provides an outside view on the system functionality from the perspective of the System Users and contributes to the definition of System Requirements and System Usage. The intended system use may be captured as free text use case description, as well as storytelling approach on a coarse level of detail. The main System Exchange Partners participating in the intended system use are identified. System use cases are related to a specific System Context.
## Applicability
The System Use Case Viewpoint supports the "Stakeholder Needs and Requirements Definition Process", and "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.2 & §4.3] and contributes to the identification of both System Function and System Functional Interface.
## Presentation
A use case diagram featuring model elements representing System Use Cases, System Context and System Context Elements.
Note: System Use Case pre- and postconditions shall be represented either by callout or compartment notation.

A tabular format listing the System Use Cases, the System Use Case pre- and postconditions, the System Context, and the System Context Elements.

## Stakeholder
* [Acquirer](../stakeholders.md#Acquirer)
* [Customer](../stakeholders.md#Customer)
* [IV&V Engineer](../stakeholders.md#IV&V-Engineer)
* [Operator](../stakeholders.md#Operator)
* [Project Manager](../stakeholders.md#Project-Manager)
* [System Architect](../stakeholders.md#System-Architect)
* [User](../stakeholders.md#User)
## Concern
* For what purpose is the system of interest developed or adapted?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* How will the system be used by whom and which contextual elements are involved?
* What the system has to accomplish for its users?
* Which is the system scenario, i.e., course of action, for the context in which the system of interest solution will exist?
* Which users does the system support? 
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
* Attribute "PostConditionStates" of SAF_SystemUseCase referencing State
* Attribute "PreConditionStates" of SAF_SystemUseCase referencing State
* Attribute "subject" of UseCase referencing SAF_LogicalContext
* Include [UML_Standard_Profile]
* State [UML_Standard_Profile]
* [SAF_LogicalContextElementActing](../stereotypes.md#SAF_LogicalContextElementActing)
* [SAF_LogicalContext](../stereotypes.md#SAF_LogicalContext)
* [SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)
* [SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)
* [SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)
* [SAF_SFV01a_View](../stereotypes.md#SAF_SFV01a_View)
* [SAF_SystemUseCaseEnabling](../stereotypes.md#SAF_SystemUseCaseEnabling)
* [SAF_SystemUseCase](../stereotypes.md#SAF_SystemUseCase)
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
