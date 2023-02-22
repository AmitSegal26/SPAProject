import validate from "./validate.js";

//uses the validate function to check country and create a message
const validateCountry = (countryInput) => {
  const reg = new RegExp("^[A-Z][a-z]*([ ][A-Z][a-z]*)*$");
  return validate(reg, countryInput, 2, 255).map(
    (error) => `Country name${error}`
  );
};

export default validateCountry;
