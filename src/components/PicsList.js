let picsArr; //מערך האייטמים למכירה
let listDiv; //הדיב של הרשימה עצמה (העוטף)
let isBusiness;
let deletePic; // a variable that will get a function as a value
let showPopup; //a variable that will get a function as a value
let addToCart; //a variable that will get a function as a value
//this function will transfer data from homepage to this page
const initialPicsList = (
  picsArrFromHomePage,
  isBusinessParameter,
  deletePicFromHomePage,
  showPopupFromHomePage,
  addToCartFunc
) => {
  listDiv = document.getElementById("home-list-content");
  isBusiness = isBusinessParameter;
  deletePic = deletePicFromHomePage;
  showPopup = showPopupFromHomePage;
  addToCart = addToCartFunc;
  updatePicsList(picsArrFromHomePage);
};

const updatePicsList = (picsArrFromHomePage) => {
  /*
    this function will get data from homepage and create new list.
    if the list already exists it will remove the old one and
    create new one
  */
  picsArr = picsArrFromHomePage;
  createList();
};

const createList = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("home-pic-list-delete-btn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("home-pic-list-edit-btn", handleEditBtnClick);
  // clear event listeners for images
  clearEventListeners("home-pic-list-picture", handleImageClick);
  // clear event listeners for buy btns
  clearEventListeners("home-pic-list-buy-btn", handleBuyBtnClick);
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
  listDiv.innerHTML = innerStr;
  // add event listeners for delete btns
  createBtnEventListener("home-pic-list-delete-btn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("home-pic-list-edit-btn", handleEditBtnClick);
  // add event listeners for images
  createBtnEventListener("home-pic-list-picture", handleImageClick);
  // add event listeners for buy btns
  createBtnEventListener("home-pic-list-buy-btn", handleBuyBtnClick);
};

const createItem = (id, name, img, credit, description, price) => {
  const businessBtns = `
  <button type="button" class="btn btn-warning w-100" id="home-pic-list-edit-btn_${id}">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger w-100" id="home-pic-list-delete-btn_${id}">
    <i class="bi bi-x-circle-fill"></i> Delete
  </button>
  `;
  return `
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-2 ">
        <img src="${img}" class="img-fluid rounded piclistGalleryCarousel" alt="${name}" id="home-pic-list-picture_${id}" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <h5 class="card-title">By ${credit}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            $${price}
            </h6>
            <p class="card-text">
            ${description}
            </p>
        </div>
        </div>
        <div class="col-md-2">
        <button type="button" class="btn btn-success w-100" id="home-pic-list-buy-btn_${id}">
          <i class="bi bi-currency-dollar"></i> Buy now
        </button>
        ${isBusiness ? businessBtns : ""}
        </div>
    </div>
    </li>
    <br>
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

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev), true);
};

const handleImageClick = (ev) => {
  showPopup(getIdFromClick(ev), false);
};

const handleBuyBtnClick = (ev) => {
  addToCart(getIdFromClick(ev));
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

export { initialPicsList, updatePicsList };
