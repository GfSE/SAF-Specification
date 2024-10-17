# SAF Development Documentation : Concepts : SAF_cross-domain-LD-FD-mapping-wallpaper 
![SAF_cross-domain-LD-FD-mapping-wallpaper.svg](./diagrams/SAF_cross-domain-LD-FD-mapping-wallpaper.svg)
|Concept|Documentation|
| --- | --- |
| APEimplementingGFN | |
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| CFNallocatedToLCE | Specifies the fact that a Context Function is assigned to a Logical Context Element.<br>Note: This fact may be derived from the Usage of Function of a Context Function allocated to a Logical Context Element.|
| Context Function | Specifies the fact that a fundamental action or task is expected to be carried out by an External Entity. <br>Note: The intention is to capture the expectations and to explicitly dissect the functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity. Capturing this valuable information is the basis to reach agreement on the functionality at the System boundary by clarifying the expectations about what is performed by Context Elements.|
| General Function | Specifies the fact that a General Function is used as base Class for specific System or Context Functions.|
| General Functional Usage | Specifies the fact that a Function is used by one or more other Functions.|
| LETimplementingGFN | Specifies the fact that a Logical Element is responsible to implement a System Function.<br>Note: Logical Elements don't "implement" anything, they pass the function implementation task to Physical Elements.|
| LETspecifyingAPE | Specifies the fact that one or more Logical Element specifies exactly one Physical Element. <br>Rationale:<br>If more than one Physical Element would offer to realize the functionality specified by a Logical Element the responsibility would be ambiguous.<br>It is okay to assign several Logical Elements to one Physical Element. This means all specified functionality assigned to the Logical Elements is to be implemented by the Physical Element.<br><br>Note, that typically the usage of logical elements in a context is mapped to the usage of physical elements in a context (allocation of usage). Thus this relationship between the definitions is derived.|
| Logical Context Element | Represents an abstract element in the given System Context on Logical Level, outside the SOI scope, interacting with the SOI.|
| Logical Context Element Role | Specifies the fact that a Logical Context Element exists in a given Logical System Context.|
| Logical Context SOI | Represents the Logical SOI in the System Context on Logical Level.|
| Logical Element | Describes a conceptual Logical Element as specification for an implementation of a system, or system element.|
| Logical Element Role | Specifies the fact that a logical element comprises logical elements.|
| Logical SOI Role | Specifies the fact that a Logical Context SOI exists in a given Logical System Context.|
| Logical System Context | Specifies the fact that a System Context for a System of Interest is defined on Logical Level.|
| SFNallocatedToAPE | Specifies the fact that a relationship is derived from the assignment of Functions to Logical Elements and the assignment of Logical Elements to Physical Elements.|
| SFNallocatedToLET | Specifies the fact that a System Function is assigned to a Logical SOI.<br>Note: This fact may be derived from the Usage of a System Function in a System Process allocated to a Logical Context SOI Role.|
| SPFNallocatedToAPE | Specifies the fact that a System Partial Function is assigned to an Abstract Physical Element.<br>Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Physical SOI Element Role|
| SPFNallocatedToLET | Specifies the fact that a System Partial Function is assigned to a Logical SOI Element.<br>Note: This fact may be derived from the Usage of Function of a System Partial Function allocated to a Internal Logical Element Role|
| System Function | Specifies the fundamental action or task that have to take place in the System in accepting and processing the<br>inputs and in processing and generating the outputs.<br>A System Function<br> * accepts input from the System boundary <br> * exposes its output at the System boundary<br> * changes the System's State<br> * is dependent on System's State<br>Note: A System Function does not need to expose observable output, when it changes the System's state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent on the System State, which in turn is changeable by other System Functions.|
| System Partial Function | Specifies the fact that a System Partial Function is a decomposed part of a System Function and defines details of the System Function it belongs to.|
| USAGEallocatedTo | Specifies the fact that a Usage of Function is allocated to a Usage of System Element.|
