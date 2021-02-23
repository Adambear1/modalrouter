import React from "react";
import { ArrowUp } from "react-bootstrap-icons";
import { sortCollectionUp } from "../../../../utils";
function FilterUp({ sendDispatch, collection }) {
  return (
    <button
      type="button"
      class="btn btn-light btn-3x"
      onClick={() => {
        var payload = sortCollectionUp([...collection]);
        sendDispatch(payload);
      }}
    >
      <ArrowUp />
    </button>
  );
}

export default FilterUp;
