# SAF Development Documentation : Concepts : structural_O 
![SAF_structural_O Definition.svg](./diagrams/SAF_structural_O-Definition.svg)
|Concept|Documentation|
| --- | --- |
| ODKtypifyingOPE | Specifies the fact that an Operational Domain Kind typifies an Operational Process Exchange.|
| OPRcapableOFperformingOPS | Specifies the fact that an Operational Performer performs an Operational Activity. Traceability from Operational Activities to Operational Performers is derived via assignment of Operational Action to Operational Roles.<br><br>Aliases:<br>UAF::IsCapableToPerform|
| OPRcomposedOF | Specifies the fact that an Operational Performer consists of one or more Operational Performers.|
| OPRperformingOPSU | Specifies that an Operational Context Constituent performs an Operational Action in the context of an other Operational Activity.|
| OPSrefiningOSY | Specifies the fact that an Operational Story is refined by one or more Operational Processes.|
| OSYtakingPlaceInOCT | Specifies the fact that an Operational Story happens in a certain Operational Context. When parts of an Operational Story do happen in several contexts, they shall be duplicated.|
| Operational Context | An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, these are interacting in the Scenario exhibiting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. <br><br>Aliases:<br>UAF::HighLevelOperationalConcept|
| Operational Context Performer Constituent | An Operational Context Constituent represents a participant in the Operational Activity executing one or more of its atomic actions interacting with other constituents of the identified Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a constituent necessary for the execution of the allocated actions.|
| Operational Domain Kind | Specifies the kind of exchange between Operational Context Constituents or between Operational Processes.|
| Operational Performer | An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.<br><br>Aliases:<br>UAF::OperationalPerformer|
| Operational Process | An Operational Process captures operational behaviors including scenarios, activity actions, and operational exchanges including information, materials, natural resources, etc.<br><br>Aliases:<br>UAF::Operational Activity<br>NAF::Logical Activity|
| Operational Process Exchange | Specifies the fact that an Operational Process has an exchange with another Operational Process.|
| Operational Process Usage | Specifies the fact that an Operational Process is used in context of another Operational Process.<br><br>Aliases:<br>UAF::OperationalAction|
| Operational Story | The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.|
| controlledAFTER | Specifies an ordering of Operational Processes in time.|