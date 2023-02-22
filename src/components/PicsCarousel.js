let picsArr;
let carouselDiv;

const initialPicsCarousel = (picsArrFromHomePage) => {
  picsArr = picsArrFromHomePage;
  carouselDiv = document.getElementById("home-inside-carousel");

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

const createItem = (name, img, description, credit, active = false) => {
  return `
  <div class="carousel-item ${active ? "active" : ""}">
  <img for="carousel-items" src=${img} alt=${name}>
  <div class="carousel-caption d-none d-md-block text-light">
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
