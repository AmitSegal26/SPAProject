import checkIfBusiness from "../services/checkifBusiness.js";
import { initialPicsList, updatePicsList } from "../components/PicsList.js";
import {
  initialPicsGallery,
  updatePicsGallery,
} from "../components/PicsGallery.js";
import {
  initialPicsCarousel,
  updatePicsCarousel,
} from "../components/PicsCarousel.js";
import { initPopup } from "../components/Popup.js";

const displayGalleryBtn = document.getElementById("home-display-gallery-btn");
const displayListBtn = document.getElementById("home-display-list-btn");
const displayCarouselBtn = document.getElementById("home-display-carousel-btn");
const galleryDisplay = document.getElementById("home-display-gallery");
const listDisplay = document.getElementById("home-display-list");
const carouselDisplay = document.getElementById("home-display-carousel");

let picsArr, originalPicsArr;
let isBusiness;

window.addEventListener("load", () => {
  picsArr = localStorage.getItem("pics");
  if (!picsArr) {
    return;
  }
  picsArr = JSON.parse(picsArr);
  originalPicsArr = [...picsArr];
  isBusiness = checkIfBusiness();

  initialPicsList(picsArr, isBusiness, deletePic, showPopup);
  initialPicsGallery(picsArr, isBusiness, deletePic, showPopup);
  initialPicsCarousel(picsArr, showPopup);
  document.getElementById("home-search").classList.add("d-none");
});

displayGalleryBtn.addEventListener("click", () => {
  galleryDisplay.classList.remove("d-none");
  listDisplay.classList.add("d-none");
  carouselDisplay.classList.add("d-none");
  document.getElementById("home-search").classList.remove("d-none");
});
displayListBtn.addEventListener("click", () => {
  galleryDisplay.classList.add("d-none");
  listDisplay.classList.remove("d-none");
  carouselDisplay.classList.add("d-none");
  document.getElementById("home-search").classList.remove("d-none");
});
displayCarouselBtn.addEventListener("click", () => {
  galleryDisplay.classList.add("d-none");
  listDisplay.classList.add("d-none");
  carouselDisplay.classList.remove("d-none");
  document.getElementById("home-search").classList.add("d-none");
});
document
  .getElementById("home-display-sort-upwards")
  .addEventListener("click", () => {
    sortPics(true);
  });
document
  .getElementById("home-display-sort-downwards")
  .addEventListener("click", () => {
    sortPics(false);
  });
document.getElementById("home-search").addEventListener("input", (ev) => {
  let regex = new RegExp("^" + ev.target.value, "i");
  picsArr = originalPicsArr.filter((item) => {
    let reg = regex.test(item.name);
    return reg;
  });
  updateDisplays();
});

const deletePic = (id) => {
  id = +id; //convert string to number
  originalPicsArr = originalPicsArr.filter((item) => item.id !== id);
  saveToLocalStorage(originalPicsArr);
  picsArr = picsArr.filter((item) => item.id !== id); //delete pic by index
  updateDisplays();
};

const updateDisplays = () => {
  updatePicsGallery(picsArr); // update gallery
  updatePicsList(picsArr); // update list
  updatePicsCarousel(picsArr); // update carousel
};

const sortPics = (up = true) => {
  if (up) {
    // from a to z
    picsArr.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // from z to a
    picsArr.sort((a, b) => b.name.localeCompare(a.name));
  }
  updateDisplays();
};

const showPopup = (id, isForEdit) => {
  let selectedPic = picsArr.find((item) => item.id === +id);
  if (!selectedPic) {
    return;
  }
  initPopup(selectedPic, editPic, isForEdit);
};

const showNewPopup = () => {
  initPopup(undefined, addNewPic, true);
};

const editPic = () => {
  saveToLocalStorage(originalPicsArr);
  updateDisplays();
};

const saveToLocalStorage = (arrToSave) => {
  localStorage.setItem("pics", JSON.stringify(arrToSave));
};

const addNewPic = (newPic) => {
  originalPicsArr = [...originalPicsArr, newPic];
  let nextId = +newPic.id + 1;
  localStorage.setItem("nextid", nextId + "");
  picsArr = [...originalPicsArr];
  editPic();
};

export default showNewPopup;
