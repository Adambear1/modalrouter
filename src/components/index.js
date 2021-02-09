import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/index";
//
import Card from "./Card";
function Home() {
  const [displayedItems, setDisplayedItems] = useState(false);
  const [collection, setCollection] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((data) => {
    return data;
  });
  // ESLINT-IGNORE-NEXT-LINE
  useMemo(async () => {
    //   Set Init Data
    var arr = new Array();
    api.BooksDB.GetAll().then(({ data }) => {
      data.items.map(({ volumeInfo, saleInfo }) => {
        const { imageLinks, description, title } = volumeInfo;
        const price = (Math.random() * 35 + 6).toFixed(2);
        var obj = new Object();
        obj["title"] = title;
        obj["description"] = description;
        obj["image"] = imageLinks.thumbnail;
        obj["price"] = price;
        arr.push(obj);
      });
      var items = api.WatchesDB.GetAll();
      items.map((item) => {
        arr.push(item);
      });
    });
    console.log(arr);
    dispatch({ type: "SET_DISPLAYED_ITEMS", payload: arr });
    console.log(store)
    setDisplayedItems(store["displayedItems"]);
    setCollection(store["collection"]);
  }, []);

  return (
    <>
      {console.log(displayedItems)}
      {displayedItems &&
        displayedItems.map((item) => (
            
          <>
            <Card
              key={item.image}
              description={item.description || "Mollit consequat pariatur tempor eiusmod nisi in eiusmod velit velit exercitation quis ea officia exercitation."}
              title={item.title || item.brand}
              image={item.image}
              label_1={item.title ? "Book Completed?" : "Is Newly Acquired?"}
            //   label_2={item.title ? "Is Novel?" : "Is Collectable?"}
            //   onChange={(e) => console.log(e.target)}
            />
          </>
        ))}
      
    </>
  );
}

export default Home;
