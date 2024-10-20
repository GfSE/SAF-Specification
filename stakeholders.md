![System Architecture Framework](diagrams/Banner_SAF.png)
# SAF User Documentation : Stakeholders
![SAF_Stakeholder_Definition](diagrams/SAF_stakeholder_definition.svg)
This section provides a list of the Architecture Framework Stakeholders considered for the elicitation of concerns for SAF viewpoints. For each Stakeholder the concerns are listed, reflecting the stakeholders identified information need.

Each Stakeholder of a system - customer, user, project manager, coder, analyst, tester, and so on - is concerned with different characteristics of the system that are affected by its architecture.

For example, the user has specific concerns which interactions he or she has with the system.; the customer is has a concern if and how the operational capabilities are supported by the system.

The stakeholders concerns vary with project phases, e.g. the system architect needs to make sure before a PDR, that the systems function are delegated to subsystems completely, and to communicate this to subsystem responsibles.


The following subchapters describe the stakeholders and their concerns:

# Acquirer
Definition - Acquirer:
Stakeholder that acquires or procures a product or service from a supplier, [ISO/IEC 15288:2022 - Systems engineering - System life-cycle processes]
The Acquirer is a Stakeholder that acquires or procures a product or service from a supplier. The Acquirer may be an organization or an individual acting on behalf of the customer or the user.
He is responsible for providing a feasible solution within a given budget. The Acquirer must plan and control the delivery of the system-of-interest as well as other systems together with necessary infrastructure, equipment or training. He must plan the integration of all the procured items to provide a complete solution ready for operation. For large enterprises standardization is an issue. Therefore, the acquirer is interested that standard items are considered in the system architecture.

## Concern
* For what purpose is the system developed or adapted? 

  ***Rationale:  In my role, I need to check whether the overall system purpose is supported.***
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs? 

  ***Rationale:  In my role, I need to check whether the system complies with the higher-level operating concept.***
* Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.
* Show in a concise manner the relationships from operational process to operational story and to operational performer.
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the capabilities that are supported by the system?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage, and for transport?
* What are the planned architectural means for risk mitigation?
* What are the relationships between the partys involved in the operation of the intended solution?
* What are the scenarios a system function is utilized in?
* What existing elements of the organization, enterprise, or operational entity need to be integrated in the intended solution?
* What is the cost for each required function?
* What is the lack / deficiency / gap in current capability implementation that is addressed with the intended solution?
* What is the necessary response time for an interface or a service?
* What is the priority of each function?
* What is the time schedule for delivering the functions?
* What operational capabilities are defined?
* What operational process activities shall be executed during the execution of an operational story?
* What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?
* What services are expected from external entities?
* Where and what are the geographical and physical locations of the intended or proposed elements of the solution?
* Which are the external physical entities the system interacts with in the given context?
* Which are the given contexts the system is embedded and utilized in?
* Which functions will the system provide? 

  ***Rationale:  In my role, I need to check whether the overall system purpose is supported.***
* Which is the operational context to achieve an operational story?
* Which is the operational scenario, i.e., course of action, for the mission and the context in which the system of systems solution will exist?
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on conceptual level.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
* Which operational activity shall be executed by which operational performer in the operational story?
* Which operational exchanges do operational performers need to consume or provide?
* Which performers or resources are necessary to operate the intended solution?
* Who are the (Major) Stakeholders involved in the intended solution?
* Who provides the inputs to a critical function?
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
# Customer
Definition - Customer (also Acquirer):
Organization or person that receives a product or service, [ISO/IEC 15288:2022 – Systems engineering - System life-cycle processes]
The Customer is an organization or person that receives a product. Examples: Consumer, client, end user, retailer, beneficiary, and purchaser. A customer can be internal or external to the organization. Customer is a broader reference than Acquirer, operator, or user and includes those roles as well as others. However, the Customer provides the funding.

## Concern
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs? 

  ***Rationale:  In my role, I need to check whether intended solution satisfies my customer needs.***
* Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.
* Show in a concise manner the relationships from operational process to operational story and to operational performer.
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage, and for transport?
* What are the planned architectural means for risk mitigation?
* What are the relationships between the partys involved in the operation of the intended solution?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
* What operational capabilities are defined?
* What operational process activities shall be executed during the execution of an operational story?
* What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?
* What services are expected from external entities?
* Which are the external physical entities the system interacts with in the given context?
* Which are the given contexts the system is embedded and utilized in?
* Which functions will the system provide?
* Which is the operational context to achieve an operational story?
* Which is the operational scenario, i.e., course of action, for the mission and the context in which the system of systems solution will exist?
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on conceptual level.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
* Which operational activity shall be executed by which operational performer in the operational story?
* Which operational exchanges do operational performers need to consume or provide?
* Which performers or resources are necessary to operate the intended solution?
* Who provides the inputs to a critical function?
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
# Customer (Representative)
Definition - Customer (Representative):
(1) [SAF] The primary goal in a Customer (Representative) role is to represent the end-user, an individual, organization, or enterprise that benefits from the operation of the system. In this role the Customer (Representative) provides usage scenarios, user needs and requirements.
(2) [SAF] The secondary goal in a Customer (Representative) role is to represent the Acquirer, who buys or procures a product or service from a supplier. The Acquirer selected by the User to serve as their technical representative to:
1. Specify the system.
2. Select a System Developer or Services Provider.
3. Provide technical assistance.
4. Provide contractual oversight for the execution of the contract and delivery of a
verified and validated system to the User.
Note: All other Stakeholders do not use the system for purpose, and they do not need or require the system to satisfy any need. Therefore, interests of the end-user and claims of the other stakeholders could be contradicting and the Customer (Representative) role therefore strives for a solution satisfying all the Stakeholder Requirements.

