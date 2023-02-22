import validate from "./validate.js";

//uses the validate function to check image and create a message
const validateImage = (imageInput) => {
  const reg = new RegExp(
    "(https?:\\/\\/.*\\.(?:png|jpe?g|gif|webp)|file:\\/\\/\\/.*\\.(?:png|jpe?g|gif|webp)|[A-Za-z]:\\(?:[\\w\\s-]+\\)*[\\w\\s-]+\\.(?:png|jpe?g|gif|webp))",
    "i"
  );
  return validate(reg, imageInput, 2, 255).map((error) => `Image name${error}`);
};

export default validateImage;
