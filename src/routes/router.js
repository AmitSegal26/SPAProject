import PAGES from "../models/pageModel.js";

const HOMEPAGE = document.getElementById(PAGES.HOME);
const ABOUTPAGE = document.getElementById(PAGES.ABOUT);
const LOGINPAGE = document.getElementById(PAGES.LOGIN);
const REGISTERPAGE = document.getElementById(PAGES.REGISTER);
const PROFILEPAGE = document.getElementById(PAGES.PROFILE);
const PAGE404PAGE = document.getElementById(PAGES.PAGE404);
const CARTPAGE = document.getElementById(PAGES.CART);
const NEWPICPAGE = document.getElementById(PAGES.NEWPICTURE);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGE.classList.remove("d-block");
  ABOUTPAGE.classList.remove("d-block");
  LOGINPAGE.classList.remove("d-block");
  REGISTERPAGE.classList.remove("d-block");
  PROFILEPAGE.classList.remove("d-block");
  PAGE404PAGE.classList.remove("d-block");
  CARTPAGE.classList.remove("d-block");
  HOMEPAGE.classList.add("d-none");
  ABOUTPAGE.classList.add("d-none");
  LOGINPAGE.classList.add("d-none");
  REGISTERPAGE.classList.add("d-none");
  PROFILEPAGE.classList.add("d-none");
  PAGE404PAGE.classList.add("d-none");
  CARTPAGE.classList.add("d-none");

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGE.classList.remove("d-none");
      HOMEPAGE.classList.add("d-block");
      break;
    case PAGES.ABOUT:
      ABOUTPAGE.classList.remove("d-none");
      ABOUTPAGE.classList.add("d-block");
      break;
    case PAGES.LOGIN:
      LOGINPAGE.classList.remove("d-none");
      LOGINPAGE.classList.add("d-block");
      break;
    case PAGES.REGISTER:
      REGISTERPAGE.classList.remove("d-none");
      REGISTERPAGE.classList.add("d-block");
      break;
    case PAGES.PROFILE:
      PROFILEPAGE.classList.remove("d-none");
      PROFILEPAGE.classList.add("d-block");
      break;
    case PAGES.CART:
      CARTPAGE.classList.remove("d-none");
      CARTPAGE.classList.add("d-block");
      break;
    default:
      PAGE404PAGE.classList.remove("d-none");
      PAGE404PAGE.classList.add("d-block");
      break;
  }
}

export default handlePageChange;
