import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/index";
//
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Modal from "./Modal";
import LocalStorage from "../api/LocalStorage";
import Selector from "./Selector";
import { getBooks, getWatches } from "../utils";
function Home() {
  const [state, setState] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  // ESLINT-IGNORE-NEXT-LINE
  useMemo(() => {
    LocalStorage.get().then(async ({ data }) => {
      var payload = data.length === 0 ? null : data;
      return dispatch({ type: "SET_COLLECTED_ITEMS", payload });
    });
  }, []);
  useEffect(async () => {
    if (displayedItems.length > 1) {
      return;
    } else {
      var payload = [];
      if (state) {
      }
      // await getBooks().then((data) => (payload = [...payload, ...data]));
      await getWatches().then((data) => (payload = [...payload, ...data]));
      console.log(payload);
      setDisplayedItems(payload);
      return dispatch({ type: "SET_DISPLAYED_ITEMS", payload });
    }
  }, []);

  console.log(state);

  return (
    <>
      <Jumbotron open={open} setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
      <div className="container">
        <div className="row">
          <Selector state={state} setState={setState} />
          <div className="masonry">
            {displayedItems.length > 1 &&
              displayedItems.map((item) => (
                <div className="col-6 col-sm-4 col-lg-3">
                  <Card
                    key={item.title || item.brand}
                    type={item.title ? "Book" : "Watch"}
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
