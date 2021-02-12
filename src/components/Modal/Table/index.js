import React, { useState } from "react";

// Dependencies
import { Star, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";

function Table({ index, name, type, favorite, extra_1, extra_2 }) {
  const [open, setOpen] = useState(false);
  const store = useSelector((data) => data);
  const dispatch = useDispatch();
  const removeItem = (payload) => {
    return dispatch({ type: "REMOVE_ITEM", payload });
  };
  const favoriteItem = (payload) => {
    return dispatch({ type: "FAVORITE_ITEM", payload });
  };
  console.log(store);
  return (
    <>
    <tbody>
      <tr
        className={favorite && "favorite"}
        onClick={(e) => {
          if (e.target.classList.length === 0) {
            setOpen(!open);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <th scope="row">{index}</th>
        <td>{type}</td>
        <td>{name}</td>
        <td onClick={() => favoriteItem(name)}>
          <Star color={favorite ? "white" : "gold"} className="delete-logo" />
        </td>
        <td onClick={() => removeItem(name)}>
          <Trash color="red" className="favorite-logo" />
        </td>
        
      </tr>
    
    </tbody><Card name={name} index={index} type={type} favorite={favorite} extra_1={extra_1} extra_2={extra_2} open={open} setOpen={setOpen}/></>
  );
}

export default Table;
