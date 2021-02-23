import React, { useState } from "react";
import { filterState } from "../../../utils";

function Buttons({ value, state, setState, message, popover, setPopover }) {
  const [selected, setSelected] = useState(false);
  const basic_setUp = (type) => {
    return type === "dark" ? `btn btn-${type}` : `my-2 mx-auto btn btn-${type}`;
  };
  // console.log(selected);
  // console.log(state);
  return (
    <>
      <button
        type="btn"
        value={value}
        className={
          value === "Books" && !navigator.onLine
            ? basic_setUp("dark")
            : selected
            ? basic_setUp("primary")
            : basic_setUp("secondary")
        }
        onClick={(e) => {
          e.preventDefault();
          value === "Books" && !navigator.onLine
            ? setPopover(!popover)
            : setState(filterState([...state, value]));
          setSelected(!selected);
        }}
        title={value === "Books" && !navigator.onLine && message}
      >
        {value}
      </button>
    </>
  );
}

export default Buttons;