## Concern
# Hardware Developer
Definition - Developer:
Organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Hardware Developer responsible for implementing the hardware components.

## Concern
* How do physical system elements interact to provide system functions? 

  ***Rationale:  In my role, I need to implement the interfaces in my HW subsystem, if necessary.***
* What are the Interface Requirements regarding bandwidth, data throughput and latency?
* What are the encryption means used for an exchange?
* What are the functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to trace my derived requirements against these ones relevant to me.***
* What are the non-functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to trace my derived requirements against these ones relevant to me.***
* What are the sources (e.g. a standard) of terms? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation.***
* What is the allocated reliability for a single function?
* What is the allocated reliability for the complete item?
* What is the mapping of functions to the physical SOI physical architecture? 

  ***Rationale:  In my role, I need to implement the sub-functions in my HW subsystem.***
* What is the necessary processing performance?
* What is the necessary response time for an interface or a service?
* What is the sequence of interactions among the system and context elements on physical level? 

  ***Rationale:  In my role, I need to implement the interfaces in the elements of the system context.***
* Which Stakeholders are relevant to the system and might impose requirements? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Which are the interface definitions for the physical architecture? 

  ***Rationale:  In my role, I need to implement the interface.***
* Which are the protocols for exchanging physical items on a specific interface? 

  ***Rationale:  In my role, I need to implement the protocol.***
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to understand the concepts of system internal interfaces  in order to implement them.***
* Which functions are allocated to which parts of the logical architecture? 

  ***Rationale:  In my role, I need to take this into account when planning implementation.***
* Which functions will the system provide? 

  ***Rationale:  In my role, I need to provide qualified feedback on how my how the sub-functions assigned to my subsystem contributes to the function of the system.***
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I must derive interface design from them.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to understand the concepts of external interfaces to external partners in order to implement them.***
* Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system? 

  ***Rationale:  In my role, I must use these in interface design.***
* Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element? 

  ***Rationale:  In my role, I need to implement the interfaces in my HW subsystem, if necessary.***
* Which logical elements are allocated to which physical elements? 

  ***Rationale:  In my role, as design authority I have to ensure that the HW Element fulfills the allocated logical concept (specification).***
* Which modes and states does the system have? 

  ***Rationale:  In my role, I need to know which system modes and states my subsystem must support.***
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to support integrating and testing the interfaces.***
* Which protection means need to be provided for an interface?
* Which standards, protocols, and format specifications apply to a physical interface? 

  ***Rationale:  In my role, I need to implement the interface.***
* Which terms and abbreviations are applicable to the system of interest or its system elements and their interfaces and interactions? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation..***
* Which variants of a HW item need to be provided?
* Who provides the inputs to a critical function?
# IV&V Engineer
Definition - IV&V Engineer
Individuals or groups responsible for integration, verification and validation.
IV&V Engineers are individuals or groups responsible for integration, validation and verification during development of the system. Integration, Verification and Validation are activities that are performed simultaneously, and alternately i.e. virtual integration is used to validate requirements, verification of prototypes is performed to validate requirements and design decisions, verification of interfaces is performed during integration on various integration levels allowing to gather enough test coverage.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* How do physical system elements interact to provide system functions? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* How does a system function interact with its environment? 

  ***Rationale:  In my role, I need to perform the integration of the system into its deployment environment.***
* How is the system being used or utilized and interacting with other external systems to satisfy user needs? 

  ***Rationale:  In my role, I need to take this into account when planning integration.***
* What are the functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to prove System Requirements via test cases.***
* What are the non-functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to prove System Requirements via test cases.***
* What is the flow of critical information and data through the system?
* What is the necessary response time for an interface or a service?
* What is the physical breakdown of the system? 

  ***Rationale:  In my role, I need to test and integrate the items into the sytem.***
* What is the sequence of interactions among the system and context elements on physical level? 

  ***Rationale:  In my role, I need to plan the test environment.***
* Which are the external physical entities the system interacts with in the given context? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which are the protocols for exchanging physical items on a specific interface? 

  ***Rationale:  In my role, I need to integrate and test the interface.***
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which functions will the system provide? 

  ***Rationale:  In my role, I need to understand the system in order to put it into operation.***
