/*
 * events.js
 *
*/
// document.querySelector("form").focus();

// var nameInput = document.getElementById("name");
// nameInput.addEventListener("blur", checkName, false);
// nameInput.addEventListener("submit", checkName, false);
//
// var emailInput = document.getElementById("email");
// emailInput.addEventListener("blur", checkEmail, false);
// emailInput.addEventListener("submit", checkEmail, false);
//
// var phoneInput = document.getElementById("phone");
// phoneInput.addEventListener("blur", checkPhone, false);
// phoneInput.addEventListener("submit", checkPhone, false);
//
// var messageText = document.getElementById("message");
// messageText.addEventListener("blur", checkMessage, false);
// messageText.addEventListener("submit", checkMessage, false);

//NAME VALIDATION
function checkName(){
  var errorName = document.getElementById("errorName");

  if(this.value.length <= 0){
    errorName.textContent = "Please enter your name";
    errorEmail.textContent = "";
    errorPhone.textContent = "";
    errorMessage.textContent = "";
    // errorName.style.marginBottom = "3%";
  }

  else{
    errorName.textContent = "";
  }
}

//EMAIL VALIDATION
function checkEmail(){
  var errorEmail = document.getElementById("errorEmail");

  if(this.value.length <= 0){
    errorEmail.textContent = "Please enter your email address";
    // errorEmail.style.marginBottom = "3%";
  }

  if(this.value.length < 12){
    errorEmail.textContent = "This doesn't appear to be a valid email address";
    errorName.textContent = "";
    errorPhone.textContent = "";
    errorMessage.textContent = "";
    // errorEmail.style.marginBottom = "3%";
  }

  else{
    errorEmail.textContent = "";
  }
}

//PHONE VALIDATION
function checkPhone(){
  var errorPhone = document.getElementById("errorPhone");

  if(this.value.length <= 0){
    errorPhone.textContent = "Please enter your phone number";
    // errorEmail.style.marginBottom = "3%";
  }

  if(this.value.length < 10){
    errorPhone.textContent = "This doesn't appear to be a valid phone number";
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";
    // errorEmail.style.marginBottom = "3%";
  }

  else{
    errorPhone.textContent = "";
  }
}

//MESSAGE VALIDATION
function checkMessage(){
  var errorMessage = document.getElementById("errorMessage");

  if(this.value.length <= 0){
    errorMessage.textContent = "Please enter a message";
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPhone.textContent = "";
    errorMessage.style.marginTop = "12%";
    errorMessage.style.marginBottom = "1%";
  }

  else{
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
}
