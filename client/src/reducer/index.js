import { WatchBox, Bookshelf } from "../classes";
const data = {
  collection: [],
  displayedItems: [],
};

function reducer(state = data, { type = null, payload }) {
  switch (type) {
    case "ADD_ITEM":
      if (payload.type === "Book") {
        var isComplete = payload.isComplete ? true : false;
        var isGood = payload.isGood ? true : false;
        return {
          ...state,
          collection: [
            ...state.collection,
            {
              Book: new Bookshelf(payload.title, [
                isComplete,
                isGood,
              ]).addToCollection(),
            },
          ],
        };
      }
      if (payload.type === "Watch") {
        var isNew = payload.isNew ? true : false;
        var isCollectable = payload.isCollectable ? true : false;
        return {
          ...state,
          collection: [
            ...state.collection,
            {
              Watch: new WatchBox(payload.brand, [
                isNew,
                isCollectable,
              ]).addToCollection(),
            },
          ],
        };
      }
    case "REMOVE_ITEM":
      var collection = new Array();
      state.collection.map(async (item, index) => {
        for (var objName in state.collection[index]) {
          for (var data in state.collection[index][objName]) {
            if (collection.indexOf(state.collection[index]) === -1) {
              if (state.collection[index][objName][data] === payload) {
                return;
              } else {
                await collection.push(state.collection[index]);
              }
            }
          }
        }
      });
      return {
        ...state,
        collection: [...collection],
      };
    case "FAVORITE_ITEM":
      var collection = new Array();
      state.collection.map(async (item, index) => {
        for (var objName in state.collection[index]) {
          for (var data in state.collection[index][objName]) {
            if (collection.indexOf(state.collection[index]) === -1) {
              if (state.collection[index][objName][data] === payload) {
               state.collection[index][objName].isFavorite === true ? delete state.collection[index][objName].isFavorite : state.collection[index][objName].isFavorite = true
                return collection.push(state.collection[index])
              } else{
                return collection.push(state.collection[index])
              }
            }
          }
        }
      });
      return {
        ...state,
        collection: [...collection],
      };
    case "SET_DISPLAYED_ITEMS":
      var tempArr =
        state.dispalyedItems === undefined
          ? [undefined]
          : [...state.displayedItems, payload];
      if (tempArr[0] === undefined) {
        return { ...state, displayedItems: payload };
      } else {
        var newDispalyedItems = tempArr.filter(function (item, pos) {
          return tempArr.indexOf(item) == pos;
        });

        return { ...state, displayedItems: newDispalyedItems };
      }
  }
}

export default reducer;
