import React, { useState, useRef, useMemo } from "react";
// Styles
import "../styles.css";
// Components
import Body from "./Body";
import Buttons from "./Buttons";
import Footer from "./Footer";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Utils
import { compile, updateLocalStorage } from "../../utils";
import LocalStorage from "../../api/LocalStorage";

function Card({ key, description, title, image, label_1, label_2, id, type }) {
  const [selected, setSelected] = useState(false);
  const ref_1 = useRef();
  const ref_2 = useRef();
  const dispatch = useDispatch();
  const store = useSelector((data) => data);
  useMemo(() => {
    if (store) {
      store.collection.map((item) => {
        var name = item.title || item.brand;
        if (name === title) {
          setSelected(true);
        }
      });
    }
  }, []);
  const addToCollection = async () => {
    var payload = new Object();
    payload["type"] = await type;
    payload[compile(label_1)] = await ref_1.current.checked;
    payload[compile(label_2)] = await ref_2.current.checked;
    payload[type === "Book" ? "title" : "brand"] = await id;
    LocalStorage.post(payload).then(({ data }) => {
      console.log(data);
      updateLocalStorage(data);
    });
    return dispatch({ type: "ADD_ITEM", payload });
  };

  return (
    <div className="card item" style={{ width: "18rem" }} key={key}>
      <Body image={image} title={title} description={description} />
      <Footer label_1={label_1} label_2={label_2} ref_1={ref_1} ref_2={ref_2} />
      <Buttons
        store={store && store.collection}
        title={title}
        selected={selected}
        onClick={(e) => {
          setSelected(!selected);
          return addToCollection();
        }}
      />
    </div>
  );
}

export default Card;
