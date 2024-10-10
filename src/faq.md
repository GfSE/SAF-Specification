---
title: FAQ
layout: default
nav_order: 99
---
# Frequently Asked Questions
## Viewpoints
**What are Viewpoints?** 
The information handled in Systems Engineering is a complex graph of interrelated elements. Systems engineers require to capture, analyse and communicate subsets of this information landscape in various situations in the engineering workflow with various **stakeholders**.

The elements and relationships don't change if they are captured in Models - MBSE does not make the situation less complex, but allows to manage the existing complexity better.

**Viewpoints** are a means to cut down the complexity - they allow to define a cut-set of the information landscape represented in a model, in order to answer well defined information needs(called **concerns**) for defined **stakeholders**.

*The Viewpoint Concept is layed out in ISO 42010*

See the [SAF Viewpoint documentation](./userdoc/viewpoints.md).

## Stakeholders
**What are Stakeholders?** 
There are two classes of Stakeholders in SAF. **System Stakeholders** and **Architecture Stakeholders. System Stakeholders** are subject of system modeling and formulate needs that should be satisfied by the system of interest.
**Architecture Stakeholders** formulate information needs (**concerns**), that must be answered by the Frameworks **Viewpoints**

See the [SAF Stakeholder documentation](./userdoc/stakeholders.md).

*The Stakeholder concept is layed out in ISO 42010*

## Concerns
**What are Concerns?** 
The information needs of stakeholders are called concerns. In SAF the relationship of a concern to a stakeholder is amended by a rationale, describing the reason for the information need.
This allows multiple stakeholder have the same concern for different reasons. The reasoning provides valuable information, e.g. to support the decision why a viewpoint is needed. 

Each Stakeholder of a system - customer, user, project manager, coder, analyst, tester, and so on - have specific information needs about different characteristics of the system.

For example, the user has specific concerns which interactions he or she has with the system.; the customer is has a concern if and how the operational capabilities are supported by the system.

The stakeholders concerns are specific to the lifecycle project phase, e.g., at a PDR, subsystem responsibles have the information need which systems function are delegated to their subsystems, while at a CDR they would need to know about the interface designs of other neighbor subsystems.

See the [SAF concern documentation](userdoc/concerns.html).

*The Concern concept is layed out in ISO 42010*

## Domains
**What are Domains?**
The rows of the SAF grid are called  domains. They organize the viewpoints in a way that typical engineering workflows follow the viewpoints in one domain, then continue to the next domain. 

See the [SAF domain Documentation](./userdoc/domains.md)

*The Domain concept implements the Stakeholder Perspective layed out in ISO 42010*

## Aspects
**What are Aspects?**

The columns of the SAF grid are called aspects. They organize the viewpoints by the kind of information need of stakeholders, typically similar diagram kinds appear together in the same aspect, and typically the same information need appears in multiple domains. 

See the [SAF aspect Documentation](./userdoc/aspects.md)

*The Aspect concept is layed out in ISO 42010*

## Grid
**What is the Grid?** 

The Grid of a Framework is a means to organize and structure the Viewpoints of a Framework. It is like a tool-wall in a well organized workshop. Every tool has its place and is easily accessable.

See the [SAF Viewpoint Grid](structure.md#saf-viewpoint-grid)

## System Hierarchy
**What is a System Hierarchy or System Decomposition?**

A System Hierarchy (or a System Decomposition) is the result of partitioning a system into subsystems.
The concept of decomposition is not restricted to structur, e.g., also functions can be decomposed into sub functions.

This is not to be confused with the Term "Abstraction Level"

## Abstraction
**What is an Abstraction or Abstraction Level?**

*An abstraction is a general idea rather than one relating to a particular object, person, or situation* [^1]

An example for an abstraction is the difference between a concept and the solution. 

Architecture descripion content is usually separated in different abstraction levels.
The SAF Functional Domain and SAF Physical Domain are on different Abstraction Levels - the Functional Domain deals with concepts, and the Physical Domain covers the solution.

Abstraction has nothing to do with breaking down whole things into smaller parts- that would be decompositon.

[^1]:Collins Dictionary
