# SAF Development Documentation : Concepts : structural_P 
![SAF_structural_P Definition.svg](./diagrams/SAF_structural_P-Definition.svg)
|Concept|Documentation|
| --- | --- |
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| Hardware Element | Pure Hardware Elements. Similarity to the V-Model "hardware unit".|
| Hardware Element Constituent | Specifies the fact that a Hardware Element contains Hardware Elements.|
| Internal Logical Element Constituent | Specifies the fact that a Logical Element contains any number of Logical Elements.|
| LETspecifyingAPE | Specifies the fact that a Logical Element specifies one or more Physical Elements. One Physical Element may be specified by exactly one Logical Element. <br>Rationale:<br>If the Logical Element would be not specifies at all then the physical system would not implement all specified functionality.<br>If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.<br>It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.|
| Logical Element | Describes a logical, conceptual system as specification for an implementation of a system, or system part.|
| Logical SOI | A SOI representation in the Logical Domain.|
| Physical Element | A composition of Hardware Elements and Software Elements. Similarity to the V-Model segments and system. See [VXT].|
| Physical Element Constituent | Specifies the fact that a Physical Element may contain any number of Physical Elements.|
| Physical Hardware Constituent | Specifies the fact that a physical element contains any number of Hardware Elements.|
| Physical SOI | Represents the SOI in the Physical Domain.|
| Physical Software Constituent | Specifies the fact that physical element contains any number of Software Elements.|
| Physical Usage | General concept of usage on physical level.|
| Software Element | Pure Software Elements. Similarity to the V-Model "software unit".|
| Software Element Constituent | Specifies the fact that a Software Element contains  Software Elements.|
| Structural Item | Basic concept of an Item of a structure.|
| System Of Interest | An abstract element representing the SOI. Base for specific perspectives on SOI (logical , physical)|
