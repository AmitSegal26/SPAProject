import Picture from "../models/Picture.js";
import getNextId from "../services/getNextId.js";

let selectedPic, editOrAddPicFunction;
const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupDescription = document.getElementById("popup-description");
const popupPrice = document.getElementById("popup-price");
const popupImageUrl = document.getElementById("popup-image-url");
const popupCredit = document.getElementById("popup-credit");
const PopupWrapper = document.getElementById("home-popup-wrapper");
const initPopup = (selectedPicFromHomePage, editPicFunctionFromHomePage) => {
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
  popupCredit.value = selectedPic.credit;
  popupPrice.value = selectedPic.price;
  popupImageUrl.value = selectedPic.imgUrl;
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
  document.getElementById("popup-save-btn").addEventListener("click", () => {
    selectedPic.name = popupName.value;
    selectedPic.credit = popupCredit.value;
    selectedPic.description = popupDescription.value;
    selectedPic.price = popupPrice.value;
    selectedPic.imgUrl = popupImageUrl.value;
    editOrAddPicFunction(selectedPic);
    hidePopup();
  });
  popupImageUrl.addEventListener("input", () => {
    popupImage.src = popupImageUrl.value;
  });
});

export { initPopup, showPopup, hidePopup };
