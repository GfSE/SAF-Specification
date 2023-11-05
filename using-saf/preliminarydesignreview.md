# Introduction and Purpose

The Preliminary Design Review (PDR) is one of the [Decision Gates](decisiongates.md).

The Preliminary Design Review (PDR) should provide sufficient confidence and approval of the high level architecture to proceed with detailed design with acceptable risk. The PDR ensures the preliminary design and basic system architecture are complete, that there is technical confidence the System Requirements can be satisfied within cost and schedule goals and that risks have been identified and mitigation plans established.

It also provides the acquisition community, end user and other stakeholders with an opportunity to understand the trade studies conducted during the preliminary design, and thus confirm that design decisions are consistent with the user’s performance and schedule needs.

The PDR is the "design to" review. That means, the design is based on the baselined information items of this review. Since the development effort usually "fans out" to a multitude of teams orchestrated by the system architect, the PDR is the point to reach common understanding about the planned architecture among these teams.

# Stakeholders tbd
 * system architect
 * physical item responsible
 * integration manager
 * safety specialist
 * security specialist

# Viewpoints tbd
## Viewpoints from SCR

*to be validated early 2023 - S1*
 * [Operational Performer Viewpoint](../viewpoints/Operational-Performer-Viewpoint.md)
 * [Operational-Story-Viewpoint](../viewpoints/Operational-Story-Viewpoint.md)
 * [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)
 * Stakeholder Identification Viewpoint

## Viewpoints from SRR

*to be validated early 2023 - S1*
 * Standards Definition Viewpoint (michael)
 * [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)
 * [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)
 * [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)
 * [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)
 * [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)
 * [System Functional Breakdown Structure Viewpoint](../viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md)
 * [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)
 * [System Functional Refinement](../viewpoints/System-Functional-Refinement-Viewpoint.md) (alex)
 * [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)
 * [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md) (sascha) -> system req traceablity aufsplitten
 * [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)
 * [System Use Case Viewpoint](../viewpoints/System-Use-Case-Viewpoint.md)
 * [System Interface Definition Viewpoint](../viewpoints/System-Interface-Definition-Viewpoint.md)
 
 ## Viewpoints new for PDR
 
 * [Logical Structure Viewpoint](../viewpoints/Logical-Structure-Viewpoint.md)
 * [Logical Functional Assignment Viewpoint](../viewpoints/Logical-Functional-Assignment-Viewpoint.md)
 * [Logical Internal Interaction Viewpoint](../viewpoints/Logical-Internal-Interaction-Viewpoint.md)
 * [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)
 * [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)
 * [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)
 * [Physical Logical Assignment Viewpoint](../viewpoints/Physical-Logical-Assignment-Viewpoint.md)
 * [Physical Functional Assignment Viewpoint](../viewpoints/Physical-Functional-Assignment-Viewpoint.md)
 * Phyiscal Logical Interface Assignment Viewpoint [issue tbd](https://github.com/GfSE/SAF-Specification/issues/) 
 * [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)
 * [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)
 * [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md)
 * Subsystem Requirement Specification Viewpoint / Software Requirement Specification Viewpoint / Hardware Requirement Specification Viewpoint? [issue tbd](https://github.com/GfSE/SAF-Specification/issues/) 

# Information Items tbd

The listing of items include that they are present, consistent, understood by the engineering stakeholders and accepted.
Under The information Items, the specific concerns to be adressed by the information items are listed

## System Architecture
 * System decomposition into physical items (SWU, HWU) to be subject of one or more work package agreements (Arbeitsauftrag), or subcontracted.
 * Decomposition and assignment of functions to single physical items (SWU, HWU) (e.g. by means of logical architecture assignment, functional requirements,..)
 * Assignment of nonfunctional properties to physical items (SWU, HWU)
 * Exchange between physical items specified on conceptual level (logical interfaces)
 * Exchange of physical items to external systems specified (logical interfaces,interface requirements)
 * traceability of interface requirements to system functional interfaces
 * Exchange of physical items to external systems designed(physical interface, draft)
 * Design Constraints for interfaces of physical items defined

## SEP
 * Engineering process for following phase defined in SEP

## Test Plan
 * Integration and Test plan down to to physical item level

## Safety & Security Assessment
 * Assignment of safety and security properties to physical items

## Risk Management
 * risks (development, integration, acceptance, ..) for following phase (detailled design) identified
 * made sure that the stakeholder analysis is still valid from the perspective of the review participants
 * made sure that the system decomposition and selection of physical items adress the stakeholders requirements    
