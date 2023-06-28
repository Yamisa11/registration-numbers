function RegistrationNumbers(list){
    var theRegNumber = "";
    var locIndicator
   var regex = /[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    var allRegistrations = list || []

   
    function setRegistration(regNumber){
        theRegNumber = regNumber.trim();
    }
    function getRegistration(){
        return theRegNumber.toUpperCase()
    }
    function checklocIndicator(){
        locIndicator = theRegNumber.slice(0,2)
        return locIndicator;
    }

    function getAllRegistrations(){
        if (regex.test(theRegNumber) === false) {
        if (allRegistrations.includes(theRegNumber.toUpperCase()) == false){
            allRegistrations.push(theRegNumber.toUpperCase())
        }
    }
    return allRegistrations
    }
    function classListDisplay(){
        return "displayReg"
    }
  function regexRe(){
    if (regex.test(theRegNumber) === true){
        return true
    }
  }
    function errors(){

        
            return "Please enter valid registration number!"
      
    }
    return{
        setRegistration,
        getRegistration,
        checklocIndicator,
        getAllRegistrations,
        classListDisplay,
        errors,
        regexRe
    }
}