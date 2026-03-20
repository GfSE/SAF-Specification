package SAF_Library {


    // domain items
    abstract item def SAF_DomainItem;

    // context elements
    abstract part def SAF_ContextElement;

    abstract part def SAF_SOI specializes SAF_ContextElement;

    abstract part def SAF_ExternalSystem specializes SAF_ContextElement;

    abstract part def SAF_Environment specializes SAF_ContextElement;

    abstract part def SAF_User specializes SAF_ContextElement;

    // system context

    abstract part def SAF_SystemContext {

        constraint OneSOI {
            self.parts->select(p | p.oclIsKindOf(SAF_SOI))->size() == 1
        }

        constraint OnlyContextElements {
            self.parts->forAll(p | p.oclIsKindOf(SAF_ContextElement))
        }
    }

 
}

package FFDS_DomainItems {

    public import SAF_Library::*;
    item def FireDetectionData specializes SAF_DomainItem;

    item def AlertNotification specializes SAF_DomainItem;

}

package FFDS_InterfaceDefs {

    public import FFDS_DomainItems::*;

    port def FireDataOutPort {
        out FireDetectionData;
    }

    port def FireDataInPort {
        in FireDetectionData;
    }

    port def AlertOutPort {
        out AlertNotification;
    }

    port def AlertInPort {
        in AlertNotification;
    }

}

package FFDS_Definition {

    public import SAF_Library::*;
    public import FFDS_InterfaceDefs::*;

    part def FireDetectionData;

    part def AlertNotification;

    part def FFDS
    specializes SAF_SOI{

        port satelliteIn : FireDataInPort;

        port alertOut : AlertOutPort;
    }
}

package Satellite_System_Definition {

    public import SAF_Library::*;
    public import FFDS_InterfaceDefs::*;

    part def Satellite_System specializes SAF_ExternalSystem{

        port dataOut : FireDataOutPort;
    }
}

package Operators_Definition {

    public import SAF_Library::*;
    public import FFDS_InterfaceDefs::*;

    part def Operator specializes SAF_User {

        port alertIn : AlertInPort;
    }

    part def Administrator specializes SAF_User;

    part def Maintainer specializes SAF_User;

}

package FFDS_Context_Definition {

    public import SAF_Library::*;
    public import FFDS_Definition::*;
    public import Satellite_System_Definition::*;
    public import Operators_Definition::*;
    public import FFDS_DomainItems::*;
    public import FFDS_InterfaceDefs::*;

    part def Fire specializes SAF_Environment;

    part def Climate specializes SAF_Environment;

    part def Research_Analysis_System specializes SAF_ExternalSystem;

    part def Fire_Department_System specializes SAF_ExternalSystem;

    part def Meteorology_System specializes SAF_ExternalSystem;

    part def FFDS_Context specializes SAF_SystemContext {

        part ffds : FFDS[1];

        part fire : Fire[0..*];
        part climate : Climate[1..*];

        part researchAnalysis : Research_Analysis_System[1..*];
        part fireDepartment : Fire_Department_System[1..*];
        part satellite : Satellite_System[1..*];
        part meteorology : Meteorology_System[1..*];

        part operator : Operator;
        part administrator : Administrator;
        part maintainer : Maintainer;

        //connections
        connection ffdsToOperator connect ffds.alertOut to operator.alertIn {
            flow from ffds.alertOut to operator.alertIn {
                item payload : AlertNotification;
            }
        }

        connection satToFfds connect satellite.dataOut to ffds.satelliteIn {
            flow from satellite.dataOut to ffds.satelliteIn {
                item payload : FireDetectionData;
            }
        }

    }
}
