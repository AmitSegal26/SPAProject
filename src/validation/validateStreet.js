import validate from "./validate.js";

//uses the validate function to check street and create a message
const validateStreet = (streetInput) => {
  const reg = new RegExp("^[^\\W\\d_]+\\.?(?:[-\\s'’][^\\W\\d_]+\\.?)*$");
  return validate(reg, streetInput, 2, 255).map(
    (error) => `Street name${error}`
  );
};

export default validateStreet;
