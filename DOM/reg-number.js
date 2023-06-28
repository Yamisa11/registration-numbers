var addBtn = document.querySelector(".addBtn");
var showBtn = document.querySelector(".show");
var regInputNumber = document.querySelector(".regNo");
var container = document.querySelector(".display");
var selected = document.getElementById("towns");
var messageText = document.querySelector(".messageText")
var allArray = JSON.parse(localStorage.getItem("allTowns")) || [];
var RegNumbers = RegistrationNumbers(allArray);
for (let i = 0; i < allArray.length; i++) {
  
  var newDiv = document.createElement("div");
  regNoText = document.createTextNode(allArray[i]);
  newDiv.appendChild(regNoText);
  container.appendChild(newDiv);
 newDiv.classList.add(RegNumbers.classListDisplay())
}

addBtn.addEventListener("click", function () {
  var value = regInputNumber.value;
  var regNoText = "";
  RegNumbers.setRegistration(value);
  let locationn = RegNumbers.checklocIndicator().toUpperCase();

while (container.firstChild) {
  container.removeChild(container.firstChild);
}
 

if (value != "") {
  if (RegNumbers.existsReg() == true) {
    messageText.innerHTML = " Oopps! registration number already exists"
      messageText.classList.add("warning")
    
      setTimeout(() => {
        messageText.classList.remove("warning");
        messageText.innerHTML = "";
      }, 4000);
  }else{

  if (locationn == "CA" || locationn == "EC" || locationn == "CJ" || locationn == "GP") {
    if (RegNumbers.regexRe() === true) {
      messageText.innerHTML = RegNumbers.errors()
      messageText.classList.add("errorDisplay")
    
      setTimeout(() => {
        messageText.classList.remove("errorDisplay");
        messageText.innerHTML = "";
      }, 4000);
    }
    else{
  
      allArray = RegNumbers.getAllRegistrations();
    
      localStorage["allTowns"] = JSON.stringify(RegNumbers.getAllRegistrations());
    }
    }else{
      messageText.innerHTML = RegNumbers.errors()
      messageText.classList.add("errorDisplay")
    
      setTimeout(() => {
        messageText.classList.remove("errorDisplay");
        messageText.innerHTML = "";
      }, 4000);
    }
  }
  
  

}else{
  messageText.innerHTML = RegNumbers.errors()
  messageText.classList.add("errorDisplay")

  setTimeout(() => {
    messageText.classList.remove("errorDisplay");
    messageText.innerHTML = "";
  }, 4000);
}
  


 for (let i = 0; i < allArray.length; i++) {
  
    var newDiv = document.createElement("div");
    regNoText = document.createTextNode(allArray[i]);
    newDiv.appendChild(regNoText);
    container.appendChild(newDiv);
   newDiv.classList.add(RegNumbers.classListDisplay())
}

regInputNumber.value = ""
});


showBtn.addEventListener("click", function () {
  var selectedTown = selected.value;

  var value = regInputNumber.value;
  var regNoText = "";
  RegNumbers.setRegistration(value);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let locationn = RegNumbers.checklocIndicator().toUpperCase();
 
    for (let i = 0; i < allArray.length; i++) {
      const element = allArray[i];
     if (element.startsWith(selectedTown)) {
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(allArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
     }
    }
    if(selectedTown == "ALL"){
      if (allArray.length != 0) {
        for (let i = 0; i < allArray.length; i++) {
          const element = allArray[i];
          var newDiv = document.createElement("div");
          regNoText = document.createTextNode(allArray[i]);
          newDiv.appendChild(regNoText);
          container.appendChild(newDiv);
          newDiv.classList.add(RegNumbers.classListDisplay())
        }
        
      }else{
        messageText.innerHTML = "No available registration"
        messageText.classList.add("errorDisplay")
      
        setTimeout(() => {
          messageText.classList.remove("errorDisplay");
          messageText.innerHTML = "";
        }, 4000);
      }
    }
 
});
