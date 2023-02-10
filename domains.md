# SAF Domains
|Domain|Viewpoints|
| --- | --- |
| Common | [Evidence Viewpoint](viewpoints/Evidence-Viewpoint.md) |
| Operational | [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md), [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md), [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md), [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md), [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md), [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md), [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md), [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md), [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md), [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md), [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md), [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md) |
| Functional | [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md), [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md), [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md), [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md), [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md), [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md), [System State Viewpoint](viewpoints/System-State-Viewpoint.md), [System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md) |
| Logical | [Logical Function Allocation Viewpoint](viewpoints/Logical-Function-Allocation-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md), [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md) |
| Physical | [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md), [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md), [Physical Function Allocation Viewpoint](viewpoints/Physical-Function-Allocation-Viewpoint.md), [Physical Internal Exchange Viewpoint](viewpoints/Physical-Internal-Exchange-Viewpoint.md), [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md) |
## Domain Common
**Objective**

tbd
## Domain Operational
**Objective**

The SAF Operational Domain supports the model-based development of a CONOPS - as well as an OPSCON and related life cycle concepts - for an organization or operational entity seeking for an improvement of existing capabilities or in establishing new ones. The SAF Operational Domain therefore aims to get an understanding of required organizational or operational entity capabilites.
The viewpoints of the SAF Operational Domain assist the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2]. By identifying Stakeholders and their Requirements the SAF Operational Domain supports the derivation of a complete and consolidated set of Stakeholder Requirements based on operational activities and exchanges.

**Concerns**

* Gain a comprehensive understanding of the operating environment that an intended solution needs to support
* Promote the freedom of development by preventing premature commitment to solutions
* Capture all information necessary for subsequent requirement and system architecture definition activities
## Domain Functional
**Objective**

The Functional Domain Viewpoints translate Operational Domain usage into the notion of System Functions defining the demanded system behavior and quality attributes - performance, safety, security, etc.; the demanded system behavior as it is perceived by the User or other Entities at the System Boundary (known as usage behavior). The result of the Functional Domain Viewpoint elaboration is a comprehensive System Specification.

**Concerns**

* Consolidating Functional Requirements: formally specifying the requirements of the system behavior using a black box approach
* Mastering functional dependency: detection and resolution of inconsistencies within the Functional Requirements (known as feature interaction)
* Reducing functional complexity: structuring the functionality from the System's point of view
* Understanding functional interrelationships: collecting and analyzing the exchange between different (sub-)functionalities
## Domain Logical
**Objective**

The Logical Domain Viewpoints describe the Logical Structure and the distribution of responsibility(s) for the Functionality of the SOI by means of a network of interacting Logical Element(s) that are responsible for a set of desired Functions. These Logical Elements and their Interaction(s) are arranged in the Logical Architecture of the SOI. The structure of the Logical Architecture is in general influenced by Non-functional criteria, e.g., maintainability, safety, and reliability. 

**Concerns**

* Describing the Internal Logical Structure of the SOI by partitioning the SOI into communicating Logical Elements
* Describing the Logical Interface(s) & Data Exchanges between the interacting Logical Elements in a way that the Logical Interfaces are independent from their implementation
* Allocating desired Function(s) to cohesive Logical Elements
* Supporting the reuse of already existent Logical Elements and designing Logical Elements such that future reuse is facilitated
* Defining the emerging behavior of the system (in contrast to the partial behavior specified in the of Functional Domain Viewpoints) and enabling a complete simulation of the entire system
## Domain Physical
**Objective**

tbd
