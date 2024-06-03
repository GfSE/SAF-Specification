# SAF Development Documentation : Concepts : SAF_structural_F Definition 
![SAF_structural_F Definition.svg](./diagrams/SAF_structural_F-Definition.svg)
|Concept|Documentation|
| --- | --- |
| Context Function | Specifies the fact that a fundamental action or task is expected to be carried out by an External Entity. <br>Note: The intention is to capture the expectations and to explicitly dissect the functionality. This must not be interpreted as an attempt for a behavior specification of an External Entity. Capturing this valuable information is the basis to reach agreement on the functionality at the System boundary by clarifying the expectations about what is performed by Context Elements.|
| Context Function IN System Process | Specifies the fact that a Context Function is used in a System Process.|
| GFEbeingPartOfGFNU | Specifies the fact that a Functional Exchange appears within the usage of a General Function.|
| GFEfromGFP | Specifies the fact that a General Functional Exchange is coming from a General Functional Parameter.|
| GFEtoGFP | Specifies the fact that a General Functional Exchange is going to a General Functional Parameter.|
| GFNcontrolledAFTER | Specifies a sequential execution of Functions.|
| GFNreceivingINPUT | Specifies the Input of a System or Context Function.|
| GFNsendingOUPUT | Specifies the Output of a System or Context Function.|
| General Function | Specifies the fact that a General Function is used as base Class for specific System or Context Functions.|
| General Functional Exchange | Specifies the fact that an General Functional Exchange between General Function Parameters is taking place.|
| General Functional Parameter | A parameter of a System or Context Function.|
| General Functional Usage | Specifies the fact that a Function is used by one or more other Functions.|
| SPSenablingSCY | Specifies the fact that a System Process contributes to the provision of one or more System Capabilities in the field.|
| SPSrefiningSUC | Specifies the fact that a System Use Case is refined by one System Process.|
| SUChasPostConditionSSE | Specifies the fact that a System Use Case has a state as Postcondition.|
| SUChasPreConditionSSE | Specifies the fact that a System Use Case has a state as Precondition.|
| SUCincludingSUC | Specifies the fact that a System Use Case includes other System Use Cases. The included use case is then no longer a full System Use Case, but a partial System Use Case.|
| SUCsynthesizingCFN | Specifies the fact that a Context Function is used in a System Use Case, e.g., as a Trigger, Action, or Task.<br>Note: This is a derived relationship.|
| SUCsynthesizingSFN | Specifies the fact that a System Function is used in a System Use Case, e.g., as a Trigger, Action, or Task. <br>Note: This is a derived relationship.|
| System Capability | 1) A System Capability is an operation or task that performs an action to produce a specific performance-based outcome. NOTE that a system capability represents the potential to perform an action. In contrast, an operational capability may integrate several physical system capabilities to produce a specific outcome to achieve a mission objective. [Wasson2006, SystemAnalysis+Design+Development]<br>2) System Capabilities, as system assets, characterize the mechanical, electrical, optical, or processing features that enable a system to function, process mission resources, make decisions, and achieve a required level of success based on performance. A system capability is broader in scope than simply a functional element (and performance bounding elements), especially in large, complex ecosystems. It represents a physical potential - strength, ability, endurance - to perform an outcome-based action for a given duration under a specified set of operating environment conditions. [Wasson2006, SystemAnalysis+Design+Development]<br><br>Aliases:<br>UAF::Capability<br>NAF4::Capability|
| System Function | Specifies the fundamental action or task that have to take place in the System in accepting and processing the<br>inputs and in processing and generating the outputs.<br>A System Function<br> * accepts input from the System boundary <br> * exposes its output at the System boundary<br> * changes the System's State<br> * is dependent on System's State<br>Note: A System Function does not need to expose observable output, when it changes the System's state in a way that is observable by other system functions. Furthermore, a System Function does not need to accept any input from the system boundary, when it is dependent on the System State, which in turn is changeable by other System Functions.|
| System Function IN System Process | Specifies the fact that a System Function is used in a System Process.|
| System Partial Function | Specifies the fact that a System Partial Function is a decomposed part of a System Function and defines details of the System Function it belongs to.|
| System Partial Function in System Function | Specifies that a System Partial Function is used in a system function|
| System Process | Specifies the fact that a System Process captures system behavior as a specific sequence of actions or tasks, and system exchanges including information, materials, energy, etc.|
| System State | Describes a state (or mode) of something that can have distinct states.|
| System Use Case | The System Use Cases are a table of content of the services provided by the System of Interest to its System Actors. A System Use Case is only the abstract of the depicted System behavior and represents the purpose. While the main System of Interest interaction actors participating in this Use Case are identified, the behavior itself is specified by a Use Case Activity, <br>Note: The intended use (and also misuse in so called "black use cases") of the System of Interest is captured in free text; story telling at a coarse level of detail which is understandable to Customers (non engineering stakeholders in general).|