* Which interface partners does the system have? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which kind of physical items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element? 

  ***Rationale:  In my role, I need to  test the interface.***
* Which logical elements are allocated to which physical elements? 

  ***Rationale:  In my role, I have to plan IV&V activities to evaluate the Physical Element as unit under test against the logical concept (specification).***
* Which modes and states does the system have? 

  ***Rationale:  In my role, I need to understand the system in order to put it into operation.***
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to integrate and test the interfaces.***
* Which standards, protocols, and format specifications apply to a physical interface? 

  ***Rationale:  In my role, I need to test and integrate them.***
* Which system funcions need to be tested in IV&V activities?
* Which users does the system support?  

  ***Rationale:  In my role, I need to cover these users with my test.***
* Who provides the inputs to a critical function?
# Maintainer
Definition - Maintainer
Individual or organization that performs maintenance activities, [ISO/IEC 12207:2008]
The Maintainer is an individual, group or organization responsible to maintain the system during its operational usage. The Maintainer assures the availability of the system over its foreseen lifetime. It involves obsolescence management, technology evolution, repair, update or replacement of parts of the system or even of the whole system. The Maintainer provides major non-functional requirements (e.g. reliability, availability, mean time to repair), but also functional requirements e.g. to ensure the compatibility with existing enabling systems.

## Concern
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
* Which modes and states does the system have?
# Mechanic Developer
Definition - Developer:
Organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Mechanic Developer responsible for implementing the mechanical components.

## Concern
* What are the sources (e.g. a standard) of terms? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation..***
* What is the mapping of functions to the physical SOI physical architecture? 

  ***Rationale:  In my role, I need to implement the sub-functions in my mechanical subsystem***
* Which are the interface definitions for the physical architecture? 

  ***Rationale:  In my role, I need to implement the interface.***
* Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element? 

  ***Rationale:  In my role, I need to implement the interfaces in my mechanical subsystem, if necessary.***
* Which logical elements are allocated to which physical elements? 

  ***Rationale:  In my role, as design authority I have to ensure that the Physical Element fulfills the allocated logical concept (specification).***
* Which terms and abbreviations are applicable to the system of interest or its system elements and their interfaces and interactions? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation.***
# Operator
Definition - Operator:
Individual or organization that performs the operations of a system, [ISO/IEC 15288:2022 – Systems engineering - System life-cycle processes]
The Operator is an individual or organization that uses knowledge, skills and procedures to perform the functions of the system to provide the benefit, product or service. 
An individual Operator combined with knowledge, skills, and procedures may be considered as an element of the system. The role of the operator and the role of the user can be delegated to a single individual or may be simultaneously instantiated in the same organization. 
*For example: Air passengers are the user of the air transport system while a single flight is operated by an air carrier like the Lufthansa using aircrafts of various types to provide the transport service. 
To provide the service to the passengers the carrier’s organization must implement lots of services utilizing several other enabling systems. 
The individual aircraft is operated by the pilot who uses the on-board systems to control the aircraft and to navigate during that flight. 
The example illustrates, that the roles user and operator are depending heavily on the definition of the SOI Scope.*

## Concern
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
* Which users does the system support?  

  ***Rationale:  In my role, I need to check whether the system fits into the higher-level user concept.***
# Portfolio Manager
Portfolio Manager:
Individual or organization that plans the Product portfolio, i.e. which products are available, will be available, which capabilities will they have.

## Concern
* Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.
* Show in a concise manner the relationships from operational process to operational story and to operational performer.
* What operational capabilities are defined?
# Project Manager
Definition - Project Manager: 
The responsibility of the Project Manager is to make the right resources with the right skills available in time to get the identified work done. The Project Manager controls that the work packages are completed in time and agreed milestones are met. A clear definition of the solution for the stated problem allows planning to be done properly.
Systems Engineering creates a clear and manageable system structure, which is the basis for project planning and task assignment.

## Concern
* For what purpose is the system developed or adapted? 

  ***Rationale:  In my role, I need to check whether the project order is implemented correctly.***
* In which phases of the life cycle is a Stakeholder involved in the project? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* What concerns and rationals does a Stakeholder have?
* What is the risk involved with each development item?
* What services are expected from external entities?
* When do product functions or features become available?
* Which Stakeholders are relevant to the system and might impose requirements? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Which System Requirements are derived from Stakeholder Requirements? 

  ***Rationale:  In my role, I need to check whether we fulfill our contract.***
* Which development effort is associated with each individual element?
* Which functions will the system provide?
* Who provides the inputs to a critical function?
# Regulation Authority
Definition - Regulation Authority:
Regulation Authorities can have impact by imposing Stakeholder Requirements against the system and by their involvement in the development and acceptance phases (e.g. safety or IT security acceptance audits). 
The term “authorities” also refers to current applicable regulations and laws.
The requirements stipulated on the system are diverse. They can be functional and non-functional requirements.
Systems Engineering must adhere to relevant standards and needs to demonstrate compliance with those standards and requirements.

