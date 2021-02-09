import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/index";
//
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
function Home() {
  const [displayedItems, setDisplayedItems] = useState([]);
  const dispatch = useDispatch();
  // ESLINT-IGNORE-NEXT-LINE
  useEffect(async () => {
    if (displayedItems.length > 1) {
      return;
    } else {
      var arr = [];
      var books = await api.BooksDB.GetAll().then(({ data }) => {
        data.items.map(({ volumeInfo, saleInfo }) => {
          const { imageLinks, description, title } = volumeInfo;
          const price = (Math.random() * 35 + 6).toFixed(2);
          var obj = {};
          obj["title"] = title;
          obj["description"] = description;
          obj["image"] = imageLinks.thumbnail;
          obj["price"] = price;
          arr.push(obj);
        });
      });
      var watches = await api.WatchesDB.GetAll().map((item) => {
        arr.push(item);
      });
      setDisplayedItems(arr);
      return dispatch({ type: "SET_DISPLAYED_ITEMS", payload: arr });
    }
  }, []);
  return (
    <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="masonry">
            {displayedItems.length > 1 &&
              displayedItems.map((item) => (
                <div className="col-6 col-sm-4 col-lg-3">
                  <Card
                    key={item.title || item.brand}
                    id={item.title || item.brand}
                    description={
                      item.description ||
                      "Labore aute veniam laborum et dolore id cupidatat elit veniam."
                    }
                    title={item.title || item.brand}
                    image={item.image}
                    label_1={item.title ? "Is Novel?" : "Is Expensive?"}
                    label_2={item.title ? "Is Complete?" : "Is Collectable?"}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
