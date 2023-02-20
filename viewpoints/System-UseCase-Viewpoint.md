![System Architecture Framework](../diagrams/Logo_SAF.png)
# System UseCase Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Functional](../domains.md#Domain-Functional)|[Context & Exchange](../aspects.md#Aspect-Context-&-Exchange)|![Released](../diagrams/Symbol_confirmed.svg.png )[released](../using-saf/maturity.md#released)|
## Example
![FFDS Use Case A Day in Life of the System](../diagrams/FFDS-Use-Case-A-Day-in-Life-of-the-System.svg)
## Purpose
The System UseCase Viewpoint provides an outside view on the System Functionality from the perspective of the System User(s) and contributes to the definition of System Requirement(s) and System Usage. The intended system use may be captured as free text use case description, a storytelling approach on a coarse detail level. The main System Exchange Partner(s) participating in the intended system use are identified. System use case(s) are related to a specific System Context.
## Applicability
The Sytem Story Viewpoint supports the "Stakeholder Needs and Requirements Definition Process" and "System Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§4.2 & §4.3] and contributes to the System Function Identification.
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
* Which is the system scenario, i.e., course of action, for the context in which the system of interest solution will exist?
* Which users does the system support? What the system has to accomplish for these users?
## Presentation
A use case diagram depicting model elements representing System Story(s) and System Context Element(s) shall be used.

## Profile Model Reference
* Include [UML_Standard_Profile]
* [SAF_LogicalContextElementActing](../stereotypes.md#SAF_LogicalContextElementActing)
* [SAF_LogicalEnvironment](../stereotypes.md#SAF_LogicalEnvironment)
* [SAF_LogicalExternalSystem](../stereotypes.md#SAF_LogicalExternalSystem)
* [SAF_LogicalUser](../stereotypes.md#SAF_LogicalUser)
* [SAF_SFV01a_View](../stereotypes.md#SAF_SFV01a_View)
* [SAF_SystemUseCase](../stereotypes.md#SAF_SystemUseCase)
* [SAF_SystemUseCase](../stereotypes.md#SAF_SystemUseCase)
* [SAF_SystemUseCase](../stereotypes.md#SAF_SystemUseCase)
* [SAF_SystemUseCase](../stereotypes.md#SAF_SystemUseCase)
* [SAF_SystemUseCaseContribution](../stereotypes.md#SAF_SystemUseCaseContribution)
## Input from other Viewpoints
### Required Viewpoints
* [System Context Definition Viewpoint](System-Context-Definition-Viewpoint.md)
### Recommended Viewpoints
* [Operational Context Definition Viewpoint](Operational-Context-Definition-Viewpoint.md)
