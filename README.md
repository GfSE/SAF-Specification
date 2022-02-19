# SAF Specification
Disclaimer: **The System Architecture Framework specification is a work in progress document.**

# Viewpoint Grid
This is the grid of Viewpoints organized in Domains as rows and Aspects as columns
![SAF Grid](diagrams/SAF-Viewpoint-Grid.svg)

## Operational Domain

### Operational Domain Objective

The SAF Operational Domain supports the model-based development of a [CONOPS](https://www.sebokwiki.org/wiki/Concept_of_Operations_(ConOps)_(glossary)) - as well as an [OPSCON](https://www.sebokwiki.org/wiki/Business_or_Mission_Analysis) and related life cycle concepts - for an organization or operational entity seeking for an improvement of existing capability(s) or in establishing new ones.

The SAF Operational Domain therefore aims to get an understanding of required organizational or operational entity capability(s). The viewpoints of the SAF Operational Domain assist the "Business or Mission Analysis Process" and the "Stakeholder Needs and Requirements Definition Process" activities of the INCOSE SYSTEMS ENGINEERING HANDBOOK 2015 [§ 4.1, § 4.2].

By identifying Stakeholder(s) and their Requirement(s) the SAF Operational Domain supports the derivation of a complete and consolidated set of Stakeholder Requirement(s) based on operational activities and exchanges.

### Operational Domain Concern

* Gain a comprehensive understanding of the operating environment that an intended solution needs to support
* Promote the freedom of development by preventing premature commitment to solutions
* Capture all information necessary for subsequent requirement and system architecture definition activities

### Operational Domain Viewpoints

#### Operational Domain Aspect Context
* [Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)
* [Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)
* [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)
#### Operational Domain Aspect Structure
* [Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)
* [Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md)
* [Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)
#### Operational Domain Aspect Behavior
* [Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)
* [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)
#### Operational Domain Aspect Interaction and Collaboration
* [Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)
#### Operational Domain Aspect Requirement
* [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)
#### Operational Domain Aspect Crossreference and Mapping
* [Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)
* Operational Capability Traceability Viewpoint

## Functional Domain

### Functional Domain Objective

The Functional Domain Viewpoints translate Operational Domain usage into the notion of System Function(s) defining the demanded system behavior and quality attributes - performance, safety, security, etc.; the demanded system behavior as it is perceived by the User or other Entity(s) at the System Boundary (known as usage behavior). The result of the Functional Domain Viewpoint elaboration is a comprehensive System Specification.

### Functional Domain Concern

* Consolidating Functional Requirement(s): formally specifying the requirements of the system behavior using a black box approach
* Mastering functional dependency: detection and resolution of inconsistencies within the Functional Requirement(s) (known as feature interaction)
* Reducing functional complexity: structuring the functionality from the System's point of view
* Understanding functional interrelationship(s): collecting and analyzing the exchange between different (sub-)functionality(s)

### Functional Domain Viewpoints

#### Functional Domain Aspect Context
* [System Story Viewpoint](viewpoints/System-Story-Viewpoint.md)
* [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)
* [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)
#### Functional Domain Aspect Structure
* [System Domain Item Kind Viewpoint](viewpoints/System-Domain-Item-Kind-Viewpoint.md)
* [System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md)
* [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)
#### Functional Domain Aspect Behavior
* [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)
* [System State Viewpoint](viewpoints/System-State-Viewpoint.md)
#### Functional Domain Aspect Interaction and Collaboration
* [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)
#### Functional Domain Aspect Requirement
* [System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)
#### Functional Domain Aspect Crossreference and Mapping
* [System Function Black Box Allocation Viewpoint](viewpoints/System-Function-Black-Box-Allocation-Viewpoint.md)

## Logical Domain

### Logical Domain Objective

The Logical Domain Viewpoints describe the Logical Structure and the distribution of responsibility(s) for the Functionality of the SOI by means of a network of interacting Logical Element(s) that are responsible for a set of desired Function(s). These Logical Element(s) and their Interaction(s) are arranged in the Logical Architecture of the SOI. The structure of the Logical Architecture is in general influenced by nonfunctional criteria, e.g., maintainability, safety, and reliability.

### Logical Domain Concern

* Describing the Internal Logical Structure of the SOI by partitioning the SOI into communicating Logical Element(s)
* Describing the Logical Interface(s) & Data Exchange(s) between the interacting Logical Element(s) in a way that the Logical Interface(s) are independent from their implementation
* Allocating desired Function(s) to cohesive Logical Element(s)
* Supporting the reuse of already existent Logical Element(s) and designing Logical Element(s) such that future reuse is facilitated
* Defining the emerging behavior of the system (in contrast to the partial behavior specified in the of Functional Domain Viewpoints) and enabling a complete simulation of the entire system

### Logical Domain Viewpoints

#### Logical Domain Aspect Structure
* [Logical Structure Definition Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)
#### Logical Domain Aspect Interaction and Collaboration
* [Logical Internal Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)
* [Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)

## Physical Domain

### Physical Domain Objective

### Physical Domain Concern

### Physical Domain Viewpoints

# Stakeholder Definition

[Stakeholders](stakeholders.md)

# Profile Model

[Stereotypes](stereotypes.md)
