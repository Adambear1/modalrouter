class Collection {
  constructor(builder) {
    var { type } = builder;
    switch (type) {
      case "Book":
        this.type = "Book";
        this.title = builder.title;
        this.isCompelte = builder.isCompelte || false;
        this.isGood = builder.isGood || false;
        return;
      case "Watch":
        this.type = "Watch";
        this.brand = builder.brand;
        this.isCollectable = builder.isCollectable || false;
        this.isNew = builder.isNew || false;
        return;
      default:
        return;
    }
  }
  finish() {
    return this;
  }
}

module.exports = Collection;
