# SAF Development Documentation : Concepts : interface_P 
![SAF_interface_P Definition.svg](./diagrams/SAF_interface_P-Definition.svg)
|Concept|Documentation|
| --- | --- |
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| Hardware Element | Pure Hardware Elements. Similarity to the V-Model "hardware unit".|
| PCCapplyingToPCN | Specifies the fact that a Physical Interface Connection Compatibility Assertion shall apply to a Physical Interface Connection.|
| PCCassertsCompatibiltyForPCPD | Specifies the Physical Interface Connection Point Definition the Physical Compatibility Assertion is valid for.|
| PCNallowingPIE | Specifies the fact that a Physical Item Exchange is allowed on the Physical Connection.|
| PCPDdefiningPCP | Specifies the fact that a Physical Connection Point Definition defines the exchange capabilities of a Physical Connection Point.|
| PCPOverPCP | Specifies the fact that a physical connection point communicates / transfers / flows / over an other physical connection point. Used to define layered physical interfaces, and show layer relationships between interfaces.|
| PCPPOverPCPP | Specifies the fact that a physical connection point property communicates / transfers / flows / over an other physical connection point property. Used to define layered physical interfaces, and show layer relationships between interface details.|
| PCPapplyingToAPE | Specifies the fact that a Physical Interface Connection Point applies to an Abstract Physical Element.|
| PCPapplyingToPCE | Specifies the fact that a Physical Interface Connection Point applies to a Physical Context Element.|
| PCPisPartOfPCPD | specifies that a physical connection point can be a part of a physical connection point definition. This fosters reuse and allows structuring of definitions.|
| PCPspecifyingDetailOfPCPD | Specifies the fact that a Physical Connection Property is a detail of a Physical Connection Point Definition.|
| PEKtypingPCP | Specifies the fact that a Physical Exchange Kind defines the type of a Physical Connection Point Property.|
| PEKtypingPIE | Specifies the fact that a Physical Exchange Kind defines the type of a Physical Item Exchange.|
| Physical Connection | Specifies the connection of two physical connection points.<br>Note: Connections between physical components indicate that item flows are passed from one output of a source component to one or more inputs of target components.|
| Physical Connection Point | Specifies the existence of an interaction point on Physical Level.|
| Physical Connection Point Definition | Specifies the exchange capabilities of an interaction point on Physical Level.|
| Physical Connection Point Property | Specifies a detail of a physical connection point.|
| Physical Connector Compatibility | Specifies the fact that two Physical Interface Connection Point Definitions are compatible and how the Physical Interface Connection Properties are mapped.|
| Physical Context Element | Abstract element of a System Context  in the Physical Domain, outside the SOI scope, interacting with the SOI.|
| Physical Element | A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].|
| Physical Environment | The Environmental Element in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. air, dirt, sun, road.|
| Physical Exchange Kind | Specifies the realization of a System Domain Kind on physical domain level. It is  used to define exchanges on Physical Interface Connections.|
| Physical External System | The External System in the Physical Domain, outside the SOI scope, interacting with the SOI. E.g. power grid, mobile network, fresh water system (in a house).|
| Physical Item Exchange | Specifies the exchange that is to take place on a Physical Connection.|
| Physical SOI | Represents the SOI in the Physical Domain.|
| Physical User | The Physical User is the representation for a human in the physical domain, outside the SOI scope, interacting with the SOI.|
| Software Element | Pure Software Elements. Similarity to the V-Model "software unit".|
