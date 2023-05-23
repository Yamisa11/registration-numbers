function RegistrationNumbers(){
    var theRegNumber = "";
    var locIndicator
    var CARegNo = [];
    var GPRegNo = [];
    var ECRegNo = [];
    var CJRegNo = [];
    var allRegistrations = []

   
    function setRegistration(regNumber){
        theRegNumber = regNumber;
    }
    function getRegistration(){
        return theRegNumber.toUpperCase()
    }
    function checklocIndicator(){
        locIndicator = theRegNumber.slice(0,2)
        return locIndicator;
    }
    function CARegList(){
        if (CARegNo.includes(theRegNumber.toUpperCase()) == false ){
            CARegNo.push(theRegNumber.toUpperCase())
        }
       return CARegNo
    }
    function CJRegList(){
        if (CJRegNo.includes(theRegNumber.toUpperCase()) == false){
            CJRegNo.push(theRegNumber.toUpperCase())
        }
      return CJRegNo
    }
    function GPRegList(){
        if (GPRegNo.includes(theRegNumber.toUpperCase()) == false){
            GPRegNo.push(theRegNumber.toUpperCase())
        }
     return GPRegNo
    }
    function ECRegList(){
        if (ECRegNo.includes(theRegNumber.toUpperCase()) == false){
            ECRegNo.push(theRegNumber.toUpperCase())
        }
       return ECRegNo
    }
    function getAllRegistrations(){
        if (allRegistrations.includes(theRegNumber.toUpperCase()) == false){
            allRegistrations.push(theRegNumber.toUpperCase())
        }
       return allRegistrations
    }
    function getRegLists(){
        return {CARegNo,CJRegNo,ECRegNo,GPRegNo}
    }
    function classListDisplay(){
        return "displayReg"
    }
    function errors(){
        if (theRegNumber == ""){
            return "Please enter registration number!"
        }
        if (allRegistrations.length < 1){
            return "No registrations available!"
        }
    }
    return{
        setRegistration,
        getRegistration,
        checklocIndicator,
        CARegList,
        ECRegList,
        GPRegList,
        CJRegList,
        getRegLists,
        getAllRegistrations,
        classListDisplay,
        errors
    }
}