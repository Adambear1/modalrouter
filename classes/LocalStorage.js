const { writeFile, readFileSync, existsSync } = require("fs");
const Logger = require("./Logger");
const { log } = new Logger();
class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      this.items = JSON.parse(readFileSync("localStorage.json"));
      console.log(this.items);
    } else {
      this.items = [];
    }
  }
  getAll() {
    return this.items;
  }
  updateStorage(data) {
    writeFile("localStorage.json", JSON.stringify(data), (error) => {
      if (error) {
        console.error(error);
      }
    });
    return data;
  }
  setStorage(data) {
    var array = this.items;
    array.push(data);
    writeFile("localStorage.json", JSON.stringify(array), (error) => {
      if (error) {
        console.error(error);
      }
    });
    return array;
  }
}

module.exports = new LocalStorage();
