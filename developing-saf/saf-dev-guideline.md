# SAF Development Documentation : SAF Developement Guideline

For details on how to model, please refer to the [metamodeling guide](../src/devdoc/metamodel-guideline/modelguideline.md).

## Mastership of Truth
Most content of the SAF specification is developed using a Model. Most of the files in this repository are generated from this Model. So the best way to apply a change is to change the Model and generate again. We use Magic Draw to maintain the Model.

## Core Elements to know
The main elements to understand and to know are Stakeholders, Concerns, Rationale, Viewpoints and Concepts. See [Developement](development.md) about their definition and relationships.

## Viewpoint Development
The main questions to be asked when developing a viewpoint should be: 
 1. who cares ?
 2. why ?
 3. what information does she/he need ?
 4. in which way is this information related to other concepts in the framework ?
 5. how is this information presented to adress the need ?
 
The first two questions result in the Elaboration of Stakeholders, their Concerns and the Rationale:
 - Who needs / produces a certain information, and why is this important to the stakeholder.

The next two Question leads to the development of concepts, abstracting the information. New concepts shall be aligned with the existing concepts, and linked, as appropriate according to viewpoints concerns.

The last Question leads to the selection of appropriate diagrams/tables.

The decisions taken in viewpoint development should be such, that the viewpoint under development should "fit into the framework well". 

## Profile Development
To foster the development of profiles for various SysML Tools, we export also a [stereotype CSV file](../stereotypes.csv) containing entries for each of the    SAF Profiles stereotypes.

**Table of Fields with Example**

|UID|Stereotype Name|Documentation|Abstract Flag|Metaclasses|
|---|---|---|---|---|
|_19_0_3_26f0132_1614938958203_459716_5653|SAF_DomainKind|<html>Implementation of SAF Concept <A HREF='https://github.com/GfSE/SAF-Specification/blob/main/developing-saf/concept/concepts.md#System Domain Kind'>System Domain Kind</A><BR><BR>System Domain Kind: Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.<BR><BR>Usage in Viewpoints:<BR>|False|DataType,Class|

**Example Line of CSV File:**

`"_19_0_3_26f0132_1614938958203_459716_5653""SAF_DomainKind","<html>Implementation of SAF Concept <A HREF='https://github.com/GfSE/SAF-Specification/blob/main/developing-saf/concept/concepts.md#System Domain Kind'>System Domain Kind</A><BR><BR>System Domain Kind: Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.<BR><BR>Usage in Viewpoints:<BR></html>","False","DataType,Class"`

### Stereotype Icons
The icons of stereotypes are in a specific folder. They should be used in profile implementations.  See [the readme](../icons/readme.md)