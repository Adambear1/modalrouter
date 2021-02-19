var Collection = require("./Collection");

class WatchBox {
  constructor(payload) {
    this.type = "Watch";
    this.brand = payload.brand;
    this.isNew = payload.isNew || false;
    this.isCollectable = payload.isCollectable || false;
  }

  addToCollection() {
    return new Collection(this).finish();
  }
}

module.exports = WatchBox;
