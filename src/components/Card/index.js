import React, {useState} from "react";
// Styles
import "../styles.css"
// Components
import Body from "./Body";
import Buttons from "./Buttons";
import Footer from "./Footer";
// Redux
import { useSelector, useDispatch } from "react-redux";

function Card({ key, description, title, image, label_1, label_2, id }) {
  const dispatch = useDispatch()
  const store = useSelector(data => data)
  const addToCollection = async (id) => {
    await console.log(id)
  } 
  const updateTempState = async (e) => {
    await console.log(e)
  }
  return (
    <div className="card item" style={{ width: "18rem" }} key={key}>
      <Body image={image} title={title} description={description}/>
      <Footer label_1={label_1} label_2={label_2} onChange={(e) => updateTempState(e)}/>
      <Buttons onClick={() => addToCollection(id && id.replace(/\s+/g, "-"))}/>
 
    </div>
  );
}

export default Card;
