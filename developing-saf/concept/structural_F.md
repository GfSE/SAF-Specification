# SAF Development Documentation : Concepts : structural_F 
![SAF_structural_F Definition.svg](./diagrams/SAF_structural_F-Definition.svg)
|Concept|Documentation|
| --- | --- |
| Context Function | Specifies the fact that an Action or Task is expected to be carried out by an External Entity. The intention is to capture the expectations and to explicitly dissect the functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity.<br>Note: It captures valuable information and is the basis to reach agreement about the functionality at the system boundary by clarifying the expectations about what is performed by Context Elements.|
| Context Function IN System Process | Specifies the fact that a Context Function is used in a System Process.|
| GFFbeingPartOF | Specifies the fact that a Functional Flow appears within the usage of a General Function.|
| GFFfromGFP | Specifies the fact that a Functional Flow is coming from a Functional Parameter.|
| GFFtoGFP | Specifies the fact that a Functional Flow is going to a Functional Parameter.|
| GFNcontrolledAFTER | Specifies a sequential execution of Functions.|
| GFNreceivingINPUT | Specifies the Input of a System or Context Function.|
| GFNsendingOUPUT | Specifies the Output of a System or Context Function.|
| General Function | Specifies the fact that a General Function is used as base Class for specific System or Context Functions.|
| General Functional Flow | Specifies the fact that an Exchange between Function Parameters is taking place.|
| General Functional Parameter | A parameter of a System or Context Function.|
| General Functional Usage | Specifies the fact that a Function is used by one or more other Functions.|
| SPSenablingSCY | Specifies the fact that a System Process enables the operationalization of one or more System Capabilities.|
| SPSrefiningSUC | Specifies the fact that a System Use Case is refined by one System Process.|
| SUChasPostConditionSSE | Specifies the fact that a System Use Case has a state as Postcondition.|
| SUChasPreConditionSSE | Specifies the fact that a System Use Case has a state as Precondition.|
| SUCincludingSUC | Specifies the fact that a System Use Case includes other System Use Cases. The included use case is then no longer a full System Use Case, but a partial System Use Case.|
| SUCsynthesizingCFN | Specifies the fact that a Context Function is used in s System Use Case, e.g., as a Trigger, Action, or Task.<br>Note: This is a derived relationship.|
| SUCsynthesizingSFN | Specifies the fact that a System Function is used in a System Use Case, e.g., as a Trigger, Action, or Task. <br>Note: This is a derived relationship.|
| System Capability | 1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]<br>2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]<br><br>Aliases:<br>UAF::Capability<br>NAF4::Capability|
| System Function | A System Function<br> * accepts input from the system boundary <br> * exposes its output at the system boundary<br> * changes the system's state/mode<br> * is dependent of system's state/mode<br>Note: A System Function does not need to have observable output, when it changes the systems state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent from system state, which in turn is changeable by other System Functions.|
| System Function IN System Process | Specifies the fact that a System Function is used in a System Process.|
| System Partial Function | Specifies the fact that a Partial Function is a part of a System Function and defines details of the System Function.|
| System Process | An System Process captures system behavior as a specific sequence of actions or tasks, and system exchanges including information, materials, energy, etc.|
| System State | Describes a state (or mode) of something that can have distinct states.|
| System Use Case | The System Use Cases are a table of content of the services provided by the System of Interest to its System Actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. While the main System of Interest interaction actors participating in this Use Case are identified, the behavior itself is specified by a Use Case Activity, <br>Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general).|
