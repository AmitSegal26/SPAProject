import validate from "./validate.js";

//uses the validate function to check city and create a message
const validateCity = (cityInput) => {
  const reg = new RegExp("^[A-Z][a-z]*([ ][A-Z][a-z]*)*$");
  return validate(reg, cityInput, 2, 255).map((error) => `City name${error}`);
};

export default validateCity;
