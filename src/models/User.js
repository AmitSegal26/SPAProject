class User {
  id;
  name;
  email;
  phone;
  password;
  address;
  isBusiness;

  constructor(id, name, email, phone, password, address, isBusiness) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.address = address;
    this.isBusiness = isBusiness;
  }
}

export default User;
