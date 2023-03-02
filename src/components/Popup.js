import Picture from "../models/Picture.js";
import getNextId from "../services/getNextId.js";
import validateImage from "../validation/validateImage.js";

let selectedPic, editOrAddPicFunction;
const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupDescription = document.getElementById("popup-description");
const popupPrice = document.getElementById("popup-price");
const popupImageUrl = document.getElementById("popup-image-url");
const popupCredit = document.getElementById("popup-credit");
const PopupWrapper = document.getElementById("home-popup-wrapper");
const saveBtn = document.getElementById("popup-save-btn");
const initPopup = (
  selectedPicFromHomePage,
  editPicFunctionFromHomePage,
  isForEditOrAdding
) => {
  /*
      set data from selectedPic to html
      */
  if (selectedPicFromHomePage) {
    selectedPic = selectedPicFromHomePage;
  } else {
    selectedPic = new Picture(getNextId(), "", "", "", "", 0);
  }
  editOrAddPicFunction = editPicFunctionFromHomePage;
  popupImage.src = selectedPic.imgUrl;
  popupImage.style.width = "20vw";
  popupName.value = selectedPic.name;
  popupDescription.value = selectedPic.description;
  popupDescription.style.height = "fit-content";
  popupCredit.value = selectedPic.credit;
  popupPrice.value = selectedPic.price;
  popupImageUrl.value = selectedPic.imgUrl;
  if (!isForEditOrAdding) {
    //if for showing information when clicking on the image
    popupImage.disabled = true;
    popupName.disabled = true;
    popupDescription.disabled = true;
    popupCredit.disabled = true;
    popupPrice.disabled = true;
    popupImageUrl.disabled = true;
  } else {
    popupImage.disabled = false;
    popupName.disabled = false;
    popupDescription.disabled = false;
    popupCredit.disabled = false;
    popupPrice.disabled = false;
    popupImageUrl.disabled = false;
  }
  showPopup();
};

const showPopup = () => {
  PopupWrapper.classList.remove("d-none");
};

const hidePopup = () => {
  PopupWrapper.classList.add("d-none");
};

window.addEventListener("load", () => {
  PopupWrapper.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "home-popup-wrapper" &&
      ev.target.id !== "popup-cancel-btn" &&
      ev.target.id !== "popup-cancel-btn-icon"
    ) {
      return;
    }
    hidePopup();
  });
  //save changes
  saveBtn.addEventListener("click", () => {
    if (validateImage(popupImageUrl.value).length) {
      // //has errors
      return;
    }
    selectedPic.name = popupName.value;
    selectedPic.credit = popupCredit.value;
    selectedPic.description = popupDescription.value;
    selectedPic.price = popupPrice.value;
    selectedPic.imgUrl = popupImageUrl.value;
    editOrAddPicFunction(selectedPic);
    hidePopup();
  });
  //reggex for image link
  popupImageUrl.addEventListener("input", () => {
    popupImage.src = popupImageUrl.value;
    if (validateImage(popupImageUrl.value).length) {
      //has errors
      saveBtn.disabled = true;
      popupImageUrl.classList.add("is-invalid");
    } else {
      //no errors
      saveBtn.disabled = false;
      popupImageUrl.classList.remove("is-invalid");
    }
  });
});

export { initPopup, showPopup, hidePopup };