## Concern
* How are applicable requirements considered in the system architecture?
* Which modes and states does the system have?
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
# SAF Developer
The SAF Developer is a group or an individual developing SAF or extending SAF.

## Concern
* How does a viewpoint of the framework support the processes and best practises of the INCOSE SE Handbook or other system engineering standards? 

  ***Rationale:  I need to cover the processes and best practises by a suitable set of viewpoints.***
* How is a viewpoint implemented (which stereotypes /model elements are used)?  

  ***Rationale:  I need to chose a suitable implementation for the SE concepts exposed by a viewpoint.***
* What are the concerns adressed by the frameworks viewpoints? 

  ***Rationale:  I need to cover the information need of stakeholders to match the purpose of the viewpoint.***
* What are the frameworks model elements to be used in system models? 

  ***Rationale:  I need to implement and document them for users***
* What is the definition of a viewpoint of the framework? 

  ***Rationale:  I need to create a comprehensive specification of the frameworks viewpoints.***
* What is the definition of columns (aspects) in the frameworks grid? 

  ***Rationale:  I need to structure the framework along criteria that are similar over the domains. ***
* What is the definition of rows (domains) in the frameworks grid? 

  ***Rationale:  I need to structure the framework along criteria that roughly resemble phases of a typical SE workflow.***
* What is the implementation of the frameworks concepts? 

  ***Rationale:  I need to cover the SE concepts exposed by viewpoints by an implementation.***
* What is the maturity state of viewpoints in the framework? 

  ***Rationale:  I need an overview over the maturity of available to plan SAF development.***
* What is the purpose of a viewpoint in the framwork? 

  ***Rationale:  I need to explain to SAF users what the viewpoint is good for.***
* Where is a viewpoint of the framework located in the frameworks grid? 

  ***Rationale:  I need to structure the framework into an understandable grid layout.***
* Which columns and rows does the frameworks grid have?  

  ***Rationale:  I need to structure the framework into an understandable grid layout.***
* Which concerns are does an architecture framework stakeholder have? 

  ***Rationale:  I need to analyze the concerns if they are justified by SE best practice.***
* Which concerns are framed by a viewpoint of the framework? 

  ***Rationale:  I need to design viewpoints that fullfill stakeholders information needs and cover the purpose of the viewpoints.***
* Which dependencies to other viewpoints exist for a viewpoint of the framework? 

  ***Rationale:  I need to explain the hard(e.g. by required model elements being a prerequisite) and soft (a recommended good practice) dependencies to frameworks users.***
* Which presentations are available for a viewpoint in the framwork? 

  ***Rationale:  I need to specify presentations of the information in a viewpoint to address different framework stakeholders concerns.***
* Which systems engineering concepts are covered by the framework? 

  ***Rationale:  I need to cover important SE concepts in typical SE workflows along the processes of the INCOSE SE Handbook and SE best practices.***
* Which systems engineering concepts are exposed within a viewpoint of the framework? 

  ***Rationale:  I need to specify which SE concepts are exposed in order to fullfil the information need of stakeholders and the viewpoints purpose.***
* Which viewpoints are available in the framework 

  ***Rationale:  I need an overview over the viewpoints available to identify possible gaps.***
* Who are the architecture framework stakeholders of the frameworks viewpoints? 

  ***Rationale:  I need to explain to frameworks users who would typically have an interest in which viewpoint.***
* Why does a stakeholder have this specific concern ?  

  ***Rationale:  I  want to understand the intention for the information need to select an cut set of viewpoints and then and appropriate presentation for the information.***
* what are the constraints related to se concepts covered by the framework?  

  ***Rationale:  I need to know them in order select an appropriate presentation,  implementation, and to implement model checks.***
* what are the relations between systems engineering concepts covered by the framework? 

  ***Rationale:  I need to make sure they can answer the information need described by concerns.
I need to implement them in a profile***
# SAF MBSE approch planer
The SAF MBSE approach planer is a group or an individual selecting viewpoints to be used in an MBSE approach. This may be identical with an architect role but may as well be carried out by an organziation standardizing the MBSE approach for products, product lines or an entire enterprise.

## Concern
* How does a viewpoint of the framework support the processes and best practises of the INCOSE SE Handbook or other system engineering standards? 

  ***Rationale:  I want to know how the INCOSE HB processes and best practises are supported by the frameworks viewpoints, because want to plan a MBSE approach.***
* What are the concerns adressed by the frameworks viewpoints? 

  ***Rationale:  I want to know if the information need of my stakeholders in the planned MBSE approach is adressed by the viewpoint.***
* What are the frameworks model elements to be used in system models? 

  ***Rationale:  I need to know which modeling skills users will need.***
* What is the definition of a viewpoint of the framework? 

  ***Rationale:  I need to understand the frameworks viewpoints in order to plan an appropriate MBSE approach.***
* What is the definition of columns (aspects) in the frameworks grid? 

  ***Rationale:  I need to understand the framworks structure in order to chose viewpoints to be used.***
