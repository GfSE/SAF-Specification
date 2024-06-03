# SAF Development Documentation : Concepts : SAF_capability_O Definition 
![SAF_capability_O Definition.svg](./diagrams/SAF_capability_O-Definition.svg)
|Concept|Documentation|
| --- | --- |
| OCYcomposedOF | Specifies the fact that an Operational Capability consists of other Operational Capabilites.|
| OCYdependingON | Specifies the fact that an Operational Capability depends on another Operational Capability.<br><br>Aliases:<br>UAF::CapabilityDependency|
| OCYspecializedBY | Specifies the fact that an Operational Capability is specialized by other Operational Capability. <br><br>Aliases:<br>UAF::CapabilityGeneralization|
| OCYsupportingOSY | Specifies the fact that an Operational Story is supported by Operational Capabilities.|
| OPRcapableOFperformingOPS | Specifies the fact that an Operational Performer performs an Operational Activity. Traceability from Operational Activities to Operational Performers is derived via assignment of Operational Action to Operational Roles.<br><br>Aliases:<br>UAF::IsCapableToPerform|
| OPRexhibitingOCY | Specifies the fact that an Operational Performer exhibits an Operational Capability under specific environmental conditions.|
| OPSenablingOCY | Specifies the fact that an Operational Process contributes to the provision of one or more Operational Capabilities in the field.<br><br>Aliases:<br>UAF::MapsToCapability|
| OPSrefiningOSY | Specifies the fact that an Operational Story is refined by one or more Operational Processes.|
| Operational Capability | A Operational Capability is a high-level description or specification of an organizational unit's ability to execute a specified course of action, to implement a business process or to provide a service. Operational Capabilities typically require people, processes, infrastructure, technology and supporting systems to be implemented.  A Operational Capability is an enduring element, its implementation may change over time. A necessary or desired change of a Operational Capability triggers the updated of involved systems or the integration new systems.<br><br>Aliases:<br>UAF::Capability<br>NAF4::Capability|
| Operational Performer | An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.<br><br>Aliases:<br>UAF::OperationalPerformer|
| Operational Process | An Operational Process captures activity-based operational behavior including scenarios, activity actions, and operational exchange flows, e.g., including information, materials, natural resources, etc.<br><br>Aliases:<br>UAF::Operational Activity<br>NAF::Logical Activity|
| Operational Story | The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.|
| SHRrefiningOCY | Specifies the fact that an Operational Capability is refined by Stakeholder Requirements.|
| Stakeholder Requirement | A Stakeholder Requirement is a Requirement imposed by a Stakeholder. Stakeholder Concerns are refined by Stakeholder Requirements applicable for the SOI. The Stakeholder Requirements are a result of discussions and agreements of how the SOI addresses the Concerns of the respective Stakeholder.|
