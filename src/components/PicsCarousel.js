let picsArr;
let carouselDiv;

const initialPicsCarousel = (picsArrFromHomePage) => {
  picsArr = picsArrFromHomePage;
  carouselDiv = document.getElementById("home-inside-carousel");
  //   let pic = picsArr[0];
  //   carouselDiv.innerHTML = `
  //     <div class="carousel-item active">
  //     <img src=${pic.imgUrl} alt=${pic.name}>
  //     <div class="carousel-caption d-none d-md-block">
  //       <h5>${pic.name}</h5>
  //       <h6>By ${pic.credit}</h6>
  //       <p>${pic.description}</p>
  //     </div>
  //   </div>
  //       `;
  //   if (picsArr.length === 1) {
  //     return;
  //   }
  createCarousel();
};

const updatePicsCarousel = (picsArrFromHomePage) => {
  picsArr = picsArrFromHomePage;
  //   let pic = picsArr[0];
  //   carouselDiv.innerHTML = `
  //     <div class="carousel-item active">
  //     <img src=${pic.imgUrl} alt=${pic.name}>
  //     <div class="carousel-caption d-none d-md-block">
  //       <h5>${pic.name}</h5>
  //       <h6>By ${pic.credit}</h6>
  //       <p>${pic.description}</p>
  //     </div>
  //   </div>
  //       `;
  //   if (picsArr.length === 1) {
  //     return;
  //   }
  createCarousel();
};

const createItem = (name, img, description, credit, active = false) => {
  return `
  <div class="carousel-item ${active ? "active" : ""}">
  <img src=${img} alt=${name}>
  <div class="carousel-caption d-none d-md-block">
    <h5>${name}</h5>
    <h6>By ${credit}</h6>
    <p>${description}</p>
  </div>
</div>
    `;
};
const createCarousel = () => {
  let innerStr = "";
  let active = true;
  for (let pic of picsArr) {
    innerStr += createItem(
      pic.name,
      pic.imgUrl,
      pic.description,
      pic.credit,
      active
    );
    active = false;
  }
  carouselDiv.innerHTML = innerStr;
};

export { initialPicsCarousel, updatePicsCarousel };