* What is the definition of rows (domains) in the frameworks grid? 

  ***Rationale:  I need to understand the frameworks structure in order to chose viewpoints to be used.***
* What is the maturity state of viewpoints in the framework? 

  ***Rationale:  I need to know which viewpoins are stable to assess the risk using them.***
* What is the purpose of a viewpoint in the framwork? 

  ***Rationale:  I need to select appropriate viewpoinst for the MBSE approach.***
* Where is a viewpoint of the framework located in the frameworks grid? 

  ***Rationale:  I need to understand the frameworks structure in order to chose viewpoints to be used.***
* Which columns and rows does the frameworks grid have?  

  ***Rationale:  I need to understand the frameworks structure in order to chose viewpoints to be used.***
* Which concerns are does an architecture framework stakeholder have? 

  ***Rationale:  I need to analyze the concerns if they match the information needs my stakeholders will have in order to identify gaps in the MBSE approach.***
* Which concerns are framed by a viewpoint of the framework? 

  ***Rationale:  I need to know if the information needs of my stakeholders are covered in order to plan the MBSE approach.***
* Which dependencies to other viewpoints exist for a viewpoint of the framework? 

  ***Rationale:  I need to know the dependencies in order to plan the MBSE approach.***
* Which presentations are available for a viewpoint in the framwork? 

  ***Rationale:  I need plan which presentations shall be used by the MBSE approach.***
* Which systems engineering concepts are covered by the framework? 

  ***Rationale:  I need know if the SE concepts to my stakeholders according to the planned SE work flow is covered by the framework.***
* Who are the architecture framework stakeholders of the frameworks viewpoints? 

  ***Rationale:  I need to select viewpoints for my stakeholders and want to use this information as a starting point.***
* Why does a stakeholder have this specific concern ?  

  ***Rationale:  I want to know what might happen if the concern cannot be fulfilled.***
* what are the constraints related to se concepts covered by the framework?  

  ***Rationale:  I want to validate the assumptions made in the framework against the anticipated information need of the MBSE appoach.***
* what are the relations between systems engineering concepts covered by the framework? 

  ***Rationale:  I want to know if the information need that i anticipate for the MBSE approach will be satisfied by the framework.***
# SAF System model user
The SAF System Model User is a group or an individual creating, maintaining or reading SAF System Models.

## Concern
* How does a viewpoint of the framework support the processes and best practises of the INCOSE SE Handbook or other system engineering standards? 

  ***Rationale:  I want to know how the INCOSE HB processes and best practises are supported by the frameworks viewpoints, because i want to use the viewpoints suitable for the work i am doing.***
* How is a viewpoint implemented (which stereotypes /model elements are used)?  

  ***Rationale:  I want to know which model elements i am expected to work on in a viewpoint.***
* What are the frameworks model elements to be used in system models? 

  ***Rationale:  I need to populate system models with them and read them from system models.***
* What is the definition of a viewpoint of the framework? 

  ***Rationale:  I need a user documentation of the viewpoint i am going to use.***
* What is the definition of columns (aspects) in the frameworks grid? 

  ***Rationale:  I need to be able to orient myself in the frameworks structure an know what is where.***
* What is the definition of rows (domains) in the frameworks grid? 

  ***Rationale:  I need to be able to orient myself in the frameworks structure an know what is where.***
* What is the purpose of a viewpoint in the framwork? 

  ***Rationale:  I need to know if i am using a viewpoint suitable for my modeling task.***
* Where is a viewpoint of the framework located in the frameworks grid? 

  ***Rationale:  I need to be able to orient myself in the frameworks structure an know what is where.***
* Which columns and rows does the frameworks grid have?  

  ***Rationale:  I need to be able to orient myself in the frameworks structure an know what is where.***
* Which dependencies to other viewpoints exist for a viewpoint of the framework? 

  ***Rationale:  I need to know the dependencies in order to plan my work.***
* Which presentations are available for a viewpoint in the framwork? 

  ***Rationale:  I want to know what types of diagrams, tables etc. i am going to work on.***
* Which viewpoints are available in the framework 

  ***Rationale:  I want to know which viewpoints can possibly satisfy my information needs.***
* Which viewpoints are used in the system model 

  ***Rationale:  I need an overview about the model in order to orient myself.***
* Which views of the frameworks viewpoints are present in the system model? 

  ***Rationale:  I need an overview about the model in order to orient myself.***
# Safety Expert
Definition - Safety Specialist:
Safety is one subject matter of specialty engineering but important enough to be treated separately. 
The safety experts evaluate a proposed system architecture and design for safety applying different analysis considering the criticality of the system functions. The result of the activity are safety requirements that need to be considered in the system design.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* How are safety features verified?
* How do the logical system elements interact to provide the system functions? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on logical level.***
* How do the physical system elements interact to provide the system function?
* How does a system function interact with its environment?
* How does criticality propagate down the system hierarchy?
* How is a safety critical function decomposed and allocated? 

  ***Rationale:  In my role, I need to check if proper safety measures are taken in the design.***
