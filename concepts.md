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
