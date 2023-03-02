let picsArr;
let carouselDiv;
let showPopup;

const initialPicsCarousel = (picsArrFromHomePage, showPopupFromHomePage) => {
  picsArr = picsArrFromHomePage;
  carouselDiv = document.getElementById("home-inside-carousel");
  showPopup = showPopupFromHomePage;

  createCarousel();
};

//BONUS POINTS FOR AUTOMATIC SLIDES
let nextBtn = document.getElementById("home-carousel-next-btn");
setInterval(() => {
  nextBtn.click();
}, 6000); /* activates an action after the timer goes off, and repeats the written */

const updatePicsCarousel = (picsArrFromHomePage) => {
  picsArr = picsArrFromHomePage;
  createCarousel();
};

const createItem = (id, name, img, description, credit, active = false) => {
  return `
  <div class="carousel-item ${active ? "active" : ""}">
  <img for="carousel-items" src=${img} alt=${name} id="home-pic-carousel-picture_${id}">
  <div class="carousel-caption d-none d-md-block text-light">
    <h5>${name}</h5>
    <h6>By ${credit}</h6>
    <p>${description}</p>
  </div>
</div>
    `;
};
const createCarousel = () => {
  // clear event listeners for images
  clearEventListeners("home-pic-carousel-picture", handleImageClick);
  let innerStr = "";
  let active = true;
  for (let pic of picsArr) {
    innerStr += createItem(
      pic.id,
      pic.name,
      pic.imgUrl,
      pic.description,
      pic.credit,
      active
    );
    active = false;
  }
  carouselDiv.innerHTML = innerStr;
  // add event listeners for images
  createBtnEventListener("home-pic-carousel-picture", handleImageClick);
};

const handleImageClick = (ev) => {
  showPopup(getIdFromClick(ev), false);
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("_"); // split the id to array
  if (!ev.target.id) {
    /*
      if press on icon then there is no id
      then we need to take the id of the parent which is btn
    */
    idFromId = ev.target.parentElement.id.split("_");
  }
  return idFromId[1];
};

const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}_']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}_']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

export { initialPicsCarousel, updatePicsCarousel };
