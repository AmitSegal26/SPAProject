class Address {
  state;
  country;
  city;
  street;
  houseNumber;
  zip;

  constructor(state, country, city, street, houseNumber, zip) {
    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zip = zip;
  }
}

export default Address;
