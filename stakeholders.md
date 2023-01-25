![System Architecture Framework](diagrams/Logo_SAF.png)
# SAF Stakeholders
![SAF_Stakeholder_Definition](diagrams/SAF_stakeholder_definition.svg)
This section provides a list of the Stakeholder roles considered in the development of the architecture described by SAF. For each, the section lists the concerns that the Stakeholder has that can be addressed by the information in this SAF framework.

Each Stakeholder of a system - customer, user, project manager, coder, analyst, tester, and so on - is concerned with different characteristics of the system that are affected by its architecture.

For example, the user is concerned that the system is reliable and available when needed; the customer is concerned that the architecture can be implemented on schedule and to budget; the manager is worried (in addition to cost and schedule) that the architecture will allow teams to work largely independently, interacting in disciplined and controlled ways.

The system architect is worried about strategies to achieve all of those goals.

The security analyst is concerned that the system will meet its information assurance requirements, and the performance analyst is similarly concerned with it satisfying real-time deadlines.


The following subchapters describe the stakeholders and their concerns:

# Acquirer
Definition - Acquirer:
stakeholder that acquires or procures a product or service from a supplier, [ISO/IEC 15288:2015 - Systems engineering - System life-cycle processes]

The Acquirer is a Stakeholder that acquires or procures a product or service from a supplier. The Acquirer may be an organization or an individual acting on behalf of the customer or the user.

He is responsible for providing a feasible solution within a given budget. The Acquirer must plan and control the delivery of the system-of-interest as well as other systems together with necessary infrastructure, equipment or training. He must plan the integration of all the procured items to provide a complete solution ready for operation. For large enterprises standardization is an issue. Therefore, the acquirer is interested that standard items are considered in the system architecture.

## Concern
* Are defined standard items considered in the architecture?
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* What Performers or Resources are necessary to operate the intended solution?
* What are necessary enabling systems?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the Capabilities that are supported by the system?
* What are the different contexts the system is embedded and utilized in?
* What are the external physical entities the system interacts with in the respective context?
* What are the geographical and physical locations of the intended / proposed elements of the solution?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the planned architectural means for risk mitigation?
* What are the scenarios a system function is utilized in?
* What existing elements of the organization, enterprise, or operational entity need to be integrated in the intended solution?
* What is the System Boundary definition?
* What is the cost for each required function?
* What is the lack / deficiency / gap in current Capability implementation that is addressed with the intended solution?
* What is the necessary response time for an interface or a service?
* What is the priority of each function?
* What is the time schedule for delivering the functions?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* What services are expected from external entities?
* What shall be validated to the customer at system level?
* Which functions will the system provide?
* Which information is exchanged between the system and external entitys?
* Which physical items the SOI is built of?
* Who are the Stakeholders involved in the intended solution?
* Who provides the inputs to a critical function?
# Architecture Framework Stakeholder
Definition - Architecture Framework Stakeholder:
The Architecture Framework Stakeholder is a generic Stakeholder class more specific Stakeholder(s). The derived Stakeholder(s) have concern(s) regarding the architecture framework description(s). Most of these concern(s) are addressed by SAF Viewpoint(s).

*Note: Den Framework Stakeholder braucht SAF für die SAF Entwicklung, denn ein Architecture Framework Stakeholder ist dann ein solcher, wenn er, der Architecture Framework Stakeholder, Requirement(s) / Concern(s) hat, die zu VP führen bzw. durch VP befriedigt werden.*

## Concern
# Customer
Definition - Customer (also Acquirer):
organization or person that receives a product or service, [ISO/IEC 15288:2015 –Systems engineering - System life-cycle processes]
The Customer is an organization or person that receives a product. Examples: Consumer, client, end user, retailer, beneficiary, and purchaser. A customer can be internal or external to the organization. Customer is a broader reference than Acquirer, operator, or user and includes those roles as well as others. However, the Customer provides the funding.

## Concern
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* What Operational Capabilitys are defined? 

  ***Rationale:  Needed because the definition of capabilities allows communication about what is to achieved to seperate from how it is achieved on operational level.***
* What are necessary enabling systems?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the different contexts the system is embedded and utilized in?
* What are the external physical entities the system interacts with in the respective context?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the planned architectural means for risk mitigation?
* What are the scenarios a system function is utilized in?
* What is the System Boundary definition?
* What is the necessary response time for an interface or a service?
* What is the rational if requirements are not considered?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* What services are expected from external entities?
* What shall be validated to the customer at system level?
* Which functions will the system provide?
* Which information is exchanged between the system and external entitys?
* Who provides the inputs to a critical function?
# Customer (Representative)
Definition - Customer (Representative):
(1) [SAF] The primary goal in a Customer (Representative) role is to represent the end-user, an individual, organization, or enterprise that benefits from the operation of the system. In this role the Customer (Representative) provides usage scenario(s), user need(s) and requirement(s).
(2) [SAF] The secondary goal in a Customer (Representative) role is to represent the Acquirer, who buys or procures a product or service from a supplier. The Acquirer selected by the User to serve as their technical representative to:
1. Specify the system.
2. Select a System Developer or Services Provider.
3. Provide technical assistance.
4. Provide contractual oversight for the execution of the contract and delivery of a
verified and validated system to the User.
Note: All other Stakeholder(s) do not use the system for purpose, and they do not need or require the system to satisfy any need. Therefore, interests of the end-user and claims of the other stakeholders could be contradicting and the Customer (Representative) role therefore strives for a solution satisfying all the Stakeholder Requirement(s).

