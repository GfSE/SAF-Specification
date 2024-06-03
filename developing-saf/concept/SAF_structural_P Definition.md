# SAF Development Documentation : Concepts : SAF_structural_P Definition 
![SAF_structural_P Definition.svg](./diagrams/SAF_structural_P-Definition.svg)
|Concept|Documentation|
| --- | --- |
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| General Physical Role | General concept of usage of system elements in the context of other system elements on physical level.|
| Hardware Element | Pure Hardware Elements. Similarity with the V-Model "hardware unit".|
| Hardware Element Role | Specifies the fact that a hardware structure comprises hardware elements.|
| LERspecifyingGPR | Specifies that a usage of a Logical Element specifies functions for the usage of a Physical Element.|
| LETspecifyingAPE | Specifies the fact that one or more Logical Element specifies exactly one Physical Element. <br>Rationale:<br>If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.<br>It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.<br><br>Note, that typically the usage of logical elements in a context is mapped to the usage of physical elements in a context (allocation of usage). Thus this relationship between the definitions is derived.|
| Logical Context SOI | Represents the Logical SOI in the System Context on Logical Level.|
| Logical Element | Describes a conceptual Logical Element as specification for an implementation of a system, or system element.|
| Logical Element Role | Specifies the fact that a logical element comprises logical elements.|
| Physical Element | A composition of Hardware and Software Elements. Similarity with the V-Model segments and system. See [VXT].|
| Physical Element Role | Specifies the fact that a physical structure comprises physical elements.|
| Physical Hardware Role | Specifies the fact that a physical structure comprises hardware elements.|
| Physical SOI | Represents the Physical SOI on Physical Level.|
| Physical Software Role | Specifies the fact that a physical structure comprises software elements.|
| Software Element | Pure Software Elements. Similarity with the V-Model "software unit".|
| Software Element Role | Specifies the fact that a software structure comprises software elements.|
| System | An abstract element representing a System.|
| System Of Interest | An abstract element representing a SOI. Base class for specific kinds of SOIs.|
