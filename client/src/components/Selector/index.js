import React from "react";
import Buttons from "./Buttons";

function Selector({ state, setState }) {
  const values = ["Watches", "Books"];
  return (
    <>
      {values.map((item, id) => (
        <Buttons key={id} value={item} state={state} setState={setState} />
      ))}
    </>
  );
}

export default Selector;
