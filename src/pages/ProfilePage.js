import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import validateState from "../validation/validateState.js";
import validateCountry from "../validation/validateCountry.js";
import validateCity from "../validation/validateCity.js";
import validateStreet from "../validation/validateStreet.js";
import validateHouse from "../validation/validateHouse.js";
import validateZip from "../validation/validateZip.js";
import validatePhone from "../validation/validatePhone.js";

const inputFirstName = document.getElementById("profile-first-name-input");
const inputLastName = document.getElementById("profile-last-name-input");
const inputState = document.getElementById("profile-state-input");
const inputCountry = document.getElementById("profile-country-input");
const inputCity = document.getElementById("profile-city-input");
const inputStreet = document.getElementById("profile-street-input");
const inputHouse = document.getElementById("profile-house-input");
const inputZip = document.getElementById("profile-zip-input");
const inputEmail = document.getElementById("profile-email-input");
const inputPhone = document.getElementById("profile-phone-input");
const inputPassword = document.getElementById("profile-password-input");
const inputReEnterPassword = document.getElementById(
  "profile-password-reenter-input"
);
const inputIsBusiness = document.getElementById("profile-isBiz-input");
const profileBtn = document.getElementById("profile-submit-btn");
const profilePasswordBtn = document.getElementById("profile-password-btn");
// מחייב להרשמה
let firstNameOk = true;
let lastNameOk = true;
let emailOk = true;
let passwordOk = true;
// לא מחייב להרשמה
let stateOk = true;
let countryOk = true;
let cityOk = true;
let streetOk = true;
let zipOk = true;
let houseOk = true;
let phoneOk = true;

let token = JSON.parse(localStorage.getItem("token"));
let users = JSON.parse(localStorage.getItem("users"));
////////////////////////////////////////////////

/////////////////////////////////////////////////////////
window.addEventListener("load", () => {
  if (!token) {
    return;
  }

  //resets all fields
  makeInputsAsTokenConnected();
});

//resetting the inputs to original of the user
const makeInputsAsTokenConnected = () => {
  let activeUser = users.find((user) => user.id === token.id);
  inputFirstName.value = activeUser.name.split(" ")[0];
  inputLastName.value = activeUser.name.split(" ")[1];
  inputState.value = activeUser.address.state;
  inputCountry.value = activeUser.address.country;
  inputCity.value = activeUser.address.city;
  inputStreet.value = activeUser.address.street;
  inputHouse.value = activeUser.address.houseNumber;
  inputZip.value = activeUser.address.zip;
  inputEmail.value = activeUser.email;
  inputPhone.value = activeUser.phone;
  inputPassword.value = activeUser.password;
  inputReEnterPassword.value = activeUser.password;
  inputIsBusiness.checked = activeUser.isBusiness;
  inputPassword.disabled = true;
  inputReEnterPassword.disabled = true;
  inputEmail.disabled = true;
};

profilePasswordBtn.addEventListener("click", () => {
  inputPassword.removeAttribute("disabled");
  inputReEnterPassword.removeAttribute("disabled");
  inputEmail.removeAttribute("disabled");
});

