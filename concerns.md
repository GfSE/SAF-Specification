![System Architecture Framework](diagrams/Logo_SAF.png)
# Viewpoint Concerns
|Package|Concern|Stakeholder & Rationale|Viewpoint|
| --- | --- | --- | --- |
|29148 specific concerns|How do system capabilities depend on system modes?|||
|29148 specific concerns|To which proposed system does the OpsCon apply?|||
|29148 specific concerns|What are assumptions and constraints imposed on the system?|||
|29148 specific concerns|What are the connections between the major system elements?|||
|29148 specific concerns|What are the interactions among the systems users / user classes?|||
|29148 specific concerns|What are the major system elements?||[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|29148 specific concerns|What are the operational scenarios(Operational Stories) relevant to the system?|||
|29148 specific concerns|What are the priorities(e.g. essential,desirable,optional)  of capabilities for the system?|||
|29148 specific concerns|What is  the future/proposed system?|||
|29148 specific concerns|What is the current system to be changed or upgraded?|||
|29148 specific concerns|What is the organizational structure of systems users / user classes?|||
|29148 specific concerns|What is the purpose of the system?|||
|29148 specific concerns|What is the support environment for the system?||[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|29148 specific concerns|What operational impacts does the system impose to its operational environment?|||
|29148 specific concerns|Which Operational Performer will operate or run the system?|||
|29148 specific concerns|Which classes of users (roles) will interact with the system?||[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|29148 specific concerns|Which operational policies and constraints apply to the system?|||
|29148 specific concerns|Which operational policies and constraints do exist?|||
|_repository (to be sorted)|How are error states handled?|[Regulation Authority](stakeholders.md#Regulation-Authority), [Security Expert](stakeholders.md#Security-Expert), [Maintainer](stakeholders.md#Maintainer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)||
|_repository (to be sorted)|How does the elements of the test environment interact with each other?|[System Architect](stakeholders.md#System-Architect), [IV&V Engineer](stakeholders.md#IV&V-Engineer)||
|_repository (to be sorted)|What additional interfaces are necessary to expose internal properties, states and modes for testing?|[IV&V Engineer](stakeholders.md#IV&V-Engineer)||
|_repository (to be sorted)|What amount of memory resources of an HW item will be consumed by the allocated software?|||
|_repository (to be sorted)|What is the allocated power consumption?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_repository (to be sorted)|What is the necessary accuracy and resolution for analog signal acquisition?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_repository (to be sorted)|What is the necessary memory size for processing nodes and data storage?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_repository (to be sorted)|What is the necessary performance for processing?|[Software Developer](stakeholders.md#Software-Developer)||
|_repository (to be sorted)|What shall be validated to the customer at system level?|[Security Expert](stakeholders.md#Security-Expert), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer), [IV&V Engineer](stakeholders.md#IV&V-Engineer)||
|_repository (to be sorted)|Which functions need to be realized by HW?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_unclear_need_explanation|Are defined standard items considered in the architecture?|[Acquirer](stakeholders.md#Acquirer)||
|_unclear_need_explanation|How to ensure full Operational Capability of the system after maintenance activities with a system element or component? |[Maintainer](stakeholders.md#Maintainer)||
|_unclear_need_explanation|How to install / de-install components to / from the system?|[Maintainer](stakeholders.md#Maintainer)||
|_unclear_need_explanation|What are the algorithms to be implemented?|[Software Developer](stakeholders.md#Software-Developer)||
|_unclear_need_explanation|What are the provided power inputs?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_unclear_need_explanation|What are the replaceable system components?|[Maintainer](stakeholders.md#Maintainer)||
|_unclear_need_explanation|What are the system delivery standards?|[Project Manager](stakeholders.md#Project-Manager)||
|_unclear_need_explanation|What are the system delivery standards?|[System Architect](stakeholders.md#System-Architect)||
|_unclear_need_explanation|What delivery standards need to be provided?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|_unclear_need_explanation|What is the functional scope of each delivery standard?|||
|_unclear_need_explanation|What is the functional scope of each system delivery standard?|[Project Manager](stakeholders.md#Project-Manager), [System Architect](stakeholders.md#System-Architect)||
|_unclear_need_explanation|What is the order information for each identified system element or component?|[Maintainer](stakeholders.md#Maintainer)||
|_unclear_need_explanation|What is the scope of a delivery standard?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|boundary / context|How is the system being used or utilized and interacting with other external systems to satisfy user needs?|[Operator](stakeholders.md#Operator), [User](stakeholders.md#User), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer)|[System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md)|
|boundary / context|How is the system interacting with the identified external entities?||[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|boundary / context|How to connect the system or a system element to a test equipment?|[Maintainer](stakeholders.md#Maintainer)|[Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|boundary / context|How will the system be used by whom and which contextual elements are involved?||[System UseCase Viewpoint](viewpoints/System-UseCase-Viewpoint.md)|
|boundary / context|What are necessary enabling systems?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md), [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md), [Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|boundary / context|What are the Interface Requirements imposed on the system?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md), [System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)|
|boundary / context|What are the different contexts the system is embedded and utilized in?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer)|[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|boundary / context|What are the external conceptual entities the system interacts with in the respective context?||[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|boundary / context|What are the external physical entities the system interacts with in the respective context?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md), [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|boundary / context|What are the functional interfaces of the system?||[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|boundary / context|What are the geographical and physical locations of the intended / proposed elements of the solution?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|boundary / context|What are the items exchanged at the boundary of the system with external entities?||[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)|
|boundary / context|What is the Operational Context to achieve an Operational Story?||[Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)|
|boundary / context|What is the System Boundary definition?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md), [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)|
|boundary / context|What is the operational environment that an intended solution will need to support?|||
|boundary / context|What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?|[Security Expert](stakeholders.md#Security-Expert), [Customer](stakeholders.md#Customer), [Maintainer](stakeholders.md#Maintainer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [Acquirer](stakeholders.md#Acquirer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)|
|boundary / context|What kind of physical items (energy, material, information) are exchanged between the system and external entitys?|||
|boundary / context|What kind of test equipment is necessary to test the system elements?|[IV&V Engineer](stakeholders.md#IV&V-Engineer)|[Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md)|
|boundary / context|Which information is exchanged between the system and external entitys?|[Security Expert](stakeholders.md#Security-Expert), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer)|[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md)|
|boundary / context|Which interface partners does the system have?||[System Context Definition Viewpoint](viewpoints/System-Context-Definition-Viewpoint.md)|
|boundary / context|Which interfaces are necessary?|[Hardware Developer](stakeholders.md#Hardware-Developer)|[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|boundary / context|Which requirement(s) apply to a physical interface?|||
|boundary / context|Which requirements apply to a logical interface?||[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)|
|boundary / context|Which standards, protocols and format specifications are associated with a specific interface?|||
|capability|How are Operational Capabilities allocated and flowed down to system entities - namely the subsystem - at various levels of abstraction?|||
|capability|What Operational Capabilitys are defined?|[Customer](stakeholders.md#Customer) ***Needed because the definition of capabilities allows communication about what is to achieved to seperate from how it is achieved on operational level.***|[Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)|
|capability|What Operational Capabilitys are required for each phase and mode of operation?||[Operational Capability Viewpoint](viewpoints/Operational-Capability-Viewpoint.md)|
|capability|What are the Capabilities that are supported by the system?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Capability Viewpoint](viewpoints/System-Capability-Viewpoint.md), [System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)|
|capability|What is the lack / deficiency / gap in current Capability implementation that is addressed with the intended solution?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)||
|evidence|How is a evidence-based claim supported?||[Evidence Viewpoint](viewpoints/Evidence-Viewpoint.md)|
|exchange|What Operational Exchange the Operational Performers need to consume or provide?||[Operational Domain Item Kind Viewpoint](viewpoints/Operational-Domain-Item-Kind-Viewpoint.md), [Operational Context Exchange Viewpoint](viewpoints/Operational-Context-Exchange-Viewpoint.md)|
|exchange|What amount of interface bandwidth of the interfaces of an HW item will be consumed by the allocated software in the system?|||
|exchange|What are data / information items exchanged?|[Software Developer](stakeholders.md#Software-Developer)|[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)|
|exchange|What are the Exchange Requirements imposed on the system?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)|
|exchange|What are the formats of the exchanged items?|[Software Developer](stakeholders.md#Software-Developer)||
|exchange|What are the interface requirements regarding bandwidth, data throughput and latency?|[Hardware Developer](stakeholders.md#Hardware-Developer)|[Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|exchange|What are the items exchanged between the logical system elements during the interaction?||[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)|
|exchange|What are the protocols for exchanging items on an interface?|[Software Developer](stakeholders.md#Software-Developer)||
|exchange|What are the protocols used for exchanging information?|[Security Expert](stakeholders.md#Security-Expert)||
|exchange|What is the necessary accuracy and resolution for processing?|[System Architect](stakeholders.md#System-Architect), [Software Developer](stakeholders.md#Software-Developer), [Hardware Developer](stakeholders.md#Hardware-Developer)||
|exchange|What kind of information is exchanged and processed within the system?|[Security Expert](stakeholders.md#Security-Expert)|[Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)|
|exchange|Which Interface Design Items are on an interface of a Physical Architecture Element?|||
|exchange|Which SW interfaces are necessary?|[Software Developer](stakeholders.md#Software-Developer)|[Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|exchange|Which interface partners does a HW item have?|||
|exchange|Which interface partners does a SW item have?||[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)|
|exchange|Which requirements apply to an HW interface?|||
|functional|How are the interactions and dependencies between the different identified sub-functions described?|||
|functional|How are the sub-functions implementing associated requirements documented?|||
|functional|How are the system functions decomposed into sub-functions decomposed? ||[System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)|
|functional|How does a system function interact with its environment?||[System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|How does a system function interact with its environment?|[Operator](stakeholders.md#Operator), [User](stakeholders.md#User), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer)||
|functional|What Operational Process Activitys shall be executed during the execution of an Operational Story?||[Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)|
|functional|What are necessary inputs for operating the system expected to be provided by other external entitys?|[Security Expert](stakeholders.md#Security-Expert), [Operator](stakeholders.md#Operator), [User](stakeholders.md#User), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|What is the breakdown of functions into sub-functions?|[System Architect](stakeholders.md#System-Architect)|[System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md)|
|functional|What is the functional scope of the system?||[System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|What services are expected from external entities?|[Customer](stakeholders.md#Customer), [Project Manager](stakeholders.md#Project-Manager), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[System Function Black Box Allocation Viewpoint](viewpoints/System-Function-Black-Box-Allocation-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|Which Operational Activity shall be executed by which Operational Performer in the Operational Story?||[Operational Process Viewpoint](viewpoints/Operational-Process-Viewpoint.md)|
|functional|Which functions are out of scope of the system?||[System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|Which functions will the system provide?|[Security Expert](stakeholders.md#Security-Expert), [Customer](stakeholders.md#Customer), [Project Manager](stakeholders.md#Project-Manager), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer)|[System Functional Breakdown Viewpoint](viewpoints/System-Functional-Breakdown-Viewpoint.md), [System Process Viewpoint](viewpoints/System-Process-Viewpoint.md)|
|functional|Which modes and states does the system have?|[Regulation Authority](stakeholders.md#Regulation-Authority), [Security Expert](stakeholders.md#Security-Expert), [Maintainer](stakeholders.md#Maintainer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[System State Viewpoint](viewpoints/System-State-Viewpoint.md)|
|functional|Which services will the system provide?|||
|interaction|How do internal system elements interact with each other to provide the system function or service?|[Security Expert](stakeholders.md#Security-Expert), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert)|[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)|
|interaction|How does the system or a system element interact with the test environment?|[System Architect](stakeholders.md#System-Architect), [Software Developer](stakeholders.md#Software-Developer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[System Context Exchange Viewpoint](viewpoints/System-Context-Exchange-Viewpoint.md), [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [Physical Context Definition Viewpoint](viewpoints/Physical-Context-Definition-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md), [Physical Context Exchange Viewpoint](viewpoints/Physical-Context-Exchange-Viewpoint.md)|
|interaction|What additional information the system or a system element needs to generate to enable testing?|[Regulation Authority](stakeholders.md#Regulation-Authority), [Security Expert](stakeholders.md#Security-Expert), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md), [System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)|
|interaction|What is the necessary response time for an interface or a service?|[Security Expert](stakeholders.md#Security-Expert), [Operator](stakeholders.md#Operator), [User](stakeholders.md#User), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [Acquirer](stakeholders.md#Acquirer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md), [Logical Interaction Viewpoint](viewpoints/Logical-Interaction-Viewpoint.md)|
|interaction|What is the sequence of interactions among the system and context elements|[Security Expert](stakeholders.md#Security-Expert), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)|[System Context Interaction Viewpoint](viewpoints/System-Context-Interaction-Viewpoint.md)|
|interaction|What possible threads of Operational Process Activities have to be carried out to achieve the Operational Story main and alternative goals?||[Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)|
|interaction|What validation scenarios have to be carried out to check on the solution validity?||[Operational Interaction Viewpoint](viewpoints/Operational-Interaction-Viewpoint.md)|
|nonfunctional|What are the Requirements of environmental conditions imposed on the system?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md), [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)|
|nonfunctional|What is the range of acceptable system performance, i.e. the critical, top-level Performance Requirements derived from the Operational Needs?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md), [Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)|
|organization|Have the logical decomposition guidelines been followed?|[System Architect](stakeholders.md#System-Architect)||
|organization|In which systems (Projects) is the HW item used?|||
|organization|What Performers or Resources are necessary to operate the intended solution?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer)|[Operational Context Definition Viewpoint](viewpoints/Operational-Context-Definition-Viewpoint.md)|
|organization|What are the differences of the HW item in different projects
(clarify, is this the same as the question for variants ? )|||
|organization|What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier), [Hardware Developer](stakeholders.md#Hardware-Developer)|[Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)|
|organization|What are the relationships between the partys involved in the operation of the intended solution?||[Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)|
|organization|What existing elements of the organization, enterprise, or operational entity need to be integrated in the intended solution?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer)||
|organization|What is the configuration or version of each configuration item?|[System Architect](stakeholders.md#System-Architect)||
|organization|What is the context of the organization, enterprise, or operational entity?|[System Architect](stakeholders.md#System-Architect)||
|organization|What is the cost for each required function?|[Acquirer](stakeholders.md#Acquirer)||
|organization|What is the priority of each function?|[Acquirer](stakeholders.md#Acquirer)||
|organization|What is the risk involved with each development item?|[Project Manager](stakeholders.md#Project-Manager)||
|organization|What is the task executed by an organization, enterprise, or operational entity in the Operational Context?|[System Architect](stakeholders.md#System-Architect)||
|organization|What is the time schedule for delivering the functions?|[Acquirer](stakeholders.md#Acquirer)||
|organization|What partys of the organization, enterprise, or operational entity are needed to achieve an intended Operational Capability?||[Operational Performer Viewpoint](viewpoints/Operational-Performer-Viewpoint.md)|
|organization|What system elements are make-items, reuse items or COTS?|[System Architect](stakeholders.md#System-Architect)||
|organization|When do product functions or features become available?|[Project Manager](stakeholders.md#Project-Manager)||
|organization|Which development effort is associated with each individual element?|[Project Manager](stakeholders.md#Project-Manager)||
|organization|Which functions/functional requirements are assigned to a HW item?|||
|organization|Which variants of a HW item need to be provided?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|organization|Which versions of a HW item exist?
(are versions the same as variants ? or does it mean revisions ? clarification needed!)|||
|requirement|What are precision and accuracy requirements for presentation of data items on an interface?|[Software Developer](stakeholders.md#Software-Developer)||
|requirement|What are precision and accuracy requirements for processing of data items?|[Software Developer](stakeholders.md#Software-Developer)||
|requirement|What are the Functional Requirements imposed on the systemI?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)|
|requirement|What are the Non-Functional Requirements imposed on the system?||[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)|
|requirement|What are the interface requirements regarding bandwidth, data throughput and latency?|[Software Developer](stakeholders.md#Software-Developer)|[System Requirement Viewpoint](viewpoints/System-Requirement-Viewpoint.md)|
|requirement|What are the non-functional requirements applying to SW (e.g. with regard to SW quality, modularization, changeability or reuse)?|[Software Developer](stakeholders.md#Software-Developer)||
|requirement|What defines a valid solution towards the customer?||[Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)|
|requirement|What is the necessary processing performance?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|requirement|What is the priority of upper level requirements the HW item depends of?|||
|requirement|what has to be validated to the customer at system level?|||
|safety / reliability|Analyse architecture with safety in mind e.g.: isolate safety critical parts with the goal to reduce overall criticality|||
|safety / reliability|Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?|[System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [IV&V Engineer](stakeholders.md#IV&V-Engineer)||
|safety / reliability|Collect and maintain building blocks for safety analysis: opscon, typical hazards, typical harm scenarios, typical failure modes |||
|safety / reliability|Conduct impact analysis on safety when architecture changes (clarify - also vice versa?)|||
|safety / reliability|Conduct safety audit on SITP, having traceability to safety analysis in SITP - SITP shows that level of rigor is derived from safety analysis - SITP allows review of safety relevant test actions |||
|safety / reliability|Full traceability of safety information over requirements, architecture into design artifacts. Supports "rechtssichere dokumentation"|||
|safety / reliability|How are safety features verified?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|How does criticality propagate down the system hierarchy?|[System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|How is a critical function decomposed and allocated?|[System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|Prove product safety to customer|||
|safety / reliability|Rechtssichere Dokumentation aufgrund Beweislastumkehr aus prodHaftG. und prodSG.|||
|safety / reliability|Reuse safety analysis on reuse of architecture elements, conduct analysis|||
|safety / reliability|What are the contributors (SW and HW items contributing to a critical function) to a critical function?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|What are the failure modes of a system function?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|What are the hazards of a system function in an identified situation (context + scenario)?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|What are the inputs to a critical function?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|What are the planned architectural means for risk mitigation?|[Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer)||
|safety / reliability|What are the reliability requirements of functions assigned to SW that is allocated to the HW item?|||
|safety / reliability|What are the reliability requirements of functions assigned to the HW items?|||
|safety / reliability|What is the allocated reliability for a single function?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|safety / reliability|What is the allocated reliability for the complete item?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|safety / reliability|What is the criticality (in terms of safety) of the HW item?|||
|safety / reliability|What is the possible harm in utilizing the system?|[Safety Expert](stakeholders.md#Safety-Expert)||
|safety / reliability|Which upper level hazards can be caused by the HW item because of assigned functions?|||
|safety / reliability|Who provides the inputs to a critical function?|[Customer](stakeholders.md#Customer), [Project Manager](stakeholders.md#Project-Manager), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [Acquirer](stakeholders.md#Acquirer), [IV&V Engineer](stakeholders.md#IV&V-Engineer), [Hardware Developer](stakeholders.md#Hardware-Developer)||
|security|How is the interface between different domains protected?|[Security Expert](stakeholders.md#Security-Expert)||
|security|How to identify and record security flaws and breaches of the system?|||
|security|How to penetrate the system?|||
|security|What are the confidentiality, integrity and availability levels for processed or exchanged information?|[Security Expert](stakeholders.md#Security-Expert)||
|security|What are the domains of similar security levels in the system or the system participates in?|[Security Expert](stakeholders.md#Security-Expert)||
|security|What are the encryption means used for an exchange?|[Security Expert](stakeholders.md#Security-Expert), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Software Developer](stakeholders.md#Software-Developer), [Hardware Developer](stakeholders.md#Hardware-Developer)||
|security|What are the interfaces between different domains?|[Security Expert](stakeholders.md#Security-Expert)||
|security|What are the requirements for security relevant IT-equipment?|[Security Expert](stakeholders.md#Security-Expert)||
|security|What is the flow of critical information and data through the system?|[System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [IV&V Engineer](stakeholders.md#IV&V-Engineer)||
|security|What is the it security classification of data that will be communicated over the HW items interfaces?|||
|security|Which protection means need to be provided for an interface?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|stakeholder|How to involve a Stakeholder and to what degree?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|In which life cycles is a Stakeholder involved in the project?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|What are the consequences not considering a Stakeholder?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|What are the consequences, if the Stakeholder’s concerns are not considered?|[System Architect](stakeholders.md#System-Architect)||
|stakeholder|What are the requirements that a Stakeholder imposes to the system?||[Stakeholder Requirement Viewpoint](viewpoints/Stakeholder-Requirement-Viewpoint.md)|
|stakeholder|What concerns does a Stakeholder have?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|What impact does a Stakeholder have on the project?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|What relevant relations and influences exist between Stakeholders?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|Which Stakeholder are relevant to the system and might impose requirements?|[System Architect](stakeholders.md#System-Architect)|[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|Which external entities (external systems, roles, environment, etc.) does a Stakeholder represent?||[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|stakeholder|Who are the Stakeholders involved in the intended solution?|[System Architect](stakeholders.md#System-Architect), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)|[Stakeholder Identification Viewpoint](viewpoints/Stakeholder-Identification-Viewpoint.md)|
|story|Which is the Operational Story task accomplished by which operational entities in the Operational Context?||[Operational Story Viewpoint](viewpoints/Operational-Story-Viewpoint.md)|
|structure|What are the HW components to be provided?|[Project Manager](stakeholders.md#Project-Manager)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|What are the SW components to be provided?|[Project Manager](stakeholders.md#Project-Manager)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|What are the configuration items in the physical architecture?|[System Architect](stakeholders.md#System-Architect)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|What are the logical components the system is composed of?||[Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)|
|structure|What are the physical components?|[System Architect](stakeholders.md#System-Architect)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|What is the allocated space?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|structure|What is the allocated weight?|[Hardware Developer](stakeholders.md#Hardware-Developer)||
|structure|What is the physical breakdown of the system?|[System Architect](stakeholders.md#System-Architect)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|What physical items are used building up the system?|[Security Expert](stakeholders.md#Security-Expert)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|Which physical items the SOI is built of?|[Acquirer](stakeholders.md#Acquirer)|[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|structure|what is the decomposition hierarchy of the system/logical elements||[Physical Structure Viewpoint](viewpoints/Physical-Structure-Viewpoint.md)|
|traceability / allocation|How are applicable requirements considered in the system architecture?|[Regulation Authority](stakeholders.md#Regulation-Authority), [System Architect](stakeholders.md#System-Architect)|[Logical Structure Viewpoint](viewpoints/Logical-Structure-Viewpoint.md)|
|traceability / allocation|How do the logical system elements interact to fulfill the designated system function?||[Logical Internal Exchange Viewpoint](viewpoints/Logical-Internal-Exchange-Viewpoint.md)|
|traceability / allocation|Provide tabular overview of main SOV artefacts for checks on completeness and consistency.|||
|traceability / allocation|Show in a concise manner the relationships from Operational Capability to Operational Story, to Operational Activity, and to Operational Performer.||[Operational Capability Traceability Viewpoint](viewpoints/Operational-Capability-Traceability-Viewpoint.md)|
|traceability / allocation|Show in a concise manner the relationships from Operational Process to Operational Story and to Operational Performer.||[Operational Process Traceability Viewpoint](viewpoints/Operational-Process-Traceability-Viewpoint.md)|
|traceability / allocation|What amount of processing resources of an HW item will be consumed by the allocated software?|||
|traceability / allocation|What are the scenarios a system function is utilized in?|[Security Expert](stakeholders.md#Security-Expert), [Operator](stakeholders.md#Operator), [User](stakeholders.md#User), [Customer](stakeholders.md#Customer), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert), [Acquirer](stakeholders.md#Acquirer), [Supplier](stakeholders.md#Supplier)||
|traceability / allocation|What is the allocation of functions to the physical architecture?|[System Architect](stakeholders.md#System-Architect)||
|traceability / allocation|What is the rational if requirements are not considered?|[Regulation Authority](stakeholders.md#Regulation-Authority), [Security Expert](stakeholders.md#Security-Expert), [Customer](stakeholders.md#Customer), [Project Manager](stakeholders.md#Project-Manager), [System Architect](stakeholders.md#System-Architect), [Safety Expert](stakeholders.md#Safety-Expert)||
|traceability / allocation|What is the rationale for this System Requirement?||[System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)|
|traceability / allocation|Which Stakeholder Requirements are addressed by a System Requirement?||[System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)|
|traceability / allocation|Which Stakeholder requirements are addressed by System requirements|||
|traceability / allocation|Which System Function is addressed by a System Requirement?||[System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)|
|traceability / allocation|Which System Interface is addressed by a System Requirement?||[System Requirement Traceability Viewpoint](viewpoints/System-Requirement-Traceability-Viewpoint.md)|
|traceability / allocation|Which System function is addressed by System requirements?|||
|traceability / allocation|Which functions and services need to be implemented in SW?|[Software Developer](stakeholders.md#Software-Developer)||
|traceability / allocation|Which functions/functional requirements are assigned to a logical item?|||
|traceability / allocation|Which interface data types depends a SW item of?|||
|traceability / allocation|Which logical system elements are involved in a interaction for the designated system function?  |||
|traceability / allocation|Which system function is addressed by system requirement?|[System Architect](stakeholders.md#System-Architect)||
|traceability / allocation|Which system functions are dependent on a systems mode or state?|[System Architect](stakeholders.md#System-Architect)|[System State Viewpoint](viewpoints/System-State-Viewpoint.md)|
|traceability / allocation|Which upper requirements, including Stakeholder Requirements does the HW item depend on?|||
|traceability / allocation|Which upper requirements, including Stakeholder Requirements does the logical item depend on?|||
