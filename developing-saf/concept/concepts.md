![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Concepts
# Class Concepts
## Abstract Physical Element
exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

Abstract element representing physical structure items keeping properties and relations applicable to all physical items.
## Any SAF Element

## Argument
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Argument](../../stereotypes.md#SAF_Argument)

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim.
## Aspect
realized by Stereotype [SAF_AspectColumn](../../stereotypes.md#SAF_AspectColumn)

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim.
## Claim
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Claim](../../stereotypes.md#SAF_Claim)

A claim is a true/false statement about a property of a particular object. A claim is just what you might consider it to be from common usage of the term; an idea that someone is trying to convince somebody else is true. An example claim could be made on a train, e.g., the train is safe.
## Claimable Item
realized by Stereotype [SAF_ClaimableItem](../../stereotypes.md#SAF_ClaimableItem)

A claim, argument, and evidence are all types of the abstract concept of a claimable item. This allows a counter-claim to be made about any type of claimable item and a claim to support any type of claimable item.
## Claimant
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Claimant](../../stereotypes.md#SAF_Claimant)

A party asserting claims.
## Compliance Statement
exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

Used in the communication between Stakeholder (Customer) and Contractor. Compliance Statements are the first answer to the Stakeholder Requirements and are usually together with the Stakeholder Requirements part of the contract. They are valuable input for the System development and System Requirement elicitation. Information status:
* not compliant (with explanation / rationale)
* partially compliant (with explanation / rationale)
* fully compliant
## Context Function
exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextFunction](../../stereotypes.md#SAF_ContextFunction)

Specifies the fact that a fundamental action or task is expected to be carried out by an External Entity. 
Note: The intention is to capture the expectations and to explicitly dissect the functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity. Capturing this valuable information is the basis to reach agreement on the functionality at the System boundary by clarifying the expectations about what is performed by Context Elements.
## Context Logical Interaction Scenario
exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between Logical Interaction Scenario Participants.
## CounterClaim
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_CounterClaim](../../stereotypes.md#SAF_CounterClaim)

A party's claim is a counter-claim if one party asserts claims in response to the claims of another.
## Domain
realized by Stereotype [SAF_DomainLayer](../../stereotypes.md#SAF_DomainLayer)

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim.
## Evidence
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Evidence](../../stereotypes.md#SAF_Evidence)

An evidence is an artifact that establishes facts that can be trusted and lead directly to a claim. In projects there can many sources of information, but what makes this evidence is the support or rebuttal it gives to a claim.
## Functional Requirement
exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

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
exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ObjectFlow



Specifies the fact that an Exchange between Function Parameters is taking place.
## General Functional Parameter
exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass Parameter



A parameter of a System or Context Function.
## General Interaction Scenario
Ordered sequence of exchanges of information, energy, or material between General Interaction Scenario Participants.
## General Scenario Participant

## Goal
A Goal is defined as an end state that a Stakeholder intends to achieve. Goals are generally expressed using qualitative words; e.g., “increase”, “improve”, or “easier”. Goals can also be decomposed; e.g., “increase profit” can be decomposed into the Goals “reduce cost” and “increase sales”. However, it is also very common to associate concrete objectives with Goals, which can be used to describe both the quantitative and time-related measures which are essential to describe the desired state, and when it should be achieved.
## Grid
exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

realized by Stereotype [SAF_SCV02b_View](../../stereotypes.md#SAF_SCV02b_View)

The Grid organizes viewpoints in grid cells assigned to categories of a domain (rows) and  an aspect  (columns)
## Grid Cell
exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

realized by Stereotype [SAF_SCV02b_View](../../stereotypes.md#SAF_SCV02b_View)

The Grid Cells contain viewpoints
## Hardware Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalHardwareElement](../../stereotypes.md#SAF_PhysicalHardwareElement)

Pure Hardware Elements. Similarity to the V-Model "hardware unit".
## Internal Logical Interaction Scenario
exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between Internal Logical Interaction Scenario Participants.
## Logical Connection Point
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype ProxyPort



Specifies the existence of an interaction point on Logical Level.
## Logical Connection Point Definition
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_ConceptualInterfaceDefinition](../../stereotypes.md#SAF_ConceptualInterfaceDefinition)

Specifies the exchange capabilities of an interaction point on Logical Level.
## Logical Connection Property
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype FlowProperty



Specifies a detail of an interaction point on a Logical Level.
## Logical Context Element
Abstract element of a System Context in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Logical Element
exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Structure Viewpoint](../viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype [SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)

Describes a logical, conceptual system as specification for an implementation of a system, or system part.
## Logical Element Constituent
General part of a logical System Context
## Logical Environment
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalEnvironment](../../stereotypes.md#SAF_LogicalEnvironment)

An Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., air, dirt, sun, road.
## Logical External System
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalExternalSystem](../../stereotypes.md#SAF_LogicalExternalSystem)

An External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., power grid, mobile network, fresh water system (in a house).
## Logical Item Exchange
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype ItemFlow



Specifies the exchange that is to take place on a Logical Interface Connection.
## Logical SOI
exposed in viewpoint [Logical Structure Viewpoint](../viewpoints/Logical-Structure-Viewpoint.md)

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)

A SOI representation in the Logical Domain.
## Logical System Context
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_LogicalContext](../../stereotypes.md#SAF_LogicalContext)

Specifies the fact that a context for a System of Interest is defined on Logical Level.
## Logical User
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalUser](../../stereotypes.md#SAF_LogicalUser)

A human representation in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Need
A User has a Need in order to reach a certain Goal.
Note: "Buying sugar to bake a birthday cake".
## Non-functional Requirement
exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemNonFunctionalRequirement](../../stereotypes.md#SAF_SystemNonFunctionalRequirement)

Non-Functional Requirements specify the quality of System Functions, or non-functional requests like legal conformance.
## Operational Capability
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../viewpoints/Operational-Capability-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapability](../../stereotypes.md#SAF_OperationalCapability)

A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capabilities typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.

Aliases:
UAF::Capability
NAF4::Capability
## Operational Context
exposed in viewpoint [Operational Context Definition Viewpoint](../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalContext](../../stereotypes.md#SAF_OperationalContext)

An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, these are interacting in the Scenario exhibiting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. 

Aliases:
UAF::HighLevelOperationalConcept
## Operational Domain Kind
exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Domain Item Kind Viewpoint](../viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKind](../../stereotypes.md#SAF_OperationalDomainKind)

Specifies the kind of exchange between Operational Context Constituents or between Operational Processes.
## Operational Interaction Scenario
exposed in viewpoint [Operational Interaction Viewpoint](../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between Operational Interaction Scenario Participants.
## Operational Item Exchange
exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype ItemFlow



Specifies the exchange that is to take place on an Operational Connection.

Aliases:
UAF::OperationalExchange
## Operational Performer
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Context Definition Viewpoint](../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformer](../../stereotypes.md#SAF_OperationalPerformer)

An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.

Aliases:
UAF::OperationalPerformer
## Operational Process
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcess](../../stereotypes.md#SAF_OperationalProcess)

An Operational Process captures activity-based operational behavior including scenarios, activity actions, and operational exchange flows, e.g., including information, materials, natural resources, etc.

Aliases:
UAF::Operational Activity
NAF::Logical Activity
## Operational Sketch
exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalSketch](../../stereotypes.md#SAF_OperationalSketch)

Specifies a free form sketch depicting a concept.
## Operational Story
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_OperationalStory](../../stereotypes.md#SAF_OperationalStory)

The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.
## Physical Connection Point
exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype ProxyPort



Specifies the existence of an interaction point on Physical Level.
## Physical Connection Point Definition
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInterfaceDefinition](../../stereotypes.md#SAF_PhysicalInterfaceDefinition)

Specifies the exchange capabilities of an interaction point on Physical Level.
## Physical Connection Point Property
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype FlowProperty



Specifies a detail of a physical connection point.
## Physical Connector Compatibility
Specifies the fact that two Physical Interface Connection Point Definitions are compatible and how the Physical Interface Connection Properties are mapped.
## Physical Context Element
Abstract element of a System Context  in the Physical Domain, outside the SOI scope, interacting with the SOI.
## Physical Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype [SAF_PhysicalElement](../../stereotypes.md#SAF_PhysicalElement)

A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].
## Physical Environment
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalEnvironment](../../stereotypes.md#SAF_PhysicalEnvironment)

The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## Physical Exchange Kind
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExchangeType](../../stereotypes.md#SAF_PhysicalExchangeType)

Specifies the realization of a System Domain Kind on physical domain level. It is  used to define exchanges on Physical Interface Connections.
## Physical External System
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExternalSystem](../../stereotypes.md#SAF_PhysicalExternalSystem)

The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## Physical Item Exchange
exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype ItemFlow



Specifies the exchange that is to take place on a Physical Connection.
## Physical Layer
Specifies a Physical Layer, usually used for communication.
## Physical Layer Stack
Specifies a detail of an interaction point on Physical Level.
## Physical SOI
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSystem](../../stereotypes.md#SAF_PhysicalSystem)

Represents the SOI in the Physical Domain.
## Physical System Context
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalContext](../../stereotypes.md#SAF_PhysicalContext)

Defines a context for a System of Interest on Physical Level.
## Physical Usage
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

General concept of usage on physical level.
## Physical User
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalUser](../../stereotypes.md#SAF_PhysicalUser)

The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.
## Refuter
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Refuter](../../stereotypes.md#SAF_Refuter)

A party asserting counter-claims.
## Software Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSoftwareElement](../../stereotypes.md#SAF_PhysicalSoftwareElement)

Pure Software Elements. Similarity to the V-Model "software unit".
## Stakeholder Requirement
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)

A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholder Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreements of how the SOI addresses the Concerns of the respective Stakeholder.
## Structural Item
Basic concept of an Item of a structure.
## Subject
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Subject](../../stereotypes.md#SAF_Subject)

Note: A claim can not be generic, it have to be about something, it has to have a defined subject, e.g., system safety.
## System Capability
exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

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
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)

Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.
## System Function
exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunction](../../stereotypes.md#SAF_SystemFunction)

Specifies the fundamental action or task that have to take place in the System in accepting and processing the
inputs and in processing and generating the outputs.
A System Function
 * accepts input from the System boundary 
 * exposes its output at the System boundary
 * changes the System's State
 * is dependent on System's State
Note: A System Function does not need to expose observable output, when it changes the System's state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent on the System State, which in turn is changeable by other System Functions.
## System Of Interest
An abstract element representing the SOI. Base for specific perspectives on SOI (logical , physical)
## System Partial Function
exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

realized by Stereotype [SAF_SystemPartialFunction](../../stereotypes.md#SAF_SystemPartialFunction)

Specifies the fact that a System Partial Function is a decomposed part of a System Function and defines details of the System Function it belongs to.
## System Process
exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemProcess](../../stereotypes.md#SAF_SystemProcess)

Specifies the fact that a System Process captures system behavior as a specific sequence of actions or tasks, and system exchanges including information, materials, energy, etc.
## System Requirement
exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirement](../../stereotypes.md#SAF_SystemRequirement)

System Requirements specify System Functions, non-functional properties, or constraints of the System.
## System State
exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass State



Describes a state (or mode) of something that can have distinct states.
## System Use Case
exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCase](../../stereotypes.md#SAF_SystemUseCase)

The System Use Cases are a table of content of the services provided by the System of Interest to its System Actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. While the main System of Interest interaction actors participating in this Use Case are identified, the behavior itself is specified by a Use Case Activity, 
Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general).
## System of Interest Concern
exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemOfInterestConcern](../../stereotypes.md#SAF_SystemOfInterestConcern)

Any kind of interest a Stakeholder has. 
Note: Redundant with the meaning of "Need"?
## System of Interest Stakeholder
exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

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
## View
realized by Stereotype [SAF_Diagram](../../stereotypes.md#SAF_Diagram)

The Grid Cells contain viewpoints
## Viewpoint
realized by Stereotype [SAF_Viewpoint](../../stereotypes.md#SAF_Viewpoint)

The Grid Cells contain viewpoints
# Association Concepts
## AGTsupportingCLM
0..* [Argument](#Argument) AGTsupportingCLM 1..* [Claim](#Claim) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ArgumentClaimSupport](../../stereotypes.md#SAF_ArgumentClaimSupport)

Specifies the fact that a claim is supported by one or more arguments via a claim-argument relation.
## APEbeeingInSSE
0..* [Abstract Physical Element](#Abstract-Physical-Element) APEbeeingInSSE 0..* [System State](#System-State) 

Specifies the fact that a Physical System Element can be in distinct states.
## APEimplementingGFN
1 [Abstract Physical Element](#Abstract-Physical-Element) APEimplementingGFN 1..* [General Function](#General-Function) 


## CCMcounteringCIM
0..* [CounterClaim](#CounterClaim) CCMcounteringCIM 0..* [Claimable Item](#Claimable-Item) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_CounterClaimClaimableItemMaking](../../stereotypes.md#SAF_CounterClaimClaimableItemMaking)

Specifies the fact that any claimable item, e.g., claim, argument, and evidence, is countered by one or more claims.
## CFNallocatedToLCE
1..* [Context Function](#Context-Function) CFNallocatedToLCE 1 [Logical Context Element](#Logical-Context-Element) 

Specifies the fact that a Context Function is assigned to a Logical Context Element.
Note: This fact may be derived from the Usage of Function of a Context Function allocated to a Logical Context Element Constituent.
## CLIScontainingLCM
1 [Context Logical Interaction Scenario](#Context-Logical-Interaction-Scenario) CLIScontainingLCM 0..* [Context Logical Chronological Message](#Context-Logical-Chronological-Message) 

Specifies the fact that a Logical Interaction Scenario contains one or more Logical Chronological Messages.
## CLMbeingMadeAboutSBT
1 [Claim](#Claim) CLMbeingMadeAboutSBT 0..1 [Subject](#Subject) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimAboutSubjectMaking](../../stereotypes.md#SAF_ClaimAboutSubjectMaking)

Specifies the fact that a claim is made about an identified subject.
## CLMsupportingCIM
0..* [Claim](#Claim) CLMsupportingCIM 0..* [Claimable Item](#Claimable-Item) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimClaimableItemSupport](../../stereotypes.md#SAF_ClaimClaimableItemSupport)

Specifies the fact that any claimable item, e.g., claim, argument, and evidence, is supported by one or more claims.
## CLTmakingCLM
1 [Claimant](#Claimant) CLTmakingCLM 1..* [Claim](#Claim) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimantClaimMaking](../../stereotypes.md#SAF_ClaimantClaimMaking)

Specifies the fact that a claim is made by a defined claimant.
## CSTconfirmingSHR
1 [Compliance Statement](#Compliance-Statement) CSTconfirmingSHR 1 [Stakeholder Requirement](#Stakeholder-Requirement) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

Specifies the fact that a Stakeholder Requirement has certain States of Compliance.
## EVCreinforcingAGT
0..* [Evidence](#Evidence) EVCreinforcingAGT 1..* [Argument](#Argument) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_EvidenceArgumentReinforcement](../../stereotypes.md#SAF_EvidenceArgumentReinforcement)

Specifies the fact that an argument is reinforced by one or more evidence via a argument-evidence relation.
## FRboundedByNFR
1..* [Functional Requirement](#Functional-Requirement) FRboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementConstraint](../../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)

Specifies the fact that a Non-Functional Requirement constrains Functional Requirements.
## FRrefiningSFN
1..* [Functional Requirement](#Functional-Requirement) FRrefiningSFN 1 [System Function](#System-Function) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementRefinement](../../stereotypes.md#SAF_SystemFunctionalRequirementRefinement)

Specifies the fact that a System Function is refined by Functional Requirements.
## GCBelongstoD
1..* [Grid Cell](#Grid-Cell) GCBelongstoD 1 [Domain](#Domain) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

realized by Stereotype [SAF_SCV02b_View](../../stereotypes.md#SAF_SCV02b_View)

specifies that a grid cell is assigned to one domain
## GCbelongstoA
1..* [Grid Cell](#Grid-Cell) GCbelongstoA 1 [Aspect](#Aspect) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

realized by Stereotype [SAF_SCV02b_View](../../stereotypes.md#SAF_SCV02b_View)

specifies that a grid cell is assigned to one aspect
## GCcontainsVP
1 [Grid Cell](#Grid-Cell) GCcontainsVP 0..* [Viewpoint](#Viewpoint) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)


## GCcontainsView
1 [Grid Cell](#Grid-Cell) GCcontainsView 1 [View](#View) 

realized by Stereotype [SAF_SCV02b_View](../../stereotypes.md#SAF_SCV02b_View)

specifies that the grid cell contains views.
## GFFbeingPartOfGFNU
0..* [General Functional Flow](#General-Functional-Flow) GFFbeingPartOfGFNU 1 [General Functional Usage](#General-Functional-Usage) 

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

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ControlFlow



Specifies a sequential execution of Functions.
## GFNreceivingINPUT
1 [General Function](#General-Function) GFNreceivingINPUT 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the Input of a System or Context Function.
## GFNsendingOUPUT
1 [General Function](#General-Function) GFNsendingOUPUT 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the Output of a System or Context Function.
## GcontainsA
1 [Grid](#Grid) GcontainsA 1..* [Aspect](#Aspect) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

specifies that the grid contains several aspects
## GcontainsD
1 [Grid](#Grid) GcontainsD 1 [Domain](#Domain) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

specifies that the grid contains several domains
## GcontainsGC
1 [Grid](#Grid) GcontainsGC 1..* [Grid Cell](#Grid-Cell) 

exposed in viewpoint [Grid Overview Viewpoint](../viewpoints/Grid-Overview-Viewpoint.md)

specifies that the grid contains several grid cells
## ILIScontainingILCM
1 [Internal Logical Interaction Scenario](#Internal-Logical-Interaction-Scenario) ILIScontainingILCM 0..* [Internal Logical Chronological Message](#Internal-Logical-Chronological-Message) 

Specifies the fact that an Internal Logical Interaction Scenario contains one or more Internal Logical Chronological Messages.
## LCEactingInSUC
1..* [Logical Context Element](#Logical-Context-Element) LCEactingInSUC 1..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextElementActing](../../stereotypes.md#SAF_LogicalContextElementActing)

Specifies the fact that a Logical Context Element acts in one or more System Use Cases.
## LCEperformingCFN
0..* [Logical Context Element Constituent](#Logical-Context-Element-Constituent) LCEperformingCFN 0..* [Context Function IN System Process](#Context-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a Context Function is expected to be carried out by the Logical Context Element in this System Context.
## LCNallowingLIE
1 [Logical Connection](#Logical-Connection) LCNallowingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Attribute "realizing connector" of ItemFlow referencing Connector

Specifies the fact that a Logical Item Exchange is allowed on the Logical Interface Connection.
## LCPDdefiningDetailOfLCP
1 [Logical Connection Point Definition](#Logical-Connection-Point-Definition) LCPDdefiningDetailOfLCP 0..* [Logical Connection Point](#Logical-Connection-Point) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by ProxyPort typed by InterfaceBlock

Specifies the fact that a Logical Interface Connection Point Definition defines the exchange capabilities of a Logical Interface Connection Point.
## LCPapplyingToLCE
0..* [Logical Connection Point](#Logical-Connection-Point) LCPapplyingToLCE 1..* [Logical Context Element](#Logical-Context-Element) 

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property



Specifies the fact that a Logical Interface Connection Point applies to a Logical Context Element.
## LCPapplyingToLET
0..* [Logical Connection Point](#Logical-Connection-Point) LCPapplyingToLET 1 [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property



Specifies the fact that a Logical Interface Connection Point applies to a Logical Element.
## LCPboundedByPLS
0..* [Logical Connection Point](#Logical-Connection-Point) LCPboundedByPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Logical Interface Connection Point is constrained to be implemented on a particular Physical Layer Stack.
## LCPspecifyingDetailOfLCPD
0..* [Logical Connection Property](#Logical-Connection-Property) LCPspecifyingDetailOfLCPD 1 [Logical Connection Point Definition](#Logical-Connection-Point-Definition) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by FlowProperty contained in SAF_ConceptualInterfaceDefinition

Specifies the fact that a Logical Interface Property is a detail of a Logical Interface Connection Point Definition.
## LENconceptingPEN
1..* [Logical Environment](#Logical-Environment) LENconceptingPEN 1..* [Physical Environment](#Physical-Environment) 

Specifies the fact that a logical Environment Entity is a concept for a Physical Environment Entity.
## LESconceptingPES
1..* [Logical External System](#Logical-External-System) LESconceptingPES 1..* [Physical External System](#Physical-External-System) 

Specifies that the Logical System is a concept for a Physical System.
## LETbeeingInSSE
0..* [Logical Element](#Logical-Element) LETbeeingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine



Specifies the fact that a Logical Element can be in one distinct System State.
## LETimplementingGFN
1..* [Logical Element](#Logical-Element) LETimplementingGFN 1..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

Specifies the fact that a Logical Element is responsible to implement a System Function.
Note: Logical Elements don't "implement" anything, they pass the function implementation task to Physical Elements.
## LETperformingSFN
1..* [Logical SOI Constituent](#Logical-SOI-Constituent) LETperformingSFN 1..* [System Function IN System Process](#System-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a System Function is expected to be carried out by the SOI in this System Context.
## LETspecifyingAPE
1..* [Logical Element](#Logical-Element) LETspecifyingAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

Specifies the fact that a Logical Element specifies one or more Physical Elements. One Physical Element may be specified by exactly one Logical Element. 
Rationale:
If the Logical Element would be not specifies at all then the physical system would not implement all specified functionality.
If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.
It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.
## LIEboundedByPL
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEboundedByPL 0..1 [Physical Layer](#Physical-Layer) 

Specifies the fact that a Logical Item Exchange is constrained to be implemented on a particular Physical Layer.
## LIEboundedByPLS
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEboundedByPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Logical Item Exchange is constrained to be implemented on a particular Physical Layer Stack.
## LURconceptingPUR
1..* [Logical User](#Logical-User) LURconceptingPUR 1..* [Physical User](#Physical-User) 

Specifies that the Logical user is a concept for a Physical User.
## OCNallowingOIE
1 [Operational Connection](#Operational-Connection) OCNallowingOIE 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

realized by Stereotype ItemFlow



Specifies the fact that an Operational Item Exchange is allowed on the Operational Connection.
## OCYcomposedOF
1 [Operational Capability](#Operational-Capability) OCYcomposedOF 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityComposition](../../stereotypes.md#SAF_OperationalCapabilityComposition)

Specifies the fact that an Operational Capability consists of other Operational Capabilites.
## OCYdependingON
0..* [Operational Capability](#Operational-Capability) OCYdependingON 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityDependency](../../stereotypes.md#SAF_OperationalCapabilityDependency)

Specifies the fact that an Operational Capability depends on another Operational Capability.

Aliases:
UAF::CapabilityDependency
## OCYspecializedBY
1 [Operational Capability](#Operational-Capability) OCYspecializedBY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Capability Viewpoint](../viewpoints/Operational-Capability-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityGeneralization](../../stereotypes.md#SAF_OperationalCapabilityGeneralization)

Specifies the fact that an Operational Capability is specialized by other Operational Capability. 

Aliases:
UAF::CapabilityGeneralization
## OCYsupportingOSY
0..* [Operational Capability](#Operational-Capability) OCYsupportingOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilitySupport](../../stereotypes.md#SAF_OperationalCapabilitySupport)

Specifies the fact that an Operational Story is supported by Operational Capabilities.
## ODKcomposedOF
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKcomposedOF 0..* [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [Operational Domain Item Kind Viewpoint](../viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_OperationalDomainKindComposition](../../stereotypes.md#SAF_OperationalDomainKindComposition)

Specifies the fact that an Operational Domain Kind consists of one or more Operational Domain Kinds.
## ODKtypifyingOIE
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKtypifyingOIE 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

Specifies the fact that an Operational Domain Kind typifies an Operational Item Exchange.
## ODKtypifyingOPE
1 [Operational Domain Kind](#Operational-Domain-Kind) ODKtypifyingOPE 0..* [Operational Process Exchange](#Operational-Process-Exchange) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

Specifies the fact that an Operational Domain Kind typifies an Operational Process Exchange.
## OIScontainingOCM
1 [Operational Interaction Scenario](#Operational-Interaction-Scenario) OIScontainingOCM 0..* [Operational Chronological Message](#Operational-Chronological-Message) 

Specifies the fact that an Operational Interaction Scenario contains one or more Operational Chronological Messages.
## OISrefiningOSY
1..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) OISrefiningOSY 1 [Operational Story](#Operational-Story) 

Specifies the fact that an Operational Story is refined by one or more Operational Interaction Scenarios.
## OPRactingInOSY
1..* [Operational Performer](#Operational-Performer) OPRactingInOSY 1..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerActing](../../stereotypes.md#SAF_OperationalPerformerActing)

Specifies the fact that an Operational Performer acts in an Operational Story.
## OPRcapableOFperformingOPS
0..* [Operational Performer](#Operational-Performer) OPRcapableOFperformingOPS 0..* [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

Specifies the fact that an Operational Performer performs an Operational Activity. Traceability from Operational Activities to Operational Performers is derived via assignment of Operational Action to Operational Roles.

Aliases:
UAF::IsCapableToPerform
## OPRcomposedOF
1 [Operational Performer](#Operational-Performer) OPRcomposedOF 0..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerComposition](../../stereotypes.md#SAF_OperationalPerformerComposition)

Specifies the fact that an Operational Performer consists of one or more Operational Performers.
## OPRexhibitingOCY
1 [Operational Performer](#Operational-Performer) OPRexhibitingOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalPerformerExhibit](../../stereotypes.md#SAF_OperationalPerformerExhibit)

Specifies the fact that an Operational Performer exhibits an Operational Capability under specific environmental conditions.
## OPRperformingOPSU
0..* [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) OPRperformingOPSU 0..* [Operational Process Usage](#Operational-Process-Usage) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies that an Operational Context Constituent performs an Operational Action in the context of an other Operational Activity.
## OPSenablingOCY
0..* [Operational Process](#Operational-Process) OPSenablingOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessEnabling](../../stereotypes.md#SAF_OperationalProcessEnabling)

Specifies the fact that an Operational Process contributes to the provision of one or more Operational Capabilities in the field.

Aliases:
UAF::MapsToCapability
## OPSrefiningOSY
0..* [Operational Process](#Operational-Process) OPSrefiningOSY 1 [Operational Story](#Operational-Story) 

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessRefinement](../../stereotypes.md#SAF_OperationalProcessRefinement)

Specifies the fact that an Operational Story is refined by one or more Operational Processes.
## OSYtakingPlaceInOCT
1..* [Operational Story](#Operational-Story) OSYtakingPlaceInOCT 1 [Operational Context](#Operational-Context) 

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

realized by Attribute "subject" of UseCase referencing SAF_OperationalContext

Specifies the fact that an Operational Story occurs in a certain Operational Context. 
Note: When parts of an Operational Story do occur in several contexts, they shall be duplicated.
## PCCapplyingToPCN
0..* [Physical Connection](#Physical-Connection) PCCapplyingToPCN 0..1 [Physical Connector Compatibility](#Physical-Connector-Compatibility) 

Specifies the fact that a Physical Interface Connection Compatibility Assertion shall apply to a Physical Interface Connection.
## PCCassertsCompatibiltyForPCPD
1 [Physical Connector Compatibility](#Physical-Connector-Compatibility) PCCassertsCompatibiltyForPCPD 2 [Physical Connection Point Definition](#Physical-Connection-Point-Definition) 

Specifies the Physical Interface Connection Point Definition the Physical Compatibility Assertion is valid for.
## PCNallowingPIE
1 [Physical Connection](#Physical-Connection) PCNallowingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Attribute "realizing connector" of ItemFlow referencing Connector

Specifies the fact that a Physical Item Exchange is allowed on the Physical Connection.
## PCPDdefiningPCP
1 [Physical Connection Point Definition](#Physical-Connection-Point-Definition) PCPDdefiningPCP 0..* [Physical Connection Point](#Physical-Connection-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by ProxyPort typed by SAF_PhysicalInterfaceDefinition

Specifies the fact that a Physical Connection Point Definition defines the exchange capabilities of a Physical Connection Point.
## PCPapplyingToAPE
0..* [Physical Connection Point](#Physical-Connection-Point) PCPapplyingToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

Specifies the fact that a Physical Interface Connection Point applies to an Abstract Physical Element.
## PCPapplyingToPCE
0..* [Physical Connection Point](#Physical-Connection-Point) PCPapplyingToPCE 1 [Physical Context Element](#Physical-Context-Element) 

Specifies the fact that a Physical Interface Connection Point applies to a Physical Context Element.
## PCPisPartOfPCPD
0..* [Physical Connection Point](#Physical-Connection-Point) PCPisPartOfPCPD 1 [Physical Connection Point Definition](#Physical-Connection-Point-Definition) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by SAF_PhysicalInterfaceDefinition contained in ProxyPort

specifies that a physical connection point can be a part of a physical connection point definition. This fosters reuse and allows structuring of definitions.
## PCPspecifyingDetailOfPCPD
0..* [Physical Connection Point Property](#Physical-Connection-Point-Property) PCPspecifyingDetailOfPCPD 1 [Physical Connection Point Definition](#Physical-Connection-Point-Definition) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by FlowProperty contained in SAF_PhysicalInterfaceDefinition

Specifies the fact that a Physical Connection Property is a detail of a Physical Connection Point Definition.
## PEKisAssignedToPL
0..1 [Physical Layer](#Physical-Layer) PEKisAssignedToPL 0..* [Physical Exchange Kind](#Physical-Exchange-Kind) 

Specifies the fact that a Physical Exchange Kind is assigned to a particular Physical Layer.
## PEKrealizingSDK
1..* [Physical Exchange Kind](#Physical-Exchange-Kind) PEKrealizingSDK 1 [System Domain Kind](#System-Domain-Kind) 

Specifies the fact that a System Domain Kind is realized by Physical Exchange Kinds.
## PEKtypingPCP
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPCP 0..* [Physical Connection Point Property](#Physical-Connection-Point-Property) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by FlowProperty typed by SAF_PhysicalExchangeType

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Connection Point Property.
## PEKtypingPIE
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by ItemFlow typed by SAF_PhysicalExchangeType

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Item Exchange.
## PLOisValidInPLS
0..* [Physical Layer Ordering](#Physical-Layer-Ordering) PLOisValidInPLS 1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Physical Layer Ordering is valid within a particular Physical Layer Stack.
## RFTmakingCCM
1 [Refuter](#Refuter) RFTmakingCCM 1 [CounterClaim](#CounterClaim) 

realized by Stereotype [SAF_RefuterCounterClaimMaking](../../stereotypes.md#SAF_RefuterCounterClaimMaking)

Specifies the fact that a counter-claim is made by a defined refuter.
## SCEactingForOPR
0..* [System Context Element](#System-Context-Element) SCEactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a System Context Element is acting for the benefit of an Operational Performer.
## SCYcomposedOF
1 [System Capability](#System-Capability) SCYcomposedOF 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityComposition](../../stereotypes.md#SAF_SystemCapabilityComposition)

Specifies the fact that a System Capability consists of other System Capabilities.
## SCYdependingON
0..* [System Capability](#System-Capability) SCYdependingON 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityDependency](../../stereotypes.md#SAF_SystemCapabilityDependency)

Specifies the fact that a System Capability requires another System Capability.

Aliases:
UAF::CapabilityDependency
## SCYenablingOCY
0..* [System Capability](#System-Capability) SCYenablingOCY 1 [Operational Capability](#Operational-Capability) 

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityEnabling](../../stereotypes.md#SAF_SystemCapabilityEnabling)

Specifies the fact that an Operational Capability integrates System Capabilities to produce a specific outcome to achieve a mission objective.
## SCYsatisfyingSHR
0..* [System Capability](#System-Capability) SCYsatisfyingSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

realized by Stereotype [SAF_SystemCapabilitySatisfaction](../../stereotypes.md#SAF_SystemCapabilitySatisfaction)

Specifies the fact that a System Capability satisfies one or more Stakeholder Requirements.
## SCYspecializedBY
1 [System Capability](#System-Capability) SCYspecializedBY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityGeneralization](../../stereotypes.md#SAF_SystemCapabilityGeneralization)

Specifies the fact that a System Capability is specialized by another System Capability. A CapabilityGeneralization is a taxonomic relationship between a more general Capability and a more specific Capability.

Aliases:
UAF::CapabilityGeneralization
## SCYsupportingSUC
0..* [System Capability](#System-Capability) SCYsupportingSUC 0..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilitySupport](../../stereotypes.md#SAF_SystemCapabilitySupport)

Specifies the fact that a System UseCase is supported by System Capabilities.
## SDKbeeingInSSE
0..* [System Domain Kind](#System-Domain-Kind) SDKbeeingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine



Specifies that a System Domain Kind can have certain states.
Note:
Of course an item is in only one distinct state at a certain time. The multiplicity means that an Item can have a set of possible states, and a state can be used to specify possible States for several domain items.
## SDKcomposedOF
1 [System Domain Kind](#System-Domain-Kind) SDKcomposedOF 0..* [System Domain Kind](#System-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindComposition](../../stereotypes.md#SAF_DomainKindComposition)

Specifies the fact that a System Domain Kind consists of one or more System Domain Kinds.
## SDKderivingFromODK
0..* [System Domain Kind](#System-Domain-Kind) SDKderivingFromODK 0..1 [Operational Domain Kind](#Operational-Domain-Kind) 

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype [SAF_DomainKindDerivation](../../stereotypes.md#SAF_DomainKindDerivation)

Specifies the fact that a System Domain Kind on system level is derived from an Operational Domain Kind.
## SDKtypingFPM
1 [System Domain Kind](#System-Domain-Kind) SDKtypingFPM 0..* [General Functional Parameter](#General-Functional-Parameter) 

Specifies the fact that a System Domain Kind defines the type of a Function Parameter.
## SDKtypingLCP
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLCP 0..* [Logical Connection Property](#Logical-Connection-Property) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by FlowProperty typed by SAF_DomainKind

Specifies the fact that a System Domain Kind defines the type of a Logical Interface Connection Property.
## SDKtypingLIE
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by ItemFlow typed by SAF_DomainKind

Specifies the fact that a System Domain Kind defines the type of a Logical Item Exchange.
## SFNallocatedToAPE
1..* [System Function](#System-Function) SFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

Specifies the fact that a relationship is derived from the assignment of Functions to Logical Elements and the assignment of Logical Elements to Physical Elements.
## SFNallocatedToLET
1..* [System Function](#System-Function) SFNallocatedToLET 1 [Logical SOI](#Logical-SOI) 

Specifies the fact that a System Function is assigned to a Logical SOI.
Note: This fact may be derived from the Usage of Function of a System Function allocated to a Logical SOI Constituent.
## SFNboundedByNFR
1 [System Function](#System-Function) SFNboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

Specifies the fact that a Non-functional Requirement constrains System Functions.
## SFNresultingInSSE
0..* [System Function](#System-Function) SFNresultingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

Specifies the fact that a System Function can perform a particular set of System State transitions.
## SFNsupportingSCY
0..* [System Function](#System-Function) SFNsupportingSCY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionSupport](../../stereotypes.md#SAF_SystemFunctionSupport)

Specifies the fact that a System Function supports one or more System Capabilities.
## SHRimposedBY
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRimposedBY 1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementImposition](../../stereotypes.md#SAF_StakeholderRequirementImposition)

realized by Metaclass Package



Specifies the fact that a Stakeholder Requirement is provided by Stakeholders.
## SHRrefiningCRN
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningCRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that a Stakeholder Concern is refined by Stakeholder Requirements.
## SHRrefiningOCY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Capability is refined by Stakeholder Requirements.
## SHRrefiningOSY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Story is refined by Stakeholder Requirements.
## SOIactingForOPR
0..* [System Of Interest](#System-Of-Interest) SOIactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a SOI is acting for the benefit of an Operational Performer.
## SPFNallocatedToAPE
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

Specifies the fact that a System Partial Function is assigned to an Abstract Physical Element.
Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Physical SOI Element Constituent.
## SPFNallocatedToLET
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToLET 1 [Logical Element](#Logical-Element) 

Specifies the fact that a System Partial Function is assigned to a Logical SOI Element.
Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Logical SOI Element Constituent.
## SPSenablingOPS
0..* [System Process](#System-Process) SPSenablingOPS 0..1 [Operational Process](#Operational-Process) 

Specifies the fact that a System Process enables the accomplishment of an Operational Process.
## SPSenablingSCY
0..* [System Process](#System-Process) SPSenablingSCY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemProcessEnabling](../../stereotypes.md#SAF_SystemProcessEnabling)

Specifies the fact that a System Process contributes to the provision of one or more System Capabilities in the field.
## SPSrefiningSUC
0..1 [System Process](#System-Process) SPSrefiningSUC 1 [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemProcessRefinement](../../stereotypes.md#SAF_SystemProcessRefinement)

Specifies the fact that a System Use Case is refined by one System Process.
## SRderivingFromSHR
0..* [System Requirement](#System-Requirement) SRderivingFromSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: It may be used in a customer supplier relationship situation and supports the V Model concept of "External Unit Specification". See [VXT].
## SRderivingFromSR
0..* [System Requirement](#System-Requirement) SRderivingFromSR 1 [System Requirement](#System-Requirement) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

exposed in viewpoint [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that System Requirements are derived from a Stakeholder Requirement. 
Note: This is the relationship of requirements of different architectural levels. When the team responsible for the subsystem has direct access to the full upstream requirements set, then no subcontractor relationship needs to be established.
## SRrefiningLICP
0..* [System Requirement](#System-Requirement) SRrefiningLICP 0..* [Logical Connection Point](#Logical-Connection-Point) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a Logical Interface Connection Point is refined by System Requirements.
## SRrefiningSCY
0..* [System Requirement](#System-Requirement) SRrefiningSCY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a System Capability is refined by System Requirements.
## SRrefiningSUC
0..* [System Requirement](#System-Requirement) SRrefiningSUC 0..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a System Use Case is refined by System Requirements.
## SSEperformingSFN
0..* [System State](#System-State) SSEperformingSFN 0..* [System Function](#System-Function) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

Specifies the fact that the Function is only provided in distinct States. The state is a precondition for the Function to be able to perform.
## SSHhavingCRN
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHhavingCRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Attribute "concern" of SAF_Stakeholder referencing SAF_SystemOfInterestConcern

Specifies the fact that a Stakeholder has certain Concerns.
## SSHrelatedToSSH
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrelatedToSSH 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRelation](../../stereotypes.md#SAF_StakeholderRelation)

Explains relations between the Stakeholders of the System and other relevant System parties. It helps to understand the Stakeholder community and to approach the right point of contact for clarification of project relevant issues.
## SSHrepresentingOPR
0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrepresentingOPR 1..* [Operational Performer](#Operational-Performer) 

exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_OperationalStakeholderRepresentation](../../stereotypes.md#SAF_OperationalStakeholderRepresentation)

Specifies the fact that a SOI Stakeholder represents an Operational Performer.
## SSHrepresentingSCE
1..* [System Context Element](#System-Context-Element) SSHrepresentingSCE 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_ContextElementRepresentation](../../stereotypes.md#SAF_ContextElementRepresentation)

Specifies the fact that a SOI Stakeholder represents a System Context Element.
## SSHrepresentingUSR
1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) SSHrepresentingUSR 0..* [User](#User) 

Specifies the fact that an User is represented by Stakeholders.
## SUCenablingOSY
0..* [System Use Case](#System-Use-Case) SUCenablingOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_SystemUseCaseEnabling](../../stereotypes.md#SAF_SystemUseCaseEnabling)

Specifies the fact that a System Use Case enables the realization of an Operational Story.
## SUChasPostConditionSSE
0..* [System Use Case](#System-Use-Case) SUChasPostConditionSSE 0..* [System State](#System-State) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Attribute "PostConditionStates" of SAF_SystemUseCase referencing State

Specifies the fact that a System Use Case has a state as Postcondition.
## SUChasPreConditionSSE
0..* [System Use Case](#System-Use-Case) SUChasPreConditionSSE 0..* [System State](#System-State) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Attribute "PreConditionStates" of SAF_SystemUseCase referencing State

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

Specifies the fact that a Context Function is used in a System Use Case, e.g., as a Trigger, Action, or Task.
Note: This is a derived relationship.
## SUCsynthesizingSFN
1..* [System Use Case](#System-Use-Case) SUCsynthesizingSFN 0..* [System Function](#System-Function) 

Specifies the fact that a System Function is used in a System Use Case, e.g., as a Trigger, Action, or Task. 
Note: This is a derived relationship.
## SUCtakingPlaceInLSC
1..* [System Use Case](#System-Use-Case) SUCtakingPlaceInLSC 1 [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Attribute "subject" of UseCase referencing SAF_LogicalContext

Specifies the fact that a System Use Case takes place in a Logical System Context.
## USEAGEallocatedTO
1..* [General Functional Usage](#General-Functional-Usage) USEAGEallocatedTO 1 [Internal Logical Element Constituent](#Internal-Logical-Element-Constituent) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a Usage of Function is allocated to a Usage of System Element.
## controlledAFTER
1 [Operational Process](#Operational-Process) controlledAFTER 1 [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Metaclass ControlFlow



Specifies the sequencing of Operational Processes in time.
## satisfyingSHR
1 [Any SAF Element](#Any-SAF-Element) satisfyingSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

Specifies the fact that a Stakeholder Requirement is satisfied by SAF Model Elements.
## triggering
0..1 [Triggering Event](#Triggering-Event) triggering 0..* [State Transition](#State-Transition) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)


# Association Class Concepts
## Context Function IN System Process
0..* [Context Function](#Context-Function) Context Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextAction](../../stereotypes.md#SAF_ContextAction)

realized by Metaclass Property



realized by Metaclass Association



Specifies the fact that a Context Function is used in a System Process.
## Context Logical Chronological Message
1 [Context Logical Scenario Participation](#Context-Logical-Scenario-Participation) Context Logical Chronological Message 1 [Context Logical Scenario Participation](#Context-Logical-Scenario-Participation) 

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between Logical Interaction Scenario Participants.
## Context Logical Scenario Participation
0..* [Logical Element Constituent](#Logical-Element-Constituent) Context Logical Scenario Participation 0..* [Context Logical Interaction Scenario](#Context-Logical-Interaction-Scenario) 

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that a Logical System Context Role participates in a Logical Interaction Scenario.
## General Chronological Message
1 [General Scenario Participation](#General-Scenario-Participation) General Chronological Message 1 [General Scenario Participation](#General-Scenario-Participation) 

Ordered sequential occurrence of exchanges between General Interaction Scenario Participants.
## General Functional Usage
1 [General Function](#General-Function) General Functional Usage 0..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

Specifies the fact that a Function is used by one or more other Functions.
## General Scenario Participation
0..* [General Scenario Participant](#General-Scenario-Participant) General Scenario Participation 0..* [General Interaction Scenario](#General-Interaction-Scenario) 

Specifies the fact that an General Context Role participates in a General Interaction Scenario.
## Generic Context Constituent
1..* [General Context Element](#General-Context-Element) Generic Context Constituent 1..* [General Context](#General-Context) 

Specifies the fact that a general context element is bound by a context.
Bound by can mean 
 * "exists only in this context"
 * "happens only in this context"
The meaning is left to specialisations of bound by
## Hardware Element Constituent
1 [Hardware Element](#Hardware-Element) Hardware Element Constituent 0..* [Hardware Element](#Hardware-Element) 

realized by Error: unhandled realizations

Specifies the fact that a Hardware Element contains Hardware Elements.
## Internal Logical Chronological Message
1 [Internal Logical Scenario Participation](#Internal-Logical-Scenario-Participation) Internal Logical Chronological Message 1 [Internal Logical Scenario Participation](#Internal-Logical-Scenario-Participation) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between Internal Logical Interaction Scenario Participants.
## Internal Logical Element Constituent
1 [Logical Element](#Logical-Element) Internal Logical Element Constituent 0..* [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

exposed in viewpoint [Logical Structure Viewpoint](../viewpoints/Logical-Structure-Viewpoint.md)

realized by Stereotype [SAF_LogicalInternalRole](../../stereotypes.md#SAF_LogicalInternalRole)

Specifies the fact that a Logical Element contains any number of Logical Elements.
## Internal Logical Scenario Participation
0..* [Internal Logical Element Constituent](#Internal-Logical-Element-Constituent) Internal Logical Scenario Participation 0..* [Internal Logical Interaction Scenario](#Internal-Logical-Interaction-Scenario) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that a Logical Element Role participates in an Internal Logical Interaction Scenario.
## Logical Connection
1 [Logical Connection Point](#Logical-Connection-Point) Logical Connection 1 [Logical Connection Point](#Logical-Connection-Point) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection of two interface connection points on Logical Level.
Note: Connections between logical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.
## Logical Context Element Constituent
1..* [Logical Context Element](#Logical-Context-Element) Logical Context Element Constituent 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextRole](../../stereotypes.md#SAF_LogicalContextRole)

realized by Metaclass Association



Specifies the fact that a Logical Context Element exists in a specific Logical Context.
## Logical SOI Constituent
1 [Logical SOI](#Logical-SOI) Logical SOI Constituent 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextRole](../../stereotypes.md#SAF_LogicalContextRole)

realized by Metaclass Association



Specifies the fact that a Logical SOI exists in a specific Logical Context.
## Operational Chronological Message
1 [Operational Scenario Participant](#Operational-Scenario-Participant) Operational Chronological Message 1 [Operational Scenario Participant](#Operational-Scenario-Participant) 

exposed in viewpoint [Operational Interaction Viewpoint](../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between Operational Interaction Scenario Participants.
## Operational Connection
1 [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) Operational Connection 1 [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) 

exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection between Operational Context Constituents in an Operational Context allowing Operational Item Exchange.

Aliases:
UAF::OperationalConnector
## Operational Context Performer Constituent
1..* [Operational Performer](#Operational-Performer) Operational Context Performer Constituent 1..* [Operational Context](#Operational-Context) 

exposed in viewpoint [Operational Context Definition Viewpoint](../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Interaction Viewpoint](../viewpoints/Operational-Interaction-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalRole](../../stereotypes.md#SAF_OperationalRole)

realized by Metaclass Association



An Operational Context Constituent represents a participant in the Operational Activity executing one or more of its atomic actions interacting with other constituents of the identified Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a constituent necessary for the execution of the allocated actions.
## Operational Process Exchange
1 [Operational Process](#Operational-Process) Operational Process Exchange 1 [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Metaclass ObjectFlow



Specifies the fact that an Operational Process has an exchange with another Operational Process.
## Operational Process Usage
1 [Operational Process](#Operational-Process) Operational Process Usage 0..* [Operational Process](#Operational-Process) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalProcessAction](../../stereotypes.md#SAF_OperationalProcessAction)

Specifies the fact that an Operational Process is used in context of another Operational Process.

Aliases:
UAF::OperationalAction
## Operational Scenario Participant
1..* [Operational Context Performer Constituent](#Operational-Context-Performer-Constituent) Operational Scenario Participant 0..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) 

exposed in viewpoint [Operational Interaction Viewpoint](../viewpoints/Operational-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that an Operational Context Performer Role participates in an Operational Interaction Scenario.
## PCPOverPCP
1 [Physical Connection Point](#Physical-Connection-Point) PCPOverPCP 1 [Physical Connection Point](#Physical-Connection-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype [SAF_ProtocolLayerRelationship](../../stereotypes.md#SAF_ProtocolLayerRelationship)

Specifies the fact that a physical connection point communicates / transfers / flows / over an other physical connection point. Used to define layered physical interfaces, and show layer relationships between interfaces.
## PCPPOverPCPP
1 [Physical Connection Point Property](#Physical-Connection-Point-Property) PCPPOverPCPP 1 [Physical Connection Point Property](#Physical-Connection-Point-Property) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_ProtocolLayerRelationship](../../stereotypes.md#SAF_ProtocolLayerRelationship)

Specifies the fact that a physical connection point property communicates / transfers / flows / over an other physical connection point property. Used to define layered physical interfaces, and show layer relationships between interface details.
## Physic Context Constituent
1..* [Physical Context Element](#Physical-Context-Element) Physic Context Constituent 1..* [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Metaclass Association



realized by Metaclass Property



Specifies the fact that a Physical Context Element exists in a specific Physical Context.
## Physic SOI Constituent
1..* [Physical SOI](#Physical-SOI) Physic SOI Constituent 1 [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Metaclass Association



realized by Metaclass Property



Specifies the fact that a Physical SOI exists in a specific Physical Context.
## Physical Connection
1 [Physical Connection Point](#Physical-Connection-Point) Physical Connection 1 [Physical Connection Point](#Physical-Connection-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection of two physical connection points.
Note: Connections between physical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.
## Physical Element Constituent
1 [Physical Element](#Physical-Element) Physical Element Constituent 0..* [Physical Element](#Physical-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)

Specifies the fact that a Physical Element may contain any number of Physical Elements.
## Physical Hardware Constituent
1 [Physical Element](#Physical-Element) Physical Hardware Constituent 0..* [Hardware Element](#Hardware-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)

Specifies the fact that a physical element contains any number of Hardware Elements.
## Physical Layer Ordering
0..1 [Physical Layer](#Physical-Layer) Physical Layer Ordering 0..1 [Physical Layer](#Physical-Layer) 

Specifies an order among two physical layers. This order is valid within a Physical Layer Stack
## Physical Software Constituent
1 [Physical Element](#Physical-Element) Physical Software Constituent 0..* [Software Element](#Software-Element) 

exposed in viewpoint [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)

Specifies the fact that physical element contains any number of Software Elements.
## Software Element Constituent
1 [Software Element](#Software-Element) Software Element Constituent 0..* [Software Element](#Software-Element) 

realized by Stereotype [SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)

Specifies the fact that a Software Element contains  Software Elements.
## State Transition
1 [System State](#System-State) State Transition 1 [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass Transition



Describes an allowed transition between two states of an item that can be in distinct States.
## System Function IN System Process
0..* [System Function](#System-Function) System Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

realized by Metaclass Property



realized by Metaclass Association



Specifies the fact that a System Function is used in a System Process.
## Systemic Context Element Constituent
1..* [System Context Element](#System-Context-Element) Systemic Context Element Constituent 1..* [System Context](#System-Context) 

Specifies the fact that a context element exists in a certain system context.
## Systemic SOI Constituent
1..* [System Of Interest](#System-Of-Interest) Systemic SOI Constituent 1 [System Context](#System-Context) 

Specifies the fact that a system of interest exists in a certain system context.
