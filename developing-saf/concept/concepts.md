![System Architecture Framework](../../diagrams/Banner_SAF.png)
# SAF Development Documentation : Concepts
# Class Concepts
## Abstract Physical Element
exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

Abstract element representing physical structure items keeping properties and relations applicable to all physical items.
## Any SAF Element

## Argument
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Argument](../../stereotypes.md#SAF_Argument)

An argument is a rule that provides the bridge between what we know or are assuming (sub-claims, evidence) and the claim we are investigating. The argument used depends on the type, trustworthiness and extent of available evidence and the nature of the claim.
## Argument Concretion
This argument concept is used when a claim needs to be given a more precise definition or interpretation.
## Argument Decomposition
This argument concept is used to claim that a conclusion about the whole object or property can be deduced from the claims or facts about constituent parts. Decomposition argument blocks can also be used to incorporate defeaters into the case.
## Argument Substitution
This argument concept is used to claim that if a property holds for one object, then it holds for an equivalent object. Similarly, if a property holds for some object, then an equivalent property will also hold for the same object. The nature of the equivalence will vary with the object and property and will need to be defined.
## Aspect
realized by Stereotype [SAF_AspectColumn](../../stereotypes.md#SAF_AspectColumn)

Aspects capture a set of characteristics or features of the Entity of Interest in its Environment to address Concerns within an Architecture Description.
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
exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

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
## CounterClaim
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_CounterClaim](../../stereotypes.md#SAF_CounterClaim)

A party's claim is a counter-claim if one party asserts claims in response to the claims of another.
## Domain
realized by Stereotype [SAF_DomainLayer](../../stereotypes.md#SAF_DomainLayer)


## Evidence
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Evidence](../../stereotypes.md#SAF_Evidence)

An evidence is an artifact that establishes facts that can be trusted and lead directly to a claim. In projects there can many sources of information, but what makes this evidence is the support or rebuttal it gives to a claim.
## Exchange
Specification for general item exchange (energy, material, information, etc.).
## Exchange Kind
Specification for a general kind of item (energy, material, information, etc.) to be exchanged.
## Functional Requirement
exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirement](../../stereotypes.md#SAF_SystemFunctionalRequirement)

Functional Requirements specify System Functions of the System.
## General Context
Specifies a General Context.
## General Context Element
Specifies a General Context Element.
## General Function
realized by Metaclass Activity



Specifies the fact that a General Function is used as base Class for specific System or Context Functions.
## General Functional Exchange
exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass ObjectFlow



Specifies the fact that an General Functional Exchange between General Function Parameters is taking place.
## General Functional Parameter
exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Metaclass Parameter



A parameter of a System or Context Function.
## General Interaction Scenario
Ordered sequence of exchanges of information, energy, or material between General Interaction Scenario Participants.
## General Physical Role
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInternalRole](../../stereotypes.md#SAF_PhysicalInternalRole)

General concept of usage of system elements in the context of other system elements on physical level.
## General Scenario Participant

## Goal
A Goal is defined as an end state that a Stakeholder intends to achieve. Goals are generally expressed using qualitative words; e.g., “increase”, “improve”, or “easier”. Goals can also be decomposed; e.g., “increase profit” can be decomposed into the Goals “reduce cost” and “increase sales”. However, it is also very common to associate concrete objectives with Goals, which can be used to describe both the quantitative and time-related measures which are essential to describe the desired state, and when it should be achieved.
## Grid
exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

realized by Stereotype [SAF_C2_GRID](../../stereotypes.md#SAF_C2_GRID)

The grid manages the viewpoints in grid cells assigned to the categories of an domain (row) and an aspect (column).
## Grid Cell
exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

realized by Stereotype [SAF_C2_GRID](../../stereotypes.md#SAF_C2_GRID)


## Hardware Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalHardwareElement](../../stereotypes.md#SAF_PhysicalHardwareElement)

Pure Hardware Elements. Similarity with the V-Model "hardware unit".
## Interaction Point
Specifies the existence of an interaction point.
## Interaction Point Definition
Specifies the exchange capabilities of an interaction point on Physical Level.
## Interaction Point Property
Specifies a detail of an interaction point.
## Logical Context Element
Represents an abstract element in the given System Context on Logical Level, outside the SOI scope, interacting with the SOI.
## Logical Context SOI
exposed in viewpoint [Logical Structure Definition Viewpoint](../viewpoints/Logical-Structure-Definition-Viewpoint.md)

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_LogicalSOI](../../stereotypes.md#SAF_LogicalSOI)

Represents the Logical SOI in the System Context on Logical Level.
## Logical Element
exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Logical Structure Definition Viewpoint](../viewpoints/Logical-Structure-Definition-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype [SAF_LogicalElement](../../stereotypes.md#SAF_LogicalElement)

Describes a conceptual Logical Element as specification for an implementation of a system, or system element.
## Logical Environment
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalEnvironment](../../stereotypes.md#SAF_LogicalEnvironment)

A Logical Environment in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., air, dirt, sun, road.
## Logical External System
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalExternalSystem](../../stereotypes.md#SAF_LogicalExternalSystem)

A Logical External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., power grid, mobile network, fresh water system (in a house).
## Logical Interaction Point
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype ProxyPort



Specifies the existence of an interaction point on Logical Level.
## Logical Interaction Point Definition
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_ConceptualInterfaceDefinition](../../stereotypes.md#SAF_ConceptualInterfaceDefinition)

Specifies the exchange capabilities of an interaction point on Logical Level.
## Logical Interaction Point Property
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype FlowProperty



Specifies a detail of an interaction point on Logical Level.
## Logical Interaction Scenario
exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between Logical Interaction Scenario Participants.
## Logical Item Exchange
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

realized by Stereotype ItemFlow



Specifies the exchange that is to take place on a connection of two interaction points on Logical Level.
## Logical System Context
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_LogicalContext](../../stereotypes.md#SAF_LogicalContext)

Specifies the fact that a System Context for a System of Interest is defined on Logical Level.
## Logical User
exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalUser](../../stereotypes.md#SAF_LogicalUser)

The Logical User is the representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
## Need
A User has a Need in order to reach a certain Goal.
Note: "Buying sugar to bake a birthday cake".
## Non-functional Requirement
exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_SystemNonFunctionalRequirement](../../stereotypes.md#SAF_SystemNonFunctionalRequirement)

Non-Functional Requirements specify the quality of System Functions, or non-functional requests like legal conformance.
## Operational Capability
exposed in viewpoint [Operational Capability Definition Viewpoint](../viewpoints/Operational-Capability-Definition-Viewpoint.md)

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

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

Specifies the kind of Operational Item Exchange between Operational Context Roles or Operational Processes.
## Operational Interaction Scenario
exposed in viewpoint [Operational Context Interaction Viewpoint](../viewpoints/Operational-Context-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between Operational Interaction Scenario Participants.
## Operational Item Exchange
exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Stereotype ItemFlow



Specifies the Operational Item Exchange that is to take place on an Operational Connection.

Aliases:
UAF::OperationalExchange
## Operational Performer
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Context Definition Viewpoint](../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Operational Process Mapping Viewpoint](../viewpoints/Operational-Process-Mapping-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

exposed in viewpoint [Operational Story Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

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

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_OperationalStory](../../stereotypes.md#SAF_OperationalStory)

The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.
## Physical Connector Compatibility
Specifies the fact that two Physical Interaction Point Definitions are compatible and how the Physical Interaction Point Properties are mapped.
## Physical Context Element
Abstract element of a System Context on Physical Level, outside the SOI scope, interacting with the SOI.
## Physical Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype [SAF_PhysicalElement](../../stereotypes.md#SAF_PhysicalElement)

A composition of Hardware and Software Elements. Similarity with the V-Model segments and system. See [VXT].
## Physical Environment
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalEnvironment](../../stereotypes.md#SAF_PhysicalEnvironment)

The Physical Environment in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.
## Physical Exchange Kind
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Item Mapping Viewpoint](../viewpoints/Physical-Logical-Item-Mapping-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExchangeType](../../stereotypes.md#SAF_PhysicalExchangeType)

Specification for any kind of physical item (energy, material, information, etc.) to be exchanged on Physical Level. This is the realization of the specification made by System Domain Kinds.
## Physical External System
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalExternalSystem](../../stereotypes.md#SAF_PhysicalExternalSystem)

The Physical External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).
## Physical Interaction Point
exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype ProxyPort



Specifies the existence of an interaction point on Physical Level.
## Physical Interaction Point Definition
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalInterfaceDefinition](../../stereotypes.md#SAF_PhysicalInterfaceDefinition)

Specifies the exchange capabilities of an interaction point on Physical Level.
## Physical Interaction Point Property
exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype FlowProperty



Specifies a detail of an interaction point on Physical Level.
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

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSystem](../../stereotypes.md#SAF_PhysicalSystem)

Represents the Physical SOI on Physical Level.
## Physical System Context
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalContext](../../stereotypes.md#SAF_PhysicalContext)

Specifies the fact that a context for a System of Interest is defined on Physical Level.
## Physical User
exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

realized by Stereotype [SAF_PhysicalUser](../../stereotypes.md#SAF_PhysicalUser)

The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.
## Process
realized by Stereotype [SAF_Process](../../stereotypes.md#SAF_Process)

Unit of Work in Systems Engineering.
## Refuter
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_Refuter](../../stereotypes.md#SAF_Refuter)

A party asserting counter-claims.
## Software Element
exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by Stereotype [SAF_PhysicalSoftwareElement](../../stereotypes.md#SAF_PhysicalSoftwareElement)

Pure Software Elements. Similarity with the V-Model "software unit".
## Stakeholder Requirement
exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirement](../../stereotypes.md#SAF_StakeholderRequirement)

A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholder Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreements of how the SOI addresses the Concerns of the respective Stakeholder.
## Standard
exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype [SAF_Standard](../../stereotypes.md#SAF_Standard)

An international standard is a technical standard developed by one or more international standards organizations. International standards are available for consideration and use worldwide.
## Standardization Organization
exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype [SAF_StandardizationOrganization](../../stereotypes.md#SAF_StandardizationOrganization)

An organization of standardization, e.g., International Organization for Standardization (ISO), Object Management Group (OMG), etc.
## Subject of Claim
exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimSubject](../../stereotypes.md#SAF_ClaimSubject)

Note: A claim cannot be generic, it has to be about something, it has to have a defined subject, e.g., system safety.
## Subject of Standardization
exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype [SAF_StandardizationSubject](../../stereotypes.md#SAF_StandardizationSubject)

The goal of standardization is to ensure uniformity to certain practices within the industry. Standardization focuses on the product creation process, operations of businesses, technology in use, and how specific compulsory processes are instituted or carried out. Subject of standardization may be  a Data Exchange Format or a Protocol.
## System
An abstract element representing a System.
## System Capability
exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemCapability](../../stereotypes.md#SAF_SystemCapability)

1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]
2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]

Aliases:
UAF::Capability
NAF4::Capability
## System Context
Specifies the fact that a context for a System of Interest is defined.
## System Context Element
An abstract element representing a System Context Element. Base class for specific kinds of Context Elements.
## System Context Interaction Scenario
exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Interaction



Ordered sequence of exchanges of information, energy, or material between System Context Interaction Scenario Participants.
## System Context Role
General role of a Logical System Context.
## System Domain Kind
exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Logical Item Mapping Viewpoint](../viewpoints/Physical-Logical-Item-Mapping-Viewpoint.md)

exposed in viewpoint [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_DomainKind](../../stereotypes.md#SAF_DomainKind)

Specification for any kind of conceptual item (energy, material, information, etc.) to be exchanged on Functional or Logical Level. The System Domain Kind is agnostic to any realization on Physical Level.
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
An abstract element representing a SOI. Base class for specific kinds of SOIs.
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

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_SystemOfInterestConcern](../../stereotypes.md#SAF_SystemOfInterestConcern)

Any kind of interest a Stakeholder has. 
Note: Redundant with the meaning of "Need"?
## System of Interest Stakeholder
exposed in viewpoint [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_Stakeholder](../../stereotypes.md#SAF_Stakeholder)

An individual, team, or organization (or classes thereof) with interests in, or concerns relative to, a system. It may be involved in any life cycle phase of the System. The Stakeholder represents a class or kind of Stakeholders. Stakeholders have a certain involvement: Stakeholder Involvement captures the influence of a project specific Stakeholder on the System. Stakeholder Involvement is characterized by
* Contact Person
* Kind of involvement
* Life Cycle Phases involved
* Relevance decision if and up to which degree Stakeholder is considered
* Rationale for decision when Stakeholder is not considered
## Term
exposed in viewpoint [Common Terms Definition Viewpoint](../viewpoints/Common-Terms-Definition-Viewpoint.md)

realized by Stereotype [SAF_Term](../../stereotypes.md#SAF_Term)

Specifies the fact that a term is usually defined by a standard, but can also be defined as part of system development work.
## Triggering Event
realized by Metaclass Event




## User
Representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.
Note: This seems to be highly redundant with definition of "Role".
## View
realized by Stereotype [SAF_Diagram](../../stereotypes.md#SAF_Diagram)

A architecture view comprises portion of an architecture description and addresses information-relevant concerns framed by a architecture viewpoint.
## Viewpoint
realized by Stereotype [SAF_Viewpoint](../../stereotypes.md#SAF_Viewpoint)

A architecture viewpoint defines set of conventions for the creation, interpretation and use of an architecture view to frame one or more concerns
# Association Concepts
## AGTsupportingCLM
1 [Argument](#Argument) AGTsupportingCLM 1..* [Claim](#Claim) 

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
Note: This fact may be derived from the Usage of Function of a Context Function allocated to a Logical Context Element.
## CLMbeingMadeAboutSBC
1 [Claim](#Claim) CLMbeingMadeAboutSBC 0..1 [Subject of Claim](#Subject-of-Claim) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_ClaimAboutSubjectMaking](../../stereotypes.md#SAF_ClaimAboutSubjectMaking)

Specifies the fact that a claim is made about an identified subject matter.
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

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

Specifies the fact that a Stakeholder Requirement has certain States of Compliance.
## CallowingE
1 [Connection](#Connection) CallowingE 0..* [Exchange](#Exchange) 

Specifies the fact that a connection allows Exchange to happen
## EEfromSM
1 [Exchange](#Exchange) EEfromSM 1 [System](#System) 

Specifies that an exchange comes from a system
## EEtoSM
1 [Exchange](#Exchange) EEtoSM 1 [System](#System) 

Specifies that an exchange goes to a system
## EKtypingE
1 [Exchange Kind](#Exchange-Kind) EKtypingE 0..* [Exchange](#Exchange) 

Specifies the fact that a Exchange Kind defines the type of a Exchange.
## EKtypingIPP
1 [Exchange Kind](#Exchange-Kind) EKtypingIPP 0..* [Interaction Point Property](#Interaction-Point-Property) 

Specifies the fact that a Exchange Kind defines the type of a Interaction Point Property.
## EVCreinforcingAGT
1..* [Evidence](#Evidence) EVCreinforcingAGT 1..* [Argument](#Argument) 

exposed in viewpoint [Argumentation Assurance Viewpoint](../viewpoints/Argumentation-Assurance-Viewpoint.md)

realized by Stereotype [SAF_EvidenceArgumentReinforcement](../../stereotypes.md#SAF_EvidenceArgumentReinforcement)

Specifies the fact that an argument is reinforced by one or more evidence via a argument-evidence relation.
## FRboundedByNFR
1..* [Functional Requirement](#Functional-Requirement) FRboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementConstraint](../../stereotypes.md#SAF_SystemFunctionalRequirementConstraint)

Specifies the fact that a Non-Functional Requirement constrains Functional Requirements.
## FRrefiningSFN
1..* [Functional Requirement](#Functional-Requirement) FRrefiningSFN 1 [System Function](#System-Function) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionalRequirementRefinement](../../stereotypes.md#SAF_SystemFunctionalRequirementRefinement)

Specifies the fact that a System Function is refined by Functional Requirements.
## GCbelongingToAT
1..* [Grid Cell](#Grid-Cell) GCbelongingToAT 1 [Aspect](#Aspect) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

realized by Stereotype [SAF_C2_GRID](../../stereotypes.md#SAF_C2_GRID)

Specifies that a grid cell is assigned to one aspect.
## GCbelongingToDN
1..* [Grid Cell](#Grid-Cell) GCbelongingToDN 1 [Domain](#Domain) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

realized by Stereotype [SAF_C2_GRID](../../stereotypes.md#SAF_C2_GRID)

Specifies that a grid cell is assigned to one domain.
## GCcontainingVP
1 [Grid Cell](#Grid-Cell) GCcontainingVP 0..* [Viewpoint](#Viewpoint) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)


## GCcontainingVW
1 [Grid Cell](#Grid-Cell) GCcontainingVW 1 [View](#View) 

realized by Stereotype [SAF_C2_GRID](../../stereotypes.md#SAF_C2_GRID)

Specifies that a grid cell contains views.
## GDcontainingAT
1 [Grid](#Grid) GDcontainingAT 1..* [Aspect](#Aspect) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

Specifies that the grid is composed of several aspects.
## GDcontainingDN
1 [Grid](#Grid) GDcontainingDN 1 [Domain](#Domain) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

Specifies that the grid is composed of several domains.
## GDcontainingGC
1 [Grid](#Grid) GDcontainingGC 1..* [Grid Cell](#Grid-Cell) 

exposed in viewpoint [Grid Definition Viewpoint](../viewpoints/Grid-Definition-Viewpoint.md)

Specifies that the grid is composed of several grid cells.
## GFEbeingPartOfGFNU
0..* [General Functional Exchange](#General-Functional-Exchange) GFEbeingPartOfGFNU 1 [General Functional Usage](#General-Functional-Usage) 

Specifies the fact that a Functional Exchange appears within the usage of a General Function.
## GFEfromGFP
1 [General Functional Exchange](#General-Functional-Exchange) GFEfromGFP 1 [General Functional Parameter](#General-Functional-Parameter) 

realized by Metaclass OutputPin



Specifies the fact that a General Functional Exchange is coming from a General Functional Parameter.
## GFEtoGFP
1 [General Functional Exchange](#General-Functional-Exchange) GFEtoGFP 1 [General Functional Parameter](#General-Functional-Parameter) 

realized by Metaclass InputPin



Specifies the fact that a General Functional Exchange is going to a General Functional Parameter.
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
## IPDtypingIP
1 [Interaction Point Definition](#Interaction-Point-Definition) IPDtypingIP 0..* [Interaction Point](#Interaction-Point) 

Specifies the fact that an Interaction Point Definition defines the exchange capabilities of an Interaction Point.
## IPPisDetailOfIPD
0..* [Interaction Point Property](#Interaction-Point-Property) IPPisDetailOfIPD 1 [Interaction Point Definition](#Interaction-Point-Definition) 

Specifies the fact that an Interaction Point Property is a detail of an Interaction Point Definition.
## LCEactingInSUC
1..* [Logical Context Element](#Logical-Context-Element) LCEactingInSUC 1..* [System Use Case](#System-Use-Case) 

exposed in viewpoint [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)

realized by Stereotype [SAF_LogicalContextElementActing](../../stereotypes.md#SAF_LogicalContextElementActing)

Specifies the fact that a Logical Context Element acts in one or more System Use Cases.
## LCEperformingCFN
0..* [Logical Context Element Role](#Logical-Context-Element-Role) LCEperformingCFN 0..* [Context Function IN System Process](#Context-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a Context Function is expected to be carried out by the Logical Context Element in this System Context.
## LCNallowingLIE
1 [Logical Connection](#Logical-Connection) LCNallowingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by Attribute "realizingConnector" of InformationFlow referencing Connector

Specifies the fact that a Logical Item Exchange is allowed on the Logical Connection.
## LCPboundedByPLS
0..* [Logical Interaction Point](#Logical-Interaction-Point) LCPboundedByPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Logical Interaction Point is constrained to be implemented on a particular Physical Layer Stack.
## LENconceptingPEN
1..* [Logical Environment](#Logical-Environment) LENconceptingPEN 1..* [Physical Environment](#Physical-Environment) 

Specifies the fact that a logical Environment Entity is a concept for a Physical Environment Entity.
## LERspecifyingGPR
1..* [Logical Element Role](#Logical-Element-Role) LERspecifyingGPR 1 [General Physical Role](#General-Physical-Role) 

exposed in viewpoint [Physical Logical Mapping Viewpoint](../viewpoints/Physical-Logical-Mapping-Viewpoint.md)

realized by Stereotype Allocate



Specifies that a usage of a Logical Element specifies functions for the usage of a Physical Element.
## LESconceptingPES
1..* [Logical External System](#Logical-External-System) LESconceptingPES 1..* [Physical External System](#Physical-External-System) 

Specifies that the Logical System is a concept for a Physical System.
## LETbeeingInSSE
0..* [Logical Element](#Logical-Element) LETbeeingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass StateMachine



Specifies the  System States a Logical Element can be in.
## LETimplementingGFN
1..* [Logical Element](#Logical-Element) LETimplementingGFN 1..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

Specifies the fact that a Logical Element is responsible to implement a System Function.
Note: Logical Elements don't "implement" anything, they pass the function implementation task to Physical Elements.
## LETperformingSFN
1..* [Logical SOI Role](#Logical-SOI-Role) LETperformingSFN 1..* [System Function IN System Process](#System-Function-IN-System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a System Function is expected to be carried out by the SOI in this System Context.
## LETspecifyingAPE
1..* [Logical Element](#Logical-Element) LETspecifyingAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

realized by Attribute "logical_element" of SAF_PhysicalItem referencing SAF_LogicalElement

Specifies the fact that one or more Logical Element specifies exactly one Physical Element. 
Rationale:
If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.
It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.

Note, that typically the usage of logical elements in a context is mapped to the usage of physical elements in a context (allocation of usage). Thus this relationship between the definitions is derived.
## LIEboundedByPL
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEboundedByPL 0..1 [Physical Layer](#Physical-Layer) 

Specifies the fact that a Logical Item Exchange is constrained to be implemented on a particular Physical Layer.
## LIEboundedByPLS
0..* [Logical Item Exchange](#Logical-Item-Exchange) LIEboundedByPLS 0..1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Logical Item Exchange is constrained to be implemented on a particular Physical Layer Stack.
## LIPDdefiningDetailOfLIP
1 [Logical Interaction Point Definition](#Logical-Interaction-Point-Definition) LIPDdefiningDetailOfLIP 0..* [Logical Interaction Point](#Logical-Interaction-Point) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by ProxyPort typed by SAF_ConceptualInterfaceDefinition

Specifies the fact that a Logical Interaction Point Definition defines the exchange capabilities of a Logical Interaction Point.
## LIPPspecifyingDetailOfLIPD
0..* [Logical Interaction Point Property](#Logical-Interaction-Point-Property) LIPPspecifyingDetailOfLIPD 1 [Logical Interaction Point Definition](#Logical-Interaction-Point-Definition) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by FlowProperty contained in SAF_ConceptualInterfaceDefinition

Specifies the fact that a Logical Interaction Point Property is a detail of a Logical Interaction Point Definition.
## LIPapplyingToLCE
0..* [Logical Interaction Point](#Logical-Interaction-Point) LIPapplyingToLCE 1..* [Logical Context Element](#Logical-Context-Element) 

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property



Specifies the fact that a Logical Interaction Point applies to a Logical Context Element.
## LIPapplyingToLET
0..* [Logical Interaction Point](#Logical-Interaction-Point) LIPapplyingToLET 1 [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Property



Specifies the fact that a Logical Interaction Point applies to a Logical Element.
## LIScontainingILCM
1 [Logical Interaction Scenario](#Logical-Interaction-Scenario) LIScontainingILCM 0..* [Logical Chronological Message](#Logical-Chronological-Message) 

Specifies the fact that an Internal Logical Interaction Scenario contains one or more Internal Logical Chronological Messages.
## LURconceptingPUR
1..* [Logical User](#Logical-User) LURconceptingPUR 1..* [Physical User](#Physical-User) 

Specifies that the Logical user is a concept for a Physical User.
## OCNallowingOIE
1 [Operational Connection](#Operational-Connection) OCNallowingOIE 0..* [Operational Item Exchange](#Operational-Item-Exchange) 

realized by Attribute "realizingConnector" of InformationFlow referencing Connector

Specifies the fact that an Operational Item Exchange is allowed on the Operational Connection.
## OCYcomposedOF
1 [Operational Capability](#Operational-Capability) OCYcomposedOF 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Definition Viewpoint](../viewpoints/Operational-Capability-Definition-Viewpoint.md)

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityComposition](../../stereotypes.md#SAF_OperationalCapabilityComposition)

Specifies the fact that an Operational Capability consists of other Operational Capabilites.
## OCYdependingON
0..* [Operational Capability](#Operational-Capability) OCYdependingON 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Definition Viewpoint](../viewpoints/Operational-Capability-Definition-Viewpoint.md)

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_OperationalCapabilityDependency](../../stereotypes.md#SAF_OperationalCapabilityDependency)

Specifies the fact that an Operational Capability depends on another Operational Capability.

Aliases:
UAF::CapabilityDependency
## OCYspecializedBY
1 [Operational Capability](#Operational-Capability) OCYspecializedBY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Definition Viewpoint](../viewpoints/Operational-Capability-Definition-Viewpoint.md)

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

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
0..* [Operational Context Role](#Operational-Context-Role) OPRperformingOPSU 0..* [Operational Process Usage](#Operational-Process-Usage) 

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype Allocate



Specifies that an Operational Context Role uses an Operational Process in the context of an other Operational Process.
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

Specifies the fact that a Physical Connector Compatibility Assertion shall apply to a Physical Connection.
## PCCassertsCompatibiltyForPCPD
1 [Physical Connector Compatibility](#Physical-Connector-Compatibility) PCCassertsCompatibiltyForPCPD 2 [Physical Interaction Point Definition](#Physical-Interaction-Point-Definition) 

Specifies the Physical Interaction Point Definition the Physical Compatibility Assertion is valid for.
## PCNallowingPIE
1 [Physical Connection](#Physical-Connection) PCNallowingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Attribute "realizingConnector" of InformationFlow referencing Connector

Specifies the fact that a Physical Item Exchange is allowed on the Physical Connection.
## PCPisPartOfPIPD
0..* [Physical Interaction Point](#Physical-Interaction-Point) PCPisPartOfPIPD 1 [Physical Interaction Point Definition](#Physical-Interaction-Point-Definition) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by SAF_PhysicalInterfaceDefinition contained in ProxyPort

specifies that a physical interaction point can be a part of a physical interaction point definition. This fosters reuse and allows structuring of definitions.
## PEKisAssignedToPL
0..1 [Physical Layer](#Physical-Layer) PEKisAssignedToPL 0..* [Physical Exchange Kind](#Physical-Exchange-Kind) 

Specifies the fact that a Physical Exchange Kind is assigned to a particular Physical Layer.
## PEKrealizingSDK
1..* [Physical Exchange Kind](#Physical-Exchange-Kind) PEKrealizingSDK 1 [System Domain Kind](#System-Domain-Kind) 

exposed in viewpoint [Physical Logical Item Mapping Viewpoint](../viewpoints/Physical-Logical-Item-Mapping-Viewpoint.md)

realized by Stereotype Allocate



Specifies the fact that a System Domain Kind is realized by Physical Exchange Kinds.
## PEKtypingPIE
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPIE 0..* [Physical Item Exchange](#Physical-Item-Exchange) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by ItemFlow typed by SAF_PhysicalExchangeType

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Item Exchange.
## PEKtypingPIPP
1 [Physical Exchange Kind](#Physical-Exchange-Kind) PEKtypingPIPP 0..* [Physical Interaction Point Property](#Physical-Interaction-Point-Property) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by FlowProperty typed by SAF_PhysicalExchangeType

Specifies the fact that a Physical Exchange Kind defines the type of a Physical Interaction Point Property.
## PIPDdefiningDetailOfPIP
1 [Physical Interaction Point Definition](#Physical-Interaction-Point-Definition) PIPDdefiningDetailOfPIP 0..* [Physical Interaction Point](#Physical-Interaction-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by ProxyPort typed by SAF_PhysicalInterfaceDefinition

Specifies the fact that a Physical Interaction Point Definition defines the exchange capabilities of a Physical Interaction  Point.
## PIPPspecifyingDetailOfPIPD
0..* [Physical Interaction Point Property](#Physical-Interaction-Point-Property) PIPPspecifyingDetailOfPIPD 1 [Physical Interaction Point Definition](#Physical-Interaction-Point-Definition) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by FlowProperty contained in SAF_PhysicalInterfaceDefinition

Specifies the fact that a Physical Interaction Point Property is a detail of a Physical Interaction Point Definition.
## PIPapplyingToAPE
0..* [Physical Interaction Point](#Physical-Interaction-Point) PIPapplyingToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by ProxyPort contained in SAF_PhysicalItem

Specifies the fact that a Physical Interaction Point applies to an Abstract Physical Element.
## PIPapplyingToPCE
0..* [Physical Interaction Point](#Physical-Interaction-Point) PIPapplyingToPCE 1 [Physical Context Element](#Physical-Context-Element) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

Specifies the fact that a Physical Interaction Point applies to a Physical Context Element.
## PLOisValidInPLS
0..* [Physical Layer Ordering](#Physical-Layer-Ordering) PLOisValidInPLS 1 [Physical Layer Stack](#Physical-Layer-Stack) 

Specifies the fact that a Physical Layer Ordering is valid within a particular Physical Layer Stack.
## RFTmakingCCM
1 [Refuter](#Refuter) RFTmakingCCM 1..* [CounterClaim](#CounterClaim) 

realized by Stereotype [SAF_RefuterCounterClaimMaking](../../stereotypes.md#SAF_RefuterCounterClaimMaking)

Specifies the fact that a counter-claim is made by a defined refuter.
## SCEactingForOPR
0..* [System Context Element](#System-Context-Element) SCEactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a System Context Element is acting for the benefit of an Operational Performer.
## SCErepresentedBySSH
1..* [System Context Element](#System-Context-Element) SCErepresentedBySSH 0..* [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Identification Viewpoint](../viewpoints/Stakeholder-Identification-Viewpoint.md)

realized by Stereotype [SAF_ContextElementRepresentation](../../stereotypes.md#SAF_ContextElementRepresentation)

Specifies the fact that a System Context Element is represented by a SOI Stakeholder.
## SCIScontainingLCM
1 [System Context Interaction Scenario](#System-Context-Interaction-Scenario) SCIScontainingLCM 0..* [System Context Chronological Message](#System-Context-Chronological-Message) 

Specifies the fact that a System Context Interaction Scenario contains one or more System Context Chronological Messages.
## SCYcomposedOF
1 [System Capability](#System-Capability) SCYcomposedOF 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityComposition](../../stereotypes.md#SAF_SystemCapabilityComposition)

Specifies the fact that a System Capability consists of other System Capabilities.
## SCYdependingON
0..* [System Capability](#System-Capability) SCYdependingON 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityDependency](../../stereotypes.md#SAF_SystemCapabilityDependency)

Specifies the fact that a System Capability requires another System Capability.

Aliases:
UAF::CapabilityDependency
## SCYenablingOCY
0..* [System Capability](#System-Capability) SCYenablingOCY 1 [Operational Capability](#Operational-Capability) 

exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

realized by Stereotype [SAF_SystemCapabilityEnabling](../../stereotypes.md#SAF_SystemCapabilityEnabling)

Specifies the fact that an Operational Capability integrates System Capabilities to produce a specific outcome to achieve a mission objective.
## SCYsatisfyingSHR
0..* [System Capability](#System-Capability) SCYsatisfyingSHR 0..* [Stakeholder Requirement](#Stakeholder-Requirement) 

realized by Stereotype [SAF_SystemCapabilitySatisfaction](../../stereotypes.md#SAF_SystemCapabilitySatisfaction)

Specifies the fact that a System Capability satisfies one or more Stakeholder Requirements.
## SCYspecializedBY
1 [System Capability](#System-Capability) SCYspecializedBY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Definition Viewpoint](../viewpoints/System-Capability-Definition-Viewpoint.md)

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

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

realized by Parameter typed by SAF_DomainKind

Specifies the fact that a System Domain Kind defines the type of a Function Parameter.
## SDKtypingLIE
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLIE 0..* [Logical Item Exchange](#Logical-Item-Exchange) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

realized by ItemFlow typed by SAF_DomainKind

Specifies the fact that a System Domain Kind defines the type of a Logical Item Exchange.
## SDKtypingLIPP
1 [System Domain Kind](#System-Domain-Kind) SDKtypingLIPP 0..* [Logical Interaction Point Property](#Logical-Interaction-Point-Property) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)

realized by FlowProperty typed by SAF_DomainKind

Specifies the fact that a System Domain Kind defines the type of a Logical Interaction Point Property.
## SDTcoveringSBS
0..* [Standard](#Standard) SDTcoveringSBS 0..* [Subject of Standardization](#Subject-of-Standardization) 

exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype [SAF_StandardCovering](../../stereotypes.md#SAF_StandardCovering)

Specifies the fact that a standard covers a specific subject of standardization, e.g., Data Exchange Format or Protocol.
## SDTincludingSDT
0..* [Standard](#Standard) SDTincludingSDT 0..* [Standard](#Standard) 

exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype PartProperty



Specifies the fact that a standard is part of another standard.
## SDTissuedBySTO
0..* [Standard](#Standard) SDTissuedBySTO 1 [Standardization Organization](#Standardization-Organization) 

exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

Specifies the fact that a standard is issued by an organization of standardization.
## SDTsupersedingSDT
1 [Standard](#Standard) SDTsupersedingSDT 0..* [Standard](#Standard) 

exposed in viewpoint [Common Standards Definition Viewpoint](../viewpoints/Common-Standards-Definition-Viewpoint.md)

realized by Stereotype [SAF_StandardSuperseding](../../stereotypes.md#SAF_StandardSuperseding)

Specifies the fact that a standard supersedes one or more other standards.
## SFNallocatedToAPE
1..* [System Function](#System-Function) SFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

realized by Attribute "function" of SAF_PhysicalItem referencing SAF_SystemFunction

Specifies the fact that a relationship is derived from the assignment of Functions to Logical Elements and the assignment of Logical Elements to Physical Elements.
## SFNallocatedToLET
1..* [System Function](#System-Function) SFNallocatedToLET 1 [Logical Context SOI](#Logical-Context-SOI) 

Specifies the fact that a System Function is assigned to a Logical SOI.
Note: This fact may be derived from the Usage of a System Function in a System Process allocated to a Logical Context SOI Role.
## SFNboundedByNFR
1 [System Function](#System-Function) SFNboundedByNFR 0..* [Non-functional Requirement](#Non-functional-Requirement) 

Specifies the fact that a Non-functional Requirement constrains System Functions.
## SFNresultingInSSE
0..* [System Function](#System-Function) SFNresultingInSSE 0..* [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

Specifies the fact that a System Function can perform a particular set of transitions, resulting in the related target System States.
## SFNsupportingSCY
0..* [System Function](#System-Function) SFNsupportingSCY 0..* [System Capability](#System-Capability) 

exposed in viewpoint [System Capability Mapping Viewpoint](../viewpoints/System-Capability-Mapping-Viewpoint.md)

realized by Stereotype [SAF_SystemFunctionSupport](../../stereotypes.md#SAF_SystemFunctionSupport)

Specifies the fact that a System Function supports one or more System Capabilities.
## SHRimposedBY
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRimposedBY 1 [System of Interest Stakeholder](#System-of-Interest-Stakeholder) 

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementImposition](../../stereotypes.md#SAF_StakeholderRequirementImposition)

realized by Metaclass Package



Specifies the fact that a Stakeholder Requirement is provided by Stakeholders.
## SHRrefiningCRN
1..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningCRN 1..* [System of Interest Concern](#System-of-Interest-Concern) 

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that a Stakeholder Concern is refined by Stakeholder Requirements.
## SHRrefiningOCY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOCY 0..* [Operational Capability](#Operational-Capability) 

exposed in viewpoint [Operational Capability Mapping Viewpoint](../viewpoints/Operational-Capability-Mapping-Viewpoint.md)

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Capability is refined by Stakeholder Requirements.
## SHRrefiningOSY
0..* [Stakeholder Requirement](#Stakeholder-Requirement) SHRrefiningOSY 0..* [Operational Story](#Operational-Story) 

exposed in viewpoint [Stakeholder Requirement Definition Viewpoint](../viewpoints/Stakeholder-Requirement-Definition-Viewpoint.md)

realized by Stereotype [SAF_StakeholderRequirementRefinement](../../stereotypes.md#SAF_StakeholderRequirementRefinement)

Specifies the fact that an Operational Story is refined by Stakeholder Requirements.
## SMhavingGF
1 [System](#System) SMhavingGF 1..* [General Function](#General-Function) 

Specifies, that a system has general functions.
## SMhavingIP
1 [System](#System) SMhavingIP 0..* [Interaction Point](#Interaction-Point) 

Specifies the fact that a System has one or more Interaction Points.
## SOIactingForOPR
0..* [System Of Interest](#System-Of-Interest) SOIactingForOPR 1 [Operational Performer](#Operational-Performer) 

Specifies the fact that a SOI is acting for the benefit of an Operational Performer.
## SPFNallocatedToAPE
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToAPE 1 [Abstract Physical Element](#Abstract-Physical-Element) 

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

realized by Attribute "function" of SAF_PhysicalItem referencing SAF_SystemFunction

Specifies the fact that a System Partial Function is assigned to an Abstract Physical Element.
Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Physical SOI Element Role
## SPFNallocatedToLET
1..* [System Partial Function](#System-Partial-Function) SPFNallocatedToLET 1 [Logical Element](#Logical-Element) 

Specifies the fact that a System Partial Function is assigned to a Logical SOI Element.
Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Internal Logical Element Role
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
0..* [System Requirement](#System-Requirement) SRderivingFromSHR 1..* [Stakeholder Requirement](#Stakeholder-Requirement) 

exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that a System Requirement is derived from a Stakeholder Requirement. Note: It may be used in a customer supplier relationship situation and supports the V Model concept of "External Unit Specification". See [VXT].
## SRderivingFromSR
0..* [System Requirement](#System-Requirement) SRderivingFromSR 1 [System Requirement](#System-Requirement) 

exposed in viewpoint [System Requirement Definition Viewpoint](../viewpoints/System-Requirement-Definition-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementDerivation](../../stereotypes.md#SAF_SystemRequirementDerivation)

Specifies the fact that System Requirements are derived from a Stakeholder Requirement. 
Note: This is the relationship of requirements of different architectural levels. When the team responsible for the subsystem has direct access to the full upstream requirements set, then no subcontractor relationship needs to be established.
## SRrefiningLICP
0..* [System Requirement](#System-Requirement) SRrefiningLICP 0..* [Logical Interaction Point](#Logical-Interaction-Point) 

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_SystemRequirementRefinement](../../stereotypes.md#SAF_SystemRequirementRefinement)

Specifies the fact that a Logical Interaction Point is refined by System Requirements.
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

realized by Attribute "concern" of Stakeholder referencing SAF_SystemOfInterestConcern

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

realized by Stereotype [SAF_StakeholderRepresenting](../../stereotypes.md#SAF_StakeholderRepresenting)

Specifies the fact that a SOI Stakeholder is representing an Operational Performer.
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
## TRMdefinedBySDT
0..* [Term](#Term) TRMdefinedBySDT 1 [Standard](#Standard) 

exposed in viewpoint [Common Terms Definition Viewpoint](../viewpoints/Common-Terms-Definition-Viewpoint.md)

realized by SAF_Term contained in SAF_Standard

Specifies the fact that a term is defined by a standard.
## USAGEallocatedTo
1..* [General Functional Usage](#General-Functional-Usage) USAGEallocatedTo 1 [Logical Element Role](#Logical-Element-Role) 

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
## Connection
1 [Interaction Point](#Interaction-Point) Connection 1 [Interaction Point](#Interaction-Point) 

Specifies the connection of two interaction points.
## Context Function IN System Process
0..* [Context Function](#Context-Function) Context Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by Stereotype [SAF_ContextAction](../../stereotypes.md#SAF_ContextAction)

realized by Metaclass Property



realized by Metaclass Association



Specifies the fact that a Context Function is used in a System Process.
## General Chronological Message
1 [General Scenario Participation](#General-Scenario-Participation) General Chronological Message 1 [General Scenario Participation](#General-Scenario-Participation) 

Ordered sequential occurrence of exchanges between General Interaction Scenario Participants.
## General Context Element Role
1..* [General Context Element](#General-Context-Element) General Context Element Role 1..* [General Context](#General-Context) 

Specifies the fact that a General Context Element exists in a given General Context.
## General Functional Usage
1 [General Function](#General-Function) General Functional Usage 0..* [General Function](#General-Function) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Physical Functional Mapping Viewpoint](../viewpoints/Physical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

Specifies the fact that a Function is used by one or more other Functions.
## General Scenario Participation
0..* [General Context Element Role](#General-Context-Element-Role) General Scenario Participation 0..* [General Interaction Scenario](#General-Interaction-Scenario) 

Specifies the fact that a System Role participates in a General Interaction Scenario.
## Hardware Element Role
1 [Hardware Element](#Hardware-Element) Hardware Element Role 0..* [Hardware Element](#Hardware-Element) 

realized by SAF_PhysicalInternalRole contained in SAF_PhysicalItem

Specifies the fact that a hardware structure comprises hardware elements.
## Logical Chronological Message
1 [Logical Scenario Participation](#Logical-Scenario-Participation) Logical Chronological Message 1 [Logical Scenario Participation](#Logical-Scenario-Participation) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between Logical Interaction Scenario Participants.
## Logical Connection
1 [Logical Interaction Point](#Logical-Interaction-Point) Logical Connection 1 [Logical Interaction Point](#Logical-Interaction-Point) 

exposed in viewpoint [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection of two interaction points on Logical Level.
Note: Connections between logical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.
## Logical Context Element Role
1..* [Logical Context Element](#Logical-Context-Element) Logical Context Element Role 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by SAF_LogicalContextRole contained in SAF_LogicalContext

Specifies the fact that a Logical Context Element exists in a given Logical System Context.
## Logical Element Role
1 [Logical Element](#Logical-Element) Logical Element Role 0..* [Logical Element](#Logical-Element) 

exposed in viewpoint [Logical Functional Mapping Viewpoint](../viewpoints/Logical-Functional-Mapping-Viewpoint.md)

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

exposed in viewpoint [Logical Structure Definition Viewpoint](../viewpoints/Logical-Structure-Definition-Viewpoint.md)

realized by SAF_LogicalInternalRole contained in SAF_LogicalElement

Specifies the fact that a logical element comprises logical elements.
## Logical SOI Role
1 [Logical Context SOI](#Logical-Context-SOI) Logical SOI Role 1..* [Logical System Context](#Logical-System-Context) 

exposed in viewpoint [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)

exposed in viewpoint [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

realized by SAF_LogicalContextRole contained in SAF_LogicalContext

Specifies the fact that a Logical Context SOI exists in a given Logical System Context.
## Logical Scenario Participation
0..* [Logical Element Role](#Logical-Element-Role) Logical Scenario Participation 0..* [Logical Interaction Scenario](#Logical-Interaction-Scenario) 

exposed in viewpoint [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that a Logical Element Role participates in a Logical Interaction Scenario.
## Operational Chronological Message
1 [Operational Scenario Participation](#Operational-Scenario-Participation) Operational Chronological Message 1 [Operational Scenario Participation](#Operational-Scenario-Participation) 

exposed in viewpoint [Operational Context Interaction Viewpoint](../viewpoints/Operational-Context-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between Operational Interaction Scenario Participants.
## Operational Connection
1 [Operational Context Role](#Operational-Context-Role) Operational Connection 1 [Operational Context Role](#Operational-Context-Role) 

exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection between Operational Context Roles in an Operational Context allowing Operational Item Exchange.

Aliases:
UAF::OperationalConnector
## Operational Context Role
1..* [Operational Performer](#Operational-Performer) Operational Context Role 1..* [Operational Context](#Operational-Context) 

exposed in viewpoint [Operational Context Definition Viewpoint](../viewpoints/Operational-Context-Definition-Viewpoint.md)

exposed in viewpoint [Operational Context Exchange Viewpoint](../viewpoints/Operational-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Operational Context Interaction Viewpoint](../viewpoints/Operational-Context-Interaction-Viewpoint.md)

exposed in viewpoint [Operational Process Viewpoint](../viewpoints/Operational-Process-Viewpoint.md)

realized by Stereotype [SAF_OperationalContextRole](../../stereotypes.md#SAF_OperationalContextRole)

An Operational Context Role represents a participant in an Operational context.
It is interacting with other roles of the given Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a role necessary for the execution of the performed Operational Processes.
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
## Operational Scenario Participation
1..* [Operational Context Role](#Operational-Context-Role) Operational Scenario Participation 0..* [Operational Interaction Scenario](#Operational-Interaction-Scenario) 

exposed in viewpoint [Operational Context Interaction Viewpoint](../viewpoints/Operational-Context-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that an Operational Context Role participates in an Operational Interaction Scenario.
## PCPOverPCP
1 [Physical Interaction Point](#Physical-Interaction-Point) PCPOverPCP 1 [Physical Interaction Point](#Physical-Interaction-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Stereotype [SAF_InterfaceLayerRelationship](../../stereotypes.md#SAF_InterfaceLayerRelationship)

Specifies the fact that a physical interaction point communicates / transfers / flows / over an other physical interaction point. Used to define layered physical interfaces, and show layer relationships between interfaces.
## PCPPOverPCPP
1 [Physical Interaction Point Property](#Physical-Interaction-Point-Property) PCPPOverPCPP 1 [Physical Interaction Point Property](#Physical-Interaction-Point-Property) 

exposed in viewpoint [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)

realized by Stereotype [SAF_InterfaceLayerRelationship](../../stereotypes.md#SAF_InterfaceLayerRelationship)

Specifies the fact that a physical interaction point property communicates / transfers / flows / over an other physical interaction point property. Used to define layered physical interfaces, and show layer relationships between interface details.
## Physical Connection
1 [Physical Interaction Point](#Physical-Interaction-Point) Physical Connection 1 [Physical Interaction Point](#Physical-Interaction-Point) 

exposed in viewpoint [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)

exposed in viewpoint [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)

realized by Metaclass Connector



Specifies the connection of two physical interaction points.
Note: Connections between physical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.
## Physical Context Element Role
1..* [Physical Context Element](#Physical-Context-Element) Physical Context Element Role 1..* [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by SAF_PhysicalContextRole contained in SAF_PhysicalContext

Specifies the fact that a Physical Context Element exists in a given Physical System Context.
## Physical Element Role
1 [Physical Element](#Physical-Element) Physical Element Role 0..* [Physical Element](#Physical-Element) 

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by SAF_PhysicalInternalRole contained in SAF_PhysicalItem

Specifies the fact that a physical structure comprises physical elements.
## Physical Hardware Role
1 [Physical Element](#Physical-Element) Physical Hardware Role 0..* [Hardware Element](#Hardware-Element) 

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by SAF_PhysicalInternalRole contained in SAF_PhysicalItem

Specifies the fact that a physical structure comprises hardware elements.
## Physical Layer Ordering
0..1 [Physical Layer](#Physical-Layer) Physical Layer Ordering 0..1 [Physical Layer](#Physical-Layer) 

Specifies an order among two physical layers. This order is valid within a Physical Layer Stack
## Physical SOI Role
1..* [Physical SOI](#Physical-SOI) Physical SOI Role 1 [Physical System Context](#Physical-System-Context) 

exposed in viewpoint [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)

realized by SAF_PhysicalContextRole contained in SAF_PhysicalContext

Specifies the fact that a Physical SOI exists in a given Physical System Context.
## Physical Software Role
1 [Physical Element](#Physical-Element) Physical Software Role 0..* [Software Element](#Software-Element) 

exposed in viewpoint [Physical Structure Definition Viewpoint](../viewpoints/Physical-Structure-Definition-Viewpoint.md)

realized by SAF_PhysicalInternalRole contained in SAF_PhysicalItem

Specifies the fact that a physical structure comprises software elements.
## Software Element Role
1 [Software Element](#Software-Element) Software Element Role 0..* [Software Element](#Software-Element) 

realized by SAF_PhysicalInternalRole contained in SAF_PhysicalItem

Specifies the fact that a software structure comprises software elements.
## State Transition
1 [System State](#System-State) State Transition 1 [System State](#System-State) 

exposed in viewpoint [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)

realized by Metaclass Transition



Describes an allowed transition between two states of an item that can be in distinct States.
## System Context Chronological Message
1 [System Context Scenario Participation](#System-Context-Scenario-Participation) System Context Chronological Message 1 [System Context Scenario Participation](#System-Context-Scenario-Participation) 

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Message



Ordered sequential occurrence of exchanges between System Context Interaction Scenario Participants.
## System Context Element Role
1..* [System Context Element](#System-Context-Element) System Context Element Role 1..* [System Context](#System-Context) 

Specifies the fact that a System Context Element exists in a given System Context.
## System Context Scenario Participation
0..* [System Context Role](#System-Context-Role) System Context Scenario Participation 0..* [System Context Interaction Scenario](#System-Context-Interaction-Scenario) 

exposed in viewpoint [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)

realized by Metaclass Lifeline



Specifies the fact that a System Context Role participates in a System Context Interaction Scenario.
## System Function IN System Process
0..* [System Function](#System-Function) System Function IN System Process 0..* [System Process](#System-Process) 

exposed in viewpoint [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)

exposed in viewpoint [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)

realized by Stereotype [SAF_FunctionAction](../../stereotypes.md#SAF_FunctionAction)

realized by Metaclass Property



realized by Metaclass Association



Specifies the fact that a System Function is used in a System Process.
## System Role
1 [System](#System) System Role 0..* [System](#System) 

Specifies, that a system is part of a system.
## System SOI Role
1..* [System Of Interest](#System-Of-Interest) System SOI Role 1 [System Context](#System-Context) 

Specifies the fact that a System SOI exists in a given System Context.
