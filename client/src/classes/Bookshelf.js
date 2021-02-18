var Collection = require("./Collection")

class Bookshelf {
    constructor(title, [isComplete, isGood]){
        this.type = "Book"
        this.title = title ;
        this.isComplete = isComplete;
        this.isGood = isGood
    }
    addToCollection(){
        return new Collection(this).finish()
    }
}

module.exports = Bookshelf