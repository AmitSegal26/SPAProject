import PAGES from "../models/pageModel.js";
import handlePageChange from "../routes/router.js";
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
import User from "../models/User.js";
import Address from "../models/Address.js";

const inputFirstName = document.getElementById("register-first-name-input");
const inputLastName = document.getElementById("register-last-name-input");
const inputState = document.getElementById("register-state-input");
const inputCountry = document.getElementById("register-country-input");
const inputCity = document.getElementById("register-city-input");
const inputStreet = document.getElementById("register-street-input");
const inputHouse = document.getElementById("register-house-input");
const inputZip = document.getElementById("register-zip-input");
const inputEmail = document.getElementById("register-email-input");
const inputPhone = document.getElementById("register-phone-input");
const inputPassword = document.getElementById("register-password-input");
const inputReEnterPassword = document.getElementById(
  "register-password-reenter-input"
);
const inputIsBusiness = document.getElementById("register-isBiz-input");
const registerBtn = document.getElementById("register-submit-btn");
// מחייב להרשמה
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
// לא מחייב להרשמה
let stateOk = true;
let countryOk = true;
let cityOk = true;
let streetOk = true;
let zipOk = true;
let houseOk = true;
let phoneOk = true;
let isBusiness = false;
////////////////////////////////////////////////

