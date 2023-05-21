function RegistrationNumbers(){
    var theRegNumber = "";
    var locIndicator
    var CARegNo = [];
    var GPRegNo = [];
    var ECRegNo = [];
    var CJRegNo = [];
   
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
        if (CARegNo.includes(theRegNumber.toUpperCase()) == false){
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
    function getRegLists(){
        return CARegNo,CJRegNo,ECRegNo,GPRegNo
    }
    return{
        setRegistration,
        getRegistration,
        checklocIndicator,
        CARegList,
        ECRegList,
        GPRegList,
        CJRegList,
        getRegLists
    }
}