![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Common Standards Definition Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Common](../../domains.md#Domain-Common)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Proposed](../../diagrams/Under_construction_icon-red.svg )[proposed](../../using-saf/maturity.md#proposed)|
## Example
![Common-Standards-Definition-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Common-Standards-Definition-Viewpoint-primary-example.svg)
![Common-Standards-Definition-Viewpoint-primary-example-1.svg](../../diagrams/vp-examples/Common-Standards-Definition-Viewpoint-primary-example-1.svg)
## Purpose
The Standards Definition Viewpoint supports the definition of applicable standards, e.g., format and protocol specifications, regulations, and engineering documents that are used throughout the system life cycle. It provides the meta-data for the applied standards, guidance and policy, e.g., issue, version, issue date, and publisher. The Viewpoint helps to keep track of changes to the set of applicable documents and of new versions of applied standards. Links should be used to refer to documents external to the architecture description.
## Applicability
The Standards Definition Viewpoint supports the "transform stakeholder needs into stakeholder requirements" activity part of the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2023 [§2.3.5.2].
## Presentation
A block definition diagram (BDD) featuring the taxonomy of types of technical, operational, and business standards, guidance, and policy applicable to the system of interest.

A table format lsiting technical, operational, and business standards, guidance, and policy applicable to the system of interest.

## Stakeholder
## Concern
* [Which are the relevant releases of the applicable standards, guidance, and policy to be used for the development of the system of interest and its system elements?](../../concerns.md#_2021x_2_8710274_1700821579663_211989_58619)
* [Which other standards are referenced or referred to by applicable standards?](../../concerns.md#_2021x_2_8710274_1700821592720_121043_58626)
* [Which standards, guidance, and policy are applicable to the system of interest or its system elements and their interfaces and interactions?](../../concerns.md#_2021x_2_8710274_1700821558610_489259_58612)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|Generalization [UML_Standard_Profile]|[SDTcoveringSBS](../concept/concepts.md#SDTcoveringSBS)|
|PartProperty [MD_customization_for_SysML]|[SDTincludingSDT](../concept/concepts.md#SDTincludingSDT)|
|[SAF_SCV02c_View](../../stereotypes.md#SAF_SCV02c_View)|[Common Standards Definition Viewpoint](../concept/concepts.md#Common-Standards-Definition-Viewpoint)|
|[SAF_Standard](../../stereotypes.md#SAF_Standard)|[Standard](../concept/concepts.md#Standard)|
|[SAF_StandardSuperseding](../../stereotypes.md#SAF_StandardSuperseding)|[SDTsupersedingSDT](../concept/concepts.md#SDTsupersedingSDT)|
|[SAF_StandardizationOrganization](../../stereotypes.md#SAF_StandardizationOrganization)|[Standardization Organization](../concept/concepts.md#Standardization-Organization)|
|[SAF_StandardizationSubject](../../stereotypes.md#SAF_StandardizationSubject)|[Subject of Standardization](../concept/concepts.md#Subject-of-Standardization)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Common Standards Definition Concept](diagrams/Common-Standards-Definition-Concept.svg)
## Profile
![Common Standards Definition Profile](diagrams/Common-Standards-Definition-Profile.svg)
