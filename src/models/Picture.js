class Picture {
  id;
  name;
  imgUrl;
  credit;
  description;
  price;
  constructor(id, name, imgUrl, credit, description, price) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.credit = credit;
    this.description = description;
    this.price = price;
  }
}

export default Picture;
