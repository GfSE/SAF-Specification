![System Architecture Framework](diagrams/Logo_SAF.png)
# SAF Stereotypes
## SAF_AbstractItem
### Documentation


## SAF_Argument
### Documentation


realizes concept Argument

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim. NOTE that "argument" is an overloaded word and we are using with a specific meaning here.
## SAF_ArgumentClaimSupport
### Documentation


realizes concept AGTsupportingCLM


## SAF_Claim
### Documentation


realizes concept Claim

A claim is a true/false statement about a property of a particular object. A claim is just what you might consider it to be from common usage of the term; an idea that someone is trying to convince somebody else is true. An example claim could be made on a train, “The train is safe”.
## SAF_ClaimAboutSubjectMaking
### Documentation


realizes concept CLMbeing_made_aboutSBT


## SAF_ClaimableItem
### Documentation


realizes concept Claimable Item


## SAF_ClaimantClaimMaking
### Documentation


realizes concept CLTmakingCLM


## SAF_ContextAction
### Documentation

An Action of a Context Element
realizes concept Context Function In System Process

Specifies the fact that a Context Function is used in a System Process.
## SAF_ContextElementCharacterization
### Documentation


realizes concept SSHrepresentingSCE

Specifies the fact that a SOI Stakeholder represents a System Context Element.
## SAF_ContextFunction
### Documentation


realizes concept Context Function

Denotes an Action or Task that is expected to be carried out by an External Entity. The intention is to capture the expectations and explicitly dissect functionality. This shall not be misinterpreted as an attempt for a behavior specification of  an External Entity.
Note: It captures valuable information and is the basis to reach agreement about the functionality at the system boundary.
* clarify the expectations what is performed by Context Elements.
## SAF_CounterClaim
### Documentation


realizes concept Counter-Claim

A party's claim is a counter-claim if one party asserts claims in response to the claims of another.
## SAF_CounterClaimAboutMaking
### Documentation


realizes concept CCMcounteringCIM


## SAF_DocumentReference
### Documentation


## SAF_DomainKind![icon](icons/SAF_DomainKind.svg)
### Documentation


realizes concept System Domain Kind

Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.
## SAF_DomainKindComposition
### Documentation


realizes concept SDKcomposedOF

Specifies the fact that a System Domain Kind consists of one or more System Domain Kinds.
## SAF_DomainKindDerivation
### Documentation


realizes concept SDKderivingFromODK

Specifies the fact that a System Domain Kind on system level is derived from an Operational Domain Kind.
## SAF_Evidence
### Documentation


realizes concept Evidence

An Evidence is an artifact that establishes facts that can be trusted and lead directly to a claim. In projects there can many sources of information, but what makes this evidence is the support or rebuttal it gives to a claim.
## SAF_EvidenceArgumentReinforcement
### Documentation


realizes concept EVCreinforcingAGT


## SAF_FunctionAction![icon](icons/SAF_FunctionAction.svg)
### Documentation


realizes concept Functional Usage

Usage of a Function by one or more other Functions.
realizes concept System Function In System Process

Specifies the fact that a System Function is used in a System Process .
## SAF_LogicalContext
### Documentation


realizes concept Logical System Context

Specifies the fact that a context for a System of Interest is defined on Logical Level.
## SAF_LogicalContextElementActing
### Documentation


realizes concept LCEactingInSUC

Specifies the fact that a Logical Context Elements acts in one or more System Stories.
## SAF_LogicalElement
### Documentation


realizes concept Logical Element

Describes a logical, conceptual system as specification for an implementation of a system, or system part.
## SAF_LogicalEnvironment
### Documentation


realizes concept Logical Environment

The Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## SAF_LogicalExternalSystem
### Documentation


realizes concept Logical External System

The External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## SAF_LogicalRole
### Documentation


realizes concept Logical Context Element Constituent

Specifies the fact that a Logical Context Element exists in a specific Logical Context.
realizes concept Logical SOI Constituent

Specifies the fact that a Logical SOI exists in a specific Logical Context.
realizes concept Internal Logical Element Constituent

Specifies the fact that a Logical Element contains any number of Logical Elements.
## SAF_LogicalSOI
### Documentation


realizes concept Logical SOI

Represents the SOI in the Logical Domain.
## SAF_LogicalUser
### Documentation


realizes concept Logical User

