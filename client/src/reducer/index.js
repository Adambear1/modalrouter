import api from "../api";
import LocalStorage from "../api/LocalStorage";
import { WatchBox, Bookshelf } from "../classes";
const data = {
  collection: [],
  displayedItems: [],
  online: true,
};

function reducer(state = data, { type = null, payload }) {
  switch (type) {
    case "SET_COLLECTED_ITEMS":
      if (payload === null) {
        return;
      } else {
        return {
          ...state,
          collection: payload,
        };
      }
    case "ONLINE_STATUS": {
      return { ...state, online: payload };
    }
    case "ADD_ITEM":
      if (payload.type === "Book") {
        return {
          ...state,
          collection: [
            ...state.collection,
            new Bookshelf(payload).addToCollection(),
          ],
        };
      }
      if (payload.type === "Watch") {
        return {
          ...state,
          collection: [
            ...state.collection,

            new WatchBox(payload).addToCollection(),
            ,
          ],
        };
      }
    case "REMOVE_ITEM":
      var collection = new Array();
      state.collection.map(async (item, index) => {
        var name = item.type === "Book" ? item.title : item.brand;
        if (name === payload) {
          return;
        } else {
          await collection.push(state.collection[index]);
        }
      });
      console.log(collection);
      // api.LocalStorage.post(collection);
      return {
        ...state,
        collection: [...collection],
      };
    case "FAVORITE_ITEM":
      var collection = new Array();
      state.collection.map(async (item, index) => {
        var name = item.type === "Book" ? item.title : item.brand;
        if (collection.indexOf(item) === -1) {
          if (name === payload) {
            item.isFavorite === true
              ? delete item.isFavorite
              : (item.isFavorite = true);
            return collection.push(item);
          } else {
            return collection.push(item);
          }
        }
      });
      api.LocalStorage.post(collection);
      return {
        ...state,
        collection: [...collection],
      };
    case "SET_DISPLAYED_ITEMS":
      var tempArr =
        state.displayedItems === undefined
          ? [undefined]
          : [...state.displayedItems, payload];
      if (tempArr[0] === undefined) {
        return { ...state, displayedItems: payload };
      } else {
        var newDisplayedItems = tempArr.filter(function (item, pos) {
          return tempArr.indexOf(item) == pos;
        });
        return { ...state, displayedItems: newDisplayedItems };
      }
  }
}

export default reducer;
