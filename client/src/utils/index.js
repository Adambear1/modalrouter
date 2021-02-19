const store = (item, attr) => {
  window.localStorage.setItem(JSON.stringify(item), JSON.stringify(attr));
};
export const compile = (str) => {
  return str
    .toLowerCase()
    .substring(0, str.length - 1)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
