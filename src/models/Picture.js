class Picture {
  id;
  name;
  imgUrl;
  credit;
  description;
  price;
  dateCreated;
  constructor(id, name, imgUrl, credit, description, price, dateCreated) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.credit = credit;
    this.description = description;
    this.price = price;
    this.dateCreated = dateCreated;
  }
}

export default Picture;