The Logical User is the representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
## SAF_OperationalCapability
### Documentation


realizes concept Operational Capability

A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capabilities typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.

Aliases:
UAF::Capability
NAF4::Capability
## SAF_OperationalCapabilityComposition
### Documentation


realizes concept OCYcomposedOF

Specifies the fact that an Operational Capability consists of a sub Operational Capabilites.
## SAF_OperationalCapabilityDependency
### Documentation


realizes concept OCYdependingON

Specifies the fact that an Operational Capability requires another Operational Capability.
## SAF_OperationalCapabilityGeneralization
### Documentation


realizes concept OCYspecializedBY

Specifies the fact that an Operational Capability is specialized by another Operational Capabilities.
## SAF_OperationalCapabilitySupport
### Documentation


realizes concept OCYsupportingOSY

Specifies the fact that an Operational Story is supported by a Operational Capabilites.
## SAF_OperationalContext
### Documentation


realizes concept Operational Context

An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, that are interacting in the Scenario meeting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. 

Aliases:
UAF::HighLevelOperationalConcept
## SAF_OperationalDomainKind
### Documentation


realizes concept Operational Domain Kind

Kind of exchange between Operational Context Constituents or between Operational Processes.
## SAF_OperationalDomainKindComposition
### Documentation


realizes concept ODKcomposedOF

Specifies the fact that an Operational Domain Kind consists of one or more Operational Domain Kinds.
## SAF_OperationalPerformer
### Documentation


realizes concept Operational Performer

An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capabilities. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.

Aliases:
UAF::OperationalPerformer
## SAF_OperationalPerformerActing
### Documentation


realizes concept OPRactingIN

Specifies the fact that an Operational Performer acts in an Operational Story.
## SAF_OperationalPerformerComposition
### Documentation


realizes concept OPRcomposedOF

Specifies the fact that an Operational Performer consists of one or more Operational Performers.
## SAF_OperationalPerformerExhibit
### Documentation


realizes concept OPRexhibitingOCY

Specifies the fact that an Operational Performer exhibits an Operational Capability under specific environmental conditions.
## SAF_OperationalProcess![icon](icons/SAF_OperationalProcess.svg)
### Documentation


realizes concept Operational Process

[tbd]

Aliases:
UAF::Operational Process
NAF::Logical Activity
## SAF_OperationalProcessAction![icon](icons/SAF_OperationalProcessAction.svg)
### Documentation


realizes concept Operational Process Usage

Specifies the fact that an Operational Process is used in context of another Operational Process.

Aliases:
UAF::OperationalAction
## SAF_OperationalProcessMapping
### Documentation


realizes concept OPScontributingToOCY

Specifies the fact that an Operational Process contributes to providing Operational Capabilities.

Aliases:
UAF::MapsToCapability
## SAF_OperationalProcessRefinement
### Documentation


realizes concept OPSrefiningOSY

Specifies the fact that an Operational Story is refined by Operational Processes.
## SAF_OperationalRole
### Documentation


realizes concept Operational Context Performer Constituent

An Operational Context Constituent represents a participant in the Operational Activity executing one or more of its atomic actions interacting with other constituents of the identified Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a constituent necessary for the execution of the allocated actions.
## SAF_OperationalSketch
### Documentation


realizes concept Operational Sketch

A free form sketch depicting a concept.
## SAF_OperationalStakeholderRepresentation
### Documentation


realizes concept SSHrepresentingOPR

Specifies the fact that a SOI Stakeholder represents an Operational Performer.
## SAF_OperationalStory
### Documentation


realizes concept Operational Story

The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative telling a story.
## SAF_PhysicalContext
### Documentation


realizes concept Physical System Context

Defines a context for a System of Interest on Physical Level.
## SAF_PhysicalElement
### Documentation

General system element, may consist of hardware and software subsystems.
realizes concept Physical Element

A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].
## SAF_PhysicalEnvironment
### Documentation


realizes concept Physical Environment

The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## SAF_PhysicalExchangeType
### Documentation

typifies physical exchange.
realizes concept Physical Exchange Item

Specifies the fact that a on Physical Level realized Domain Item is used for exchange on a Physical Interface.
## SAF_PhysicalExternalSystem
### Documentation


realizes concept Physical External System

The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## SAF_PhysicalHardwareElement
### Documentation

System element implemented in hardware.
realizes concept Hardware Element

