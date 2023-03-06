![System Architecture Framework](diagrams/Logo_SAF.png)
# SAF Stereotypes
|Icon|Name|Documentation|Realizes|
|--|--|--|--|
||SAF_AbstractItem||nothing|
||SAF_Argument||Argument<BR><BR>An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim. NOTE that "argument" is an overloaded word and we are using with a specific meaning here.<BR>|
||SAF_ArgumentClaimSupport||AGTsupportingCLM<BR><BR><BR>|
||SAF_Claim||Claim<BR><BR>A claim is a true/false statement about a property of a particular object. A claim is just what you might consider it to be from common usage of the term; an idea that someone is trying to convince somebody else is true. An example claim could be made on a train, “The train is safe”.<BR>|
||SAF_ClaimAboutSubjectMaking||CLMbeing_made_aboutSBT<BR><BR><BR>|
||SAF_ClaimableItem||Claimable Item<BR><BR><BR>|
||SAF_ClaimantClaimMaking||CLTmakingCLM<BR><BR><BR>|
||SAF_ContextAction|An Action of a Context Element|Context Function In System Process<BR><BR>Specifies the fact that a Context Function is used in a System Process.<BR>|
||SAF_ContextElementRepresentation|Defines, that a Stakeholder represents a context element.|SSHrepresentingSCE<BR><BR>Specifies the fact that a SOI Stakeholder represents a System Context Element.<BR>|
||SAF_ContextFunction||Context Function<BR><BR>Denotes an Action or Task that is expected to be carried out by an External Entity. The intention is to capture the expectations and explicitly dissect functionality. This shall not be misinterpreted as an attempt for a behavior specification of  an External Entity.<BR>Note: It captures valuable information and is the basis to reach agreement about the functionality at the system boundary.<BR>* clarify the expectations what is performed by Context Elements.<BR>|
||SAF_CounterClaim||Counter-Claim<BR><BR>A party's claim is a counter-claim if one party asserts claims in response to the claims of another.<BR>|
||SAF_CounterClaimAboutMaking||CCMcounteringCIM<BR><BR><BR>|
||SAF_DocumentReference||nothing|
|![icon](icons/SAF_DomainKind.svg)|SAF_DomainKind||System Domain Kind<BR><BR>Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.<BR>|
||SAF_DomainKindComposition||SDKcomposedOF<BR><BR>Specifies the fact that a System Domain Kind consists of one or more System Domain Kinds.<BR>|
||SAF_DomainKindDerivation||SDKderivingFromODK<BR><BR>Specifies the fact that a System Domain Kind on system level is derived from an Operational Domain Kind.<BR>|
||SAF_Evidence||Evidence<BR><BR>An Evidence is an artifact that establishes facts that can be trusted and lead directly to a claim. In projects there can many sources of information, but what makes this evidence is the support or rebuttal it gives to a claim.<BR>|
||SAF_EvidenceArgumentReinforcement||EVCreinforcingAGT<BR><BR><BR>|
|![icon](icons/SAF_FunctionAction.svg)|SAF_FunctionAction||Functional Usage<BR><BR>Usage of a Function by one or more other Functions.<BR>|
||SAF_LogicalContext||Logical System Context<BR><BR>Specifies the fact that a context for a System of Interest is defined on Logical Level.<BR>|
||SAF_LogicalContextElementActing||LCEactingInSUC<BR><BR>Specifies the fact that a Logical Context Elements acts in one or more System Stories.<BR>|
||SAF_LogicalElement||Logical Element<BR><BR>Describes a logical, conceptual system as specification for an implementation of a system, or system part.<BR>|
||SAF_LogicalEnvironment||Logical Environment<BR><BR>The Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.<BR>|
||SAF_LogicalExternalSystem||Logical External System<BR><BR>The External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).<BR>|
||SAF_LogicalRole||Logical Context Element Constituent<BR><BR>Specifies the fact that a Logical Context Element exists in a specific Logical Context.<BR>|
||SAF_LogicalSOI||Logical SOI<BR><BR>Represents the SOI in the Logical Domain.<BR>|
||SAF_LogicalUser||Logical User<BR><BR>The Logical User is the representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.<BR>|
||SAF_OperationalCapability||Operational Capability<BR><BR>A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capabilities typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.<BR><BR>Aliases:<BR>UAF::Capability<BR>NAF4::Capability<BR>|
||SAF_OperationalCapabilityComposition||OCYcomposedOF<BR><BR>Specifies the fact that an Operational Capability consists of a sub Operational Capabilites.<BR>|
||SAF_OperationalCapabilityDependency||OCYdependingON<BR><BR>Specifies the fact that an Operational Capability requires another Operational Capability.<BR>|
||SAF_OperationalCapabilityGeneralization||OCYspecializedBY<BR><BR>Specifies the fact that an Operational Capability is specialized by another Operational Capabilities.<BR>|
||SAF_OperationalCapabilitySupport||OCYsupportingOSY<BR><BR>Specifies the fact that an Operational Story is supported by a Operational Capabilites.<BR>|
||SAF_OperationalContext||Operational Context<BR><BR>An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, that are interacting in the Scenario meeting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. <BR><BR>Aliases:<BR>UAF::HighLevelOperationalConcept<BR>|
||SAF_OperationalDomainKind||Operational Domain Kind<BR><BR>Kind of exchange between Operational Context Constituents or between Operational Processes.<BR>|
||SAF_OperationalDomainKindComposition||ODKcomposedOF<BR><BR>Specifies the fact that an Operational Domain Kind consists of one or more Operational Domain Kinds.<BR>|
||SAF_OperationalPerformer||Operational Performer<BR><BR>An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capabilities. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.<BR><BR>Aliases:<BR>UAF::OperationalPerformer<BR>|
||SAF_OperationalPerformerActing||OPRactingIN<BR><BR>Specifies the fact that an Operational Performer acts in an Operational Story.<BR>|
||SAF_OperationalPerformerComposition||OPRcomposedOF<BR><BR>Specifies the fact that an Operational Performer consists of one or more Operational Performers.<BR>|
||SAF_OperationalPerformerExhibit||OPRexhibitingOCY<BR><BR>Specifies the fact that an Operational Performer exhibits an Operational Capability under specific environmental conditions.<BR>|
|![icon](icons/SAF_OperationalProcess.svg)|SAF_OperationalProcess||Operational Process<BR><BR>[tbd]<BR><BR>Aliases:<BR>UAF::Operational Process<BR>NAF::Logical Activity<BR>|
|![icon](icons/SAF_OperationalProcessAction.svg)|SAF_OperationalProcessAction||Operational Process Usage<BR><BR>Specifies the fact that an Operational Process is used in context of another Operational Process.<BR><BR>Aliases:<BR>UAF::OperationalAction<BR>|
||SAF_OperationalProcessMapping||OPScontributingToOCY<BR><BR>Specifies the fact that an Operational Process contributes to providing Operational Capabilities.<BR><BR>Aliases:<BR>UAF::MapsToCapability<BR>|
||SAF_OperationalProcessRefinement||OPSrefiningOSY<BR><BR>Specifies the fact that an Operational Story is refined by Operational Processes.<BR>|
||SAF_OperationalRole||Operational Context Performer Constituent<BR><BR>An Operational Context Constituent represents a participant in the Operational Activity executing one or more of its atomic actions interacting with other constituents of the identified Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a constituent necessary for the execution of the allocated actions.<BR>|
||SAF_OperationalSketch||Operational Sketch<BR><BR>A free form sketch depicting a concept.<BR>|
||SAF_OperationalStakeholderRepresentation||SSHrepresentingOPR<BR><BR>Specifies the fact that a SOI Stakeholder represents an Operational Performer.<BR>|
||SAF_OperationalStory||Operational Story<BR><BR>The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative telling a story.<BR>|
||SAF_PhysicalContext||Physical System Context<BR><BR>Defines a context for a System of Interest on Physical Level.<BR>|
||SAF_PhysicalElement|General system element, may consist of hardware and software subsystems.|Physical Element<BR><BR>A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].<BR>|
||SAF_PhysicalEnvironment||Physical Environment<BR><BR>The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.<BR>|
||SAF_PhysicalExchangeType|typifies physical exchange.|Physical Exchange Item<BR><BR>Specifies the fact that a on Physical Level realized Domain Item is used for exchange on a Physical Interface.<BR>|
||SAF_PhysicalExternalSystem||Physical External System<BR><BR>The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).<BR>|
||SAF_PhysicalHardwareElement|System element implemented in hardware.|Hardware Element<BR><BR>Pure Hardware Elements. Similarity to the V-Model "hardware unit".<BR>|
|![icon](icons/SAF_PhysicalItem.svg)|SAF_PhysicalItem|Abstract. Not to be intended to be used in a system model|nothing|
||SAF_PhysicalSoftwareElement|System element implemented in software.|Software Element<BR><BR>Pure Software Elements. Similarity to the V-Model "software unit".<BR>|
||SAF_PhysicalSystem||Physical SOI<BR><BR>Represents the SOI in the Physical Domain.<BR>|
||SAF_PhysicalUser||Physical User<BR><BR>The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.<BR>|
||SAF_SCV02a_View||[Evidence Definition Viewpoint](viewpoints/Evidence-Definition-Viewpoint.md)<BR>|
||SAF_SFV01a_View||[System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md)<BR>|
||SAF_SFV01b_View||[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)<BR>|
||SAF_SFV01c_View||[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)<BR>|
||SAF_SFV02a_View||[System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)<BR>|
||SAF_SFV02b_View|The System Domain Item Kind Viewpoint defines a Block Definition Diagram. It collects type definitions for exchanged items, e. g., information, material, or energy, of the Functional, Logical, and Physical Domain defining a domain item kind taxonomy.|[System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)<BR>|
||SAF_SFV02c_View||[System Functional Breakdown Structure Viewpoint](viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)<BR>|
||SAF_SFV03a_View||[System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)<BR>|
||SAF_SFV03b_View||[System Functional Refinement Viewpoint](viewpoints/System-Functional-Refinement-Viewpoint.md)<BR>|
||SAF_SFV03c_View||[System State Viewpoint](viewpoints/System-State-Viewpoint.md)<BR>|
||SAF_SFV04a_View|The SAF System Context Interaction Diagram defines a Sequence Diagram. It represents a refinement of a System Use Case.<BR>It features life lines typed by roles from the System Context and messages representing the sequence of interactions between the roles of the addressed System Context.|[System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)<BR>|
||SAF_SFV06a_View|The SAF System Requirements Diagram is a Table containing System Requirements. It provides a constructs to represent text-based requirements and relate them to other modeling elements like Stakeholder Requirements.|[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)<BR>|
||SAF_SFV08a_View||[System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)<BR>|
||SAF_SLV02a_View||[Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)<BR>|
||SAF_SLV04a_View|The SAF Logical Internal Interaction Diagram defines a Sequence Diagram. It documents the interaction between the logical parts of the logical SOI. It features<BR>* Life lines typed by logical parts of the logical SOI<BR>* Synchronous or asynchronous messages representing the sequence of interactions between the logical parts of the logical SOI|[Logical Internal Interaction Viewpoint](viewpoints/Logical-Internal-Interaction-Viewpoint.md)<BR>|
||SAF_SLV04b_View||[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)<BR>|
||SAF_SLV08a_View||[Logical Functional Assignment Viewpoint](viewpoints/Logical-Functional-Assignment-Viewpoint.md)<BR>|
||SAF_SOV01a_View|The SAF Operational Story Diagram is a  use case diagram depicting model elements representing Operational Stories and within their operational context. Operational Performers shall be used. In addition, an illustration (drawing, sketch, etc.) and/or a description in free text may provide a comprehensive understanding of the operational background.|[Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)<BR>|
||SAF_SOV01b_View|The SAF Operational Context Definition Diagram is a block definition diagram (BDD) identifying the Operational Performers playing a role in a specific Operational Context.|[Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)<BR>|
||SAF_SOV01c_View|The SAF Operational Context Exchange Diagram is an internal block diagram (IBD) within to an Operational Context showing the connected Operational Performers in their respective Operational Role and the Operational Exchange per connection.|[Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)<BR>|
||SAF_SOV02a_View|The SAF Operational Domain Item Diagram is a block definition diagram ( BDD) containing taxonomy of domain kinds in the operational domain.|[Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)<BR>|
||SAF_SOV02b_View|The SAF Operational Performer Diagram  is a block definition diagram (BDD) depicting Operational Performer) and their relations in terms of decomposition or generalization at a level of detail required for the understanding and analysis. <BR>Note: Identified Stakeholders are related to Operational Performers if appropriate.|[Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)<BR>|
||SAF_SOV02c_View|The SAF Operational Capability Diagram is a block definition diagram (BDD) featuring Operational Capabiliies and their composition, specialization and dependency relationships.|[Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)<BR>|
||SAF_SOV02d_View|Implements the Stakeholder Identification viewpoint.|[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)<BR>|
||SAF_SOV03a_View|The SAF Operational Process Diagram is a activity diagram showing the ordered execution of Operational Process Activities. Operational Process Activities may be linked in terms of control flow and/or data flow visualizing Operational Exchange needed. <BR>Note: Operational Process Activities are assigned to Operational Roles and therefore in a more general manner to the Operational Performers.|[Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)<BR>|
||SAF_SOV04a_View|The SAF Operational Interaction Diagram defines a Sequence Diagram. It represents a refinement of an Operational Story.<BR>It features life lines typed by roles from the Operational Context and messages representing the sequence of interactions between the roles of the addressed Operational Context.|[Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)<BR>|
||SAF_SOV06a_View|The SAF Stakeholder Requirements Diagram is a Table containing Stakeholder Requirements. It provides a constructs to represent text-based requirements.|[Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)<BR>|
||SAF_SOV08a_View||[Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)<BR>|
||SAF_SOV08b_View||[Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)<BR>|
||SAF_SPV01a_View||[Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)<BR>|
||SAF_SPV04b_View||[Physical Internal Exchange Viewpoint](viewpoints/Physical-Internal-Exchange-Viewpoint.md)<BR>|
||SAF_SPV08a_View||[Physical Logical Assignment Viewpoint](viewpoints/Physical-Logical-Assignment-Viewpoint.md)<BR>|
||SAF_SPV08b_View||[Physical Functional Assignment Viewpoint](viewpoints/Physical-Functional-Assignment-Viewpoint.md)<BR>|
||SAF_Stakeholder|Stakeholder imposing Stakeholder Requirements to a system.|System of Interest Stakeholder<BR><BR>An individual, team, or organization (or classes thereof) with interests in, or concerns relative to, a system. It may be involved in any life cycle phase of the system. The Stakeholder represents a class or kind of stakeholders.<BR><BR>Stakeholders also have a certain Involvement:<BR><BR>Stakeholder Involvement captures the influence of a project specific Stakeholder on the system. Stakeholder Involvement is characterized by<BR>* Contact Person<BR>* Kind of involvement<BR>* Life Cycle Phases involved<BR>* Relevance decision if and up to which degree Stakeholder is considered<BR>* Rationale for decision if Stakeholder is not considered <BR>|
||SAF_StakeholderRelation|Defines a relationship between stakeholders.|relatedTO<BR><BR>Explains relations between the Stakeholders of the system and other relevant system parties. It helps to understand the Stakeholder community and to approach the right point of contact for clarification of project relevant issues.<BR>|
||SAF_StakeholderRequirement||Stakeholder Requirement<BR><BR>A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholders Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreement of how the SOI addresses the concerns of the respective Stakeholder.<BR>|
||SAF_StakeholderRequirementImposition||SHRimposedBY<BR><BR>Specifies the fact that a Stakeholder Requirement is provided by Stakeholders.<BR>|
||SAF_StakeholderRequirementRefinement||SHRrefiningCRN<BR><BR>Specifies the fact that a Concern is refined by Stakeholder Requirements.<BR>|
||SAF_Subject||Subject<BR><BR><BR>|
|![icon](icons/SAF_SystemCapability.svg)|SAF_SystemCapability||System Capability<BR><BR>1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]<BR>2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]<BR><BR>Aliases:<BR>UAF::Capability<BR>NAF4::Capability<BR>|
||SAF_SystemCapabilityComposition||SCYcomposedOF<BR><BR>Specifies the fact that a System Capability consists of a sub System Capabilities.<BR>|
||SAF_SystemCapabilityDependency||SCYdependingON<BR><BR>Specifies the fact that a System Capability requires another System Capabilities.<BR>|
||SAF_SystemCapabilityGeneralization||SCYspecializedBY<BR><BR>Specifies the fact that a System Capability is specialized by another System Capabilities.<BR>|
||SAF_SystemCapabilityMapping||SCYmappingToOCY<BR><BR>Specifies the fact that an Operational Capability integrates System Capabilities to produce a specific outcome to achieve a mission objective.<BR>|
||SAF_SystemCapabilitySupport||nothing|
||SAF_SystemFunction||System Function<BR><BR>A System Function in SAF <BR> * accepts input from the system boundary <BR> * exposes its output at the system boundary<BR> * changes the systems state/mode<BR> * is dependent of systems state/mode<BR>A SAF System Function does not need to have observable output, if it changes the systems state in a way that is observable by other system functions.<BR>A SAF System Function does not need to accept input from the system boundary, if it is dependent from system state, which in turn is changeable by other system functions.<BR>|
||SAF_SystemFunctionMapping||nothing|
||SAF_SystemFunctionalRequirement||Functional Requirement<BR><BR>Functional Requirements specify System Functions of the System.<BR>|
||SAF_SystemFunctionalRequirementConstraint||FRboundedByNFR<BR><BR>Specifies the fact that a Non-functional Requirement constrains a Functional Requirement.<BR>|
||SAF_SystemFunctionalRequirementRefinement||FRrefiningSFN<BR><BR>Specifies the fact that a Functional Activity is refined by a Functional Requirement.<BR>|
||SAF_SystemNonFunctionalRequirement||Non-functional Requirement<BR><BR>Non-functional Requirements specify the quality of the functions or non-functional requests like legal conformance.<BR>|
||SAF_SystemOfInterestConcern|Defines a concern a SAF_Stakeholder has.|System of Interest Concern<BR><BR>Any kind of interest a Stakeholder has. <BR>Noe: Redundant with the meaning of "Need"?<BR>|
||SAF_SystemPartialFunction|A detail of a system function.|System Partial Function<BR><BR>A Partial Function is a part of a System Function and defines details of the System function.<BR>|
||SAF_SystemProcess||System Process<BR><BR>Specifies the fact that a System UseCase is refined into a sequence of Actions or Tasks carried out by the SOI or an External Entity.<BR>|
||SAF_SystemRequirement||System Requirement<BR><BR>System Requirements specify functions, non-functional properties, or constraints of the System.<BR>|
||SAF_SystemRequirementDerivation||SRderivingFromSHR<BR><BR>Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: It may be used in a customer supplier relationship situation and supports the V Model concept of "External Unit Specification". See [VXT].<BR>|
||SAF_SystemRequirementRefinement||SRrefiningLICP<BR><BR><BR>|
||SAF_SystemUseCase|The intended use (and also misuse in so called "black use cases") of the system is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general). The main system interaction partners participating in this story are identified.|SUChasPostconditionSSE<BR><BR>Specifies the fact that a System Story has states as Postconditions.<BR>|
||SAF_SystemUseCaseContribution||SUCcontributingToOSY<BR><BR>Specifies the fact that a System UseCase contributes to an Operational Storys.<BR>|
||SAF_VPQuery|Stereotype to construct computed views from a model, querying for certain Diagram stereotypes.|nothing|
||SAF_VPSearchScope|Stereotype to construct computed views from a model, setting the search scope.|nothing|
||SysML ActivityDiagram|Proxy Stereotype representing the Activity Diagram Kind|nothing|
||SysML BlockDiagram|Proxy Stereotype representing the Block Diagram Kind|nothing|
||SysML InternalBlockDiagram|Proxy Stereotype representing the Internal Block Diagram Kind|nothing|
||SysML RequirementDiagram|Proxy Stereotype representing the Requirement Diagram Kind|nothing|
||SysML SequenceDiagram|Proxy Stereotype representing the Sequence Diagram Kind|nothing|
||SysML StateMaschineDiagram|Proxy Stereotype representing the Statemachine Diagram Kind|nothing|
||SysML UseCaseDiagram|Proxy Stereotype representing the Use Case Diagram Kind|nothing|
