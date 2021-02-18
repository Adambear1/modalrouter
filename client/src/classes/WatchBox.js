var Collection = require("./Collection")

class WatchBox {
    constructor(brand, [isNew, isCollectable]){
        this.type = "Watch";
        this.brand = brand;
        this.isNew = isNew;
        this.isCollectable = isCollectable
    }

    addToCollection(){
        return new Collection(this).finish()
    }
}

module.exports = WatchBox