* What are the contributors (SW and HW items contributing to a critical function) to a critical function?
* What are the encryption means used for an exchange?
* What are the failure modes of a system function?
* What are the hazards of a system function in an identified situation (context + scenario)?
* What are the inputs to a critical function?
* What are the planned architectural means for risk mitigation?
* What are the scenarios a system function is utilized in?
* What is the flow of critical information and data through the system?
* What is the necessary response time for an interface or a service?
* What is the physical breakdown of the system? 

  ***Rationale:  In my role, I need to assess if the system partitioning fulfills the safety requirements.***
* What is the possible harm in utilizing the system?
* What is the sequence of interactions among the system and context elements on physical level?
* Which are the external physical entities the system interacts with in the given context?
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on logical level.***
* Which functions will the system provide?
* Which interface partners does the system have? 

  ***Rationale:  In my role, I need to assess if  interfaces can impose safety hazards.***
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on conceptual level.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
* Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on design level.***
* Which modes and states does the system have?
* Which operational exchanges do operational performers need to consume or provide?
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on physical level.***
* Who provides the inputs to a critical function?
# Security Expert
Definition - Security Specialist:
Security is one subject matter of specialty engineering but important enough to be treated separately.
The IT-Security experts evaluate a proposed system architecture and design for IT-Security. One outcome of the activity are technical security requirements that need to be considered in the system design. Other outcomes affect the organization or the infrastructure of the user or define procedures that need to be implemented.

## Concern
* How do physical system elements interact to provide system functions? 

  ***Rationale:  In my role, I need to assess if internal interfaces conform to security separation concepts.***
* How do the logical system elements interact to provide the system functions? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on logical level.***
* How do the physical system elements interact to provide the system function?
* How is the interface between different domains protected?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the confidentiality, integrity and availability levels for processed or exchanged information?
* What are the domains of similar security levels in the system or the system participates in?
* What are the encryption means used for an exchange?
* What are the interfaces between different domains?
* What are the requirements for security relevant IT-equipment?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
* What is the physical breakdown of the system? 

  ***Rationale:  In my role, I need to assess if the system partitioning fulfills the security requirements.***
* What is the sequence of interactions among the system and context elements on physical level?
* Which are the protocols for exchanging physical items on a specific interface? 

  ***Rationale:  In my role, I need to assess the security on the interface.***
* Which are the protocols used for exchanging information? 

  ***Rationale:  In my role, I need to assess the security based on protocol usage in general.***
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on logical level.***
* Which functions will the system provide?
* Which interface partners does the system have? 

  ***Rationale:  In my role, I need to assess if external interfaces can impose security threats.***
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on conceptual level.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities?
* Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on design level.***
* Which modes and states does the system have?
* Which operational exchanges do operational performers need to consume or provide?
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on physical level.***
* Which standards, protocols, and format specifications apply to a physical interface? 

  ***Rationale:  In my role, I need to assess the security based on them.***
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
* what is the protection need of information 

  ***Rationale:  I need to make sure that the security requirements regarding handling of protected information by the system can be adressed appropriately.***
* which protection goals  and subcategories can be used? 

  ***Rationale:  I need to use them to assign protection goals to assets, and to assign trust levels to context elements.***
# Software Developer
Definition - Developer:
Organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Software Developer responsible for implementing the software components.

## Concern
* How do physical system elements interact to provide system functions? 

  ***Rationale:  In my role, I need to implement the interfaces in my SW subsystem, if necessary.***
* What are precision and accuracy requirements for presentation of data items on an interface?
* What are precision and accuracy requirements for processing of data items?
* What are the Interface Requirements regarding bandwidth, data throughput and latency?
* What are the encryption means used for an exchange?
* What are the functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to trace my derived requirements against these ones relevant to me.***
* What are the non-functional requirements applying to SW (e.g. with regard to SW quality, modularization, changeability or reuse)?
* What are the non-functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to trace my derived requirements against these ones relevant to me.***
* What are the sources (e.g. a standard) of terms? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation.***
* What is the mapping of functions to the physical SOI physical architecture? 

  ***Rationale:  In my role, I need to implement the sub-functions in my SW subsystem.***
* What is the necessary response time for an interface or a service?
* What is the sequence of interactions among the system and context elements on physical level? 

  ***Rationale:  In my role, I need to implement the interfaces in the elements of the system context.***
* Which Stakeholders are relevant to the system and might impose requirements? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Which are the interface definitions for the physical architecture? 

  ***Rationale:  In my role, I need to implement the interface.***
* Which are the protocols for exchanging physical items on a specific interface? 

  ***Rationale:  In my role, I need to implement the protocol.***
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to understand the concepts of system internal interfaces  in order to implement them.***
* Which functions are allocated to which parts of the logical architecture? 

  ***Rationale:  In my role, I need to take this into account when planning implementation.***
