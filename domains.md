# SAF Domains
|Domain|Viewpoints|
| --- | --- |
| Common | [Evidence Definition Viewpoint](viewpoints/Evidence-Definition-Viewpoint.md), [Standards Definition Viewpoint](viewpoints/Standards-Definition-Viewpoint.md) |
| Operational | [Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md), [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md), [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md), [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md), [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md), [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md), [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md), [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md), [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md), [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md), [Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md), [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md) |
| Functional | [Functional Interface Definition Viewpoint](viewpoints/Functional-Interface-Definition-Viewpoint.md), [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md), [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md), [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md), [System Functional Breakdown Structure Viewpoint](viewpoints/System-Functional-Breakdown-Structure-Viewpoint.md), [System Functional Refinement Viewpoint](viewpoints/System-Functional-Refinement-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md), [System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md), [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md), [System State Viewpoint](viewpoints/System-State-Viewpoint.md), [System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md) |
| Logical | [Logical Functional Assignment Viewpoint](viewpoints/Logical-Functional-Assignment-Viewpoint.md), [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [Logical Internal Interaction Viewpoint](viewpoints/Logical-Internal-Interaction-Viewpoint.md), [Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md) |
| Physical | [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md), [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md), [Physical Functional Assignment Viewpoint](viewpoints/Physical-Functional-Assignment-Viewpoint.md), [Physical Internal Exchange Viewpoint](viewpoints/Physical-Internal-Exchange-Viewpoint.md), [Physical Logical Assignment Viewpoint](viewpoints/Physical-Logical-Assignment-Viewpoint.md), [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md) |
## Domain Common
**Objective**

[tbd]

**Concerns**

[tbd]
## Domain Operational
**Objective**

The SAF Operational Domain supports the model-based development of a CONOPS - as well as an OPSCON and related life cycle concepts - for an organization or operational entity seeking for an improvement of existing capabilities or in establishing new ones. The SAF Operational Domain therefore aims to get an understanding of required organizational or operational entity capabilites.
The viewpoint-oriented approach of the SAF Operational Domain assist the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2]. By identifying Stakeholders and their Needs the SAF Operational Domain supports the derivation of a complete and consolidated set of Stakeholder Requirements based on operational activities and exchanges.

**Concerns**

* Gain a comprehensive understanding of the operating environment that an intended solution needs to support
* Promote the freedom of development by preventing premature commitment to solutions
* Capture all information necessary for subsequent requirement and system architecture definition activities
## Domain Functional
**Objective**

The Functional Domain Viewpoints translate Operational Domain (intended solution) usage into the notion of System Functions defining the demanded system behavior and quality attributes - performance, safety, security, etc.; the demanded system behavior as it is perceived by the User or other Entities at the System Boundary (known as usage behavior). The result of the Functional Domain viewpoint-oriented elaboration approach is a comprehensive System Specification.

**Concerns**

* Consolidating functional requirements: formally specifying the requirements of the system behavior using a black box approach
* Mastering functional dependency: detection and resolution of inconsistencies within the Functional Requirements (known as feature interaction)
* Reducing functional complexity: structuring the functionality from the System's point of view
* Addressing cross-cutting concerns
* Understanding functional interrelationships: collecting and analyzing the exchange between different functionalities
## Domain Logical
**Objective**

The Logical Domain Viewpoints describe the SOI Logical Structure and the distribution of responsibilities for the functionality of the SOI by means of a network of interacting Logical Elements that are responsible for a set of desired Functions. These Logical Elements and their Interactions are arranged in the Logical Architecture of the SOI. The structure of the Logical Architecture is in general influenced by Non-functional criteria, e.g., maintainability, reliability, safety, and security. 

**Concerns**

* Describing the Internal Logical Structure of the SOI by partitioning the SOI into communicating Logical Elements
* Describing the Logical Interfaces & Data Exchanges between the interacting Logical Elements in a way that the Logical Interfaces are independent from their implementation
* Allocating desired System Functions to cohesive Logical Elements
* Supporting the reuse of already existent Logical Elements and designing Logical Elements such that a future reuse is facilitated
* Defining the emerging behavior of the SOI (in contrast to the partial behavior specified in the of Functional Domain Viewpoints) and enabling a complete simulation of the entire SOI
## Domain Physical
**Objective**

The SAF Physical Domain supports the representation of the Product Breakdown Structure, the identification of external and internal physical interfaces, the provision of viewpoints for the system overview, the integration planning, production planning, and the features and variations implied in the system. The physical architecture typically is a combination of re-use elements, COTS elements and make-items for HW as well as for SW. The properties of the selected physical components and their provided resources are identified and modeled. A major concern of the SAF Physical Domain are the physical interfaces, their identification and definition. For that purpose, the SAF Physical Domain provides the viewpoints to model interface with different level of detail considering the actual needs for the point of time in the project life cycle. For traceability the SAF Physical Domain defines viewpoints showing the mapping of the physical items and their interfaces to physical items and their interfaces as well as to applicable requirements.

**Concerns**

**Structure**
* Show the decomposition of the system into system elements down the hierarch and provide configuration meta data.

**Interfaces**
* Identify external interfaces and the information and data items that are exchanged or transferred via an interface together with related documentation.
* Identify applicable interface standards and allocate the standards to physical interfaces.
* Provide an overview on all physical interfaces of a given element with detailed information on the interfaces.
* Provide an overview on all physical interconnections between the internal elements of the system.
* Provide a detailed view on the physical interfaces and the interconnection between the system elements.
* Define a physical interface type in detail including compatibility rules.

**Allocations**
* Show the allocation of logical elements from the logical architecture to elements of the physical architecture.
* Show the allocation of logical interfaces from the logical architecture to interfaces of the physical architecture.
* Allocate functional or non-functional requirements to the elements of the physical architecture.
* Allocate functional or non-functional requirements to the interfaces of the physical architecture.
* Allocate a safety criticality to the elements of the physical architecture.
