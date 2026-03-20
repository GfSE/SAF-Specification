package FFDS_Context_Definition {

    part def FFDS;
    part def Fire;
    part def Climate;

    part def Research_Analysis_System;
    part def Fire_Department_System;
    part def Satellite_System;
    part def Meteorology_System;

    part def Operator;
    part def Administrator;
    part def Maintainer;

    part def FFDS_Context {

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
    }
}