* Which functions will the system provide? 

  ***Rationale:  In my role, I need to provide qualified feedback on how my how the sub-functions assigned to my subsystem contributes to the function of the system.***
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I must derive interface design from them.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to understand the concepts of external interfaces to external partners in order to implement them.***
* Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system? 

  ***Rationale:  In my role, I must use these in interface design.***
* Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element? 

  ***Rationale:  In my role, I need to implement the interfaces in my SW subsystem, if necessary.***
* Which logical elements are allocated to which physical elements? 

  ***Rationale:  In my role, as design authority I have to ensure that the SW Element fulfills the allocated logical concept (specification).***
* Which modes and states does the system have? 

  ***Rationale:  In my role, I need to know which system modes and states my subsystem must support.***
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I need to support integrating and testing the interfaces.***
* Which standards, protocols, and format specifications apply to a physical interface? 

  ***Rationale:  In my role, I need to implement the interface.***
* Which terms and abbreviations are applicable to the system of interest or its system elements and their interfaces and interactions? 

  ***Rationale:  In my role, I need to know the meaning of defined terms from applicable standards during implementation.***
* Who provides the inputs to a critical function?
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
# Supplier
Definition - Supplier:
Organization or an individual that enters into an agreement with the Acquirer for the supply of a product or service, [ISO/IEC 15288:2022 – Systems engineering - System life-cycle processes]
The Supplier is the organization or individual that enters into an agreement with the Acquirer to supply a product or service. Usually, the system architect and the developers for make-items are part of the supplier’s organization. Other terms commonly used for Supplier are contractor, producer, seller or vendor.

## Concern
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the capabilities that are supported by the system?
* What are the scenarios a system function is utilized in?
* What is the lack / deficiency / gap in current capability implementation that is addressed with the intended solution?
* What services are expected from external entities?
* Where and what are the geographical and physical locations of the intended or proposed elements of the solution?
* Which are the external physical entities the system interacts with in the given context?
* Who are the (Major) Stakeholders involved in the intended solution?
# System Architect
Definition - System Architect:
The System Architect as an individual or group performing the systems engineering for the SOI. The system architect creates the system architecture i.e. the views as defined by the SAF.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* For what purpose is the system developed or adapted? 

  ***Rationale:  In my role, I need to know this in order to be able to further design the system in an appropriate way.***
* Have the logical decomposition guidelines been followed?
* How are applicable requirements considered in the system architecture?
* How do physical system elements interact to provide system functions? 

  ***Rationale:  In my role, I need to orchestrate interface agreements between the system internal interface partners.***
* How do the logical system elements interact to provide the system functions? 

  ***Rationale:  In my role, I need to coordinate internal interfaces with internal subsystem partners.***
* How do the physical system elements interact to provide the system function?
* How does a system function interact with its environment? 

  ***Rationale:  In my role, I need to delegate the implementation of interfaces in subsystems.***
* How does criticality propagate down the system hierarchy?
* How is a safety critical function decomposed and allocated? 

  ***Rationale:  In my role, I want to make sure that the architecture partitioning fulfills safety needs.***
* How is the system being used or utilized and interacting with other external systems to satisfy user needs? 

  ***Rationale:  In my role, I need to pass on the resulting System Requirements to the subsystems.***
* In which phases of the life cycle is a Stakeholder involved in the project? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Show in a concise manner the relationships from operational capability to operational story, to operational activity, and to operational performer.
* Show in a concise manner the relationships from operational process to operational story and to operational performer.
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the capabilities that are supported by the system? 

  ***Rationale:  In my role, I need to identify suitable basic components on the grounds of the required system capabilities.***
* What are the encryption means used for an exchange?
* What are the functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to check whether the system design implements the System Requirements.***
* What are the non-functional requirements imposed on the system? 

  ***Rationale:  In my role, I need to check whether the system design implements the System Requirements.***
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage, and for transport?
* What are the planned architectural means for risk mitigation?
* What are the relationships between the partys involved in the operation of the intended solution?
* What are the scenarios a system function is utilized in?
* What concerns and rationals does a Stakeholder have?
* What existing elements of the organization, enterprise, or operational entity need to be integrated in the intended solution?
* What is the breakdown of functions into sub-functions?
* What is the configuration or version of each configuration item?
* What is the context of the organization, enterprise, or operational entity?
* What is the flow of critical information and data through the system?
* What is the lack / deficiency / gap in current capability implementation that is addressed with the intended solution?
* What is the logical breakdown of the system?
* What is the mapping of functions to the physical SOI physical architecture? 

  ***Rationale:  In my role, I need to delegate the implementation of sub-function in physical subsystems (HW/SW/...).***
* What is the necessary response time for an interface or a service?
* What is the physical breakdown of the system? 

  ***Rationale:  In my role, I need to orchestrate the interface agreements among the parts of the system.***
* What is the sequence of interactions among the system and context elements on physical level? 

  ***Rationale:  In my role, I need to assess if the systems interfaces are compatible with external systems.***