Pure Hardware Elements. Similarity to the V-Model "hardware unit".
## SAF_PhysicalItem![icon](icons/SAF_PhysicalItem.svg)
### Documentation

Abstract. Not to be intended to be used in a system model
## SAF_PhysicalSoftwareElement
### Documentation

System element implemented in software.
realizes concept Software Element

Pure Software Elements. Similarity to the V-Model "software unit".
## SAF_PhysicalSystem
### Documentation


realizes concept Physical SOI

Represents the SOI in the Physical Domain.
## SAF_PhysicalUser
### Documentation


realizes concept Physical User

The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.
## SAF_SCV02a_View
### Documentation


realizes Viewpoint [Evidence Definition Viewpoint](viewpoints/Evidence-Definition-Viewpoint.md)
## SAF_SFV01a_View
### Documentation


realizes Viewpoint [System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md)
## SAF_SFV01b_View
### Documentation


realizes Viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)
## SAF_SFV01c_View
### Documentation


realizes Viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)
## SAF_SFV02a_View
### Documentation


realizes Viewpoint [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)
## SAF_SFV02b_View
### Documentation

The System Domain Item Kind Viewpoint defines a Block Definition Diagram. It collects type definitions for exchanged items, e. g., information, material, or energy, of the Functional, Logical, and Physical Domain defining a domain item kind taxonomy.
realizes Viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)
## SAF_SFV02c_View
### Documentation


realizes Viewpoint [System Functional Breakdown Structure Viewpoint](viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)
## SAF_SFV03a_View
### Documentation


realizes Viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)
## SAF_SFV03b_View
### Documentation


realizes Viewpoint [System Function Refinement Viewpoint](viewpoints/System-Function-Refinement-Viewpoint.md)
## SAF_SFV03c_View
### Documentation


realizes Viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)
## SAF_SFV04a_View
### Documentation

The SAF System Context Interaction Diagram defines a Sequence Diagram. It represents a refinement of a System Use Case.
It features life lines typed by roles from the System Context and messages representing the sequence of interactions between the roles of the addressed System Context.
realizes Viewpoint [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)
## SAF_SFV06a_View
### Documentation

The SAF System Requirements Diagram is a Table containing System Requirements. It provides a constructs to represent text-based requirements and relate them to other modeling elements like Stakeholder Requirements.
realizes Viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)
## SAF_SFV08a_View
### Documentation


realizes Viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)
## SAF_SLV02a_View
### Documentation


realizes Viewpoint [Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)
## SAF_SLV04a_View
### Documentation

The SAF Logical Internal Interaction Diagram defines a Sequence Diagram. It documents the interaction between the logical parts of the logical SOI. It features
* Life lines typed by logical parts of the logical SOI
* Synchronous or asynchronous messages representing the sequence of interactions between the logical parts of the logical SOI
realizes Viewpoint [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)
## SAF_SLV04b_View
### Documentation


realizes Viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)
## SAF_SLV08a_View
### Documentation


realizes Viewpoint [Logical Function Assignment Viewpoint](viewpoints/Logical-Function-Assignment-Viewpoint.md)
## SAF_SOV01a_View
### Documentation

The SAF Operational Story Diagram is a  use case diagram depicting model elements representing Operational Stories and within their operational context. Operational Performers shall be used. In addition, an illustration (drawing, sketch, etc.) and/or a description in free text may provide a comprehensive understanding of the operational background.
realizes Viewpoint [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)
## SAF_SOV01b_View
### Documentation

The SAF Operational Context Definition Diagram is a block definition diagram (BDD) identifying the Operational Performers playing a role in a specific Operational Context.
realizes Viewpoint [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)
## SAF_SOV01c_View
### Documentation

The SAF Operational Context Exchange Diagram is an internal block diagram (IBD) within to an Operational Context showing the connected Operational Performers in their respective Operational Role and the Operational Exchange per connection.
realizes Viewpoint [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)
## SAF_SOV02a_View
### Documentation

The SAF Operational Domain Item Diagram is a block definition diagram ( BDD) containing taxonomy of domain kinds in the operational domain.
realizes Viewpoint [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)
## SAF_SOV02b_View
### Documentation

