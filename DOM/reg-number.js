var RegNumbers = RegistrationNumbers();
var addBtn = document.querySelector(".addBtn");
var showBtn = document.querySelector(".show");
var regInputNumber = document.querySelector(".regNo");
var container = document.querySelector(".display");
var selected = document.getElementById("towns");
var messageText = document.querySelector(".messageText")
var caArray = [];
var ecArray = [];
var gpArray = [];
var cjArray = [];
var allArray = [];

addBtn.addEventListener("click", function () {
  var value = regInputNumber.value;
  var regNoText = "";
  RegNumbers.setRegistration(value);
  let locationn = RegNumbers.checklocIndicator().toUpperCase();

while (container.firstChild) {
  container.removeChild(container.firstChild);
}
 

if (value != "") {
  
  if (locationn == "CA") {
    caArray = RegNumbers.CARegList();
    allArray = RegNumbers.getAllRegistrations();
    localStorage["CA"] = JSON.stringify(RegNumbers.CARegList());
  }
  if (locationn == "EC") {
    ecArray = RegNumbers.ECRegList();
    allArray = RegNumbers.getAllRegistrations();
    localStorage["EC"] = JSON.stringify(RegNumbers.ECRegList());
  }
  if (locationn == "CJ") {
    cjArray = RegNumbers.CJRegList();
    allArray = RegNumbers.getAllRegistrations();
    localStorage["CJ"] = JSON.stringify(RegNumbers.CJRegList());
  }
  if (locationn == "GP") {
    gpArray = RegNumbers.GPRegList();
    allArray = RegNumbers.getAllRegistrations();
    localStorage["GP"] = JSON.stringify(RegNumbers.GPRegList());
  }
  
  localStorage["allTowns"] = JSON.stringify(RegNumbers.getAllRegistrations());

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
  if (selectedTown == "ALL") {
    for (let i = 0; i < allArray.length; i++) {
      const element = allArray[i];
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(allArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
    }
  }
  if (selectedTown == "CA") {
    
    for (let i = 0; i < caArray.length; i++) {
      const element = caArray[i];
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(caArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
    }
  }
  if (selectedTown == "EC") {
    for (let i = 0; i < ecArray.length; i++) {
      const element = ecArray[i];
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(ecArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
    }
  }
  if (selectedTown == "GP") {
    for (let i = 0; i < gpArray.length; i++) {
      const element = gpArray[i];
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(gpArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
    }
  }
  if (selectedTown == "CJ") {

    for (let i = 0; i < cjArray.length; i++) {
      var newDiv = document.createElement("div");
      regNoText = document.createTextNode(cjArray[i]);
      newDiv.appendChild(regNoText);
      container.appendChild(newDiv);
      newDiv.classList.add(RegNumbers.classListDisplay())
    }
  }
});
