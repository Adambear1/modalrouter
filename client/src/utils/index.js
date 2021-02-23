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
export const checkOnlineStatus = (dispatch) => {
  window.addEventListener("offline", () => {
    return dispatch({ type: "ONLINE_STATUS", payload: navigator.onLine });
  });
  window.addEventListener("online", () => {
    return dispatch({ type: "ONLINE_STATUS", payload: navigator.onLine });
  });
};
export const filterDisplayedItems = (displayedItems) => {
  // return displayedItems.filter(
  //   (v, i, a) =>
  //     a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
  // );
  return displayedItems.filter(function (item, pos) {
    return displayedItems.indexOf(item) === pos;
  });
};

export const getBooks = async () => {
  var books = new Array();
  return new Promise(function (resolve, reject) {
    api.BooksDB.GetAll().then(({ data }) => {
      data.items.map(({ volumeInfo, saleInfo }) => {
        const { imageLinks, description, title } = volumeInfo;
        const price = (Math.random() * 35 + 6).toFixed(2);
        var obj = {};
        obj["title"] = title || "Lorem Ipsum";
        obj["description"] =
          description ||
          "Pellentesque vehicula fermentum nisl ut varius. Phasellus et enim semper, faucibus neque eu, aliquam elit. Vestibulum ac vehicula risus. Duis tincidunt nisl in odio hendrerit fermentum. Donec vestibulum neque iaculis, commodo tellus id, dignissim dui.";
        obj["image"] =
          (imageLinks && imageLinks.thumbnail) ||
          "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png";
        obj["price"] = price;
        return books.push(obj);
      });
    });
    console.log(books);
    return resolve(books);
  });
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

export const clearLocalStorage = () => {
  return window.localStorage.clear();
};