/////////////////////////////////////////////////////////
window.addEventListener("load", () => {
  clearInputs();
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
        .getElementById("register-first-name-error")
        .classList.add("d-none");
      firstNameOk = true;
    } else {
      //the text is not ok
      inputFirstName.classList.add("is-invalid");
      document
        .getElementById("register-first-name-error")
        .classList.remove("d-none");
      document.getElementById("register-first-name-error").innerHTML =
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
        .getElementById("register-last-name-error")
        .classList.add("d-none");
      lastNameOk = true;
    } else {
      //the text is not ok
      inputLastName.classList.add("is-invalid");
      document
        .getElementById("register-last-name-error")
        .classList.remove("d-none");
      document.getElementById("register-last-name-error").innerHTML =
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
      document.getElementById("register-email-error").classList.add("d-none");
      emailOk = true;
    } else {
      //the text is not ok
      inputEmail.classList.add("is-invalid");
      document
        .getElementById("register-email-error")
        .classList.remove("d-none");
      document.getElementById("register-email-error").innerHTML =
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
      document
        .getElementById("register-password-error")
        .classList.add("d-none");
      passwordOk = true;
    } else {
      //the text is not ok
      inputPassword.classList.add("is-invalid");
      document
        .getElementById("register-password-error")
        .classList.remove("d-none");
      document.getElementById("register-password-error").innerHTML =
        errorArr.join("<br>");
      passwordOk = false;
    }
    //   checking if after changing the input value - the password are matching
    if (inputReEnterPassword.value === inputPassword.value) {
      passwordOk = true;
      inputReEnterPassword.classList.remove("is-invalid");
      document
        .getElementById("register-password-reenter-error")
        .classList.add("d-none");
    } else {
      // because of the fact that changing the password after matching it with the other field is possible - another check of the equalization of both fields of passwords is required
      passwordOk = false;
      inputReEnterPassword.classList.add("is-invalid");
      document
        .getElementById("register-password-reenter-error")
        .classList.remove("d-none");
      document.getElementById(
        "register-password-reenter-error"
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
        .getElementById("register-password-reenter-error")
        .classList.add("d-none");
      passwordOk = true;
    } else {
      //the text is not ok
      inputReEnterPassword.classList.add("is-invalid");
      document
        .getElementById("register-password-reenter-error")
        .classList.remove("d-none");
      document.getElementById(
        "register-password-reenter-error"
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
      document.getElementById("register-phone-error").classList.add("d-none");
      phoneOk = true;
    } else {
      //the text is not ok
      inputPhone.classList.add("is-invalid");
      document
        .getElementById("register-phone-error")
        .classList.remove("d-none");
      document.getElementById("register-phone-error").innerHTML =
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
      document.getElementById("register-state-error").classList.add("d-none");
      stateOk = true;
    } else {
      //the text is not ok
      inputState.classList.add("is-invalid");
      document
        .getElementById("register-state-error")
        .classList.remove("d-none");
      document.getElementById("register-state-error").innerHTML =
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
      document.getElementById("register-country-error").classList.add("d-none");
      countryOk = true;
    } else {
      //the text is not ok
      inputCountry.classList.add("is-invalid");
      document
        .getElementById("register-country-error")
        .classList.remove("d-none");
      document.getElementById("register-country-error").innerHTML =
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
      document.getElementById("register-city-error").classList.add("d-none");
      cityOk = true;
    } else {
      //the text is not ok
      inputCity.classList.add("is-invalid");
      document.getElementById("register-city-error").classList.remove("d-none");
      document.getElementById("register-city-error").innerHTML =
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
      document.getElementById("register-street-error").classList.add("d-none");
      streetOk = true;
    } else {
      //the text is not ok
      inputStreet.classList.add("is-invalid");
      document
        .getElementById("register-street-error")
        .classList.remove("d-none");
      document.getElementById("register-street-error").innerHTML =
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
      document.getElementById("register-house-error").classList.add("d-none");
      houseOk = true;
    } else {
      //the text is not ok
      inputHouse.classList.add("is-invalid");
      document
        .getElementById("register-house-error")
        .classList.remove("d-none");
      document.getElementById("register-house-error").innerHTML =
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
      document.getElementById("register-zip-error").classList.add("d-none");
      zipOk = true;
    } else {
      //the text is not ok
      inputZip.classList.add("is-invalid");
      document.getElementById("register-zip-error").classList.remove("d-none");
      document.getElementById("register-zip-error").innerHTML =
        errorArr.join("<br>");
      zipOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkIfCanEnableBtn = () => {
    registerBtn.disabled = !(
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
    //   gotta change that!
  };
}

const clearInputs = () => {
  inputFirstName.value = "";
  inputLastName.value = "";
  inputState.value = "";
  inputCountry.value = "";
  inputCity.value = "";
  inputStreet.value = "";
  inputHouse.value = "";
  inputZip.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputPassword.value = "";
  inputReEnterPassword.value = "";
  inputIsBusiness.checked = false;
  //resets all fields
};

registerBtn.addEventListener("click", () => {
  let userId = JSON.parse(localStorage.getItem("nextuserid"));
  /* in case someone deletes the data of users from local storage WHIILE registering, we should make sure
     that the id starts from 1.
     if there is no value at the key "nextuserid", then it would put the value zero at the property user.id.
  */
  if (!userId) {
    userId++;
  }
  let users = localStorage.getItem("users");
  if (!users) {
    users = [
      new User(
        userId++,
        inputFirstName.value + "" + inputLastName.value,
        inputEmail.value,
        inputPhone.value,
        inputPassword.value,
        //defining address object inside the user object - using Address class
        new Address(
          inputState.value,
          inputCountry.value,
          inputCity.value,
          inputStreet.value,
          inputHouse.value,
          inputZip.value
        ),
        inputIsBusiness.checked
      ),
    ];
  } else {
    users = JSON.parse(users);
    //email already exists
    for (let user of users) {
      if (user.email === inputEmail.value) {
        alert("Email already exists!");
        return;
      }
    }
    //email doesnot exists - we can continue
    users = [
      ...users,
      new User(
        userId++,
        inputFirstName.value + " " + inputLastName.value,
        inputEmail.value,
        inputPhone.value,
        inputPassword.value,
        //defining address object inside the user object - using Address class
        new Address(
          inputState.value,
          inputCountry.value,
          inputCity.value,
          inputStreet.value,
          inputHouse.value,
          inputZip.value
        ),
        inputIsBusiness.checked
      ) /* makes a new array of users - then below update the item of the database */,
    ];
  }
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("nextuserid", userId + "");
  clearInputs();
  handlePageChange(PAGES.LOGIN);
});
