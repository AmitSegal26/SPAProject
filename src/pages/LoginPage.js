import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import handlePageChange from "../routes/router.js";
import PAGES from "../models/pageModel.js";

const inputEmail = document.getElementById("login-email-input");
const inputPassword = document.getElementById("login-password-input");
const loginBtn = document.getElementById("login-submit-btn");
let emailOk;
let passwordOk;

loginBtn.addEventListener("click", () => {
  emailOk = false;
  passwordOk = false;
  //checking if fields are validated
  if (validateEmail(inputEmail.value).length) {
    return;
  }
  if (validatePassword(inputPassword.value).length) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    return;
  }

  //specifing the problem logging in
  for (let item of users) {
    if (item.email === inputEmail.value) {
      emailOk = true;
      if (item.password === inputPassword.value) {
        passwordOk = true;
        break;
      }
    }
  }
  //   no email found
  if (!emailOk) {
    alert(`No Email "${inputEmail.value}" Found`);
    return;
  }
  //wrong password for this email which we found
  if (!passwordOk) {
    alert(`Wrong Password!`);
    return;
  }

  let user = users.find(
    (item) =>
      item.email === inputEmail.value && item.password === inputPassword.value
  );

  // remember who connected (generates new token)
  localStorage.setItem(
    "token",
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      isBusiness: user.isBusiness,
    })
  );
  location.reload();
});

inputEmail.addEventListener("input", () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    //no error
    inputEmail.classList.remove("is-invalid");
    document.getElementById("login-email-error").classList.add("d-none");
  } else {
    // error/s
    inputEmail.classList.add("is-invalid");
    document.getElementById("login-email-error").classList.remove("d-none");
    document.getElementById("login-email-error").innerHTML =
      errorArr.join("<br>");
  }
});

inputPassword.addEventListener("input", () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    //no error
    inputPassword.classList.remove("is-invalid");
    document.getElementById("login-password-error").classList.add("d-none");
  } else {
    // error/s
    inputPassword.classList.add("is-invalid");
    document.getElementById("login-password-error").classList.remove("d-none");
    document.getElementById("login-password-error").innerHTML =
      errorArr.join("<br>");
  }
});
