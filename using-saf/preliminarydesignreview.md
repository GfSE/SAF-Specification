# Introduction and Purpose

The Preliminary Design Review (PDR) is one of the [Decision Gates](decisiongates.md).

The Preliminary Design Review (PDR) should provide sufficient confidence and approval of the high level architecture to proceed with detailed design with acceptable risk. The PDR ensures the preliminary design and basic system architecture are complete, that there is technical confidence the System Requiremnts can be satisfied within cost and schedule goals and that risks have been identified and mitigation plans established.

It also provides the acquisition community, end user and other stakeholders with an opportunity to understand the trade studies conducted during the preliminary design, and thus confirm that design decisions are consistent with the user’s performance and schedule needs.

The PDR is the "design to" review. That means, the design is based on the baselined information items of this review. Since the developement effort usually "fans out" to a multitude of teams orchestrated by the system architect, the PDR is the point to reach common understanding about the planned architecture among these teams.

# Stakeholders tbd
 * system architect
 * physical item responsible
 * integration manager
 * safety specialist
 * security specialist

# Viewpoints tbd
## Viewpoints from SCR
operational..alle
* Operational-Performer-Viewpoint
* Operational-Story-Viewpoint
 * [Stakeholder Requirement Viewpoint](../viewpoints/Stakeholder-Requirement-Viewpoint.md)
 * Stakeholder Identification
## Viewpoints from SRR

*to be validated in 2023*
 * Standards Definition Viewpoint (michael)

 * [System Capability Viewpoint](../viewpoints/System-Capability-Viewpoint.md)
 * [System Context Definition Viewpoint](../viewpoints/System-Context-Definition-Viewpoint.md)
 * [System Context Exchange Viewpoint](../viewpoints/System-Context-Exchange-Viewpoint.md)
 * [System Context Interaction Viewpoint](../viewpoints/System-Context-Interaction-Viewpoint.md)
 * [System Domain Item Kind Viewpoint](../viewpoints/System-Domain-Item-Kind-Viewpoint.md)
 * [System Functional Breakdown Viewpoint](../viewpoints/System-Functional-Breakdown-Viewpoint.md)
 * [System Function Refinement](../viewpoints/System-Function-Refinement-Viewpoint.md) (alex)
 * [System Process Viewpoint](../viewpoints/System-Process-Viewpoint.md)
 * [System Requirement Traceability Viewpoint](../viewpoints/System-Requirement-Traceability-Viewpoint.md)(sascha) system req traceablity aufsplitten
 * [System Requirement Viewpoint](../viewpoints/System-Requirement-Viewpoint.md)
 * [System State Viewpoint](../viewpoints/System-State-Viewpoint.md)
 * [System UseCase Viewpoint](../viewpoints/System-UseCase-Viewpoint.md)
 * [Functional Interface Definition Viewpoint](../viewpoints/Functional-Interface-Definition-Viewpoint.md)(alex)(das sind die interface blöcke)
 
 ## Viewpoints new for PDR
 * [Logical Function Assignment Viewpoint](../viewpoints/Logical-Function-Allocation-Viewpoint.md)
 * [Logical Interaction Viewpoint](../viewpoints/Logical-Interaction-Viewpoint.md)
 * [Logical Internal Exchange Viewpoint](../viewpoints/Logical-Internal-Exchange-Viewpoint.md)
 * [Logical Structure Viewpoint](../viewpoints/Logical-Structure-Viewpoint.md)
 * [Physical Context Definition Viewpoint](../viewpoints/Physical-Context-Definition-Viewpoint.md)
 * [Physical Context Exchange Viewpoint](../viewpoints/Physical-Context-Exchange-Viewpoint.md)
 * [Physical to Logical Assignment Viewpoint](../viewpoints/Physical-To-Logical-Assignment-Viewpoint.md) (michael)
 * [Physical Function Assignment Viewpoint](../viewpoints/Physical-Function-Allocation-Viewpoint.md)(alex) analyseviewpoint
 * Phyiscal interface identification (wer machts ? ) das ist nur ein strich :) 
 * phyiscal exchange requirements vp (alex) analyse vp 
 * [Physical Internal Exchange Viewpoint](../viewpoints/Physical-Internal-Exchange-Viewpoint.md)
 * [Physical Structure Viewpoint](../viewpoints/Physical-Structure-Viewpoint.md)
 * [Physical Interface Definition Viewpoint](../viewpoints/Physical-Interface-Definition-Viewpoint.md) (michael) das sind die interface blöcke

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