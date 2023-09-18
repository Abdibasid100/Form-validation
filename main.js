let Username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmedPass = document.querySelector(".confirmedPassword");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkinputs();
});

function checkinputs() {
  const UsenameValue = Username.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  const confirmedPassValue = confirmedPass.value.trim();

  if (UsenameValue === "") {
    showError(Username, "Username can't be blank");
  } else {
    showSucceed(Username);
  }
  if (emailValue === "") {
    showError(email, "Email can't be blank");
  } else if (!isEmail(emailValue)) {
    showError(email, "Email isn't valid");
  } else {
    showSucceed(email);
  }

  //Password

  if (passValue === "") {
    showError(password, "Password can't be blank");
  } else {
    showSucceed(password);
  }

  //Confirmed password

  if (confirmedPassValue === "") {
    showError(confirmedPass, "Confirmed Password can't be blank");
  } else if (passValue !== confirmedPassValue) {
    showError(confirmedPass, "confirmed Password  does'nt match");
  } else {
    showSucceed(confirmedPass);
  }
}

function showError(input, message) {
  let form_Control = input.parentElement;
  let small = form_Control.querySelector("small");
  let i = form_Control.querySelectorAll("i")[1];

  small.innerText = message;
  small.style.display = "block";
  form_Control.className = "form-control error";
  i.style.display = "block";
}

function showSucceed(input) {
  let form_Control = input.parentElement;

  form_Control.className = "form-control success";
  let small = form_Control.querySelector("small");
  let i2 = form_Control.querySelectorAll("i")[0];
  let i = form_Control.querySelectorAll("i")[1];

  small.style.display = "none";

  i2.style.display = "block";
  i.style.display = "none";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
