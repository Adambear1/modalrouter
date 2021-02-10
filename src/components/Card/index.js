import React, {useState, useRef} from "react";
// Styles
import "../styles.css"
// Components
import Body from "./Body";
import Buttons from "./Buttons";
import Footer from "./Footer";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Utils
import {compile} from "../../utils"

function Card({ key, description, title, image, label_1, label_2, id, type }) {
  const [selected, setSelected] = useState(true)
  const ref_1 = useRef();
  const ref_2 = useRef();
  const dispatch = useDispatch()
  const store = useSelector(data => data)

  const addToCollection = async ({target}) => {
    const {paretNode} = target;
    var payload = new Object;
    payload["type"] = await type;
    payload[compile(label_1)] = await ref_1.current.checked;
    payload[compile(label_2)] = await ref_2.current.checked;
    payload[type === "Book" ? "title" : "brand"] = await id;
    return dispatch({ type: "ADD_ITEM", payload });
  } 

  return (
    <div className="card item" style={{ width: "18rem" }} key={key}>
      <Body image={image} title={title} description={description}/>
      <Footer label_1={label_1} label_2={label_2} ref_1={ref_1} ref_2={ref_2}/>
      <Buttons onClick={(e) => 
        {addToCollection(e)
        setSelected(!selected)}}/>
    </div>
  );
}

export default Card;
