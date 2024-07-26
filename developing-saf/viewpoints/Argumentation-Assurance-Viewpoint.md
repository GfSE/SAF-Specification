![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : **C2_ARAS** Argumentation Assurance Viewpoint
|**Domain**|**Aspect**|**Maturity**|
| --- | --- | --- |
|[Common](../../domains.md#Domain-Common)|[Taxonomy & Structure](../../aspects.md#Aspect-Taxonomy-&-Structure)|![Released](../../diagrams/Symbol_confirmed.png )[released](../../using-saf/maturity.md#released)|
## Example
![Argumentation-Assurance-Viewpoint-primary-example.svg](../../diagrams/vp-examples/Argumentation-Assurance-Viewpoint-primary-example.svg)
## Purpose
The Argumentation Assurance Viewpoint presents claims backed up by arguments that are supported by evidence, together with the possibility to counter such claims in a similar manner.
## Applicability
The Argumentation Assurance Viewpoint supports the ability to present an evidence pattern, a structure of claims, arguments, and evidence, which is a common need in systems engineering. It applies equally to the establishment of traceability, definition of safety assurance cases, and even the presentation of business cases.
## Presentation
A block definition diagram (BDD) featuring a claim-argument-evidence pattern (CAE).

## Stakeholder
## Concern
* [How is a evidence-based claim supported?](../../concerns.md#_2021x_2_8710274_1674576758703_316775_23176)
## Profile Model Reference
The following Stereotypes / Model Elements are used in the Viewpoint:
|Stereotype | realized Concept|
|---|---|
|[SAF_Argument](../../stereotypes.md#saf_argument)|[Argument](../concept/concepts.md#Argument)|
|[SAF_ArgumentClaimSupport](../../stereotypes.md#saf_argumentclaimsupport)|[AGTsupportingCLM](../concept/concepts.md#AGTsupportingCLM)|
|[SAF_C2_ARAS](../../stereotypes.md#saf_c2_aras)|[Argumentation Assurance Viewpoint](../concept/concepts.md#Argumentation-Assurance-Viewpoint)|
|[SAF_ClaimAboutSubjectMaking](../../stereotypes.md#saf_claimaboutsubjectmaking)|[CLMbeingMadeAboutSBC](../concept/concepts.md#CLMbeingMadeAboutSBC)|
|[SAF_Claim](../../stereotypes.md#saf_claim)|[Claim](../concept/concepts.md#Claim)|
|[SAF_ClaimClaimableItemSupport](../../stereotypes.md#saf_claimclaimableitemsupport)|[CLMsupportingCIM](../concept/concepts.md#CLMsupportingCIM)|
|[SAF_ClaimSubject](../../stereotypes.md#saf_claimsubject)|[Subject of Claim](../concept/concepts.md#Subject-of-Claim)|
|[SAF_ClaimantClaimMaking](../../stereotypes.md#saf_claimantclaimmaking)|[CLTmakingCLM](../concept/concepts.md#CLTmakingCLM)|
|[SAF_Claimant](../../stereotypes.md#saf_claimant)|[Claimant](../concept/concepts.md#Claimant)|
|[SAF_CounterClaimClaimableItemMaking](../../stereotypes.md#saf_counterclaimclaimableitemmaking)|[CCMcounteringCIM](../concept/concepts.md#CCMcounteringCIM)|
|[SAF_CounterClaim](../../stereotypes.md#saf_counterclaim)|[CounterClaim](../concept/concepts.md#CounterClaim)|
|[SAF_EvidenceArgumentReinforcement](../../stereotypes.md#saf_evidenceargumentreinforcement)|[EVCreinforcingAGT](../concept/concepts.md#EVCreinforcingAGT)|
|[SAF_Evidence](../../stereotypes.md#saf_evidence)|[Evidence](../concept/concepts.md#Evidence)|
|[SAF_Refuter](../../stereotypes.md#saf_refuter)|[Refuter](../concept/concepts.md#Refuter)|
## Input from other Viewpoints
### Required Viewpoints
*none*
### Recommended Viewpoints
*none*
# Viewpoint Concept and Profile Diagrams
## Concept
![Argumentation Assurance Concept](diagrams/Argumentation-Assurance-Concept.svg)
## Profile
![Argumentation Assurance Profile](diagrams/Argumentation-Assurance-Profile.svg)