The SAF Operational Performer Diagram  is a block definition diagram (BDD) depicting Operational Performer) and their relations in terms of decomposition or generalization at a level of detail required for the understanding and analysis. 
Note: Identified Stakeholders are related to Operational Performers if appropriate.
realizes Viewpoint [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)
## SAF_SOV02c_View
### Documentation

The SAF Operational Capability Diagram is a block definition diagram (BDD) featuring Operational Capabiliies and their composition, specialization and dependency relationships.
realizes Viewpoint [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)
## SAF_SOV02d_View
### Documentation


## SAF_SOV03a_View
### Documentation

The SAF Operational Process Diagram is a activity diagram showing the ordered execution of Operational Process Activities. Operational Process Activities may be linked in terms of control flow and/or data flow visualizing Operational Exchange needed. 
Note: Operational Process Activities are assigned to Operational Roles and therefore in a more general manner to the Operational Performers.
realizes Viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)
## SAF_SOV04a_View
### Documentation

The SAF Operational Interaction Diagram defines a Sequence Diagram. It represents a refinement of an Operational Story.
It features life lines typed by roles from the Operational Context and messages representing the sequence of interactions between the roles of the addressed Operational Context.
realizes Viewpoint [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)
## SAF_SOV06a_View
### Documentation

The SAF Stakeholder Requirements Diagram is a Table containing Stakeholder Requirements. It provides a constructs to represent text-based requirements.
realizes Viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)
## SAF_SOV08a_View
### Documentation


realizes Viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)
## SAF_SOV08b_View
### Documentation


realizes Viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)
## SAF_SPV01a_View
### Documentation


realizes Viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)
## SAF_SPV04b_View
### Documentation


realizes Viewpoint [Physical Internal Exchange Viewpoint](viewpoints/Physical-Internal-Exchange-Viewpoint.md)
## SAF_Stakeholder
### Documentation

Stakeholder imposing Stakeholder Requirements to a system.
realizes concept System of Interest Stakeholder

An individual, team, or organization (or classes thereof) with interests in, or concerns relative to, a system. It may be involved in any life cycle phase of the system. The Stakeholder represents a class or kind of stakeholders.

Stakeholders also have a certain Involvement:

Stakeholder Involvement captures the influence of a project specific Stakeholder on the system. Stakeholder Involvement is characterized by
* Contact Person
* Kind of involvement
* Life Cycle Phases involved
* Relevance decision if and up to which degree Stakeholder is considered
* Rationale for decision if Stakeholder is not considered 
realizes concept Claimant

A party, which asserts claims.
realizes concept Refuter

A party, which asserts counter-claims.
## SAF_StakeholderRelation
### Documentation


realizes concept relatedTO

Explains relations between the Stakeholders of the system and other relevant system parties. It helps to understand the Stakeholder community and to approach the right point of contact for clarification of project relevant issues.
## SAF_StakeholderRequirement
### Documentation


realizes concept Stakeholder Requirement

A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholders Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreement of how the SOI addresses the concerns of the respective Stakeholder.
## SAF_StakeholderRequirementImposition
### Documentation


realizes concept SHRimposedBY

Specifies the fact that a Stakeholder Requirement is provided by Stakeholders.
## SAF_StakeholderRequirementRefinement
### Documentation


realizes concept SHRrefiningCRN

Specifies the fact that a Concern is refined by Stakeholder Requirements.
realizes concept SHRrefiningOSY

Specifies the fact that an Operational Story is refined by Stakeholder Requirements.
## SAF_Subject
### Documentation


realizes concept Subject


## SAF_SystemCapability![icon](icons/SAF_SystemCapability.svg)
### Documentation


realizes concept System Capability

1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]
2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]

Aliases:
UAF::Capability
NAF4::Capability
## SAF_SystemCapabilityComposition
### Documentation


realizes concept SCYcomposedOF

Specifies the fact that a System Capability consists of a sub System Capabilities.
## SAF_SystemCapabilityDependency
### Documentation


realizes concept SCYdependingON

Specifies the fact that a System Capability requires another System Capabilities.
## SAF_SystemCapabilityGeneralization
### Documentation


realizes concept SCYspecializedBY

Specifies the fact that a System Capability is specialized by another System Capabilities.
## SAF_SystemCapabilityMapping
### Documentation


realizes concept SCYmappingToOCY

Specifies the fact that an Operational Capability integrates System Capabilities to produce a specific outcome to achieve a mission objective.
## SAF_SystemCapabilitySupport
### Documentation


