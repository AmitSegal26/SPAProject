import validate from "./validate.js";

//uses the validate function to check house number and create a message
const validateHouse = (houseNumInput) => {
  const reg = new RegExp("^[0-9a-zA-Z/]+$");
  return validate(reg, houseNumInput, 1, 6).map(
    (error) => `House number${error}`
  );
};

export default validateHouse;
