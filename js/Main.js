var registerName = document.getElementById("registerName");
var registerEmail = document.getElementById("registerEmail");
var registerPassword = document.getElementById("registerPassword");
var alert = document.querySelector("#alert");
var alertLogin = document.querySelector("#alertLogin");
var email = document.getElementById("email");
var password = document.getElementById("password");
var logButtom = document.getElementById("logButtom");
var welcomeLog = document.getElementById("welcome");
var logoutButton = document.getElementById("logoutButton");
var form = document.getElementById("form");
var clients = [];
if(localStorage.getItem("clients")!=null){
    clients=JSON.parse(localStorage.getItem("clients"));
}
function addClient() {
  if (nameValidation() == true && EmailValidation() == true&&passwordValidation) {
    var client = {
      name: registerName.value,
      email: registerEmail.value,
      password: registerPassword.value,
    };
    clients.push(client);
    alert.classList.remove("d-none");
    localStorage.setItem("clients", JSON.stringify(clients));
  }
}
function logIn() {
  clients = JSON.parse(localStorage.getItem("clients"));
  for (let i = 0; i < clients.length; i++) {
    if (
      clients[i].email.toLowerCase() == email.value.toLowerCase() &&
      clients[i].password == password.value
    ) {
     localStorage.setItem("sessionName",clients[i].name);
     logButtom.setAttribute("href","Home.html")
    }else{
        alertLogin.classList.remove("d-none");
    }
  }
}

function nameValidation() {
  let regex = /^([A-Za-z0-9]{3,}\s?([A-Za-z0-9])*)+$/;
  if (regex.test(registerName.value)) {
    registerName.classList.add("is-valid");
    registerName.classList.remove("is-invalid");
    return true;
  } else {
    registerName.classList.add("is-invalid");
    registerName.classList.remove("is-valid");
    return false;
  }
}
welcomeLog.innerHTML=localStorage.getItem("sessionName")
function EmailValidation() {
  let regex = /^[A-Za-z0-9]{3,}\s?@[A-Za-z0-9]{3,}\.[a-zA-Z]{2,3}$/;
  if (regex.test(registerEmail.value)) {
    registerEmail.classList.add("is-valid");
    registerEmail.classList.remove("is-invalid");
    return true;
  } else {
    registerEmail.classList.add("is-invalid");
    registerEmail.classList.remove("is-valid");
    return false;
  }
}
function passwordValidation() {
  let regex = /^[A-Za-z0-9@#$%&*_]{4,}$/;
  if (regex.test(registerPassword.value)) {
    registerPassword.classList.add("is-valid");
    registerPassword.classList.remove("is-invalid");
    return true;
  } else {
    registerPassword.classList.add("is-invalid");
    registerPassword.classList.remove("is-valid");
    return false;
  }
}
function logOut(){
    logoutButton.setAttribute("href","index.html")
    localStorage.removeItem("sessionName")
}
