import React from "react";
import ClearAll from "./ClearAll";
import FilterUp from "./FilterUp";
import FilterDown from "./FilterDown";
import { useDispatch } from "react-redux";
import "./styles.css";
function Button({ collection }) {
  const dispatch = useDispatch();
  const sendDispatch = (payload) => {
    if (payload) {
      return dispatch({ type: "ACTION_BUTTONS", payload });
    }
  };
  return (
    <div style={{ margin: "auto", maxWidth: "300px" }}>
      <FilterUp sendDispatch={sendDispatch} collection={collection} />
      <ClearAll sendDispatch={sendDispatch} />
      <FilterDown sendDispatch={sendDispatch} collection={collection} />
    </div>
  );
}

export default Button;
