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
    return dispatch({ type: "ONLINE_STATUS", payload: navigator.onLine });
  }, [navigator.onLine]);
  useEffect(async () => {
    if (displayedItems.length > 1) {
      return;
    } else {
      if (state) {
        setDisplayedItems([]);
        state.map((item) => {
          if (item.length > 0) {
            console.log(item);
            if (item === "Watches") {
              getWatches().then((data) =>
                setDisplayedItems([...displayedItems, ...data])
              );
            }
            if (item === "Books") {
              getBooks().then((data) =>
                setDisplayedItems([...displayedItems, ...data])
              );
            }
          } else {
            return setDisplayedItems([]);
          }
        });
      }
      console.log(displayedItems);
      return dispatch({ type: "SET_DISPLAYED_ITEMS", displayedItems });
    }
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
                        label_2={
                          item.title ? "Is Complete?" : "Is Collectable?"
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
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
