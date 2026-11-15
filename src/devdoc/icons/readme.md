---

parent: Developer Documentation  
title: Icons  
layout: default  
nav\_order: 70

---

Note, that the definition of icons is work in progress.

This folder contains Icons for Stereotypes

# ICON Design Guide

The naming scheme for stereotyped elements is "\<stereotypename>.svg"

The naming scheme for stereotyped diagrams is "SAF\_\<domaincode>\_\<diagram kind code>.svg"

Icons shall encode the SAF Domain of primary use, by the colored, and the domain short code, preferably both.

## Domain codes, colors and names

{% for dc in site.data.domaincolors %}  
{%- assign dn = site.data.domains | where: "DomainID" , dc.DomainID -%}

*   {{dc.DomainID }} {{dc.Color}} {{ dn.first.Name }} Domain  
    {% endfor %}

## Diagram Kind codes

*   BDD : Block Definition Diagram
*   IBD : Internal Block Diagram
*   Table : A table kind diagram
*   Matrix : A matrix kind diagram

## Icon boundary coding

*   Usage: dashed
*   Definition: Full

# Diagram Icons (type based naming)

## Table Icons

*   Tables in AD : ![Tables in OD](./SAF_A_Table.svg)
*   Tables in OD : ![Tables in OD](./SAF_O_Table.svg)
*   Tables in CD : ![Tables in OD](./SAF_C_Table.svg)
*   Tables in PD : ![Tables in OD](./SAF_P_Table.svg)

## BDD Icons

*   BDD in AD : ![Tables in OD](./SAF_A_BDD.svg)
*   BDD in OD : ![Tables in OD](./SAF_O_BDD.svg)
*   BDD in CD : ![Tables in OD](./SAF_C_BDD.svg)
*   BDD in PD : ![Tables in OD](./SAF_P_BDD.svg)

## IBD Icons

*   IBD in OD : ![IBD in OD](./SAF_O_IBD.svg)
*   IBD in CD : ![IBD in OD](./SAF_C_IBD.svg)
*   IBD in PD : ![IBD in OD](./SAF_P_IBD.svg)

# Examples for Stereotyped Elements Icons

*   SAF\_PhysicalItem : ![IBD in OD](./SAF_PhysicalItem.svg)
*   SAF\_SystemCapability : ![IBD in OD](./SAF_SystemCapability.svg)
*   SAF\_DomainKind : ![IBD in OD](./SAF_DomainKind.svg)
*   SAF\_Function : ![IBD in OD](./SAF_Function.svg)
*   SAF\_FunctionAction : ![IBD in OD](./SAF_FunctionAction.svg)
*   SAF\_OperationalProcess : ![IBD in OD](./SAF_OperationalProcess.svg)
*   SAF\_OperationalProcessAction : ![IBD in OD](./SAF_OperationalProcessAction.svg)