* What is the task executed by an organization, enterprise, or operational entity in the Operational Context?
* What operational capabilities are defined?
* What operational process activities shall be executed during the execution of an operational story?
* What possible threads of operational process activities have to be carried out to achieve the operational story main and alternative goals?
* What services are expected from external entities?
* What system elements are make-items, reuse items, or COTS?
* Where and what are the geographical and physical locations of the intended or proposed elements of the solution?
* Which Stakeholders are relevant to the system and might impose requirements? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Which are the external physical entities the system interacts with in the given context?
* Which are the given contexts the system is embedded and utilized in?
* Which are the interface definitions for the logical architecture? 

  ***Rationale:  In my role, I need to orchestrate interface agreements between the system and external interface partners***
* Which are the interface definitions for the physical architecture? 

  ***Rationale:  In my role, I need to orchestrate interface agreements between the system and external interface partners***
* Which are the protocols for exchanging physical items on a specific interface? 

  ***Rationale:  In my role, I need to asses if the usage of protocols on interfaces is compatible with the system lifecyle concepts.***
* Which are the protocols used for exchanging information? 

  ***Rationale:  In my role, I need to validate if they fit the purpose of the system and conform the systems concepts***
* Which conceptual items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on logical level.***
* Which functions are allocated to which parts of the logical architecture?
* Which functions will the system provide? 

  ***Rationale:  In my role, I need to break these down further to be able to delegate sub-functions to subsystems.***
* Which interface partners does the system have? 

  ***Rationale:  In my role, I need to orchestrate interface agreements between the system and external interface partners.***
* Which is the operational context to achieve an operational story?
* Which is the operational scenario, i.e., course of action, for the mission and the context in which the system of systems solution will exist?
* Which kind of conceptual items (energy, material, information, etc.)  are used in the logical architecture of the system? 

  ***Rationale:  In my role, I want to foster reuse of system wide concept definitions within the architecture design.***
* Which kind of conceptual items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to coordinate external interfaces with external partners.***
* Which kind of physical items (energy, material, information, etc.) are exchanged between the system and external entities? 

  ***Rationale:  In my role, I need to orchestrate interface agreements between the system and external interface partners.***
* Which kind of physical items (energy, material, information, etc.) are used in the physical architecture of the system? 

  ***Rationale:  In my role, I have to foster reuse of system wide concept definitions within the architecture design.***
* Which kind of physical items (energy, material, information, etc.) are used on an interface of a physical architecture element? 

  ***Rationale:  In my role, I orchestrate interface agreements between architecture elements, and between the system and elements of the system context.***
* Which logical elements are allocated to which physical elements? 

  ***Rationale:  In my role, I have to check that all aspects of the logical concept (specification) are allocated to physical elements (with assigned design authorities).***
* Which modes and states does the system have? 

  ***Rationale:  In my role, I need to understand the required system behavior in order to further design the system.***
* Which operational activity shall be executed by which operational performer in the operational story?
* Which operational exchanges do operational performers need to consume or provide?
* Which performers or resources are necessary to operate the intended solution?
* Which physical items (energy, material, information, etc.) are exchanged within the system? 

  ***Rationale:  In my role, I use them as basis for understanding interfaces on physical level.***
* Which standards, protocols, and format specifications apply to a physical interface? 

  ***Rationale:  In my role, I need to validate if they fit the purpose of the system and are complaint to the systems concepts.***
* Which system function is addressed by a system requirement?
* Which system functions are dependent on a systems mode or state?
* Which users does the system support?  

  ***Rationale:  In my role, I need to delegate the implementation of HMI in subsystems.***
* Who are the (Major) Stakeholders involved in the intended solution? 

  ***Rationale:  In my role, I need to give feedback on existing or missing stakeholders.***
* Who provides the inputs to a critical function?
* Why types of exchange can exist between Operational Performers (i.e., flows of information, people, material, or energy)?
* what is the protection need of information 

  ***Rationale:  i need to plan the architecture to adress the security requirements.***
* what is the security level of information handled by the system or system elements 

  ***Rationale:  I need to assessan if  differences in security levels are handled by the architecture appropriately.***
* which protection goals  and subcategories can be used?
# User
Definition - User:
Individual or group that interacts with a system or benefits from a system during its utilization, [ISO/IEC 15288:2022 - Systems engineering - System life-cycle processes]
The User is the individual, organization or group that benefits from the operation of the system. The User provides the usage scenarios, the User needs and finally the user requirements representing most of the functional requirements but also non-functional requirements. The role of User and the role of operator are sometimes allocated, simultaneously or sequentially, to the same individual or organization. All the other stakeholders do not use the system for any purpose, and they do not need or require the system to satisfy any need. Therefore, interests of the User and claims of the Stakeholder could be contradicting.

## Concern
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs? 

  ***Rationale:  In my role, I need to check whether intended solution satisfies my user needs.***
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
* Which users does the system support?  

  ***Rationale:  In my role, I need to check whether the system fits into the higher-level user concept.***
