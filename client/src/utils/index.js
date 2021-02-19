const store = (item, attr) => {
  window.localStorage.setItem(item, attr);
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
    data.map(({ body }) => {
      body = JSON.parse(body);
      if (body.title) {
        store(body.title, [body.isNovel, body.isComplete]);
      }
      if (body.brand) {
        store(body.brand, [body.isExpensive, body.isCollectable]);
      }
    });
  } catch ({ message }) {
    console.log(message);
  }
};
