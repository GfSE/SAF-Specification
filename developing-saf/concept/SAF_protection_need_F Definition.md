# SAF Development Documentation : Concepts : SAF_protection_need_F Definition 
![SAF_protection_need_F Definition.svg](./diagrams/SAF_protection_need_F-Definition.svg)
|Concept|Documentation|
| --- | --- |
| LIPDdefiningDetailOfLIP | Specifies the fact that a Logical Interaction Point Definition defines the exchange capabilities of a Logical Interaction Point.|
| LIPPspecifyingDetailOfLIPD | Specifies the fact that a Logical Interaction Point Property is a detail of a Logical Interaction Point Definition.|
| LIPapplyingToLET | Specifies the fact that a Logical Interaction Point applies to a Logical Element.|
| Logical Element | Describes a conceptual Logical Element as specification for an implementation of a system, or system element.|
| Logical Interaction Point | Specifies the existence of an interaction point on Logical Level.|
| Logical Interaction Point Definition | Specifies the exchange capabilities of an interaction point on Logical Level.|
| Logical Interaction Point Property | Specifies a detail of an interaction point on Logical Level.|
| PNCdefinesPRN | Specifies that a Protection need is part of a protection need category, e.g. NATO RESTRICTED is part of the NATO security classifications.|
| PRBhigherThanPRN | Specifies that a Protection need is higher than an other.|
| Protection Need | Specifies a protection need of an asset, typically an information.<br>The protection need is typically part of a a protection need category of ordered protection needs.<br>e.g. "NATO Security Classification" containing "NATO UNCLASSIFIED, NATO RESTRICTED,.. and so on"|
| Protection Need Category | Specifies a protection need category of ordered protection needs.<br>e.g. "NATO Security Classification" containing "NATO UNCLASSIFIED, NATO RESTRICTED,.. and so on" or "PERSONAL" and "OPEN" for HR purposes.|
| SDKprotectedAsPRN | Specifies that a Domain Kind is protected according to one or more Protection needs. If multiple protection needs are assigned to a domain kind, they must be from different categories.<br>E.g. a domain Kind may be assigned NATO RESTRICTED and "PERSONAL"|
| SDKtypingLIPP | Specifies the fact that a System Domain Kind defines the type of a Logical Interaction Point Property.|
| System Domain Kind | Specification for any kind of conceptual item (energy, material, information, etc.) to be exchanged on Functional or Logical Level. The System Domain Kind is agnostic to any realization on Physical Level.|
