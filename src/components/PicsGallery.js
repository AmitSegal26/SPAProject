let picsArr; //מערך האייטמים למכירה
let galleryDiv; //הדיב של הרשימה עצמה (העוטף)
let isBusiness;
let deletePic; // a variable that will get a function as a value
let showPopup; //a variable that will get a function as a value
//this function will transfer data from homepage to this page
let addToCart; // a variable that will get a function as a value
const initialPicsGallery = (
  picsArrFromHomePage,
  isBusinessParameter,
  deletePicFromHomePage,
  showPopupFromHomePage,
  addToCartFunc
) => {
  galleryDiv = document.getElementById("home-gallery-content");
  isBusiness = isBusinessParameter;
  deletePic = deletePicFromHomePage;
  showPopup = showPopupFromHomePage;
  addToCart = addToCartFunc;
  updatePicsGallery(picsArrFromHomePage);
};

const updatePicsGallery = (picsArrFromHomePage) => {
  /*
    this function will get data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  picsArr = picsArrFromHomePage;
  createGallery();
};

const createGallery = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("home-pic-gallery-delete-btn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("home-pic-gallery-edit-btn", handleEditBtnClick);
  // clear event listeners for images
  clearEventListeners("home-pic-gallery-picture", handleImageClick);
  // clear event listeners for buy btns
  clearEventListeners("home-pic-gallery-buy-btn", handleBuyBtnClick);
  //create new elements and remove old ones
  for (let pic of picsArr) {
    innerStr += createItem(
      pic.id,
      pic.name,
      pic.imgUrl,
      pic.credit,
      pic.description,
      pic.price
    );
  }
  galleryDiv.innerHTML = innerStr;
  // add event galleryeners for delete btns
  createBtnEventListener("home-pic-gallery-delete-btn", handleDeleteBtnClick);
  // add event galleryeners for edit btns
  createBtnEventListener("home-pic-gallery-edit-btn", handleEditBtnClick);
  // add event listeners for images
  createBtnEventListener("home-pic-gallery-picture", handleImageClick);
  // add event listeners for buy btns
  createBtnEventListener("home-pic-gallery-buy-btn", handleBuyBtnClick);
};

const createItem = (id, name, img, credit, description, price) => {
  const businessBtns = `
  <button type="button" class="btn btn-warning w-100" id="home-pic-gallery-edit-btn_${id}">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger w-100" id="home-pic-gallery-delete-btn_${id}">
    <i class="bi bi-x-circle-fill"></i> Delete
  </button>
  `;
  return `
  <div class="col">
    <div class="card h-100">
      <img
        src="${img}"
        class="card-img-top piclistGalleryCarousel"
        alt="${name}"
        id="home-pic-gallery-picture_${id}"
      />
      <div class="card-body">
        <h4 class="card-name">${name}</h4>
        <h5 class="card-name">By ${credit}</h5>
        <p class="card-text">
          ${description}
        </p>
      </div>
      
      <div class="card-body d-flex flex-column-reverse"><ul class="list-group list-group-flush">
      <li class="list-group-item">$ ${price}</li>
    </ul>
        <button type="button" class="btn btn-success" id="home-pic-gallery-buy-btn_${id}"><i class="bi bi-cart-plus"></i>
          Add To Cart
        </button>
        ${isBusiness ? businessBtns : ""}
      </div>
    </div>
  </div>
  `;
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

const handleDeleteBtnClick = (ev) => {
  deletePic(getIdFromClick(ev));
};

const handleBuyBtnClick = (ev) => {
  addToCart(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev), true);
};

const handleImageClick = (ev) => {
  showPopup(getIdFromClick(ev), false);
};

const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}_']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}_']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialPicsGallery, updatePicsGallery };
