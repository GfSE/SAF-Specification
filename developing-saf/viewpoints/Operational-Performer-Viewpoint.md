![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Operational Performer Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Operational](../../domains.md#Domain-Operational)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Operational-Performer-Viewpoint-primary-example.svg](../../vp-examples/Operational-Performer-Viewpoint-primary-example.svg)
## Purpose
The Operational Performer Viewpoint represents the taxonomy of the identified Operational Performers, if existing and relevant for the understanding of the operation of the intended solution. 
## Applicability
The Operational Performer Viewpoint supports the "Business or Mission Analysis Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1] and contributes to the problem or opportunity statement.
## Presentation
A block definition diagram (BDD) featuring Operational Performers. and their relations in terms of decomposition or generalization at a level of detail required for problem understanding and analysis. 
Note: Identified Stakeholders are related to Operational Performers if appropriate.

## Stakeholder
* [Acquirer](../../stakeholders.md#Acquirer)
* [Customer](../../stakeholders.md#Customer)
* [System Architect](../../stakeholders.md#System-Architect)
## Concern
* What are the relationships between the partys involved in the operation of the intended solution?
* What partys of the organization, enterprise, or operational entity are needed to achieve an intended operational capability?
* Which Operational Performer will operate or run the system?
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)|[Operational Performer](../concept/concepts.md#Operational-Performer)|
|[SAF_OperationalPerformerComposition](../../stereotypes.md#SAF_OperationalPerformerComposition)|[OPRcomposedOF](../concept/concepts.md#OPRcomposedOF)|
|[SAF_OperationalStakeholderRepresentation](../../stereotypes.md#SAF_OperationalStakeholderRepresentation)|[SSHrepresentingOPR](../concept/concepts.md#SSHrepresentingOPR)|
|[SAF_SOV02b_View](../../stereotypes.md#SAF_SOV02b_View)|[Operational Performer Viewpoint](../concept/concepts.md#Operational-Performer-Viewpoint)|
|[SAF_Stakeholder](../../stereotypes.md#SAF_Stakeholder)|[System of Interest Stakeholder](../concept/concepts.md#System-of-Interest-Stakeholder)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Operational Performer Concept](diagrams/Operational-Performer-Concept.svg)
## Profile
![Operational Performer Profile](diagrams/Operational-Performer-Profile.svg)
