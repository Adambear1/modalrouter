import api from "../api";

const store = (item, attr) => {
  window.localStorage.setItem(JSON.stringify(item), JSON.stringify(attr));
};
export const compile = (str) => {
  return str
    .toLowerCase()
    .substring(0, str.length - 1)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
export const filterState = (state) => {
  var counts = state.reduce(function (counts, item) {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
  return Object.keys(counts).reduce(function (state, item) {
    if (counts[item] === 1) {
      state.push(item);
    }
    return state;
  }, []);
};
export const getBooks = async () => {
  var books = new Array();
  api.BooksDB.GetAll().then(({ data }) => {
    data.items.map(({ volumeInfo, saleInfo }) => {
      const { imageLinks, description, title } = volumeInfo;
      const price = (Math.random() * 35 + 6).toFixed(2);
      var obj = {};
      obj["title"] = title;
      obj["description"] = description;
      obj["image"] = imageLinks.thumbnail;
      obj["price"] = price;
      books.push(obj);
    });
  });
  return books;
};
export const getWatches = async () => {
  var watches = new Array();
  api.WatchesDB.GetAll().map((item) => {
    watches.push(item);
  });
  return watches;
};
export const updateLocalStorage = (data) => {
  try {
    window.localStorage.clear();
    data.map((item) => {
      const { type } = item;
      switch (type) {
        case "Book":
          return store(item.title, [
            { isNovel: item.isNovel },
            { isComplete: item.isComplete },
          ]);
        case "Watch":
          return store(item.brand, [
            { isExpensive: item.isExpensive },
            { isCollectable: item.isCollectable },
          ]);
      }
    });
  } catch ({ message }) {
    console.log(message);
  }
};
