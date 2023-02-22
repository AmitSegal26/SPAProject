import validate from "./validate.js";

//uses the validate function to check zip code and create a message
const validateZip = (zipInput) => {
  const reg = new RegExp("(\\d|\\d){5,9}");
  return validate(reg, zipInput, 5, 9).map((error) => `Zip code${error}`);
};

export default validateZip;
