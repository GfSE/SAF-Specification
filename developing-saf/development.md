# How SAF is Developed?

## Kinds of Models

![Bild](../diagrams/Kinds-of-Models.svg)

There are several kinds of models around SAF serving a certain purpose

* **SAF System Model**<BR>
  This is a model dedicated to the development of one or more systems. It is a model that users of SAF create and maintain. It may be maintained in one of the Tools supported by a SAF Profile Implementation Model. The SAF example models are System Models.
* **SAF Profile Implementation Model**<BR>
  This is a model needed to create a SAF System Model. It is tool specific and (hopefully) compliant to the SAF Specification. There are currently several contributed models:

  * [SAF-Cameo-Profile](https://github.com/GfSE/SAF-Cameo-Profile)
  * [SAF-Rhapsody-Profile](https://github.com/GfSE/SAF-Rhapsody-Profile)
  * [SAF-EA-Profile](https://github.com/GfSE/SAF-EA-Profile)

  The Repositories usually also contain an example System Model
* **Conceptual Model**<BR>
  The conceptual model contains the definitions serving as foundation for SAF development. See the following chapter for details

## Conceptual Model

The conceptual model is the foundation of SAF development.
It governs, which items SAF consist of and how these items are related.

The inner architecture follows the concepts of ISO 42010.

![Bild](../diagrams/Concept-Model-Definition.svg)

Within the conceptual model the following elements can be recognized.

* **Stakeholders**<BR> are classes of users having an interest on the information that is maintained in a SAF System Model.
* **Concerns**<BR> sketch out the information need of Stakeholders, which in turn should be adressed by a SAF System Model.
* **Rationale**<BR> expains why a Stakeholder has abovementionend information need resulting in a Concern
* **Concepts**<BR> are the conceptual definition of items and their relationships forming an information network to be kept in a SAF System Model, in order to give answers to the Stakeholders Concerns.
* **Viewpoints**<BR> select a set of Concepts in order to adress the information need expressed by a certain set of Stakeholers Concerns.
  In SAF the size of Viewpoints should be optimized to support tailoring by selection of viewpoints appropriate to the engineering problem at hand. This  means that SAF Viewpoints should adress only a small number of well defined Concerns.
  
* **Information Items**<BR> are like Viewpoints but at a larger scale. They can group Viewpoints while constraining them further. They also can be nested.
  This allows to specify Information Items like e.g. an ISO 29148 SyRS by breaking it down into smaller Information Items and finally into Viewpoints.
  This allows to define which concerns are to be adressed e.g. by a SyRS document and which viewpoints are needed for it.
  The goal is, to precisely define the needed model work for certain points in an engieering project.
