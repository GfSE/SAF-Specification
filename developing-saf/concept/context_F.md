# SAF Development Documentation : Concepts : context_F 
![SAF_context_F Definition.svg](./diagrams/SAF_context_F-Definition.svg)
|Concept|Documentation|
| --- | --- |
| LCEactingInSUC | Specifies the fact that a Logical Context Element acts in one or more System Use Cases.|
| Logical Context Element | Abstract element of a System Context in the Logical Domain, outside the SOI scope, interacting with the SOI.|
| Logical Context Element Constituent | Specifies the fact that a Logical Context Element exists in a specific Logical Context.|
| Logical Environment | An Environmental Element in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., air, dirt, sun, road.|
| Logical External System | An External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., power grid, mobile network, fresh water system (in a house).|
| Logical SOI | A SOI representation in the Logical Domain.|
| Logical SOI Constituent | Specifies the fact that a Logical SOI exists in a specific Logical Context.|
| Logical System Context | Specifies the fact that a context for a System of Interest is defined on Logical Level.|
| Logical User | A human representation in the Logical Domain, outside the SOI scope, interacting with the SOI.|
| OPRcomposedOF | Specifies the fact that an Operational Performer consists of one or more Operational Performers.|
| Operational Performer | An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.<br><br>Aliases:<br>UAF::OperationalPerformer|
| Operational Story | The Operational Story represents one or more Operational Use Cases in the Usage Scenario identified by the Operational Context. The Operational Story is described as narrative story-telling.|
| SCEactingForOPR | Specifies the fact that a System Context Element is acting for the benefit of an Operational Performer.|
| SOIactingForOPR | Specifies the fact that a SOI is acting for the benefit of an Operational Performer.|
| SUCcontributingToOSY | Specifies the fact that a System Use Case contributes to an Operational Story.|
| SUCincludingSUC | Specifies the fact that a System Use Case includes other System Use Cases. The included use case is then no longer a full System Use Case, but a partial System Use Case.|
| SUCtakingPlaceInLSC | Specifies the fact that a System Use Case takes place in a Logical System Context.|
| System Context Element | An abstract element of the SOI context. Base class for specific kinds of context elements.|
| System Of Interest | An abstract element representing the SOI. Base for specific perspectives on SOI (logical , physical)|
| System Use Case | The System Use Cases are a table of content of the services provided by the System of Interest to its System Actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. While the main System of Interest interaction actors participating in this Use Case are identified, the behavior itself is specified by a Use Case Activity, <br>Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general).|
