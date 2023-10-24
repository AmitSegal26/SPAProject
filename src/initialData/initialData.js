import Picture from "../models/Picture.js";
import User from "../models/User.js";
import Address from "../models/Address.js";

let picId = 1;
let userId = 1;

const createData = () => {
  let picArr = [
    new Picture(
      picId++,
      "Beach Sunset",
      "https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_1280.jpg",
      "Kenny Death",
      `A stunning photograph of a couple standing on a sandy beach at sunset. The couple is seen from behind, and they are standing close to each other, with their arms wrapped around each other's waist. They appear to be wearing casual clothes, and the woman has a sun hat on her head. The golden light of the setting sun is casting a warm glow on the scene, and the sky is filled with beautiful shades of orange, yellow, and pink. The water is calm and reflecting the colors of the sky, and there are a few boats and people visible in the distance. Overall, it's a beautiful and romantic scene that captures the tranquility and beauty of the beach at sunset.`,
      10,
      "01/12/22"
    ),
    new Picture(
      picId++,
      "Kitties",
      "../../public/assets/imgs/cat-flower.jpg",
      "John Wick",
      `A cute and curious gray and white cat sitting in a grassy garden with vibrant pink and purple flowers in the background. The cat is sitting on a patch of lush green grass, and it appears to be gazing off into the distance, with its head tilted slightly to one side. Its ears are perked up and its eyes are bright and alert`,
      20,
      "01/12/22"
    ),
    new Picture(
      picId++,
      "Mysterious Eye",
      "https://cdn.pixabay.com/photo/2023/02/13/10/30/eye-7787024_640.jpg",
      "John Wick",
      `A close-up of a young girl's eye as she looks directly into the camera. The eye is beautifully detailed and appears to be a bright, light blue color. The iris, the colored part of the eye, has several shades of blue, with darker lines radiating outwards from the pupil.`,
      20,
      "01/12/22"
    ),
  ];
  return picArr;
};

const createUsers = () => {
  let userArr = [
    new User(
      userId++,
      "Amit Segal",
      "amit@amit.com",
      "0526889067",
      "Aa123456!",
      new Address("Israel", "Israel", "Rishon", "KKL", 23, 123456),
      true
    ),
    new User(
      userId++,
      "Clone Clone",
      "clone@clone.com",
      "123457890",
      "Aa123456!",
      new Address("Israel", "Israel", "Rishon", "ABC", 12, 234567),
      false
    ),
  ];
  return userArr;
};

const setInitialData = () => {
  let pictures = localStorage.getItem("pics");
  if (pictures) {
    return;
  }
  localStorage.setItem("pics", JSON.stringify(createData()));
  localStorage.setItem("nextpicid", picId + "");
};

const setInitialUsers = () => {
  let users = localStorage.getItem("users");
  if (users) {
    return;
  }
  localStorage.setItem("users", JSON.stringify(createUsers()));
  localStorage.setItem("nextuserid", userId + "");
  localStorage.removeItem("token");
};
setInitialData();
setInitialUsers();
