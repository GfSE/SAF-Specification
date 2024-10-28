---
parent: Developer Documentation
title: Icons
layout: default
nav_order: 70
---
Note, that the definition of icons is work in progress.

This folder contains Icons for Stereotypes
# ICON Design Guide
The naming scheme for stereotyped elements is "\<stereotypename>.svg"

The naming scheme for stereotyped diagrams is "SAF_\<domaincode>_\<diagram kind code>.svg"

Icons shall encode the SAF Domain of primary use, by the colored, and the domain short code, preferably both.

## Domain Colors

 - Operational Domain  0000FF 0 0 255 (rgb)
 - Functional Domain 6699FF  102 153 255 (rgb)
 - Logical Domain FFFF33    255 255 51 (rgb)
 - Physical Domain 00FF00  0 255 0 (rgb)
 - Common Domain 808080  128 128 128 (rgb)

## Domain codes

 * C : Common Domain
 * O : Operational Domain
 * F : Functional Domain
 * L : Logical Domain
 * P : Physical Domain
 * D : SAF Development Domain

 ## Diagram Kind codes

 * BDD : Block Definition Diagram
 * IBD : Internal Block Diagram
 * Table : A table kind diagram
 * Matrix : A matrix kind diagram

## Icon boundary coding

- Usage: dashed
- Definition: Full

# Diagram Icons (type based naming)

## Table Icons
 - Tables in CD : ![Tables in OD](./SAF_C_Table.svg)
 - Tables in OD : ![Tables in OD](./SAF_O_Table.svg)
 - Tables in FD : ![Tables in OD](./SAF_F_Table.svg)
 - Tables in LD : ![Tables in OD](./SAF_L_Table.svg)
 - Tables in PD : ![Tables in OD](./SAF_P_Table.svg)

## BDD Icons
 - BDD in CD : ![Tables in OD](./SAF_C_BDD.svg)
 - BDD in OD : ![Tables in OD](./SAF_O_BDD.svg)
 - BDD in FD : ![Tables in OD](./SAF_F_BDD.svg)
 - BDD in LD : ![Tables in OD](./SAF_L_BDD.svg)
 - BDD in PD : ![Tables in OD](./SAF_P_BDD.svg)

## IBD Icons
 - IBD in OD : ![IBD in OD](./SAF_O_IBD.svg)
 - IBD in FD : ![IBD in OD](./SAF_F_IBD.svg)
 - IBD in LD : ![IBD in OD](./SAF_L_IBD.svg)
 - IBD in PD : ![IBD in OD](./SAF_P_IBD.svg)

# Examples for Stereotyped Elements Icons
 - SAF_PhysicalItem : ![IBD in OD](./SAF_PhysicalItem.svg)
 - SAF_SystemCapability : ![IBD in OD](./SAF_SystemCapability.svg)
 - SAF_DomainKind : ![IBD in OD](./SAF_DomainKind.svg)
 - SAF_Function : ![IBD in OD](./SAF_Function.svg)
 - SAF_FunctionAction : ![IBD in OD](./SAF_FunctionAction.svg)
 - SAF_OperationalProcess : ![IBD in OD](./SAF_OperationalProcess.svg)
 - SAF_OperationalProcessAction : ![IBD in OD](./SAF_OperationalProcessAction.svg)