import validate from "./validate.js";

//uses the validate function to check state and create a message
const validateState = (stateInput) => {
  const reg = new RegExp("^[A-Z][a-z]*([ ][A-Z][a-z]*)*$");
  return validate(reg, stateInput, 2, 255).map((error) => `State name${error}`);
};

export default validateState;