## SAF_SystemFunction
### Documentation


realizes concept System Function

A System Function in SAF 
 * accepts input from the system boundary 
 * exposes its output at the system boundary
 * changes the systems state/mode
 * is dependent of systems state/mode
A SAF System Function does not need to have observable output, if it changes the systems state in a way that is observable by other system functions.
A SAF System Function does not need to accept input from the system boundary, if it is dependent from system state, which in turn is changeable by other system functions.
## SAF_SystemFunctionMapping
### Documentation


## SAF_SystemFunctionalRequirement
### Documentation


realizes concept Functional Requirement

Functional Requirements specify System Functions of the System.
## SAF_SystemFunctionalRequirementConstraint
### Documentation


realizes concept FRboundedByNFR

Specifies the fact that a Non-functional Requirement constrains a Functional Requirement.
## SAF_SystemFunctionalRequirementRefinement
### Documentation


realizes concept FRrefiningSFN

Specifies the fact that a Functional Activity is refined by a Functional Requirement.
## SAF_SystemNonFunctionalRequirement
### Documentation


realizes concept Non-functional Requirement

Non-functional Requirements specify the quality of the functions or non-functional requests like legal conformance.
## SAF_SystemOfInterestConcern
### Documentation


realizes concept System of Interest Concern

Any kind of interest a Stakeholder has. 
Noe: Redundant with the meaning of "Need"?
## SAF_SystemPartialFunction
### Documentation

A detail of a system function.
realizes concept System Partial Function

A Partial Function is a part of a System Function and defines details of the System function.
## SAF_SystemProcess
### Documentation


realizes concept System Process

Specifies the fact that a System UseCase is refined into a sequence of Actions or Tasks carried out by the SOI or an External Entity.
## SAF_SystemRequirement
### Documentation


realizes concept System Requirement

System Requirements specify functions, non-functional properties, or constraints of the System.
## SAF_SystemRequirementDerivation
### Documentation


realizes concept SRderivingFromSHR

Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: It may be used in a customer supplier relationship situation and supports the V Model concept of "External Unit Specification". See [VXT].
realizes concept derivingFromSR

Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: This is the relationship of requirements of different architectural levels, when the team responsible for the subsystem has direct access to the full upstream requirements set, then no subcontractor relationship needs to be established.
## SAF_SystemRequirementRefinement
### Documentation


realizes concept SRrefiningLICP


realizes concept SRrefiningSUC

Specifies the fact that a System Requirement refines a System Story.
## SAF_SystemUseCase
### Documentation

The intended use (and also misuse in so called "black use cases") of the system is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general). The main system interaction partners participating in this story are identified.
realizes concept SUChasPostconditionSSE

Specifies the fact that a System Story has states as Postconditions.
realizes concept SUChasPreconditionSSE

Specifies the fact that a System Story has states as Preconditions.
realizes concept SUCtakingPlaceInLSC

Specifies the fact that a System Story takes place in a Logical System Context.
realizes concept System UseCase

The System Use Cases are a table of content of the services provided by the System to its System actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. The behavior itself is specified by a Use Case Activity. Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general). The main System of Interest interaction partners participating in this story are identified.
## SAF_SystemUseCaseContribution
### Documentation


realizes concept SUCcontributingToOSY

Specifies the fact that a System UseCase contributes to an Operational Storys.
## SAF_VPQuery
### Documentation

Stereotype to construct computed views from a model, querying for certain Diagram stereotypes.
## SAF_VPSearchScope
### Documentation

Stereotype to construct computed views from a model, setting the search scope.
## SysML ActivityDiagram
### Documentation

Proxy Stereotype representing the Activity Diagram Kind
## SysML BlockDiagram
### Documentation

Proxy Stereotype representing the Block Diagram Kind
## SysML InternalBlockDiagram
### Documentation

Proxy Stereotype representing the Internal Block Diagram Kind
## SysML RequirementDiagram
### Documentation

Proxy Stereotype representing the Requirement Diagram Kind
## SysML SequenceDiagram
### Documentation

Proxy Stereotype representing the Sequence Diagram Kind
## SysML StateMaschineDiagram
### Documentation

Proxy Stereotype representing the Statemachine Diagram Kind
## SysML UseCaseDiagram
### Documentation

Proxy Stereotype representing the Use Case Diagram Kind
