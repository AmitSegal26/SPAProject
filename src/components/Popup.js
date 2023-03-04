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
const popupWrapper = document.getElementById("home-popup-wrapper");
const popupDate = document.getElementById("home-popup-date");
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
  popupImage.style.width = "100%";
  popupName.value = selectedPic.name;
  popupDescription.value = selectedPic.description;
  popupDescription.style.height = "fit-content";
  popupCredit.value = selectedPic.credit;
  popupPrice.value = selectedPic.price;
  popupImageUrl.value = selectedPic.imgUrl;
  popupDate.innerText = `Created At: ${selectedPic.dateCreated}`;
  if (!isForEditOrAdding) {
    //if for showing information when clicking on the image
    enableDisableInputs(true);
    saveBtn.classList.add("d-none");
    document.getElementById("popup-cancel-btn").classList.add("d-none");
  } else {
    //is for editing or adding the inputs
    enableDisableInputs(false);
    saveBtn.classList.remove("d-none");
    document.getElementById("popup-cancel-btn").classList.remove("d-none");
  }
  showPopup();
  //scrolls the popup to the top each time you open it
  document.getElementById("home-actual-popup").scrollTop = 0;
  //disabling the scrolling on the body
  document.body.style.overflow = "hidden";
};

const enableDisableInputs = (ability) => {
  popupImage.disabled = ability;
  popupName.disabled = ability;
  popupDescription.disabled = ability;
  popupCredit.disabled = ability;
  popupPrice.disabled = ability;
  popupImageUrl.disabled = ability;
};

const showPopup = () => {
  popupWrapper.classList.remove("d-none");
};

const hidePopup = () => {
  popupWrapper.classList.add("d-none");
};

const enableScrollingOfBody = () => {
  document.body.style.overflowY = "scroll";
};

window.addEventListener("load", () => {
  popupWrapper.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "home-popup-wrapper" &&
      ev.target.id !== "popup-cancel-btn" &&
      ev.target.id !== "popup-cancel-btn-icon"
    ) {
      return;
    }
    hidePopup();
    //enabling the scrolling on the body
    enableScrollingOfBody();
  });
  //save changes
  saveBtn.addEventListener("click", () => {
    if (validateImage(popupImageUrl.value).length) {
      // //has errors
      return;
    }
    const date = new Date();
    selectedPic.name = popupName.value;
    selectedPic.credit = popupCredit.value;
    selectedPic.description = popupDescription.value;
    selectedPic.price = popupPrice.value;
    selectedPic.imgUrl = popupImageUrl.value;
    selectedPic.dateCreated = `${
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    }/${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }/${date.getFullYear()}`;
    editOrAddPicFunction(selectedPic);
    enableScrollingOfBody();
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
