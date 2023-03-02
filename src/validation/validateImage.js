import validate from "./validate.js";

//uses the validate function to check image and create a message
const validateImage = (imageInput) => {
  const reg = new RegExp(
    "(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png|ico)",
    "g"
  );
  return validate(reg, imageInput, 2, 900).map((error) => `Image name${error}`);
};

export default validateImage;
