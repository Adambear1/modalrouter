import React, { useState } from "react";
import { filterState } from "../../../utils";

function Buttons({ value, state, setState }) {
  const [selected, setSelected] = useState(false);
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
    >
      {value}
    </button>
  );
}

export default Buttons;
