import PAGES from "./src/models/pageModel.js";
import handlePageChange from "./src/routes/router.js";
import "./src/initialData/initialData.js";
import "./src/pages/RegisterPage.js";
import "./src/pages/LoginPage.js";
import "./src/pages/ProfilePage.js";
import "./src/pages/HomePage.js";
import showNewPopup from "./src/pages/HomePage.js";

const navHomeLink = document.getElementById("nav-home-link");
const navIconLink = document.getElementById("nav-icon-link");
const page404BackBtn = document.getElementById("page404-to-home-link");
const aboutBackBtn = document.getElementById("about-to-home-btn");
const navAboutLink = document.getElementById("nav-about-link");
const navLoginLink = document.getElementById("nav-login-link");
const navLogOutLink = document.getElementById("nav-logout-link");
const navRegisterLink = document.getElementById("nav-register-link");
const navProfileLink = document.getElementById("nav-profile-link");
const loginToRegisterLink = document.getElementById("link-to-register-page");
const registerToLoginLink = document.getElementById("link-to-login-page");
const loginCancelToHome = document.getElementById("login-cancel-btn");
const registerCancelToHome = document.getElementById("register-cancel-btn");
const profileCancelToHome = document.getElementById("profile-cancel-btn");
const navNewPicLink = document.getElementById("nav-add-new-picture-link");
const navCartLink = document.getElementById("nav-cart-link");

window.addEventListener("load", () => {
  let token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    document.getElementById("navBeforeLogin").classList.remove("d-none");
    document.getElementById("navAfterLogin").classList.add("d-none");
  } else {
    // if connected while loading
    document.getElementById("nav-profile-name").innerText = token.name;
    document.getElementById("navBeforeLogin").classList.add("d-none");
    document.getElementById("navAfterLogin").classList.remove("d-none");
    if (token.isBusiness) navNewPicLink.classList.remove("d-none");
    else {
      navNewPicLink.classList.add("d-none");
    }
  }
  handlePageChange(PAGES.HOME);
});

navHomeLink.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
navIconLink.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
page404BackBtn.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
aboutBackBtn.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
loginCancelToHome.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
profileCancelToHome.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
registerCancelToHome.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
navAboutLink.addEventListener("click", () => {
  handlePageChange(PAGES.ABOUT);
});
navLoginLink.addEventListener("click", () => {
  handlePageChange(PAGES.LOGIN);
});
loginToRegisterLink.addEventListener("click", () => {
  handlePageChange(PAGES.REGISTER);
});
registerToLoginLink.addEventListener("click", () => {
  handlePageChange(PAGES.LOGIN);
});
navRegisterLink.addEventListener("click", () => {
  handlePageChange(PAGES.REGISTER);
});
navProfileLink.addEventListener("click", () => {
  handlePageChange(PAGES.PROFILE);
});
navCartLink.addEventListener("click", () => {
  handlePageChange(PAGES.CART);
});
navNewPicLink.addEventListener("click", () => {
  showNewPopup();
});

navLogOutLink.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});
