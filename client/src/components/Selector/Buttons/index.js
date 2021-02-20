import React, { useState } from "react";
import { filterState } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import OfflineButton from "../OfflineButton";

function Buttons({ value, state, setState, message, popover, setPopover }) {
  const [selected, setSelected] = useState(false);
  const basic_setUp = (type) => {
    return `my-2 mx-auto btn btn-${type}`;
  };
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
        onClick={() => {
          value === "Books" && !navigator.onLine
            ? setPopover(!popover)
            : setState(filterState([...state, value]));
          setSelected(!selected);
        }}
        // disabled={value === "Books" && !navigator.onLine}
        title={value === "Books" && !navigator.onLine && message}
      >
        {value}
      </button>
    </>
  );
}

export default Buttons;