{
  inputFirstName.addEventListener("input", () => {
    checkFirstNameInput();
  });
  inputLastName.addEventListener("input", () => {
    checkLastNameInput();
  });
  inputState.addEventListener("input", () => {
    checkStateInput();
  });
  inputCountry.addEventListener("input", () => {
    checkCountryInput();
  });
  inputCity.addEventListener("input", () => {
    checkCityInput();
  });
  inputStreet.addEventListener("input", () => {
    checkStreetInput();
  });
  inputHouse.addEventListener("input", () => {
    checkHouseInput();
  });
  inputZip.addEventListener("input", () => {
    checkZipInput();
  });
  inputEmail.addEventListener("input", () => {
    checkEmailInput();
  });
  inputPhone.addEventListener("input", () => {
    checkPhoneInput();
  });
  inputPassword.addEventListener("input", () => {
    checkPasswordInput();
  });
  inputReEnterPassword.addEventListener("input", () => {
    checkReEnterPasswordInput();
  });
  inputIsBusiness.addEventListener("change", () => {
    isBusiness = inputIsBusiness.checked;
  });
  // ///////////////////////////////////////////////

  // First Name checking function
  const checkFirstNameInput = () => {
    let errorArr = validateName(inputFirstName.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputFirstName.classList.remove("is-invalid");
      document
        .getElementById("profile-first-name-error")
        .classList.add("d-none");
      document
        .getElementById("profile-first-name-rules")
        .classList.add("d-none");
      firstNameOk = true;
    } else {
      //the text is not ok
      inputFirstName.classList.add("is-invalid");
      document
        .getElementById("profile-first-name-error")
        .classList.remove("d-none");
      document
        .getElementById("profile-first-name-rules")
        .classList.remove("d-none");
      document.getElementById("profile-first-name-error").innerHTML =
        errorArr.join("<br>");
      firstNameOk = false;
    }
    checkIfCanEnableBtn();
  };

  // Last Name checking function
  const checkLastNameInput = () => {
    let errorArr = validateName(inputLastName.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputLastName.classList.remove("is-invalid");
      document
        .getElementById("profile-last-name-error")
        .classList.add("d-none");
      document
        .getElementById("profile-last-name-rules")
        .classList.add("d-none");
      lastNameOk = true;
    } else {
      //the text is not ok
      inputLastName.classList.add("is-invalid");
      document
        .getElementById("profile-last-name-error")
        .classList.remove("d-none");
      document
        .getElementById("profile-last-name-rules")
        .classList.remove("d-none");
      document.getElementById("profile-last-name-error").innerHTML =
        errorArr.join("<br>");
      lastNameOk = false;
    }
    checkIfCanEnableBtn();
  };
  // email checking function
  const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputEmail.classList.remove("is-invalid");
      document.getElementById("profile-email-error").classList.add("d-none");
      document.getElementById("profile-email-rules").classList.add("d-none");
      emailOk = true;
    } else {
      //the text is not ok
      inputEmail.classList.add("is-invalid");
      document.getElementById("profile-email-error").classList.remove("d-none");
      document.getElementById("profile-email-rules").classList.remove("d-none");
      document.getElementById("profile-email-error").innerHTML =
        errorArr.join("<br>");
      emailOk = false;
    }
    checkIfCanEnableBtn();
  };

  // password checking function
  const checkPasswordInput = () => {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputPassword.classList.remove("is-invalid");
      document.getElementById("profile-password-error").classList.add("d-none");
      document.getElementById("profile-password-rules").classList.add("d-none");
      passwordOk = true;
    } else {
      //the text is not ok
      inputPassword.classList.add("is-invalid");
      document
        .getElementById("profile-password-error")
        .classList.remove("d-none");
      document
        .getElementById("profile-password-rules")
        .classList.remove("d-none");
      document.getElementById("profile-password-error").innerHTML =
        errorArr.join("<br>");
      passwordOk = false;
    }
    //   checking if after changing the input value - the password are matching
    if (inputReEnterPassword.value === inputPassword.value) {
      passwordOk = true;
      inputReEnterPassword.classList.remove("is-invalid");
      document
        .getElementById("profile-password-reenter-error")
        .classList.add("d-none");
    } else {
      // because of the fact that changing the password after matching it with the other field is possible - another check of the equalization of both fields of passwords is required
      passwordOk = false;
      inputReEnterPassword.classList.add("is-invalid");
      document
        .getElementById("profile-password-reenter-error")
        .classList.remove("d-none");
      document.getElementById(
        "profile-password-reenter-error"
      ).innerText = `Passwords do not match!`;
    }
    checkIfCanEnableBtn();
  };
  // password re-enter checking function
  const checkReEnterPasswordInput = () => {
    if (inputReEnterPassword.value === inputPassword.value) {
      //the text is ok
      inputReEnterPassword.classList.remove("is-invalid");
      document
        .getElementById("profile-password-reenter-error")
        .classList.add("d-none");
      passwordOk = true;
    } else {
      //the text is not ok
      inputReEnterPassword.classList.add("is-invalid");
      document
        .getElementById("profile-password-reenter-error")
        .classList.remove("d-none");
      document.getElementById(
        "profile-password-reenter-error"
      ).innerText = `Passwords do not match!`;
      passwordOk = false;
    }
    //   checking if after changing the input value - the password are matching
    if (inputReEnterPassword.value === inputPassword.value) {
    } else {
    }
    checkIfCanEnableBtn();
  };
  // checking optional phone function
  const checkPhoneInput = () => {
    let errorArr = validatePhone(inputPhone.value);
    if (errorArr.length === 0 || inputPhone.value == "") {
      //the text is ok
      inputPhone.classList.remove("is-invalid");
      document.getElementById("profile-phone-error").classList.add("d-none");
      document.getElementById("profile-phone-rules").classList.add("d-none");
      phoneOk = true;
    } else {
      //the text is not ok
      inputPhone.classList.add("is-invalid");
      document.getElementById("profile-phone-error").classList.remove("d-none");
      document.getElementById("profile-phone-rules").classList.remove("d-none");
      document.getElementById("profile-phone-error").innerHTML =
        errorArr.join("<br>");
      phoneOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional state function
  const checkStateInput = () => {
    let errorArr = validateState(inputState.value);
    if (errorArr.length === 0 || inputState.value == "") {
      //the text is ok
      inputState.classList.remove("is-invalid");
      document.getElementById("profile-state-error").classList.add("d-none");
      document.getElementById("profile-state-rules").classList.add("d-none");
      stateOk = true;
    } else {
      //the text is not ok
      inputState.classList.add("is-invalid");
      document.getElementById("profile-state-error").classList.remove("d-none");
      document.getElementById("profile-state-rules").classList.remove("d-none");
      document.getElementById("profile-state-error").innerHTML =
        errorArr.join("<br>");
      stateOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional country function
  const checkCountryInput = () => {
    let errorArr = validateCountry(inputCountry.value);
    if (errorArr.length === 0 || inputCountry.value == "") {
      //the text is ok
      inputCountry.classList.remove("is-invalid");
      document.getElementById("profile-country-error").classList.add("d-none");
      document.getElementById("profile-country-rules").classList.add("d-none");
      countryOk = true;
    } else {
      //the text is not ok
      inputCountry.classList.add("is-invalid");
      document
        .getElementById("profile-country-error")
        .classList.remove("d-none");
      document
        .getElementById("profile-country-rules")
        .classList.remove("d-none");
      document.getElementById("profile-country-error").innerHTML =
        errorArr.join("<br>");
      countryOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional city function
  const checkCityInput = () => {
    let errorArr = validateCity(inputCity.value);
    if (errorArr.length === 0 || inputCity.value == "") {
      //the text is ok
      inputCity.classList.remove("is-invalid");
      document.getElementById("profile-city-error").classList.add("d-none");
      document.getElementById("profile-city-rules").classList.add("d-none");
      cityOk = true;
    } else {
      //the text is not ok
      inputCity.classList.add("is-invalid");
      document.getElementById("profile-city-error").classList.remove("d-none");
      document.getElementById("profile-city-rules").classList.remove("d-none");
      document.getElementById("profile-city-error").innerHTML =
        errorArr.join("<br>");
      cityOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional street function
  const checkStreetInput = () => {
    let errorArr = validateStreet(inputStreet.value);
    if (errorArr.length === 0 || inputStreet.value == "") {
      //the text is ok
      inputStreet.classList.remove("is-invalid");
      document.getElementById("profile-street-error").classList.add("d-none");
      document.getElementById("profile-street-rules").classList.add("d-none");
      streetOk = true;
    } else {
      //the text is not ok
      inputStreet.classList.add("is-invalid");
      document
        .getElementById("profile-street-error")
        .classList.remove("d-none");
      document
        .getElementById("profile-street-rules")
        .classList.remove("d-none");
      document.getElementById("profile-street-error").innerHTML =
        errorArr.join("<br>");
      streetOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional house function
  const checkHouseInput = () => {
    let errorArr = validateHouse(inputHouse.value);
    if (errorArr.length === 0 || inputHouse.value == "") {
      //the text is ok
      inputHouse.classList.remove("is-invalid");
      document.getElementById("profile-house-error").classList.add("d-none");
      document.getElementById("profile-house-rules").classList.add("d-none");
      houseOk = true;
    } else {
      //the text is not ok
      inputHouse.classList.add("is-invalid");
      document.getElementById("profile-house-error").classList.remove("d-none");
      document.getElementById("profile-house-rules").classList.remove("d-none");
      document.getElementById("profile-house-error").innerHTML =
        errorArr.join("<br>");
      houseOk = false;
    }
    checkIfCanEnableBtn();
  };
  // checking optional Zip function
  const checkZipInput = () => {
    let errorArr = validateZip(inputZip.value);
    if (errorArr.length === 0 || inputZip.value == "") {
      //the text is ok
      inputZip.classList.remove("is-invalid");
      document.getElementById("profile-zip-error").classList.add("d-none");
      document.getElementById("profile-zip-rules").classList.add("d-none");
      zipOk = true;
    } else {
      //the text is not ok
      inputZip.classList.add("is-invalid");
      document.getElementById("profile-zip-error").classList.remove("d-none");
      document.getElementById("profile-zip-rules").classList.remove("d-none");
      document.getElementById("profile-zip-error").innerHTML =
        errorArr.join("<br>");
      zipOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkIfCanEnableBtn = () => {
    profileBtn.disabled = !(
      firstNameOk &&
      lastNameOk &&
      emailOk &&
      passwordOk &&
      stateOk &&
      countryOk &&
      cityOk &&
      streetOk &&
      zipOk &&
      houseOk &&
      phoneOk
    );
  };
}

profileBtn.addEventListener("click", () => {
  if (!localStorage.getItem("users")) {
    alert(
      "An Issue Accured: someone deleted the users data from the local storage 😁"
    );
    return;
  }
  const response = confirm("Are you sure you want to change details?");
  if (!response) {
    makeInputsAsTokenConnected();
    return;
  }
  let userOfEmail = users.find((item) => item.email === inputEmail.value);
  let user = users.find((item) => item.id === token.id);
  if (userOfEmail && user.id !== userOfEmail.id) {
    alert("Email already exists!");
    inputEmail.value = token.email;
    return;
  }
  let activeUserCart;
  users = JSON.parse(localStorage.getItem("users"));
  for (let user of users) {
    if (user.id === token.id) {
      activeUserCart = user.cart;
      break;
    }
  }

  for (let user of users) {
    if (user.id === token.id) {
      user.name = inputFirstName.value + " " + inputLastName.value;
      user.address.state = inputState.value;
      user.address.country = inputCountry.value;
      user.address.city = inputCity.value;
      user.address.street = inputStreet.value;
      user.address.houseNumber = inputHouse.value;
      user.address.zip = inputZip.value;
      user.email = inputEmail.value;
      user.phone = inputPhone.value;
      user.password = inputPassword.value;
      user.isBusiness = inputIsBusiness.checked;
      user.cart = activeUserCart;
      console.log("cart: " + user.cart);
      localStorage.setItem(
        "token",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          isBusiness: user.isBusiness,
        })
      );
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
});

export default makeInputsAsTokenConnected;
