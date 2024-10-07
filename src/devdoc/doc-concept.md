---
title: Documentation Concept
layout: default
parent: Developer Documentation
has_children: true
nav_order: 20
---
# Documentation Concept

The documentation of SAF is needs to support different use cases of different personae.

**We distinguish SAF Users and SAF Developers.**

* the [User Documentation](../userdoc/userdoc.md) is intended for SAF Users. 
* this Developer Documentation is intedend for SAF Developers. This includes anyone intending to extend or customize SAF, or just wants to know how SAF is developed or what are the building blocks of SAF.
  
## Use Cases
The following use cases have been identified for the SAF Documentation 

### SAF Users::SEMP Author

The author of a SEMP for a system in a certain project context wants to know:

* which viewpoints are relevant for the systems engineering effort
* how will we use the viewpoints and what is the benefit
* which viewpoints will we need additionally
* what do we potentially lose if we omit viewpoints
* what is the recommended workflow through the viewpoints[^1]

Those questions need an answer in order to plan the MBSE appoach. Every project is different, and the focus of modeling should be set accordingly. One needs to know where in the Lifecycle, and for which processes activities (refering to ISO15288) the viewpoints will provide a benefit.

Most of the questions are supported by the following "steckbrief" characteristics of the viewpoint description.

* Purpose
  (motivation and selling point of VP)
* Applicability
  (where in the life cyle, which iso process, chapter in SE Handbook, usage in Reviews)
* Stakeholders
  (Architecture Framework Stakeholders having a rationale founded concern)
* Concerns
  (Rationale founded concerns )
* Dependencies to other VP
  * hard dependencies (required vp is needed, otherwise this vp cant be filled)
  * soft dependencies (recommended vp supports this vp but could be omitted without breaking things)

The concerns of the SEMP Author are laid out in the [Stakeholder Documentation](../userdoc.md/stakeholders.md#saf-mbse-approch-planer)

### SAF Users::Model User

The user of a model (author or reader) wants to know:

* how do i read a viewpoint
* how do i create/fill a viewpoint
* what is the order to fill viewpoints
* what diagrams and model elements do i use
* what is the minimum content of the viewpoint
* what is the recommended workflow through the viewpoints[^1]

This is supported by the following "steckbrief" characteristics of the viewpoint description.

* Iconic Primary Example
  * showing key concepts of the VP, recognizing fullfilment of concerns
  * one for each presentation
* further Examples
  (showing variations of usage, together with explanations)
* Presentations
  (alternate forms how the VP is presented, e.g. Diagram and Table)
* Dependencies to other VP
  * hard dependencies (required vp is needed, otherwise this vp cant be filled)
  * soft dependencies (recommended vp supports this vp but could be omitted without breaking things)
* Used stereotypes
  (List of stereotypes to be used in the VP)

The concerns of the SAF Model User are laid out in the [Stakeholder Documentation](../userdoc.md/stakeholders.md#saf-system-model-user)

## SAF Developers::Framework Developer

The framework developer wants to know:

* how can i extend the framework by new viewpoints ?
* what is needed for a viewpoint specification ?
* how can i use the SAF Documentation as a base for my company MBSE framework ?
Those questions arise within the development of SAF by the working group and also by third parties when they want to contribute to the framework.

The development documentation aims to answer those questions. See next chapter.

The concerns of the Framework Developer are laid out in the [Stakeholder Documentation](../userdoc.md/stakeholders.md#saf-developer)

[^1]: The question about the recommended workflow cannot be answered by a single viewpoint description, this is an overarcing topic, which is currently not covered by the SAF documentation.