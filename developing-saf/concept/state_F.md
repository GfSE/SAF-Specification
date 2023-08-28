# SAF Development Documentation : Concepts : state_F 
![SAF_state_F Definition.svg](./diagrams/SAF_state_F-Definition.svg)
|Concept|Documentation|
| --- | --- |
| APEbeeingInSSE | Specifies the fact that a Physical System Element can be in distinct states.|
| Abstract Physical Element | Abstract element representing physical structure items keeping properties and relations applicable to all physical items.|
| LETbeeingInSSE | Specifies the fact that a Logical Element can be in one distinct System State.|
| Logical Element | Describes a logical, conceptual system as specification for an implementation of a system, or system part.|
| SDKbeeingInSSE | Specifies that a System Domain Kind can have certain states.<br>Note:<br>Of course an item is in only one distinct state at a certain time. The multiplicity means that an Item can have a set of possible states, and a state can be used to specify possible States for several domain items.|
| SFNresultingInSSE | Specifies the fact that a Function can perform a certain set of State Transitions.|
| SSEperformingSFN | Specifies the fact that the Function is only provided in distinct States. The state is a precondition for the Function to be able to perform.|
| State Transition | Describes an allowed transition between two states of an item that can be in distinct States.|
| System Domain Kind | Specification for any kind of exchange on Functional, and Logical Level, focus on what kind of information is exchanged (information, material, energy).The Domain Item Kind is agnostic to any Physical realization.|
| System Function | A System Function<br> * accepts input from the system boundary <br> * exposes its output at the system boundary<br> * changes the system's state/mode<br> * is dependent of system's state/mode<br>Note: A System Function does not need to have observable output, when it changes the systems state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent from system state, which in turn is changeable by other System Functions.|
| System State | Describes a state (or mode) of something that can have distinct states.|
