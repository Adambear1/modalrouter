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
              Watch: new WatchBox(payload.title, [
                isNew,
                isCollectable,
              ]).addToCollection(),
            },
          ],
        };
      }

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
