import api from "../api";
import LocalStorage from "../api/LocalStorage";
import { WatchBox, Bookshelf } from "../classes";
import { clearLocalStorage, filterState, updateLocalStorage } from "../utils";
const data = {
  collection: [],
  displayedItems: [],
  online: true,
};

function reducer(state = data, { type = null, payload }) {
  switch (type) {
    case "SET_COLLECTED_ITEMS":
      if (payload === null) {
        return { ...state };
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
        var item = new Bookshelf(payload).addToCollection();
        return {
          ...state,
          collection: [...state.collection, item],
        };
      }
      if (payload.type === "Watch") {
        var item = new WatchBox(payload).addToCollection();
        return {
          ...state,
          collection: [...state.collection, item],
        };
      }
    case "REMOVE_ITEM":
      var collection = new Array();
      state.collection.map(async (item, index) => {
        var name = item.type === "Book" ? item.title : item.brand;
        if (name === payload) {
          return { ...state };
        } else {
          await collection.push(state.collection[index]);
        }
      });
      api.LocalStorage.update(collection);
      updateLocalStorage(collection);
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
      api.LocalStorage.update(collection);
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
        return { ...state, displayedItems: filterState(newDisplayedItems) };
      }
    case "ACTION_BUTTONS":
      return { ...state, collection: payload };
  }
}

export default reducer;
