import React, { useState } from "react";
import { filterState } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";

function Buttons({ value, state, setState }) {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  return (
    <button
      type="btn"
      value={value}
      className={
        selected
          ? "my-2 mx-auto btn btn-primary"
          : "my-2 mx-auto btn btn-secondary"
      }
      onClick={() => {
        setState(filterState([...state, value]));
        setSelected(!selected);
      }}
      disabled={value === "Books" && !navigator.onLine}
      title={
        value === "Books" &&
        !navigator.onLine &&
        "This Feature Requires Internet for Access"
      }
    >
      {value}
    </button>
  );
}

export default Buttons;