## Concern
# Hardware Developer
Definition - Developer:
organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Hardware Developer responsible for implementing the hardware components.

## Concern
* How are error states handled?
* How does the system or a system element interact with the test environment?
* What additional information the system or a system element needs to generate to enable testing?
* What are the encryption means used for an exchange?
* What are the interface requirements regarding bandwidth, data throughput and latency?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the provided power inputs?
* What delivery standards need to be provided?
* What is the allocated power consumption?
* What is the allocated reliability for a single function?
* What is the allocated reliability for the complete item?
* What is the allocated space?
* What is the allocated weight?
* What is the necessary accuracy and resolution for analog signal acquisition?
* What is the necessary accuracy and resolution for processing?
* What is the necessary memory size for processing nodes and data storage?
* What is the necessary processing performance?
* What is the necessary response time for an interface or a service?
* What is the scope of a delivery standard?
* What is the sequence of interactions among the system and context elements
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* Which functions need to be realized by HW?
* Which interfaces are necessary?
* Which modes and states does the system have?
* Which protection means need to be provided for an interface?
* Which variants of a HW item need to be provided?
* Who provides the inputs to a critical function?
# IV&V Engineer
Definition - IV&V Engineer
Individuals or groups responsible for integration, verification and validation. [tbd]
IV&V Engineers are individuals or groups responsible for integration, validation and verification during development of the system. Integration, Verification and Validation are activities that are performed simultaneously, and alternately i.e. virtual integration is used to validate requirements, verification of prototypes is performed to validate requirements and design decisions, verification of interfaces is performed during integration on various integration levels allowing to gather enough test coverage.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* How are error states handled?
* How does the elements of the test environment interact with each other?
* How does the system or a system element interact with the test environment?
* What additional information the system or a system element needs to generate to enable testing?
* What additional interfaces are necessary to expose internal properties, states and modes for testing?
* What is the flow of critical information and data through the system?
* What is the necessary response time for an interface or a service?
* What is the sequence of interactions among the system and context elements
* What kind of test equipment is necessary to test the system elements?
* What shall be validated to the customer at system level?
* Which modes and states does the system have?
* Who provides the inputs to a critical function?
# Maintainer
Definition - Maintainer
individual or organization that performs maintenance activities, [ISO/IEC 12207:2008]
The Maintainer is an individual, group or organization responsible to maintain the system during its operational usage. The Maintainer assures the availability of the system over its foreseen lifetime. It involves obsolescence management, technology evolution, repair, update or replacement of parts of the system or even of the whole system. The Maintainer provides major non-functional requirements (e.g. reliability, availability, mean time to repair), but also functional requirements e.g. to ensure the compatibility with existing enabling systems.

## Concern
* How are error states handled?
* How to connect the system or a system element to a test equipment?
* How to ensure full Operational Capability of the system after maintenance activities with a system element or component? 
* How to install / de-install components to / from the system?
* What are the replaceable system components?
* What is the order information for each identified system element or component?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* Which modes and states does the system have?
# Mechanic Developer
Definition - Developer:
organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Mechanic Developer responsible for implementing the mechanical components.

## Concern
# Operator
Definition - Operator:
individual or organization that performs the operations of a system, [ISO/IEC 15288:2015 –Systems engineering - System life-cycle processes]

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
# Portfolio Manager


## Concern
* What Operational Capabilitys are defined? 

  ***Rationale:  I need to plan the systems capabilities to support operational capabilities.***
# Project Manager
Definition - Project Manager: The responsibility of the Project Manager is to make the right resources with the right skills available in time to get the identified work done. 

The Project Manager controls that the work packages are completed in time and agreed milestones are met.

A clear definition of the solution for the stated problem allows planning to be done properly.

Systems Engineering creates a clear and manageable system structure, which is the basis for project planning and task assignment.

