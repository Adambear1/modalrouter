var Collection = require("./Collection");

class Bookshelf {
  constructor(payload) {
    this.type = "Book";
    this.title = payload.title;
    this.isComplete = payload.isComplete || false;
    this.isGood = payload.isGood || false;
  }
  addToCollection() {
    return new Collection(this).finish();
  }
}

module.exports = Bookshelf;
