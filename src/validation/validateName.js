import validate from "./validate.js";
const validateName = (value) => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{1,255}$", "g");
  return validate(reg, value, 2, 255).map((err) => `name is ${err}`);
};

export default validateName;