## Concern
* What are the HW components to be provided?
* What are the SW components to be provided?
* What are the system delivery standards?
* What is the functional scope of each system delivery standard?
* What is the rational if requirements are not considered?
* What is the risk involved with each development item?
* What services are expected from external entities?
* When do product functions or features become available?
* Which development effort is associated with each individual element?
* Which functions will the system provide?
* Who provides the inputs to a critical function?
# Regulation Authority
Definition - Regulation Authority:
Regulation Authorities can have impact by imposing Stakeholder requirements against the system and by their involvement in the development and acceptance phases (e.g. safety or IT security acceptance audits). 

The term “authorities” also refers to current applicable regulations and laws.

The requirements stipulated on the system are diverse. They can be functional and non-functional requirements.

Systems Engineering must adhere to relevant standards and needs to demonstrate compliance with those standards and requirements.

## Concern
* How are applicable requirements considered in the system architecture?
* How are error states handled?
* What additional information the system or a system element needs to generate to enable testing?
* What is the rational if requirements are not considered?
* Which modes and states does the system have?
# Safety Expert
Definition - Safety Specialist:
Safety is one subject matter of specialty engineering but important enough to be treated separately. 
The safety experts evaluate a proposed system architecture and design for safety applying different analysis considering the criticality of the system functions. The result of the activity are safety requirements that need to be considered in the system design.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* How are error states handled?
* How are safety features verified?
* How do internal system elements interact with each other to provide the system function or service?
* How does a system function interact with its environment?
* How does criticality propagate down the system hierarchy?
* How is a critical function decomposed and allocated?
* What additional information the system or a system element needs to generate to enable testing?
* What are the contributors (SW and HW items contributing to a critical function) to a critical function?
* What are the encryption means used for an exchange?
* What are the external physical entities the system interacts with in the respective context?
* What are the failure modes of a system function?
* What are the hazards of a system function in an identified situation (context + scenario)?
* What are the inputs to a critical function?
* What are the planned architectural means for risk mitigation?
* What are the scenarios a system function is utilized in?
* What is the flow of critical information and data through the system?
* What is the necessary response time for an interface or a service?
* What is the possible harm in utilizing the system?
* What is the rational if requirements are not considered?
* What is the sequence of interactions among the system and context elements
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* What shall be validated to the customer at system level?
* Which functions will the system provide?
* Which information is exchanged between the system and external entitys?
* Which modes and states does the system have?
* Who provides the inputs to a critical function?
# Security Expert
Definition - Security Specialist:
Security is one subject matter of specialty engineering but important enough to be treated separately.
The IT-Security experts evaluate a proposed system architecture and design for IT-Security. One outcome of the activity are technical security requirements that need to be considered in the system design. Other outcomes affect the organization or the infrastructure of the user or define procedures that need to be implemented.

## Concern
* How are error states handled?
* How do internal system elements interact with each other to provide the system function or service?
* How is the interface between different domains protected?
* What additional information the system or a system element needs to generate to enable testing?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the confidentiality, integrity and availability levels for processed or exchanged information?
* What are the domains of similar security levels in the system or the system participates in?
* What are the encryption means used for an exchange?
* What are the interfaces between different domains?
* What are the protocols used for exchanging information?
* What are the requirements for security relevant IT-equipment?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
* What is the rational if requirements are not considered?
* What is the sequence of interactions among the system and context elements
* What kind of information is exchanged and processed within the system?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* What physical items are used building up the system?
* What shall be validated to the customer at system level?
* Which functions will the system provide?
* Which information is exchanged between the system and external entitys?
* Which modes and states does the system have?
# Software Developer
Definition - Developer:
organization that performs development tasks (including requirements analysis, design, testing through acceptance) during a life cycle process. [ISO/IEC 12207:2008]
The Developer is a group or an individual implementing the system parts according to defined requirements. On the lowest level of the system architecture there are the Software Developer responsible for implementing the software components.

## Concern
* How are error states handled?
* How does the system or a system element interact with the test environment?
* What additional information the system or a system element needs to generate to enable testing?
* What are data / information items exchanged?
* What are precision and accuracy requirements for presentation of data items on an interface?
* What are precision and accuracy requirements for processing of data items?
* What are the algorithms to be implemented?
* What are the encryption means used for an exchange?
* What are the formats of the exchanged items?
* What are the interface requirements regarding bandwidth, data throughput and latency?
* What are the non-functional requirements applying to SW (e.g. with regard to SW quality, modularization, changeability or reuse)?
* What are the protocols for exchanging items on an interface?
* What is the necessary accuracy and resolution for processing?
* What is the necessary performance for processing?
* What is the necessary response time for an interface or a service?
* What is the sequence of interactions among the system and context elements
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* Which SW interfaces are necessary?
* Which functions and services need to be implemented in SW?
* Which modes and states does the system have?
* Who provides the inputs to a critical function?
# Supplier
Definition - Supplier:
organization or an individual that enters into an agreement with the Acquirer for the supply of a product or service, [ISO/IEC 15288:2015 –Systems engineering - System life-cycle processes]
The Supplier is the organization or individual that enters into an agreement with the Acquirer to supply a product or service. Usually, the system architect and the developers for make-items are part of the supplier’s organization. Other terms commonly used for Supplier are contractor, producer, seller or vendor.

