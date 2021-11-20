## Architecture Framework Stakeholder

## Need
A User has a Need in order to reach a certain Goal.
Note: "Buying sugar to bake a birthday cake".
## Logical Interface Specification
exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Stereotype [InterfaceBlock](stereotypes.md#InterfaceBlock)

Specifies a certain kind of an interaction point (interface) on Logical level.
## General Scenario Participant
Ordered sequence of exchanges of information, energy or material between scenario participants
## Child Function
Specifies the fact that [tbd]
## Operational Interaction Scenario
exposed in viewpoint [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Operational Scenario Participants.
## Logical Element
exposed in viewpoint [Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Stereotype [SAF_LogicalElement](stereotypes.md#SAF_LogicalElement)

Describes a logical, conceptual system as specification for an implementation of a system, or system part.
## General Interaction Scenario
Ordered sequence of exchanges of information, energy or material between scenario participants
## Logical Interaction Scenario
exposed in viewpoint [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Scenario Participants.
## Generic Concept

## State
exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)

realized by Metaclass State

Describes a state (or mode) of something that can have distinct State(s).
## Functional Requirement
exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirement](stereotypes.md#SAF_SystemFunctionalRequirement)

Specifies the fact that [tbd]
## SAF_Concept

## SAF_View

## Software Element
exposed in viewpoint [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_SoftwareElement](stereotypes.md#SAF_SoftwareElement)

Pure Software Element(s) (under own design). Similarity to the V-Model "software unit".
## Nonfunctional Requirement
exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemNonFunctionalRequirement](stereotypes.md#SAF_SystemNonFunctionalRequirement)

Specifies the fact that [tbd]
## Logical Environment
exposed in viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_LogicalEnvironment](stereotypes.md#SAF_LogicalEnvironment)

The Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## Compliance Statement
Used in the communication between Stakeholder (Customer) and Contractor. Compliance Statement(s) are the first answer to the Stakeholder Requirement, and are usually together with the Stakeholder Requirement(s) part of the contract. They are valuable input for system development and System Requirement elicitation.
Information status
* not compliant (with explanation/rationale)
* partially compliant (with explanation / rationale)
* fully compliant 
## Physical Element
realized by Stereotype [SAF_PhysicalElement](stereotypes.md#SAF_PhysicalElement)

A composition of Hardware Element(s) and Software Element(s). Similarity to the V-Model segments and system. See [VXT].
## SAF_Viewpoint

## Operational Item Exchange
exposed in viewpoint [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype [ItemFlow](stereotypes.md#ItemFlow)

Exchange between Operational Context Constituents over an Operational Connection.

Aliases:
UAF::OperationalExchange
## Requirement

## Functional Parameter
exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

realized by Metaclass Parameter

realized by Metaclass Pin

A parameter of a Function
## State

## System Context Element
An abstract element of the SOI context. Base class for specific kinds of context elements.
## Logical User
exposed in viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_LogicalUser](stereotypes.md#SAF_LogicalUser)

The Logical User is the representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Physical Context Element
Abstract element of a System Context  in the Physical Domain, outside the SOI scope, interacting with the SOI.
## Physical External System
exposed in viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExternalSystem](stereotypes.md#SAF_PhysicalExternalSystem)

The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## System Capability
exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapability](stereotypes.md#SAF_SystemCapability)

1) A System capability is an operation or task that performs an action to produce a specific performance-based outcome. Note that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capability(s) to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]
2) System capability(s), as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment condition(s). [Wasson2006, SystemAnalysis+Design+Development]

Aliases:
UAF::Capability
NAF4::Capability
## System Domain Kind
exposed in viewpoint [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKind](stereotypes.md#SAF_DomainKind)

Specification for any kind of exchange on Functional, and Logical level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.
## SOI Model

## General Context Element
Specifies a general context element.
## Structural Item
Basic concept of an Item of a structure.
## Physical Interface Specification
Specifies a certain kind of an interaction point on Physical level.
## Operational Domain Kind
exposed in viewpoint [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKind](stereotypes.md#SAF_OperationalDomainKind)

Kind of exchange between Operational Context Constituents or between Operational Process(es).
## System Context
Defines a context for a System of Interest.
## System Of Interest
exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

An abstract element representing the SOI. Base for specific perspectives on SOI (logical , physical)
## System Process
exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemProcess](stereotypes.md#SAF_SystemProcess)

Refines a system story into a sequence of Action(s) or Task(s) carried out by the SoI or an External Entity.
## Logical Context Element
Abstract element of a System Context in the Logical Domain, outside the SOI scope, interacting with the SOI.
## SAF_Aspect

## System Story
exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemStory](stereotypes.md#SAF_SystemStory)

The intended use (and also misuse in so called "black use cases") of the system is captured in free text; story telling at a coarse level of detail which is understandable to Customer(s) (non engineering stakeholders in general). The main system interaction partners participating in this story are identified.
## Specific Concept B

## Model Element

## Logical System Context
exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_LogicalContext](stereotypes.md#SAF_LogicalContext)

Defines a context for a System of Interest on Logical level.
## SAF_Relation

## Engineering Concern

## Abstract Concept

## Physical System Context

## Physical Item
exposed in viewpoint [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)

Abstract element representing physical structure items keeping properties and relations applicable to all physical items.
## Format Specification

## Physical Interface
exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

Specifies the existence of an interaction point on Physical level.
## Related Concept C

## Logical Interface Property
realized by Stereotype [FlowProperty](stereotypes.md#FlowProperty)

Specifies a detail of an interaction point on Logical level.
## User
Representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
Note: This seems to be highly redundant with definition "Role".
## Specific Concept A

## Logical Constituent
realized by Metaclass Property

General part of a logical System Context
## Physical Item Exchange
Specifies the exchange that is supposed to happen for an Physical Interface Usage.
## Physical User
exposed in viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalUser](stereotypes.md#SAF_PhysicalUser)

The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.
## System of Interest Stakeholder
exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_Stakeholder](stereotypes.md#SAF_Stakeholder)

An individual, team, or organization (or classes thereof) with interests in, or concerns relative to, a system. It may be involved in any life cycle phase of the system. The Stakeholder represents a class or kind of stakeholders.
## Technical Standard

## Physical Item
A Domain Item realization on Physical level.
## Physical SOI
exposed in viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSOI](stereotypes.md#SAF_PhysicalSOI)

Represents the SOI in the Physical Domain.
## Logical Interface
exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [ProxyPort](stereotypes.md#ProxyPort)

Specifies the existence of an interaction point (interface) on Logical level.
## SAF_Model Kind Definition

## Logical SOI
exposed in viewpoint [Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_LogicalSOI](stereotypes.md#SAF_LogicalSOI)

Represents the SOI in the Logical Domain.
## Operational Sketch
exposed in viewpoint [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalSketch](stereotypes.md#SAF_OperationalSketch)

A free form sketch depicting a concept.
## System of Interest Concern
exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemOfInterestConcern](stereotypes.md#SAF_SystemOfInterestConcern)

Any kind of interest a Stakeholder has. 
Noe: Redundant with the meaning of "Need"?
## Concept A

## Logical External System
exposed in viewpoint [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_LogicalExternalSystem](stereotypes.md#SAF_LogicalExternalSystem)

The External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## Related Concept D

## Concept B

## Operational Story
exposed in viewpoint [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalStory](stereotypes.md#SAF_OperationalStory)

The Operational Story represents one or more Operational Use Case(s) in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative telling a story.
## Physical Interface Property
Specifies a detail of an interaction point on Physical level.
## SAF SOI Concern

## Context Element

## Functional Flow
exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ObjectFlow

Specifies the fact that an Exchange between Function Parameter(s) takes place.
## Standardization Body

## Operational Capability
exposed in viewpoint [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapability](stereotypes.md#SAF_OperationalCapability)

A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capability(s) typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.

Aliases:
UAF::Capability
NAF4::Capability
## Physical System Context
exposed in viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalContext](stereotypes.md#SAF_PhysicalContext)

Defines a context for a System of Interest on Physical level.
## Specific Concept

## System Function
exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunction](stereotypes.md#SAF_SystemFunction)

Specifies the fact that a Function transforms input to an output and is used to
* define what shall be realized in the SOI or parts of it
## Goal
A goal is defined as an end state that a Stakeholder intends to achieve. Goals are generally expressed using qualitative words; e.g., “increase”, “improve”, or “easier”. Goals can also be decomposed; e.g., “increase profit” can be decomposed into the goals “reduce cost” and “increase sales”. However, it is also very common to associate concrete objectives with goals, which can be used to describe both the quantitative and time-related measures which are essential to describe the desired state, and when it should be achieved.
## General Function
exposed in viewpoint [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)

realized by Metaclass Activity

General Function used as base Class for specific Functions
## General Context
Specifies a general context.
## Any SAF Element

## Context Function
exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextFunction](stereotypes.md#SAF_ContextFunction)

Denotes an Action or Task that is expected to be carried out by an External Entity. The intention is to capture the expectations and explicitly dissect functionality. This shall not be misinterpreted as an attempt for a behavior specification of  an External Entity(s).
Note: It captures valuable information and is the basis to reach agreement about the functionality at the system boundary.
* clarify the expectations what is performed by Context Element(s).
## Operational Process
exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcess](stereotypes.md#SAF_OperationalProcess)

[tbd]

Aliases:
UAF::Operational Process
NAF::Logical Activity
## System Requirement
exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirement](stereotypes.md#SAF_SystemRequirement)

Specifies the fact that [tbd]
## Triggering Event
realized by Metaclass Event


## Functional Breakdown Structure
exposed in viewpoint [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)

Specifies the fact that [tbd]
## Stakeholder Requirement
exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirement](stereotypes.md#SAF_StakeholderRequirement)

A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholder Concern(s) are refined by Stakeholder Requirement(s) applicable for the SOI. The Stakeholder Requirement(s) are a result of discussions and agreement of how the SOI addresses the concerns of the respective Stakeholder.
## Internal Logical Interaction Scenario
exposed in viewpoint [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)

realized by Metaclass Interaction

Ordered sequence of exchanges of information, energy or material between Scenario Participants.
## Physical Environment
exposed in viewpoint [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalEnvironment](stereotypes.md#SAF_PhysicalEnvironment)

The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## Operational Performer
exposed in viewpoint [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)

exposed in viewpoint [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformer](stereotypes.md#SAF_OperationalPerformer)

An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activity(s) contributing to a specific identified Operational Capability(s). An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Context(s).

Aliases:
UAF::OperationalPerformer
## Operational Context
exposed in viewpoint [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_OperationalContext](stereotypes.md#SAF_OperationalContext)

An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performer(s), that are interacting in the Scenario meeting a specific identified Operational Capability. One or more Operational Context(s) meaningful for the Operational Domain are to be identified. 

Aliases:
UAF::HighLevelOperationalConcept
## Protocol Definition

## Physical Usage

## SAF Architecture Framework Concern

## Hardware Element
exposed in viewpoint [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_HardwareElement](stereotypes.md#SAF_HardwareElement)

Pure Hardware Element(s) (under own design). Similarity to the V-Model "hardware unit".
## Logical Item Exchange
exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Stereotype [ItemFlow](stereotypes.md#ItemFlow)

Specifies the exchange that is supposed to happen for an Logical Interface Connection.
## mappingTO
0..* [System Function](#System-Function) mappingTO 0..* [System Capability](#System-Capability) 

Specifies the fact that [tbd]
## applyingTO
0..* [Physical Interface](#Physical-Interface) applyingTO 1 [Physical Item](#Physical-Item) 

exposed in viewpoint [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)

Specifies the fact that a Physical Interface applies to a Physical Item.
## beeingINstate
0..* [Logical Element](#Logical-Element) beeingINstate 0..* [State](#State) 

exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine

Specifies the fact that a Logical Element can be in one distinct State(s).
## implementing
0..* [System Context Element](#System-Context-Element) implementing 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a System Context element is acting for the benefit of a Operational Performer.
## specifying
1 [Physical Interface Specification](#Physical-Interface-Specification) specifying 0..* [Physical Interface](#Physical-Interface) 

Specifies that Physical Interface Specification is a detail of a Physical Interface.
## resultingINstate
0..* [System Function](#System-Function) resultingINstate 0..* [State](#State) 

exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)

Specifies the fact that a Function can perform a certain set of State Transition(s).
## synthesizingCFC
1..* [System Story](#System-Story) synthesizingCFC 0..* [Context Function](#Context-Function) 

Specifies the fact that an External Function is used in a System Story, e.g. as a Trigger, Task or Action related to an Actor of the System Story.This is a derived relationship.
## typifyingITM
1 [Operational Domain Kind](#Operational-Domain-Kind) typifyingITM 1..* [Operational Item Exchange](#Operational-Item-Exchange) 

Specifies the fact that an operational exchange kind typifies an operational exchange
## typingPROP
1 [Physical Item](#Physical-Item) typingPROP 0..* [Physical Interface Property](#Physical-Interface-Property) 

Specifies the fact that a Physical Interface Item defines the type of a Physical Interface Property Exchange.
## SFCallocatedTO
1..* [System Function](#System-Function) SFCallocatedTO 1 [Logical SOI](#Logical-SOI) 

realized by Stereotype [Allocate](stereotypes.md#Allocate)

Specifies the fact that a System Function is assigned to a Logical SOI.
Note, that this can be derived from Function usages of System Functions allocated to Logical Soi Constituents in System Contexts.
## refiningSTRY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) refiningSTRY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Stakeholder Requirement is refined by an Operational Story.
## derivingFROM
0..* [System Domain Kind](#System-Domain-Kind) derivingFROM 1 [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindDerivation](stereotypes.md#SAF_DomainKindDerivation)

Specifies the fact that a domain kind on system level is derived from an operational domain kind.
## actingIN
1..* [Logical Context Element](#Logical-Context-Element) actingIN 1..* [System Story](#System-Story) 

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextElementActing](stereotypes.md#SAF_LogicalContextElementActing)

Specifies the fact that one or more Logical Context Elements act in one or more System stories.
## realizingITM
1..* [Physical Item](#Physical-Item) realizingITM 1 [System Domain Kind](#System-Domain-Kind) 

Specifies the fact that a Domain Item is realized by a Physical Interface Item.
## confirmingREQ
1 [Compliance Statement](#Compliance-Statement) confirmingREQ 1 [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement has a certain State of Compliance.
## controlledAFTER
1 [Operational Process](#Operational-Process) controlledAFTER 1 [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

realized by Metaclass ControlFlow

Specifies an ordering of Operational Process(es) in time.
## containingCFC
1..* [System Process](#System-Process) containingCFC 0..* [Context Function](#Context-Function) 

Specifies the Fact, that a Context Function can appear in one or more System Processes, and a System Process can have one or more Context Functions
## triggering
0..1 [Triggering Event](#Triggering-Event) triggering 0..* [State Transition](#State-Transition) 

exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)


## typingPRP
1 [System Domain Kind](#System-Domain-Kind) typingPRP 1..* [Logical Interface Property](#Logical-Interface-Property) 

Specifies the fact that a Domain Item defines the type of a Logical Interface Property Exchange.
## mappingTO
0..* [System Capability](#System-Capability) mappingTO 1 [Operational Capability](#Operational-Capability) 

exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityMapping](stereotypes.md#SAF_SystemCapabilityMapping)

Specifies the fact that an Operational Capability may integrate System Capability(s) to produce a specific outcome to achieve a mission objective
## concepting
1..* [Logical Environment](#Logical-Environment) concepting 1..* [Physical Environment](#Physical-Environment) 

Specifies the fact that a logical Environment Entity is a concept for a Physical Environment Entity.
## containingFCusage
1..* [Functional Breakdown Structure](#Functional-Breakdown-Structure) containingFCusage 1..* [Functional Usage](#Functional-Usage) 

exposed in viewpoint [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)

realized by Metaclass Association

realized by Metaclass Property

Specifies the fact that a  Functional Breakdown Structure contains functional usages
## performingTSK
0..* [Operational Context Constituent](#Operational-Context-Constituent) performingTSK 0..* [Operational Usage](#Operational-Usage) 

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [Allocate](stereotypes.md#Allocate)

Specifies that an operational context constituent performs an operational activity in the context of an other operational activity.
## refiningSTRY
0..* [Operational Process](#Operational-Process) refiningSTRY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessRefinement](stereotypes.md#SAF_OperationalProcessRefinement)

Specifies the fact that an Operational Story is refined by an Operational Process.
## imposedBY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) imposedBY 1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementImposition](stereotypes.md#SAF_StakeholderRequirementImposition)

realized by Metaclass Package

Specifies the fact that a Stakeholder Requirement is provided by a Stakeholder.
## applyingTO
0..* [Physical Interface](#Physical-Interface) applyingTO 1 [Physical Context Element](#Physical-Context-Element) 

Specifies the fact that a Physical Interface applies to a Physical Context Element.
## supportingSTRY
0..* [System Capability](#System-Capability) supportingSTRY 0..* [System Story](#System-Story) 

Specifies the fact that an Functional Story is supported by a System Capability(s).
## derivingREQ
0..* [System Requirement](#System-Requirement) derivingREQ 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](stereotypes.md#SAF_SystemRequirementDerivation)

This is the relationship between a System Requirement and a Stakeholder Requirement. It is used in a customer supplier situation and supports the V Model concept of "External Unit Specification". See[VXT].
## sendingOUPUT
1 [General Function](#General-Function) sendingOUPUT 1..* [Functional Parameter](#Functional-Parameter) 

Defines the output(s) of a Function.
## dependingON
0..* [Operational Capability](#Operational-Capability) dependingON 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityDependency](stereotypes.md#SAF_OperationalCapabilityDependency)

Specifies the fact that an Operational Capability requires another Operational Capability(s).
## performing
0..* [State](#State) performing 0..* [System Function](#System-Function) 

exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)

Specifies the fact that the Function is only provided in distinct State(s). The state is a precondition for the Function to be able to perform.
## refiningCNRN
0..* [Stakeholder Requirement](#Stakeholder-Requirement) refiningCNRN 0..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that a Concern is refined by Stakeholder Requirement.
## refiningSFC
1..* [Functional Requirement](#Functional-Requirement) refiningSFC 1 [System Function](#System-Function) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementRefinement](stereotypes.md#SAF_SystemFunctionalRequirementRefinement)

Specifies the fact that an Functional Activity is refined by an Functional Requirement.
## supportingSTRY
0..* [Operational Capability](#Operational-Capability) supportingSTRY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilitySupport](stereotypes.md#SAF_OperationalCapabilitySupport)

Specifies the fact that an Operational Story is supported by a Operational Capability(s).
## exhibiting
1 [Operational Performer](#Operational-Performer) exhibiting 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerExhibit](stereotypes.md#SAF_OperationalPerformerExhibit)

Specifies the fact that an Operational Performer demonstrates a Capability under specific environmental conditions.
## specifying
1..* [Logical Interface Property](#Logical-Interface-Property) specifying 1 [Logical Interface Specification](#Logical-Interface-Specification) 

Specifies the fact that a Logical Interface Property is a detail of a Logical Interface Specification.
## capableOFperformingIN
0..* [Operational Performer](#Operational-Performer) capableOFperformingIN 0..* [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

Specifies the fact that an Operational Performer can perform an Operational Activity. Traceability from Operational Activities to Operational Performer elements. Derived via assignment of Operational Activity Usage to Operational Role(s).

Aliases:
UAF::IsCapableToPerform
## USEAGEallocatedTO
1..* [Functional Usage](#Functional-Usage) USEAGEallocatedTO 1 [Logical Constituent](#Logical-Constituent) 

Specifies the allocation of "Usage of Function" to "Usage of System Element".
See[SYSMLGUIDE] for use cases and further recommendations.
## derivingFROM
0..* [Stakeholder Requirement](#Stakeholder-Requirement) derivingFROM 0..* [Operational Capability](#Operational-Capability) 

Specifies the fact that (a subset of) a Capability is derived into Stakeholder Requirement(s).
## representingPFR
0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) representingPFR 0..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)

realized by Stereotype [SAF_OperationalStakeholderRepresentation](stereotypes.md#SAF_OperationalStakeholderRepresentation)

Specifies the fact that a SOI Stakeholder represents an Operational Performer
## refiningSTORY
1..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) refiningSTORY 1 [Operational Story](#Operational-Story) 

Specifies the fact that one or more Operational Interaction Scenario(s) are used to refine an Operational Story.
## is of kind
0..* [Operational Process Exchange](#Operational-Process-Exchange) is of kind 1 [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)

specifies the kind of an operational process exchange 
## composedOF
1 [System Capability](#System-Capability) composedOF 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityComposition](stereotypes.md#SAF_SystemCapabilityComposition)

Specifies the fact that an System Capability consists of a sub System Capability(s).
## characterisedBY
1..* [System Context Element](#System-Context-Element) characterisedBY 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_ContextElementCharacterization](stereotypes.md#SAF_ContextElementCharacterization)

Specifies the fact that a SOI Stakeholder can represent a system context element
## performingSystemTSK
1..* [Logical SOI Constituent](#Logical-SOI-Constituent) performingSystemTSK 1..* [Functional Usage](#Functional-Usage) 

exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Function Black Box Allocation Viewpoint](viewpoints/System-Function-Black-Box-Allocation-Viewpoint.md)

realized by Stereotype [Allocate](stereotypes.md#Allocate)

Defines that the System function is carried out by the SOI in this context
## actingIN
1..* [Operational Performer](#Operational-Performer) actingIN 1..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerActing](stereotypes.md#SAF_OperationalPerformerActing)

Specifies the fact that an Operational Performer acts in an Operational Story.
## allowing
1 [Logical Interface Connection](#Logical-Interface-Connection) allowing 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

Specifies the fact that a Logical Item Exchange is allowed on the Connection of Logical Interfaces.
## specializedBY
1 [System Capability](#System-Capability) specializedBY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityGeneralization](stereotypes.md#SAF_SystemCapabilityGeneralization)

Specifies the fact that an System Capability is specialized by another System Capability(s).
## containingGFC
1..* [Functional Breakdown Structure](#Functional-Breakdown-Structure) containingGFC 1..* [General Function](#General-Function) 

realized by Metaclass Association

Specifies the fact that a Functional Breakdown Structure contains general Functions
## concepting
1..* [Logical User](#Logical-User) concepting 1..* [Physical User](#Physical-User) 

Specifies that the Logical user is a concept for a Physical User.
## concepting
1..* [Logical External System](#Logical-External-System) concepting 1..* [Physical External System](#Physical-External-System) 

Specifies that the Logical System is a concept for a Physical System.
## containingSFC
1..* [Functional Breakdown Structure](#Functional-Breakdown-Structure) containingSFC 1..* [System Function](#System-Function) 

Specifies the fact that a Functional Breakdown Structure contains system functions.
## realizingELM
1 [Physical Item](#Physical-Item) realizingELM 1..* [Logical Element](#Logical-Element) 

Specifies the fact that a Physical Element realizes one or more Logical Element(s).
One Logical Element may be realized by exactly one Physical Element. 
Rationale:
If the Logical Element would be not realized at all then the physical system would not implement all specified functionality.
If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.
It is okay to assign several Logical Element(s) to one Physical Element. This means all specified functionality assigned to the Logical Element(s) is to be implemented by the Physical Element.
## beeingINstate
0..* [Physical Item](#Physical-Item) beeingINstate 0..* [State](#State) 

Specifies the fact that a Pysical System Element can be in one distinct states
## being_partOF
0..* [Functional Flow](#Functional-Flow) being_partOF 1 [Functional Usage](#Functional-Usage) 

Specifies the fact that a functional Flow appears within the usage of a function
## boundedBY
0..* [Functional Requirement](#Functional-Requirement) boundedBY 0..* [Nonfunctional Requirement](#Nonfunctional-Requirement) 

exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementConstraint](stereotypes.md#SAF_SystemFunctionalRequirementConstraint)

Specifies the fact that a Nonfunctional Requirement constrains a Functional Requirement.
## includingUC
1 [System Story](#System-Story) includingUC 0..* [System Story](#System-Story) 

realized by Metaclass Include

Specifies the fact that a system story includes other system story(s). The included story is then no longer a full system story, but a partial system story.
## typingPRM
1 [System Domain Kind](#System-Domain-Kind) typingPRM 1..* [Functional Parameter](#Functional-Parameter) 

Specifies the fact that a Domain Item defines the type of a Function Parameter
## satisfyingREQ
1 [Any SAF Element](#Any-SAF-Element) satisfyingREQ 1..* [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement is satisfied by a SAF Model Element.
## applyingTO
0..* [Logical Interface](#Logical-Interface) applyingTO 1 [Logical Element](#Logical-Element) 

exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Metaclass Property

realized by Metaclass Property

Specifies the fact that a Logical Interface applies to a Logical System Element.
## SFCallocatedTO
1..* [System Function](#System-Function) SFCallocatedTO 1 [Physical Item](#Physical-Item) 

Specifies the fact that a relationship is derived from the assignment of Function(s) to Logical Element(s) and the assignment of Logical Element(s) to Physical Element(s).
## mappingTO
0..* [Operational Process](#Operational-Process) mappingTO 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessMapping](stereotypes.md#SAF_OperationalProcessMapping)

Specifies the fact that an Operational Process contributes to providing an Operational Capability(s).

Aliases:
UAF::MapsToCapability
## contributingTO
0..* [System Story](#System-Story) contributingTO 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_SystemStoryContribution](stereotypes.md#SAF_SystemStoryContribution)

Specifies the fact that a System Story(s) is derived from Operational Story(s).
## containing
1 [Logical Interaction Scenario](#Logical-Interaction-Scenario) containing 0..* [Logical Chronological Message](#Logical-Chronological-Message) 

Specifies, that  Logical Interaction Scenario contains a Logical Chronological Message
## containingSFC
0..* [System Process](#System-Process) containingSFC 1..* [System Function](#System-Function) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

Specifies the Fact, that a System Function can appear in zero or more System Processes, and a System Process, can have one or more System Functions.
## synthesizingSFC
0..* [System Story](#System-Story) synthesizingSFC 0..* [System Function](#System-Function) 

Specifies the fact that a System Function can be used in one or more System Story(s) as a Task or Action related to the System. This is a derived relationship.
## composedOF
1 [Operational Performer](#Operational-Performer) composedOF 0..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerComposition](stereotypes.md#SAF_OperationalPerformerComposition)

Specifies the fact that an Operational Performer consists of one or more Operational Performer(s).
## havingCNRN
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) havingCNRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)

Specifies the fact that a Stakeholder has a certain Concern.
## relatedTO
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) relatedTO 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRelation](stereotypes.md#SAF_StakeholderRelation)

Explains relation(s) between the Stakeholder(s) of the system and other relevant system party(s). It helps to understand the Stakeholder community and to approach the right point of contact for clarification of project relevant issues.
## FSCcontributingTO
0..* [System Process](#System-Process) FSCcontributingTO 0..1 [Operational Process](#Operational-Process) 

Specifies the fact that an Operational Process is realized by a System Function, a Functional Activity.
## composedOF
1 [System Domain Kind](#System-Domain-Kind) composedOF 0..* [System Domain Kind](#System-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindComposition](stereotypes.md#SAF_DomainKindComposition)


## TO
1 [Functional Flow](#Functional-Flow) TO 1 [Functional Parameter](#Functional-Parameter) 

realized by Metaclass InputPin

Specifies the fact that a Functional Flow goes to a Functional Parameter
## taking_placeIN
1..* [Operational Story](#Operational-Story) taking_placeIN 1 [Operational Context](#Operational-Context) 

Specifies the fact that an Operational Story happens in a certain Operational Context. If parts of Operational Story happen in several contexts, they shall be duplicated.
## implementing
0..* [System Of Interest](#System-Of-Interest) implementing 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a SOI is acting for the benefit of a Operational Performer.
## refiningCIF
0..* [System Requirement](#System-Requirement) refiningCIF 0..* [Logical Interface](#Logical-Interface) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that [tbd]
## refiningSTRY
0..* [System Process](#System-Process) refiningSTRY 0..1 [System Story](#System-Story) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

A System Story can be refined by one Functional Scenario
## derivingREQ
0..* [System Requirement](#System-Requirement) derivingREQ 1 [System Requirement](#System-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](stereotypes.md#SAF_SystemRequirementDerivation)

This is the relationship of requirement(s) of different architectural levels, while the team responsible for the subsystem has direct access to the full upstream requirement(s) set, and no subcontractor relationship needs to be established.
## composedOF
1 [Operational Capability](#Operational-Capability) composedOF 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityComposition](stereotypes.md#SAF_OperationalCapabilityComposition)

Specifies the fact that an Operational Capability consists of a sub Operational Capability(s).
## specializedBY
1 [Operational Capability](#Operational-Capability) specializedBY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityGeneralization](stereotypes.md#SAF_OperationalCapabilityGeneralization)

Specifies the fact that an Operational Capability is specialized by another Operational Capability(s).
## allowing
1 [Physical Usage](#Physical-Usage) allowing 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

Specifies the fact that a Physical Item Exchange is allowed by the Usage of Physical Interface.
## dependingON
0..* [System Capability](#System-Capability) dependingON 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityDependency](stereotypes.md#SAF_SystemCapabilityDependency)

Specifies the fact that an System Capability requires another System Capability(s).
## beeingINstate
0..1 [System Domain Kind](#System-Domain-Kind) beeingINstate 0..* [State](#State) 

exposed in viewpoint [System State Viewpoint](viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine

Of course an item is in only one distinct state at a certain time. The multiplicity means that an Item can have a set of possible states, and a state can be used to specify possible State(s) for several domain items.
## containing
1 [Internal Logical Interaction Scenario](#Internal-Logical-Interaction-Scenario) containing 0..* [Internal Logical Chronological Message](#Internal-Logical-Chronological-Message) 

Specifies, that Internal Logical Interaction Scenario contains a Internal Logical Chronological Message
## performingContextTSK
0..* [Logical Context Constituent](#Logical-Context-Constituent) performingContextTSK 0..* [Functional Usage](#Functional-Usage) 

exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Function Black Box Allocation Viewpoint](viewpoints/System-Function-Black-Box-Allocation-Viewpoint.md)

realized by Stereotype [Allocate](stereotypes.md#Allocate)

Defines, that the External Function is expected to carried out by the Logical Context element in that context.
## typingITEM
0..* [Physical Item Exchange](#Physical-Item-Exchange) typingITEM 1 [Physical Item](#Physical-Item) 

Specifies the fact that a Physical Interface Item defines the type of a Physical Item Exchange.
## composedOF
1 [Operational Domain Kind](#Operational-Domain-Kind) composedOF 0..* [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKindComposition](stereotypes.md#SAF_OperationalDomainKindComposition)


## specifying
1 [Logical Interface Specification](#Logical-Interface-Specification) specifying 0..* [Logical Interface](#Logical-Interface) 

Specifies the fact that a Logical Interface Specification is a detail of a Logical Interface.
## typingITM
1 [System Domain Kind](#System-Domain-Kind) typingITM 1..* [Logical Item Exchange](#Logical-Item-Exchange) 

Specifies the fact that a Domain Item defines the type of a Logical Item Exchange.
## FROM
1 [Functional Flow](#Functional-Flow) FROM 1 [Functional Parameter](#Functional-Parameter) 

realized by Metaclass OutputPin

Specifies the fact that a Functional Flow comes from a Functional Parameter
## allowing
1 [Operational Connection](#Operational-Connection) allowing 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

realized by Stereotype [ItemFlow](stereotypes.md#ItemFlow)

Specifies the fact that an Operational Exchange takes place over a certain Operational Connection.
## applyingTO
0..* [Logical Interface](#Logical-Interface) applyingTO 1..* [Logical Context Element](#Logical-Context-Element) 

exposed in viewpoint [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property

Specifies the fact that a Logical Interface applies to a Logical Context Element.
## controlledAFTER
1 [General Function](#General-Function) controlledAFTER 1 [General Function](#General-Function) 

exposed in viewpoint [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ControlFlow

Specifies an ordering of execution of Function(s).
## taking_placeIN
1..* [System Story](#System-Story) taking_placeIN 1 [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)

realized by Stereotype [SAF_SystemStory](stereotypes.md#SAF_SystemStory)

Specifies the fact that one or more System Stories take place in a Logical System Context
## representingUSR
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) representingUSR 0..* [User](#User) 

Specifies the fact that an User is represented by a Stakeholder.
## specifying
1..* [Physical Interface Property](#Physical-Interface-Property) specifying 1 [Physical Interface Specification](#Physical-Interface-Specification) 

Specifies that Physical Interface Property is a detail of a Physical Interface Specification.
## refines
1 [transits to State](#transits-to-State) refines 0..* [Requirement](#Requirement) 


## containing
1 [Operational Interaction Scenario](#Operational-Interaction-Scenario) containing 0..* [Operational Chronological Message](#Operational-Chronological-Message) 


## receivingINPUT
1 [General Function](#General-Function) receivingINPUT 0..* [Functional Parameter](#Functional-Parameter) 

Defines the input(s) of a Function.
## refiningSTRY
0..* [System Requirement](#System-Requirement) refiningSTRY 0..* [System Story](#System-Story) 

exposed in viewpoint [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that an System Requirement is refined by an System Story.
