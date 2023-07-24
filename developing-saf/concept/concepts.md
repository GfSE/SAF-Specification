![System Architecture Framework](../../diagrams/Logo_SAF.png)
# SAF Development Documentation : Concepts
# Class Concepts
## Abstract Physical Element
exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

Abstract element representing physical structure items keeping properties and relations applicable to all physical items.
## Any SAF Element

## Argument
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Argument](../../stereotypes.md#SAF_Argument)

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim.
## Claim
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Claim](../../stereotypes.md#SAF_Claim)

A claim is a true/false statement about a property of a particular object. A claim is just what you might consider it to be from common usage of the term; an idea that someone is trying to convince somebody else is true. An example claim could be made on a train, e.g., the train is safe.
## Claimable Item
realized by Stereotype [SAF_ClaimableItem](../../stereotypes.md#SAF_ClaimableItem)

A claim, argument, and evidence are all types of the abstract concept of a claimable item. This allows a counter-claim to be made about any type of claimable item and a claim to support any type of claimable item.
## Claimant
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Claimant](../../stereotypes.md#SAF_Claimant)

A party asserting claims.
## Compliance Statement
Used in the communication between Stakeholder (Customer) and Contractor. Compliance Statements are the first answer to the Stakeholder Requirements and are usually together with the Stakeholder Requirements part of the contract. They are valuable input for the System development and System Requirement elicitation. Information status:
* not compliant (with explanation / rationale)
* partially compliant (with explanation / rationale)
* fully compliant
## Context Function
exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextFunction](../../stereotypes.md#SAF_ContextFunction)

Specifies the fact that an Action or Task that is expected to be carried out by an External Entity. The intention is to capture the expectations and explicitly dissect functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity.
Note: It captures valuable information and is the basis to reach agreement about the functionality at the system boundary.
* clarify the expectations what is performed by Context Elements.
## CounterClaim
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_CounterClaim](../../stereotypes.md#SAF_CounterClaim)

A party's claim is a counter-claim if one party asserts claims in response to the claims of another.
## Evidence
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Evidence](../../stereotypes.md#SAF_Evidence)

An evidence is an artifact that establishes facts that can be trusted and lead directly to a claim. In projects there can many sources of information, but what makes this evidence is the support or rebuttal it gives to a claim.
## Functional Requirement
exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirement](../../stereotypes.md#SAF_SystemFunctionalRequirement)

Functional Requirements specify System Functions of the System.
## General Context
Specifies a general context.
## General Context Element
Specifies a general context element.
## General Function
realized by Metaclass Activity

Specifies the fact that a General Function is used as base Class for specific System or Context Functions.
## General Functional Flow
exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ObjectFlow

Specifies the fact that an Exchange between Function Parameters is taking place.
## General Functional Parameter
exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass Parameter

A parameter of a System or Context Function.
## General Interaction Scenario
Ordered sequence of exchanges of information, energy or material between scenario participants
## General Scenario Participant
Ordered sequence of exchanges of information, energy or material between scenario participants
## Goal
A Goal is defined as an end state that a Stakeholder intends to achieve. Goals are generally expressed using qualitative words; e.g., “increase”, “improve”, or “easier”. Goals can also be decomposed; e.g., “increase profit” can be decomposed into the Goals “reduce cost” and “increase sales”. However, it is also very common to associate concrete objectives with Goals, which can be used to describe both the quantitative and time-related measures which are essential to describe the desired state, and when it should be achieved.
## Hardware Element
exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalHardwareElement](../../stereotypes.md#SAF_PhysicalHardwareElement)

Pure Hardware Elements. Similarity to the V-Model "hardware unit".
## Internal Logical Interaction Scenario
exposed in viewpoint [Logical Internal Interaction Viewpoint](../../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Scenario Participants.
## Logical Context Element
Abstract element of a System Context in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Logical Element
exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Structure Viewpoint](../../viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [Physical Logical Assignment Viewpoint](../../viewpoints/Physical-Logical-Assignment-Viewpoint.md)

realized by Stereotype [SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)

Describes a logical, conceptual system as specification for an implementation of a system, or system part.
## Logical Element Constituent
realized by Metaclass Property

General part of a logical System Context
## Logical Environment
exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalEnvironment](../../stereotypes.md#SAF_LogicalEnvironment)

An Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., air, dirt, sun, road.
## Logical External System
exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalExternalSystem](../../stereotypes.md#SAF_LogicalExternalSystem)

An External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., power grid, mobile network, fresh water system (in a house).
## Logical Interaction Scenario
exposed in viewpoint [System Context Interaction Viewpoint](../../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Scenario Participants.
## Logical Interface Connection Point
exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype ProxyPort

Specifies the existence of an interaction point on Logical Level.
## Logical Interface Connection Point Definition
exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Functional Interface Definition Viewpoint](../../viewpoints/System-Functional-Interface-Definition-Viewpoint.md)

realized by Stereotype InterfaceBlock

Specifies a certain kind of an interaction point on Logical Level.
## Logical Interface Property
exposed in viewpoint [System Functional Interface Definition Viewpoint](../../viewpoints/System-Functional-Interface-Definition-Viewpoint.md)

realized by Stereotype FlowProperty

Specifies a detail of an interaction point on a Logical Level.
## Logical Item Exchange
exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Stereotype ItemFlow

Specifies the exchange that is supposed to happen on a Logical Interface Connection.
## Logical SOI
exposed in viewpoint [Logical Structure Viewpoint](../../viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)

A SOI representation in the Logical Domain.
## Logical System Context
exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_LogicalContext](../../stereotypes.md#SAF_LogicalContext)

Specifies the fact that a context for a System of Interest is defined on Logical Level.
## Logical User
exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalUser](../../stereotypes.md#SAF_LogicalUser)

A human representation in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Need
A User has a Need in order to reach a certain Goal.
Note: "Buying sugar to bake a birthday cake".
## Non-functional Requirement
exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemNonFunctionalRequirement](../../stereotypes.md#SAF_SystemNonFunctionalRequirement)

Non-Functional Requirements specify the quality of System Functions, or non-functional requests like legal conformance.
## Operational Capability
exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../../viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)

A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capabilities typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.

Aliases:
UAF::Capability
NAF4::Capability
## Operational Context
exposed in viewpoint [Operational Context Definition Viewpoint](../../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](../../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_OperationalContext](../../stereotypes.md#SAF_OperationalContext)

An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, these are interacting in the Scenario exhibiting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. 

Aliases:
UAF::HighLevelOperationalConcept
## Operational Domain Kind
exposed in viewpoint [Operational Context Exchange Viewpoint](../../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Domain Item Kind Viewpoint](../../viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKind](../../stereotypes.md#SAF_OperationalDomainKind)

Specifies the kind of exchange between Operational Context Constituents or between Operational Processes.
## Operational Interaction Scenario
exposed in viewpoint [Operational Interaction Viewpoint](../../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Operational Scenario Participants.
## Operational Item Exchange
exposed in viewpoint [Operational Context Exchange Viewpoint](../../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype ItemFlow

Specifies the exchange that is supposed to happen on an Operational Connection between Operational Context Constituents.

Aliases:
UAF::OperationalExchange
## Operational Performer
exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Context Definition Viewpoint](../../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Performer Viewpoint](../../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)

An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.

Aliases:
UAF::OperationalPerformer
## Operational Process
exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcess](../../stereotypes.md#SAF_OperationalProcess)

An Operational Process captures operational behaviors including scenarios, activity actions, and operational exchanges including information, materials, natural resources, etc.

Aliases:
UAF::Operational Activity
NAF::Logical Activity
## Operational Sketch
exposed in viewpoint [Operational Story Viewpoint](../../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalSketch](../../stereotypes.md#SAF_OperationalSketch)

Specifies a free form sketch depicting a concept.
## Operational Story
exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../../viewpoints/Operational-Story-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_OperationalStory](../../stereotypes.md#SAF_OperationalStory)

The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.
## Physical Compatibility Claim
specifies that two interface connection point definitions are compatible, and how the Physical interface properties are mapped.
## Physical Context Element
Abstract element of a System Context  in the Physical Domain, outside the SOI scope, interacting with the SOI.
## Physical Element
exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Assignment Viewpoint](../../viewpoints/Physical-Logical-Assignment-Viewpoint.md)

realized by Stereotype [SAF_PhysicalElement](../../stereotypes.md#SAF_PhysicalElement)

A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].
## Physical Environment
exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalEnvironment](../../stereotypes.md#SAF_PhysicalEnvironment)

The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## Physical Exchange Kind
realized by Stereotype [SAF_PhysicalExchangeType](../../stereotypes.md#SAF_PhysicalExchangeType)

Specifies the Physical Level realization of a System Domain Kind. It is both used to define exchange on Physical Interfaces.
## Physical External System
exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExternalSystem](../../stereotypes.md#SAF_PhysicalExternalSystem)

The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## Physical Interface Connection Point
exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype ProxyPort

Specifies the existence of an interaction point on Physical Level.
## Physical Interface Connection Point Definition
exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype InterfaceBlock

Defines the exchange capabilities of an interaction point on Physical Level.
## Physical Interface Property
realized by Stereotype FlowProperty

Specifies a detail of an interaction point on Physical Level.
## Physical Item Exchange
realized by Stereotype ItemFlow

Specifies the exchange that is supposed to happen on a Physical Interface Connection.
## Physical Layer
Specifies a  Physical Layer, usually used for communication.
## Physical Layer Stack
Specifies a detail of an interaction point on Physical Level.
## Physical SOI
exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSystem](../../stereotypes.md#SAF_PhysicalSystem)

Represents the SOI in the Physical Domain.
## Physical System Context
exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalContext](../../stereotypes.md#SAF_PhysicalContext)

Defines a context for a System of Interest on Physical Level.
## Physical Usage
exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

General concept of usage on physical level.
## Physical User
exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalUser](../../stereotypes.md#SAF_PhysicalUser)

The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.
## Refuter
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Refuter](../../stereotypes.md#SAF_Refuter)

A party asserting counter-claims.
## Software Element
exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSoftwareElement](../../stereotypes.md#SAF_PhysicalSoftwareElement)

Pure Software Elements. Similarity to the V-Model "software unit".
## Stakeholder Requirement
exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)

A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholder Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreements of how the SOI addresses the Concerns of the respective Stakeholder.
## Structural Item
Basic concept of an Item of a structure.
## Subject
exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Subject](../../stereotypes.md#SAF_Subject)

Note: A claim can not be generic, it have to be about something, it has to have a defined subject, e.g., system safety.
## System Capability
exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapability](../../stereotypes.md#SAF_SystemCapability)

1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]
2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]

Aliases:
UAF::Capability
NAF4::Capability
## System Context
Defines a context for a System of Interest.
## System Context Element
An abstract element of the SOI context. Base class for specific kinds of context elements.
## System Domain Kind
exposed in viewpoint [System Domain Item Kind Viewpoint](../../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Functional Interface Definition Viewpoint](../../viewpoints/System-Functional-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)

Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.
## System Function
exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)

A System Function in SAF 
 * accepts input from the system boundary 
 * exposes its output at the system boundary
 * changes the system's state/mode
 * is dependent of system's state/mode
A SAF System Function does not need to have observable output, when it changes the systems state in a way that is observable by other system functions.
A SAF System Function does not need to accept any input from the system boundary, when it is dependent from system state, which in turn is changeable by other system functions.
## System Of Interest
An abstract element representing the SOI. Base for specific perspectives on SOI (logical , physical)
## System Partial Function
exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

realized by Stereotype [SAF_SystemPartialFunction](../../stereotypes.md#SAF_SystemPartialFunction)

Specifies the fact that a Partial Function is a part of a System Function, and defines details of the System function.
## System Process
exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemProcess](../../stereotypes.md#SAF_SystemProcess)

A sequence of Actions or Tasks carried out by the SOI or an External Entity.
## System Requirement
exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirement](../../stereotypes.md#SAF_SystemRequirement)

System Requirements specify System Functions, non-functional properties, or constraints of the System.
## System State
exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

realized by Metaclass State

Describes a state (or mode) of something that can have distinct states.
## System Use Case
exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)

The System Use Cases are a table of content of the services provided by the System of Interest to its System Actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. While the main System of Interest interaction actors participating in this Use Case are identified, the behavior itself is specified by a Use Case Activity, 
Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general).
## System of Interest Concern
exposed in viewpoint [Stakeholder Identification Viewpoint](../../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemOfInterestConcern](../../stereotypes.md#SAF_SystemOfInterestConcern)

Any kind of interest a Stakeholder has. 
Note: Redundant with the meaning of "Need"?
## System of Interest Stakeholder
exposed in viewpoint [Operational Performer Viewpoint](../../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Stakeholder Identification Viewpoint](../../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_Stakeholder](../../stereotypes.md#SAF_Stakeholder)

An individual, team, or organization (or classes thereof) with interests in, or concerns relative to, a system. It may be involved in any life cycle phase of the System. The Stakeholder represents a class or kind of Stakeholders. Stakeholders have a certain involvement: Stakeholder Involvement captures the influence of a project specific Stakeholder on the System. Stakeholder Involvement is characterized by
* Contact Person
* Kind of involvement
* Life Cycle Phases involved
* Relevance decision if and up to which degree Stakeholder is considered
* Rationale for decision when Stakeholder is not considered
## Triggering Event
realized by Metaclass Event


## User
Representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
Note: This seems to be highly redundant with definition of "Role".
# Association Concepts
## AGTsupportingCLM
0..* [Argument](#Argument) AGTsupportingCLM 1..* [Claim](#Claim) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ArgumentClaimSupport](../../stereotypes.md#SAF_ArgumentClaimSupport)

Specifies the fact that a claim is supported by one or more arguments via a claim-argument relation.
## APEimplementingGFN
1 [Abstract Physical Element](#Abstract-Physical-Element) APEimplementingGFN 1..* [General Function](#General-Function) 


## APIbeeingInSSE
0..* [Abstract Physical Element](#Abstract-Physical-Element) APIbeeingInSSE 0..* [System State](#System-State) 

Specifies the fact that a Physical System Element can be in distinct states.
## CCMcounteringCIM
0..* [CounterClaim](#CounterClaim) CCMcounteringCIM 0..* [Claimable Item](#Claimable-Item) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_CounterClaimClaimableItemMaking](../../stereotypes.md#SAF_CounterClaimClaimableItemMaking)

Specifies the fact that any claimable item, e.g., claim, argument, and evidence, is countered by one or more claims.
## CFNallocatedToLCE
1..* [Context Function](#Context-Function) CFNallocatedToLCE 1 [Logical Context Element](#Logical-Context-Element) 


## CLMbeingMadeAboutSBT
1 [Claim](#Claim) CLMbeingMadeAboutSBT 0..1 [Subject](#Subject) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimAboutSubjectMaking](../../stereotypes.md#SAF_ClaimAboutSubjectMaking)

Specifies the fact that a claim is made about an identified subject.
## CLMsupportingCIM
0..* [Claim](#Claim) CLMsupportingCIM 0..* [Claimable Item](#Claimable-Item) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimClaimableItemSupport](../../stereotypes.md#SAF_ClaimClaimableItemSupport)

Specifies the fact that any claimable item, e.g., claim, argument, and evidence, is supported by one or more claims.
## CLTmakingCLM
1 [Claimant](#Claimant) CLTmakingCLM 1..* [Claim](#Claim) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimantClaimMaking](../../stereotypes.md#SAF_ClaimantClaimMaking)

Specifies the fact that a claim is made by a defined claimant.
## CSTconfirmingSHR
1 [Compliance Statement](#Compliance-Statement) CSTconfirmingSHR 1 [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement has certain States of Compliance.
## EVCreinforcingAGT
0..* [Evidence](#Evidence) EVCreinforcingAGT 1..* [Argument](#Argument) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_EvidenceArgumentReinforcement](../../stereotypes.md#SAF_EvidenceArgumentReinforcement)

Specifies the fact that an argument is reinforced by one or more evidence via a argument-evidence relation.
## FRboundedByNFR
1..* [Functional Requirement](#Functional-Requirement) FRboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementConstraint](../../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)

Specifies the fact that a Non-Functional Requirement constrains Functional Requirements.
## FRrefiningSFN
1..* [Functional Requirement](#Functional-Requirement) FRrefiningSFN 1 [System Function](#System-Function) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementRefinement](../../stereotypes.md#SAF_SystemFunctionalRequirementRefinement)

Specifies the fact that a System Function is refined by Functional Requirements.
## GFFbeingPartOF
0..* [General Functional Flow](#General-Functional-Flow) GFFbeingPartOF 1 [Functional Usage](#Functional-Usage) 

Specifies the fact that a Functional Flow appears within the usage of a General Function.
## GFFfromGFP
1 [General Functional Flow](#General-Functional-Flow) GFFfromGFP 1 [General Functional Parameter](#General-Functional-Parameter) 

realized by Metaclass OutputPin

Specifies the fact that a Functional Flow is coming from a Functional Parameter.
## GFFtoGFP
1 [General Functional Flow](#General-Functional-Flow) GFFtoGFP 1 [General Functional Parameter](#General-Functional-Parameter) 

realized by Metaclass InputPin

Specifies the fact that a Functional Flow is going to a Functional Parameter.
## GFNcontrolledAFTER
1 [General Function](#General-Function) GFNcontrolledAFTER 1 [General Function](#General-Function) 

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ControlFlow

Specifies a sequential execution of Functions.
## GFNreceivingINPUT
1 [General Function](#General-Function) GFNreceivingINPUT 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the Input of a System or Context Function.
## GFNsendingOUPUT
1 [General Function](#General-Function) GFNsendingOUPUT 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the Output of a System or Context Function.
## ILIScontainingILCM
1 [Internal Logical Interaction Scenario](#Internal-Logical-Interaction-Scenario) ILIScontainingILCM 0..* [Internal Logical Chronological Message](#Internal-Logical-Chronological-Message) 

Specifies, that Internal Logical Interaction Scenario contains a Internal Logical Chronological Message
## LCEactingInSUC
1..* [Logical Context Element](#Logical-Context-Element) LCEactingInSUC 1..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextElementActing](../../stereotypes.md#SAF_LogicalContextElementActing)

Specifies the fact that a Logical Context Element acts in one or more System Use Cases.
## LCEperformingCFN
0..* [Logical Context Element Constituent](#Logical-Context-Element-Constituent) LCEperformingCFN 0..* [Context Function IN System Process](#Context-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate

Specifies the fact that a Context Function is expected to be carried out by the Logical Context Element in this System Context.
## LENconceptingPEN
1..* [Logical Environment](#Logical-Environment) LENconceptingPEN 1..* [Physical Environment](#Physical-Environment) 

Specifies the fact that a logical Environment Entity is a concept for a Physical Environment Entity.
## LESconceptingPES
1..* [Logical External System](#Logical-External-System) LESconceptingPES 1..* [Physical External System](#Physical-External-System) 

Specifies that the Logical System is a concept for a Physical System.
## LETbeeingInSSE
0..* [Logical Element](#Logical-Element) LETbeeingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine

Specifies the fact that a Logical Element can be in one distinct States.
## LETimplementingGFN
1..* [Logical Element](#Logical-Element) LETimplementingGFN 1..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

Specifies that a logical element is responsible to implement a function.
Note:
Logical elements dont really "implement" anything, they pass the function to physical elements.
## LETperformingSFN
1..* [Logical SOI Constituent](#Logical-SOI-Constituent) LETperformingSFN 1..* [System Function IN System Process](#System-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate

Specifies the fact that a System Function is expected to be carried out by the SOI in this System Context.
## LETspecifyingAPE
1..* [Logical Element](#Logical-Element) LETspecifyingAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Logical Assignment Viewpoint](../../viewpoints/Physical-Logical-Assignment-Viewpoint.md)

Specifies the fact that a Logical Element specifies one or more Physical Elements.
One Physical Element may be specified by exactly one Logical Element. 
Rationale:
If the Logical Element would be not specifies at all then the physical system would not implement all specified functionality.
If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.
It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.
## LICDSspecifyingDetailOfLICP
1 [Logical Interface Connection Point Definition](#Logical-Interface-Connection-Point-Definition) LICDSspecifyingDetailOfLICP 0..* [Logical Interface Connection Point](#Logical-Interface-Connection-Point) 

Specifies the fact that a Logical Interface Connection Definition is a detail of a Logical Interface Connection Point.
## LICPDdesignConstrainedPLS
0..* [Logical Interface Connection Point](#Logical-Interface-Connection-Point) LICPDdesignConstrainedPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies, that a Logical Interface Connection Point is constrained to be implemented by a certain Physical Layer Stack
## LICPapplyingToLCE
0..* [Logical Interface Connection Point](#Logical-Interface-Connection-Point) LICPapplyingToLCE 1..* [Logical Context Element](#Logical-Context-Element) 

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property

Specifies the fact that a Logical Interface Connection Point applies to a Logical Context Element.
## LICPapplyingToLET
0..* [Logical Interface Connection Point](#Logical-Interface-Connection-Point) LICPapplyingToLET 1 [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property

Specifies the fact that a Logical Interface Connection Point applies to a Logical Element.
## LICallowingLIE
1 [Logical Interface Connection](#Logical-Interface-Connection) LICallowingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

Specifies the fact that a Logical Item Exchange is allowed on the Logical Interface Connection.
## LIEdesignConstraintPL
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEdesignConstraintPL 0..1 [Physical Layer](#Physical-Layer) 

Specifies that a Logical Item Exchange is constrained to be implemented by a certain Physical Layer.
## LIEdesignConstraintPLS
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEdesignConstraintPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies, that a Logical Item Exchange is constrained to be implemented by a certain Physical Layer Stack
## LIPspecifyingDetailOfLICD
0..* [Logical Interface Property](#Logical-Interface-Property) LIPspecifyingDetailOfLICD 1 [Logical Interface Connection Point Definition](#Logical-Interface-Connection-Point-Definition) 

exposed in viewpoint [System Functional Interface Definition Viewpoint](../../viewpoints/System-Functional-Interface-Definition-Viewpoint.md)

Specifies the fact that a Logical Interface Property is a detail of a Logical Interface Connection Definition.
## LIScontainingLCM
1 [Logical Interaction Scenario](#Logical-Interaction-Scenario) LIScontainingLCM 0..* [Logical Chronological Message](#Logical-Chronological-Message) 

Specifies, that  Logical Interaction Scenario contains a Logical Chronological Message
## LURconceptingPUR
1..* [Logical User](#Logical-User) LURconceptingPUR 1..* [Physical User](#Physical-User) 

Specifies that the Logical user is a concept for a Physical User.
## OCNallowingOIE
1 [Operational Connection](#Operational-Connection) OCNallowingOIE 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

realized by Stereotype ItemFlow

Specifies the fact that an Operational Exchange takes place over a certain Operational Connection.
## OCYcomposedOF
1 [Operational Capability](#Operational-Capability) OCYcomposedOF 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityComposition](../../stereotypes.md#SAF_OperationalCapabilityComposition)

Specifies the fact that an Operational Capability consists of other Operational Capabilites.
## OCYdependingON
0..* [Operational Capability](#Operational-Capability) OCYdependingON 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityDependency](../../stereotypes.md#SAF_OperationalCapabilityDependency)

Specifies the fact that an Operational Capability depends on another Operational Capability.

Aliases:
UAF::CapabilityDependency
## OCYspecializedBY
1 [Operational Capability](#Operational-Capability) OCYspecializedBY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityGeneralization](../../stereotypes.md#SAF_OperationalCapabilityGeneralization)

Specifies the fact that an Operational Capability is specialized by other Operational Capability. 

Aliases:
UAF::CapabilityGeneralization
## OCYsupportingOSY
0..* [Operational Capability](#Operational-Capability) OCYsupportingOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilitySupport](../../stereotypes.md#SAF_OperationalCapabilitySupport)

Specifies the fact that an Operational Story is supported by Operational Capabilities.
## ODKcomposedOF
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKcomposedOF 0..* [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [Operational Domain Item Kind Viewpoint](../../viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKindComposition](../../stereotypes.md#SAF_OperationalDomainKindComposition)

Specifies the fact that an Operational Domain Kind consists of one or more Operational Domain Kinds.
## ODKtypifyingOIE
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKtypifyingOIE 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

Specifies the fact that an Operational Domain Kind typifies an Operational Item Exchange.
## ODKtypifyingOPE
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKtypifyingOPE 0..* [Operational Process Exchange](#Operational-Process-Exchange) 

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

Specifies the fact that an Operational Domain Kind typifies an Operational Process Exchange.
## OIScontainingOCM
1 [Operational Interaction Scenario](#Operational-Interaction-Scenario) OIScontainingOCM 0..* [Operational Chronological Message](#Operational-Chronological-Message) 

Specifies, that an operational interaction scenario contains one or more chronological messages.
## OISrefiningOSY
1..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) OISrefiningOSY 1 [Operational Story](#Operational-Story) 

Specifies the fact that one or more Operational Interaction Scenarios are used to refine an Operational Story.
## OPRactingInOSY
1..* [Operational Performer](#Operational-Performer) OPRactingInOSY 1..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Story Viewpoint](../../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerActing](../../stereotypes.md#SAF_OperationalPerformerActing)

Specifies the fact that an Operational Performer acts in an Operational Story.
## OPRcapableOFperformingOPS
0..* [Operational Performer](#Operational-Performer) OPRcapableOFperformingOPS 0..* [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

Specifies the fact that an Operational Performer performs an Operational Activity. Traceability from Operational Activities to Operational Performers is derived via assignment of Operational Action to Operational Roles.

Aliases:
UAF::IsCapableToPerform
## OPRcomposedOF
1 [Operational Performer](#Operational-Performer) OPRcomposedOF 0..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](../../viewpoints/Operational-Performer-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerComposition](../../stereotypes.md#SAF_OperationalPerformerComposition)

Specifies the fact that an Operational Performer consists of one or more Operational Performers.
## OPRexhibitingOCY
1 [Operational Performer](#Operational-Performer) OPRexhibitingOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerExhibit](../../stereotypes.md#SAF_OperationalPerformerExhibit)

Specifies the fact that an Operational Performer exhibits an Operational Capability under specific environmental conditions.
## OPRperformingOPSU
0..* [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) OPRperformingOPSU 0..* [Operational Process Usage](#Operational-Process-Usage) 

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype Allocate

Specifies that an Operational Context Constituent performs an Operational Action in the context of an other Operational Activity.
## OPScontributingToOCY
0..* [Operational Process](#Operational-Process) OPScontributingToOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](../../viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessContribution](../../stereotypes.md#SAF_OperationalProcessContribution)

Specifies the fact that an Operational Process contributes to providing Operational Capabilities.

Aliases:
UAF::MapsToCapability
## OPSrefiningOSY
0..* [Operational Process](#Operational-Process) OPSrefiningOSY 1 [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Process Traceability Viewpoint](../../viewpoints/Operational-Process-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessRefinement](../../stereotypes.md#SAF_OperationalProcessRefinement)

Specifies the fact that an Operational Story is refined by Operational Processes.
## OSYtakingPlaceIN
1..* [Operational Story](#Operational-Story) OSYtakingPlaceIN 1 [Operational Context](#Operational-Context) 

Specifies the fact that an Operational Story happens in a certain Operational Context. When parts of an Operational Story do happen in several contexts, they shall be duplicated.
## PCAappliesToPIC
0..* [Physical Interface Connection](#Physical-Interface-Connection) PCAappliesToPIC 0..1 [Physical Compatibility Claim](#Physical-Compatibility-Claim) 

specifies that a Physical Compatibility Assertion shall apply to an Physical Interface Connection
## PCAassertsCompatibiltyForPICD
1 [Physical Compatibility Claim](#Physical-Compatibility-Claim) PCAassertsCompatibiltyForPICD 2 [Physical Interface Connection Point Definition](#Physical-Interface-Connection-Point-Definition) 

specifies the Physical Interface Connection Point definitions the Physical Compatibility Assertion is valid for.
## PEKisAssignedToPL
0..1 [Physical Layer](#Physical-Layer) PEKisAssignedToPL 0..* [Physical Exchange Kind](#Physical-Exchange-Kind) 

Specifies, that a Physical Exchange Kind is assigned to a Physical Layer.
## PEKrealizingSDK
1..* [Physical Exchange Kind](#Physical-Exchange-Kind) PEKrealizingSDK 1 [System Domain Kind](#System-Domain-Kind) 

Specifies the fact that a System Domain Kind is realized by a Physical Exchange Kind.
## PEKtypingPIE
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Item Exchange.
## PEKtypingPIP
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPIP 0..* [Physical Interface Property](#Physical-Interface-Property) 

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Interface  Property.
## PICDdefiningPICP
1 [Physical Interface Connection Point Definition](#Physical-Interface-Connection-Point-Definition) PICDdefiningPICP 0..* [Physical Interface Connection Point](#Physical-Interface-Connection-Point) 

Specifies the fact that a Physical Interface Connection Point Definition defines an Physical Interface Connection Point.
## PICPapplyingToPCE
0..* [Physical Interface Connection Point](#Physical-Interface-Connection-Point) PICPapplyingToPCE 1 [Physical Context Element](#Physical-Context-Element) 

Specifies the fact that a Physical Interface Connection Point applies to a Physical Context Element.
## PICPapplyingToPET
0..* [Physical Interface Connection Point](#Physical-Interface-Connection-Point) PICPapplyingToPET 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

Specifies the fact that a Physical Interface Connection Point applies to a Physical Element.
## PICallowingPIE
1 [Physical Interface Connection](#Physical-Interface-Connection) PICallowingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

Specifies the fact that a Physical Item Exchange is allowed on the Physical Interface Connection.
## PIPspecifyingDetailOfPICD
0..* [Physical Interface Property](#Physical-Interface-Property) PIPspecifyingDetailOfPICD 1 [Physical Interface Connection Point Definition](#Physical-Interface-Connection-Point-Definition) 

Specifies the fact that a Physical Interface Property is a detail of a Physical Interface Connection Definition.
## PLOisValidInPLS
0..* [Physical Layer Ordering](#Physical-Layer-Ordering) PLOisValidInPLS 1 [Physical Layer Stack](#Physical-Layer-Stack) 

Defines that a Physical Layer Ordering is valid within al Physical Layer Stack
## RFTmakingCCM
1 [Refuter](#Refuter) RFTmakingCCM 1 [CounterClaim](#CounterClaim) 

realized by Stereotype [SAF_RefuterCounterClaimMaking](../../stereotypes.md#SAF_RefuterCounterClaimMaking)

Specifies the fact that a counter-claim is made by a defined refuter.
## SCEactingForOPR
0..* [System Context Element](#System-Context-Element) SCEactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a System Context Element is acting for the benefit of an Operational Performer.
## SCYcomposedOF
1 [System Capability](#System-Capability) SCYcomposedOF 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityComposition](../../stereotypes.md#SAF_SystemCapabilityComposition)

Specifies the fact that a System Capability consists of other System Capabilities.
## SCYdependingON
0..* [System Capability](#System-Capability) SCYdependingON 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityDependency](../../stereotypes.md#SAF_SystemCapabilityDependency)

Specifies the fact that a System Capability requires another System Capability.

Aliases:
UAF::CapabilityDependency
## SCYmappingToOCY
0..* [System Capability](#System-Capability) SCYmappingToOCY 1 [Operational Capability](#Operational-Capability) 

exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityMapping](../../stereotypes.md#SAF_SystemCapabilityMapping)

Specifies the fact that an Operational Capability integrates System Capabilities to produce a specific outcome to achieve a mission objective.
## SCYspecializedBY
1 [System Capability](#System-Capability) SCYspecializedBY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](../../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityGeneralization](../../stereotypes.md#SAF_SystemCapabilityGeneralization)

Specifies the fact that a System Capability is specialized by another System Capability. A CapabilityGeneralization is a taxonomic relationship between a more general Capability and a more specific Capability.

Aliases:
UAF::CapabilityGeneralization
## SCYsupportingSUC
0..* [System Capability](#System-Capability) SCYsupportingSUC 0..* [System Use Case](#System-Use-Case) 

Specifies the fact that a System UseCase is supported by System Capabilities.
## SDKbeeingInSS
0..* [System Domain Kind](#System-Domain-Kind) SDKbeeingInSS 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine

Specifies that a System Domain Kind can have certain states.

Note:
Of course an item is in only one distinct state at a certain time. The multiplicity means that an Item can have a set of possible states, and a state can be used to specify possible States for several domain items.
## SDKcomposedOF
1 [System Domain Kind](#System-Domain-Kind) SDKcomposedOF 0..* [System Domain Kind](#System-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](../../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindComposition](../../stereotypes.md#SAF_DomainKindComposition)

Specifies the fact that a System Domain Kind consists of one or more System Domain Kinds.
## SDKderivingFromODK
0..* [System Domain Kind](#System-Domain-Kind) SDKderivingFromODK 0..1 [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](../../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindDerivation](../../stereotypes.md#SAF_DomainKindDerivation)

Specifies the fact that a System Domain Kind on system level is derived from an Operational Domain Kind.
## SDKtypingFPM
1 [System Domain Kind](#System-Domain-Kind) SDKtypingFPM 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the fact that a System Domain Kind defines the type of a Function Parameter.
## SDKtypingLIE
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

Specifies the fact that a System Domain Kind defines the type of a Logical Item Exchange.
## SDKtypingLIP
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLIP 0..* [Logical Interface Property](#Logical-Interface-Property) 

exposed in viewpoint [System Functional Interface Definition Viewpoint](../../viewpoints/System-Functional-Interface-Definition-Viewpoint.md)

Specifies the fact that a System Domain Kind defines the type of a Logical Interface Exchange Property.
## SFNallocatedToAPE
1..* [System Function](#System-Function) SFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

Specifies the fact that a relationship is derived from the assignment of Functions to Logical Elements and the assignment of Logical Elements to Physical Elements.
## SFNallocatedToLET
1..* [System Function](#System-Function) SFNallocatedToLET 1 [Logical SOI](#Logical-SOI) 

Specifies the fact that a System Function is assigned to a Logical SOI.
Note, that this can be derived from Function usages of System Functions allocated to Logical Constituents in System Contexts.
## SFNboundedByNFR
1 [System Function](#System-Function) SFNboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

Specifies the fact that a Non-functional Requirement constrains System Functions.
## SFNresultingInSSE
0..* [System Function](#System-Function) SFNresultingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

Specifies the fact that a Function can perform a certain set of State Transitions.
## SFNsupportingSCY
0..* [System Function](#System-Function) SFNsupportingSCY 0..* [System Capability](#System-Capability) 

Specifies the fact that a System Function supports one or more System Capabilities.
## SHRimposedBY
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRimposedBY 1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementImposition](../../stereotypes.md#SAF_StakeholderRequirementImposition)

realized by Metaclass Package

Specifies the fact that a Stakeholder Requirement is provided by Stakeholders.
## SHRrefiningCRN
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningCRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that a Stakeholder Concern is refined by Stakeholder Requirements.
## SHRrefiningOCY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOCY 0..* [Operational Capability](#Operational-Capability) 

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Capability is refined by Stakeholder Requirements.
## SHRrefiningOSY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Story is refined by Stakeholder Requirements.
## SOIactingForOPR
0..* [System Of Interest](#System-Of-Interest) SOIactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a SOI is acting for the benefit of an Operational Performer.
## SPFNallocatedToAPE
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

Specifies the fact that a System Partial Function is assigned to a Abstract Physical Element.
## SPFNallocatedToLET
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToLET 1 [Logical Element](#Logical-Element) 

Specifies the fact that a System Partial Function is assigned to a Logical SOI Element.
Note: this fact can be derived from Function usages of System Partial Functions allocated to Logical SOI Element Constituents in System Breakdown Structure.
## SPScontributingToOPS
0..* [System Process](#System-Process) SPScontributingToOPS 0..1 [Operational Process](#Operational-Process) 

Specifies the fact that an Operational Process is realized by a System Process.
## SPScontributingToSCY
0..* [System Process](#System-Process) SPScontributingToSCY 0..* [System Capability](#System-Capability) 

Specifies the fact that an System Process contributes to providing System Capabilities.
## SPSrefiningSUC
0..1 [System Process](#System-Process) SPSrefiningSUC 1 [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

Specifies the fact that a System Use Case is refined by one System Process.
## SRderivingFromSHR
0..* [System Requirement](#System-Requirement) SRderivingFromSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: It may be used in a customer supplier relationship situation and supports the V Model concept of "External Unit Specification". See [VXT].
## SRderivingFromSR
0..* [System Requirement](#System-Requirement) SRderivingFromSR 1 [System Requirement](#System-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that System Requirements are derived from a Stakeholder Requirement. 
Note: This is the relationship of requirements of different architectural levels. When the team responsible for the subsystem has direct access to the full upstream requirements set, then no subcontractor relationship needs to be established.
## SRrefiningLICP
0..* [System Requirement](#System-Requirement) SRrefiningLICP 0..* [Logical Interface Connection Point](#Logical-Interface-Connection-Point) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)


## SRrefiningSCY
0..* [System Requirement](#System-Requirement) SRrefiningSCY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a System Capability is refined by System Requirements.
## SRrefiningSUC
0..* [System Requirement](#System-Requirement) SRrefiningSUC 0..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a System Use Case is refined by System Requirements.
## SSEperformingSFN
0..* [System State](#System-State) SSEperformingSFN 0..* [System Function](#System-Function) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

Specifies the fact that the Function is only provided in distinct States. The state is a precondition for the Function to be able to perform.
## SSHhavingCRN
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHhavingCRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../../viewpoints/Stakeholder-Requirement-Viewpoint.md)

Specifies the fact that a Stakeholder has certain Concerns.
## SSHrelatedToSSH
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrelatedToSSH 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRelation](../../stereotypes.md#SAF_StakeholderRelation)

Explains relations between the Stakeholders of the System and other relevant System parties. It helps to understand the Stakeholder community and to approach the right point of contact for clarification of project relevant issues.
## SSHrepresentingOPR
0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrepresentingOPR 1..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](../../viewpoints/Operational-Performer-Viewpoint.md)

realized by Stereotype [SAF_OperationalStakeholderRepresentation](../../stereotypes.md#SAF_OperationalStakeholderRepresentation)

Specifies the fact that a SOI Stakeholder represents an Operational Performer.
## SSHrepresentingSCE
1..* [System Context Element](#System-Context-Element) SSHrepresentingSCE 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_ContextElementRepresentation](../../stereotypes.md#SAF_ContextElementRepresentation)

Specifies the fact that a SOI Stakeholder represents a System Context Element.
## SSHrepresentingUSR
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrepresentingUSR 0..* [User](#User) 

Specifies the fact that an User is represented by Stakeholders.
## SUCcontributingToOSY
0..* [System Use Case](#System-Use-Case) SUCcontributingToOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCaseContribution](../../stereotypes.md#SAF_SystemUseCaseContribution)

Specifies the fact that a System Use Case contributes to an Operational Story.
## SUChasPostconditionSSE
0..* [System Use Case](#System-Use-Case) SUChasPostconditionSSE 0..* [System State](#System-State) 

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)

Specifies the fact that a System Use Case has a state as Postcondition.
## SUChasPreconditionSSE
0..* [System Use Case](#System-Use-Case) SUChasPreconditionSSE 0..* [System State](#System-State) 

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)

Specifies the fact that a System Use Case has a state as Precondition.
## SUCincludingSUC
1 [System Use Case](#System-Use-Case) SUCincludingSUC 0..* [System Use Case](#System-Use-Case) 

realized by Metaclass Include

Specifies the fact that a System Use Case includes other System Use Cases. The included use case is then no longer a full System Use Case, but a partial System Use Case.
## SUCrefiningSHR
0..1 [System Use Case](#System-Use-Case) SUCrefiningSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement is refined by System Use Cases.
## SUCsynthesizingCFN
1..* [System Use Case](#System-Use-Case) SUCsynthesizingCFN 0..* [Context Function](#Context-Function) 

Specifies the fact that an Context Function is used in s System Use Case, e.g., as a Trigger, Task, or Action related to an Actor of the System Use Case. This is a derived relationship.
## SUCsynthesizingSFN
1..* [System Use Case](#System-Use-Case) SUCsynthesizingSFN 0..* [System Function](#System-Function) 

Specifies the fact that a System Function is used in a System Use Case, e.g., as a Trigger, Task, or Action related to the System Use Case. This is a derived relationship.
## SUCtakingPlaceInLSC
1..* [System Use Case](#System-Use-Case) SUCtakingPlaceInLSC 1 [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Use Case Viewpoint](../../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)

Specifies the fact that a System Use Case takes place in a Logical System Context.
## USEAGEallocatedTO
1..* [Functional Usage](#Functional-Usage) USEAGEallocatedTO 1 [Internal Logical Element Constituent](#Internal-Logical-Element-Constituent) 

realized by Stereotype Allocate

Specifies the fact that a "Usage of Function" is allocated to a "Usage of System Element".
See [SYSMLGUIDE] for use cases and further recommendations.
## controlledAFTER
1 [Operational Process](#Operational-Process) controlledAFTER 1 [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Metaclass ControlFlow

Specifies an ordering of Operational Processes in time.
## satisfyingSHR
1 [Any SAF Element](#Any-SAF-Element) satisfyingSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement is satisfied by SAF Model Elements.
## triggering
0..1 [Triggering Event](#Triggering-Event) triggering 0..* [State Transition](#State-Transition) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)


# Association Class Concepts
## Context Function IN System Process
0..* [Context Function](#Context-Function) Context Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextAction](../../stereotypes.md#SAF_ContextAction)

Specifies the fact that a Context Function is used in a System Process.
## Functional Usage
1 [General Function](#General-Function) Functional Usage 0..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Physical Functional Assignment Viewpoint](../../viewpoints/Physical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

Specifies the fact that a Function is used by one or more other Functions.
## General Chronological Message
1 [General Scenario Participation](#General-Scenario-Participation) General Chronological Message 1 [General Scenario Participation](#General-Scenario-Participation) 


## General Scenario Participation
0..* [General Scenario Participant](#General-Scenario-Participant) General Scenario Participation 0..* [General Interaction Scenario](#General-Interaction-Scenario) 


## Generic Context Constituent
1..* [General Context Element](#General-Context-Element) Generic Context Constituent 1..* [General Context](#General-Context) 

Specifies the fact that a general context element is bound by a context.
Bound by can mean 
 * "exists only in this context"
 * "happens only in this context"
The meaning is left to specialisations of bound by
## Hardware Element Constituent
1 [Hardware Element](#Hardware-Element) Hardware Element Constituent 0..* [Hardware Element](#Hardware-Element) 

Specifies the fact that a Hardware Element contains Hardware Elements.
## Internal Logical Chronological Message
1 [Internal Logical Scenario Participation](#Internal-Logical-Scenario-Participation) Internal Logical Chronological Message 1 [Internal Logical Scenario Participation](#Internal-Logical-Scenario-Participation) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Message

The sequential occurrence of exchange between Internal Logical Interaction Scenario Participations.
## Internal Logical Element Constituent
1 [Logical Element](#Logical-Element) Internal Logical Element Constituent 0..* [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Functional Assignment Viewpoint](../../viewpoints/Logical-Functional-Assignment-Viewpoint.md)

exposed in viewpoint [Logical Internal Interaction Viewpoint](../../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

exposed in viewpoint [Logical Structure Viewpoint](../../viewpoints/Logical-Structure-Viewpoint.md)

realized by Metaclass Association

realized by Metaclass Property

realized by Stereotype [SAF_LogicalRole](../../stereotypes.md#SAF_LogicalRole)

Specifies the fact that a Logical Element contains any number of Logical Elements.
## Internal Logical Scenario Participation
0..* [Internal Logical Element Constituent](#Internal-Logical-Element-Constituent) Internal Logical Scenario Participation 0..* [Internal Logical Interaction Scenario](#Internal-Logical-Interaction-Scenario) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Lifeline

Specifies the fact that a Logical Element role participates in an Internal Logical Interaction Scenario.
## Logical Chronological Message
1 [Logical Scenario Participation](#Logical-Scenario-Participation) Logical Chronological Message 1 [Logical Scenario Participation](#Logical-Scenario-Participation) 

exposed in viewpoint [System Context Interaction Viewpoint](../../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Message

The sequential occurrence of exchange between Logical Context Interaction Scenario Participations.
## Logical Context Element Constituent
1..* [Logical Context Element](#Logical-Context-Element) Logical Context Element Constituent 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_LogicalRole](../../stereotypes.md#SAF_LogicalRole)

realized by Metaclass Association

Specifies the fact that a Logical Context Element exists in a specific Logical Context.
## Logical Interface Connection
1 [Logical Interface Connection Point](#Logical-Interface-Connection-Point) Logical Interface Connection 1 [Logical Interface Connection Point](#Logical-Interface-Connection-Point) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector

Specifies the connection of two interface connection points on Logical Level.
## Logical SOI Constituent
1 [Logical SOI](#Logical-SOI) Logical SOI Constituent 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_LogicalRole](../../stereotypes.md#SAF_LogicalRole)

realized by Metaclass Association

Specifies the fact that a Logical SOI exists in a specific Logical Context.
## Logical Scenario Participation
0..* [Logical Element Constituent](#Logical-Element-Constituent) Logical Scenario Participation 0..* [Logical Interaction Scenario](#Logical-Interaction-Scenario) 

exposed in viewpoint [System Context Interaction Viewpoint](../../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Lifeline

Specifies the fact that a logical system context role participates in a Logical Interaction Scenario.
## Operational Chronological Message
1 [Operational Scenario Participant](#Operational-Scenario-Participant) Operational Chronological Message 1 [Operational Scenario Participant](#Operational-Scenario-Participant) 

exposed in viewpoint [Operational Interaction Viewpoint](../../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Message

The sequential occurrence of exchange between Operational Scenario Participations
## Operational Connection
1 [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) Operational Connection 1 [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) 

exposed in viewpoint [Operational Context Exchange Viewpoint](../../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector

Specifies the connection between Operational Context Constituents in an Operational Context allowing Operational Item Exchange.

Aliases:
UAF::OperationalConnector
## Operational Context Performer Constituent
1..* [Operational Performer](#Operational-Performer) Operational Context Performer Constituent 1..* [Operational Context](#Operational-Context) 

exposed in viewpoint [Operational Context Definition Viewpoint](../../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](../../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Interaction Viewpoint](../../viewpoints/Operational-Interaction-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalRole](../../stereotypes.md#SAF_OperationalRole)

realized by Metaclass Association

An Operational Context Constituent represents a participant in the Operational Activity executing one or more of its atomic actions interacting with other constituents of the identified Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a constituent necessary for the execution of the allocated actions.
## Operational Process Exchange
1 [Operational Process](#Operational-Process) Operational Process Exchange 1 [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Metaclass ObjectFlow

Specifies the fact that an Operational Process has an exchange with another Operational Process.
## Operational Process Usage
1 [Operational Process](#Operational-Process) Operational Process Usage 0..* [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessAction](../../stereotypes.md#SAF_OperationalProcessAction)

Specifies the fact that an Operational Process is used in context of another Operational Process.

Aliases:
UAF::OperationalAction
## Operational Scenario Participant
1..* [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) Operational Scenario Participant 0..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) 

exposed in viewpoint [Operational Interaction Viewpoint](../../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Lifeline

Specifies the fact that an Operational Role participates in an Operational Interaction Scenario.
## Physic Context Constituent
1..* [Physical Context Element](#Physical-Context-Element) Physic Context Constituent 1..* [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Metaclass Association

realized by Metaclass Property

Specifies the fact that a Physical Context Element exists in a specific Physical Context.
## Physic SOI Constituent
1..* [Physical SOI](#Physical-SOI) Physic SOI Constituent 1 [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Metaclass Association

realized by Metaclass Property

Specifies the fact that a Physical SOI exists in a specific Physical Context.
## Physical Element Constituent
1 [Physical Element](#Physical-Element) Physical Element Constituent 0..* [Physical Element](#Physical-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

Specifies the fact that a Physical Element may contain any number of Physical Elements.
## Physical Hardware Constituent
1 [Physical Element](#Physical-Element) Physical Hardware Constituent 0..* [Hardware Element](#Hardware-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

Specifies the fact that a physical element contains any number of Hardware Elements.
## Physical Interface Connection
1 [Physical Interface Connection Point](#Physical-Interface-Connection-Point) Physical Interface Connection 1 [Physical Interface Connection Point](#Physical-Interface-Connection-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector

Specifies the connection of two interface connection points on Physical Level, necessary for any exchange to happen.
## Physical Layer Ordering
0..1 [Physical Layer](#Physical-Layer) Physical Layer Ordering 0..1 [Physical Layer](#Physical-Layer) 

Defines an order among two physical layers. This order is valid within a Physical Layer Stack
## Physical Software Constituent
1 [Physical Element](#Physical-Element) Physical Software Constituent 0..* [Software Element](#Software-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../../viewpoints/Physical-Structure-Viewpoint.md)

Specifies the fact that physical element contains any number of Software Elements.
## Software Element Constituent
1 [Software Element](#Software-Element) Software Element Constituent 0..* [Software Element](#Software-Element) 

Specifies the fact that a Software Element contains  Software Elements.
## State Transition
1 [System State](#System-State) State Transition 1 [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../../viewpoints/System-State-Viewpoint.md)

realized by Metaclass Transition

Describes an allowed transition between two states of an item that can be in distinct States.
## System Function IN System Process
0..* [System Function](#System-Function) System Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

Specifies the fact that a System Function is used in a System Process .
## Systemic Context Element Constituent
1..* [System Context Element](#System-Context-Element) Systemic Context Element Constituent 1..* [System Context](#System-Context) 

Specifies the fact that a context element exists in a certain system context.
## Systemic SOI Constituent
1..* [System Of Interest](#System-Of-Interest) Systemic SOI Constituent 1 [System Context](#System-Context) 

Specifies the fact that a system of interest exists in a certain system context.
