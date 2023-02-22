const checkIfBusiness = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return token.isBusiness;
};

export default checkIfBusiness;
