var RegNumbers = RegistrationNumbers()
var addBtn = document.querySelector(".addBtn")
var regInputNumber = document.querySelector(".regNo") 
var container = document.querySelector(".container")


addBtn.addEventListener('click', function (){
 var value = regInputNumber.value 
 var regNoText = "";
 RegNumbers.setRegistration(value)
 let locationn = RegNumbers.checklocIndicator().toUpperCase();
    // RegNumbers.setRegistration(value)
  
    var newDiv = document.createElement("div");
  regNoText= document.createTextNode(locationn+value.slice(2))
    newDiv.appendChild(regNoText)
    container.appendChild(newDiv)
 
  if (locationn == "CA") {
    localStorage["CA"] = JSON.stringify(RegNumbers.CARegList());
  }
  if (locationn == "EC"){
    localStorage["EC"] = JSON.stringify(RegNumbers.ECRegList());
  }
  if (locationn == "CJ") {
    localStorage["CJ"] = JSON.stringify(RegNumbers.CJRegList());
  }
  if (locationn == "GP") {
    localStorage["GP"] = JSON.stringify(RegNumbers.GPRegList());
  }




   
})
   

