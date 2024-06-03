# SAF Development Documentation : Concepts : SAF_general concept wallpaper 
![SAF_general concept wallpaper.svg](./diagrams/SAF_general-concept-wallpaper.svg)
|Concept|Documentation|
| --- | --- |
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| CallowingE | Specifies the fact that a connection allows Exchange to happen|
| Connection | Specifies the connection of two interaction points.|
| Context Function | Specifies the fact that a fundamental action or task is expected to be carried out by an External Entity. <br>Note: The intention is to capture the expectations and to explicitly dissect the functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity. Capturing this valuable information is the basis to reach agreement on the functionality at the System boundary by clarifying the expectations about what is performed by Context Elements.|
| EKtypingE | Specifies the fact that a Exchange Kind defines the type of a Exchange.|
| EKtypingIPP | Specifies the fact that a Exchange Kind defines the type of a Interaction Point Property.|
| Exchange | Specification for general item exchange (energy, material, information, etc.).|
| Exchange Kind | Specification for a general kind of item (energy, material, information, etc.) to be exchanged.|
| General Chronological Message | Ordered sequential occurrence of exchanges between General Interaction Scenario Participants.|
| General Context | Specifies a General Context.|
| General Context Element | Specifies a General Context Element.|
| General Context Element Role | Specifies the fact that a General Context Element exists in a given General Context.|
| General Function | Specifies the fact that a General Function is used as base Class for specific System or Context Functions.|
| General Functional Usage | Specifies the fact that a Function is used by one or more other Functions.|
| General Interaction Scenario | Ordered sequence of exchanges of information, energy, or material between General Interaction Scenario Participants.|
| General Scenario Participation | Specifies the fact that a System Role participates in a General Interaction Scenario.|
| Hardware Element | Pure Hardware Elements. Similarity with the V-Model "hardware unit".|
| IPDtypingIP | Specifies the fact that an Interaction Point Definition defines the exchange capabilities of an Interaction Point.|
| IPPisDetailOfIPD | Specifies the fact that an Interaction Point Property is a detail of an Interaction Point Definition.|
| Interaction Point | Specifies the existence of an interaction point.|
| Interaction Point Definition | Specifies the exchange capabilities of an interaction point on Physical Level.|
| Interaction Point Property | Specifies a detail of an interaction point.|
| LCNallowingLIE | Specifies the fact that a Logical Item Exchange is allowed on the Logical Connection.|
| LIPDdefiningDetailOfLIP | Specifies the fact that a Logical Interaction Point Definition defines the exchange capabilities of a Logical Interaction Point.|
| LIPPspecifyingDetailOfLIPD | Specifies the fact that a Logical Interaction Point Property is a detail of a Logical Interaction Point Definition.|
| LIPapplyingToLCE | Specifies the fact that a Logical Interaction Point applies to a Logical Context Element.|
| LIPapplyingToLET | Specifies the fact that a Logical Interaction Point applies to a Logical Element.|
| LIScontainingILCM | Specifies the fact that an Internal Logical Interaction Scenario contains one or more Internal Logical Chronological Messages.|
| Logical Chronological Message | Ordered sequential occurrence of exchanges between Logical Interaction Scenario Participants.|
| Logical Connection | Specifies the connection of two interaction points on Logical Level.<br>Note: Connections between logical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.|
| Logical Context Element | Represents an abstract element in the given System Context on Logical Level, outside the SOI scope, interacting with the SOI.|
| Logical Context Element Role | Specifies the fact that a Logical Context Element exists in a given Logical System Context.|
| Logical Context SOI | Represents the Logical SOI in the System Context on Logical Level.|
| Logical Element | Describes a conceptual Logical Element as specification for an implementation of a system, or system element.|
| Logical Element Role | Specifies the fact that a logical element comprises logical elements.|
| Logical Environment | A Logical Environment in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., air, dirt, sun, road.|
| Logical External System | A Logical External System in the Logical Domain, outside the SOI scope, interacting with the SOI. E.g., power grid, mobile network, fresh water system (in a house).|
| Logical Interaction Point | Specifies the existence of an interaction point on Logical Level.|
| Logical Interaction Point Definition | Specifies the exchange capabilities of an interaction point on Logical Level.|
| Logical Interaction Point Property | Specifies a detail of an interaction point on Logical Level.|
| Logical Interaction Scenario | Ordered sequence of exchanges of information, energy, or material between Logical Interaction Scenario Participants.|
| Logical Item Exchange | Specifies the exchange that is to take place on a connection of two interaction points on Logical Level.|
| Logical SOI Role | Specifies the fact that a Logical Context SOI exists in a given Logical System Context.|
| Logical Scenario Participation | Specifies the fact that a Logical Element Role participates in a Logical Interaction Scenario.|
| Logical System Context | Specifies the fact that a System Context for a System of Interest is defined on Logical Level.|
| Logical User | The Logical User is the representation for a human in the Logical Domain, outside the SOI scope, interacting with the SOI.|
| OCNallowingOIE | Specifies the fact that an Operational Item Exchange is allowed on the Operational Connection.|
| ODKtypifyingOIE | Specifies the fact that an Operational Domain Kind typifies an Operational Item Exchange.|
| OIScontainingOCM | Specifies the fact that an Operational Interaction Scenario contains one or more Operational Chronological Messages.|
| Operational Chronological Message | Ordered sequential occurrence of exchanges between Operational Interaction Scenario Participants.|
| Operational Connection | Specifies the connection between Operational Context Roles in an Operational Context allowing Operational Item Exchange.<br><br>Aliases:<br>UAF::OperationalConnector|
| Operational Context | An Operational Context is representing a separate Usage Scenario with a specific configuration of Operational Performers, these are interacting in the Scenario exhibiting a specific identified Operational Capability. One or more Operational Contexts meaningful for the Operational Domain are to be identified. <br><br>Aliases:<br>UAF::HighLevelOperationalConcept|
| Operational Context Role | An Operational Context Role represents a participant in an Operational context.<br>It is interacting with other roles of the given Operational Context. Specific characteristics and features or, in case of persons or organizational units, knowledge and skills are assigned to a role necessary for the execution of the performed Operational Processes.|
| Operational Domain Kind | Specifies the kind of Operational Item Exchange between Operational Context Roles or Operational Processes.|
| Operational Interaction Scenario | Ordered sequence of exchanges of information, energy, or material between Operational Interaction Scenario Participants.|
| Operational Item Exchange | Specifies the Operational Item Exchange that is to take place on an Operational Connection.<br><br>Aliases:<br>UAF::OperationalExchange|
| Operational Performer | An Operational Performer is an element of the Operational Context that is capable to perform Operational Process Activities contributing to a specific identified Operational Capability. An Operational Performer may be any kind of organization, person, or even a system playing a role in one or more Operational Contexts.<br><br>Aliases:<br>UAF::OperationalPerformer|
| Operational Scenario Participation | Specifies the fact that an Operational Context Role participates in an Operational Interaction Scenario.|
| PCCapplyingToPCN | Specifies the fact that a Physical Connector Compatibility Assertion shall apply to a Physical Connection.|
| PCCassertsCompatibiltyForPCPD | Specifies the Physical Interaction Point Definition the Physical Compatibility Assertion is valid for.|
| PCNallowingPIE | Specifies the fact that a Physical Item Exchange is allowed on the Physical Connection.|
| PCPOverPCP | Specifies the fact that a physical interaction point communicates / transfers / flows / over an other physical interaction point. Used to define layered physical interfaces, and show layer relationships between interfaces.|
| PCPPOverPCPP | Specifies the fact that a physical interaction point property communicates / transfers / flows / over an other physical interaction point property. Used to define layered physical interfaces, and show layer relationships between interface details.|
| PCPisPartOfPIPD | specifies that a physical interaction point can be a part of a physical interaction point definition. This fosters reuse and allows structuring of definitions.|
| PEKtypingPIE | Specifies the fact that a Physical Exchange Kind defines the type of a Physical Item Exchange.|
| PEKtypingPIPP | Specifies the fact that a Physical Exchange Kind defines the type of a Physical Interaction Point Property.|
| PIPDdefiningDetailOfPIP | Specifies the fact that a Physical Interaction Point Definition defines the exchange capabilities of a Physical Interaction  Point.|
| PIPPspecifyingDetailOfPIPD | Specifies the fact that a Physical Interaction Point Property is a detail of a Physical Interaction Point Definition.|
| PIPapplyingToAPE | Specifies the fact that a Physical Interaction Point applies to an Abstract Physical Element.|
| PIPapplyingToPCE | Specifies the fact that a Physical Interaction Point applies to a Physical Context Element.|
| Physical Connection | Specifies the connection of two physical interaction points.<br>Note: Connections between physical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.|
| Physical Connector Compatibility | Specifies the fact that two Physical Interaction Point Definitions are compatible and how the Physical Interaction Point Properties are mapped.|
| Physical Context Element | Abstract element of a System Context on Physical Level, outside the SOI scope, interacting with the SOI.|
| Physical Element | A composition of Hardware and Software Elements. Similarity with the V-Model segments and system. See [VXT].|
| Physical Environment | The Physical Environment in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.|
| Physical Exchange Kind | Specification for any kind of physical item (energy, material, information, etc.) to be exchanged on Physical Level. This is the realization of the specification made by System Domain Kinds.|
| Physical External System | The Physical External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).|
| Physical Interaction Point | Specifies the existence of an interaction point on Physical Level.|
| Physical Interaction Point Definition | Specifies the exchange capabilities of an interaction point on Physical Level.|
| Physical Interaction Point Property | Specifies a detail of an interaction point on Physical Level.|
| Physical Item Exchange | Specifies the exchange that is to take place on a Physical Connection.|
| Physical SOI | Represents the Physical SOI on Physical Level.|
| Physical User | The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.|
| SCIScontainingLCM | Specifies the fact that a System Context Interaction Scenario contains one or more System Context Chronological Messages.|
| SDKtypingLIE | Specifies the fact that a System Domain Kind defines the type of a Logical Item Exchange.|
| SDKtypingLIPP | Specifies the fact that a System Domain Kind defines the type of a Logical Interaction Point Property.|
| SMhavingGF | Specifies, that a system has general functions.|
| SMhavingIP | Specifies the fact that a System has one or more Interaction Points.|
| Software Element | Pure Software Elements. Similarity with the V-Model "software unit".|
| System | An abstract element representing a System.|
| System Context Chronological Message | Ordered sequential occurrence of exchanges between System Context Interaction Scenario Participants.|
| System Context Interaction Scenario | Ordered sequence of exchanges of information, energy, or material between System Context Interaction Scenario Participants.|
| System Context Role | General role of a Logical System Context.|
| System Context Scenario Participation | Specifies the fact that a System Context Role participates in a System Context Interaction Scenario.|
| System Domain Kind | Specification for any kind of conceptual item (energy, material, information, etc.) to be exchanged on Functional or Logical Level. The System Domain Kind is agnostic to any realization on Physical Level.|
| System Function | Specifies the fundamental action or task that have to take place in the System in accepting and processing the<br>inputs and in processing and generating the outputs.<br>A System Function<br> * accepts input from the System boundary <br> * exposes its output at the System boundary<br> * changes the System's State<br> * is dependent on System's State<br>Note: A System Function does not need to expose observable output, when it changes the System's state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent on the System State, which in turn is changeable by other System Functions.|
| System Of Interest | An abstract element representing a SOI. Base class for specific kinds of SOIs.|
| System Partial Function | Specifies the fact that a System Partial Function is a decomposed part of a System Function and defines details of the System Function it belongs to.|
| System Role | Specifies, that a system is part of a system.|
