import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import OfflineConfirmation from "./OfflineConfirmation";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Modal from "./Modal";
import LocalStorage from "../api/LocalStorage";
import Selector from "./Selector";
import {
  checkOnlineStatus,
  filterDisplayedItems,
  getBooks,
  getWatches,
} from "../utils";
import NoItemsFound from "./NoItemsFound";
function Home() {
  const [state, setState] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  // ESLINT-IGNORE-NEXT-LINE
  useMemo(() => {
    checkOnlineStatus(dispatch);
    LocalStorage.get().then(async ({ data }) => {
      var payload = data.length === 0 ? null : data;
      return dispatch({ type: "SET_COLLECTED_ITEMS", payload });
    });
    return dispatch({ type: "ONLINE_STATUS", payload: navigator.onLine });
  }, [navigator.onLine]);
  useEffect(async () => {
    setDisplayedItems([]);
    if (state) {
      state.map(async (item) => {
        if (item.length > 0) {
          if (item === "Watches") {
            console.log(item);
            getWatches().then((data) => {
              var arr = [...displayedItems, ...data];
              return setDisplayedItems(filterDisplayedItems(arr));
            });
          }
          if (item === "Books") {
            console.log(item);
            getBooks().then((data) => {
              console.log(data);
              var arr = [...displayedItems, ...data];
              return setDisplayedItems(filterDisplayedItems(arr));
            });
          }
        } else {
          return setDisplayedItems([]);
        }
      });
    }
    console.log(displayedItems);
    return dispatch({ type: "SET_DISPLAYED_ITEMS", payload: displayedItems });
  }, [state]);

  return (
    <>
      {store && store.online === true ? (
        <>
          <Jumbotron open={open} setOpen={setOpen} />
          <Modal open={open} setOpen={setOpen} />
          <div className="container">
            <div className="row">
              <Selector state={state} setState={setState} />
              <div className={displayedItems.length > 0 && "masonry"}>
                {displayedItems.length > 0 &&
                  displayedItems.map((item) => (
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
                  ))}
              </div>
            </div>
            {displayedItems.length === 0 && <NoItemsFound />}
          </div>
          <Footer />
        </>
      ) : (
        <OfflineConfirmation />
      )}
    </>
  );
}

export default Home;
