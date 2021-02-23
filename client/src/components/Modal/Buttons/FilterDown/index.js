import React from "react";
import { ArrowDown } from "react-bootstrap-icons";
import { sortCollectionDown } from "../../../../utils";
function FilterUp({ sendDispatch, collection }) {
  return (
    <button
      type="button"
      class="btn btn-light btn-3x"
      onClick={() => {
        var payload = sortCollectionDown([...collection]);
        sendDispatch(payload);
      }}
    >
      <ArrowDown />
    </button>
  );
}

export default FilterUp;
