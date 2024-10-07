---
title: Framework Structure
layout: default
nav_order: 20
---

# Framework Structure 

### Stakeholders of the Architecture and their Information Need
SAF partitions the amount of modeling work for e.g. a whole system architecture into smaller parts, which each deliver value for [stakeholders of the architecture](faq.md#stakeholders) by satisfying their information needs.

### Viewpoints satisfying Information Needs
These smaller parts are called [viewpoints](faq.md#viewpoints). They each serve a certain purpose, adress stakeholders [concerns](faq.md#concerns) by presenting stakeholders a subset of the whole model. 

### Viewpoints used to plan and partition work
This allows to partition and plan the work on the MBSE effort according to the problem at hand and helps to focus to the most important parts of the work. A MBSE approach can be planned by defining which viewpoints must be worked on in which phase of the MBSE effort, and it also could prioritize work or define different depths of elaboration for the viewpoints to work on.

Because of this, SAF helps to execute an MBSE effort by a plan which is backed by reasoning about the information need of stakeholders.

### Viewpoints guide modeling effort to deliver stakeholder value
The viewpoints specify, which model elements shall be created in which kind of diagrams to serve the viewpoints purpose and adress the concerns of the stakeholders interested in the viewpoints. 

### SAF Viewpoint Grid
The SAF Viewpoints are organized as a Grid featuring [Domains](./userdoc/domains.md) as rows and [Aspects](./userdoc/aspects.md) as columns.

### Domains follow engineering workflow
The [Domains](./userdoc/domains.md)  are oriented by a typical engineering workflow. 
 * The [Common Domain](./userdoc/common.md) contains workflow overarcing content such as Terms and Standards. 
 * The [Operational Domain](./userdoc/operational.md) adresses information need during the concept phase (Mission Analysis and Stakeholder Requirements elicitation)
 * The [Functional Domain](./userdoc/functional.md) adresses information needs during the System Requirements Definition Process (The System blackbox on a conceptual level)
 * The [Logical Domain](./userdoc/logical.md) adresses information needs during the Architecture Definition Process (the System Whitebox on conceptual level)
 * The [Physical Domain](./userdoc/physical.md) adresses information needs during the Design Definition Process (the System Black Box and Whitebox on solution / design level)

### Aspects follow kinds of concerns
The  [Aspects](./userdoc/aspects.md) are oriented by the kind of information needs, e.g. questions about structure are answered by viewpoints in the taxonomy and structure aspect. Typically similar kinds of questions need to be answered in multiple domains, hence the organisation of grid columns.

![SAF Grid](./assets/images/SAF_Viewpoint-Grid-Structuring-Formalism.svg)


## Recursive Application of the Framework due to System decomposition
Typically, a system consists of subsystems in multiple [hierarchy or decomposition](faq.md#system-hierarchy) levels. 

The Functional, Logical and Physical Domain are applied recursively for system and subsystems.

Since the Mission Analysis and Stakeholder Requirements definition Processes cover the whole system, they are typically executed with the top level system scope. (These processes may require iterations when something new is learned, e.g. new stakeholders might be discovered during the selection of solutions for a subsystem, requiring the content of operational domain viewpoints to be updated)

The same applies to the Common Domain, it is also valid for all decomposition levels.

{: .todo }
here an image of the vee should be shown with decomposition levels and domains covering the whole vee and others repeated. we could also show a decomposition tree, and the dev workflow tree with the gates (scr, srr, pdr, cdr)*

## Application to System of Systems
A System of Systems(SoS)[^1] approach might take advantage from separate operational domain descriptions for each system, while sharing some overarcing elements. 

The MBSE work on system of systems could share a common model supportin a concept of operations (ConOps), in a common model library, and have individual operational domain descriptions supporting the OpsCon of the individual systems.

The approach should be selected according to the constraints of the SoS scenario; the degree of involvement of different organization cooperation in an SoS MBSE effort, especially the stakeholders having an interest in the SoS model.

## Typical Engineering Workflow

{: .todo }
here an image of the Vee should be placed with domains showing where on the vee, or a workflow with the gates. a detail view should show flow through the viewpoints, perhaps with key concerns they adress.
This is complex. details must go to multiple sub pages, possibly organized by SEHB phases. There are also different usage scenarios of SAF

[^1]:Note, that SoS is not just a decomposition - the term should only be used for scenarios which add complexity by independently developed and or operated systems with independent lifecycles, lacking overarcing planning or even agreement.