## Concern
* What are necessary enabling systems?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the Capabilities that are supported by the system?
* What are the external physical entities the system interacts with in the respective context?
* What are the geographical and physical locations of the intended / proposed elements of the solution?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the scenarios a system function is utilized in?
* What is the System Boundary definition?
* What is the lack / deficiency / gap in current Capability implementation that is addressed with the intended solution?
* What services are expected from external entities?
* Who are the Stakeholders involved in the intended solution?
# System Architect
Definition - System Architect:
The System Architect as an individual or group performing the systems engineering for the SOI (SoI). The system architect creates the system architecture i.e. the views as defined by the SAF.

## Concern
* Are safety related design principles) followed e.g. segregation of monitors or independence or redundant elements?
* Have the logical decomposition guidelines been followed?
* How are applicable requirements considered in the system architecture?
* How are error states handled?
* How do internal system elements interact with each other to provide the system function or service?
* How does a system function interact with its environment?
* How does criticality propagate down the system hierarchy?
* How does the elements of the test environment interact with each other?
* How does the system or a system element interact with the test environment?
* How is a critical function decomposed and allocated?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* What Performers or Resources are necessary to operate the intended solution?
* What additional information the system or a system element needs to generate to enable testing?
* What are necessary enabling systems?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the Capabilities that are supported by the system?
* What are the configuration items in the physical architecture?
* What are the consequences, if the Stakeholder’s concerns are not considered?
* What are the different contexts the system is embedded and utilized in?
* What are the encryption means used for an exchange?
* What are the external physical entities the system interacts with in the respective context?
* What are the geographical and physical locations of the intended / proposed elements of the solution?
* What are the normal and extreme environmental conditions for normal operation, for not operational, for storage and for transport?
* What are the physical components?
* What are the planned architectural means for risk mitigation?
* What are the scenarios a system function is utilized in?
* What are the system delivery standards?
* What existing elements of the organization, enterprise, or operational entity need to be integrated in the intended solution?
* What is the System Boundary definition?
* What is the allocation of functions to the physical architecture?
* What is the breakdown of functions into sub-functions?
* What is the configuration or version of each configuration item?
* What is the context of the organization, enterprise, or operational entity?
* What is the flow of critical information and data through the system?
* What is the functional scope of each system delivery standard?
* What is the lack / deficiency / gap in current Capability implementation that is addressed with the intended solution?
* What is the necessary accuracy and resolution for processing?
* What is the necessary response time for an interface or a service?
* What is the physical breakdown of the system?
* What is the rational if requirements are not considered?
* What is the sequence of interactions among the system and context elements
* What is the task executed by an organization, enterprise, or operational entity in the Operational Context?
* What kind of information or what kind of items are exchanged between the system and external entities (incl. actors)?
* What services are expected from external entities?
* What shall be validated to the customer at system level?
* What system elements are make-items, reuse items or COTS?
* Which Stakeholder are relevant to the system and might impose requirements?
* Which functions will the system provide?
* Which information is exchanged between the system and external entitys?
* Which modes and states does the system have?
* Which system function is addressed by system requirement?
* Which system functions are dependent on a systems mode or state?
* Who are the Stakeholders involved in the intended solution?
* Who provides the inputs to a critical function?
# System of Interest Stakeholder
Definition - System of Interest Stakeholder:
[SAF] the SOI Stakeholder is a generic Stakeholder. Imposes Stakeholder Requirement(s) on the system. The derived Stakeholder(s) have concern(s).
Note: Der SOI Stakeholder könnte SAF für SAF Entwicklung egal sein, denn SOI Stakeholder haben Requirement(s) / Concern(s) bezüglich eines mit dem SAF Framework zu entwickelnden Systems.

## Concern
# User
Definition - User:
individual or group that interacts with a system or benefits from a system during its utilization, [ISO/IEC 15288:2015 - Systems engineering - System life-cycle processes]
The User is the individual, organization or group that benefits from the operation of the system. The User provides the usage scenarios, the User needs and finally the user requirements representing most of the functional requirements but also non-functional requirements. The role of User and the role of operator are sometimes allocated, simultaneously or sequentially, to the same individual or organization. All the other stakeholders do not use the system for any purpose, and they do not need or require the system to satisfy any need. Therefore, interests of the User and claims of the Stakeholder could be contradicting.

## Concern
* How does a system function interact with its environment?
* How is the system being used or utilized and interacting with other external systems to satisfy user needs?
* What are necessary inputs for operating the system expected to be provided by other external entitys?
* What are the scenarios a system function is utilized in?
* What is the necessary response time for an interface or a service?
