import React from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
function ClearAll() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      class="btn btn-light btn-3x"
      title="Clear All"
      onClick={() => {
        dispatch({ type: "CLEAR_ALL" });
      }}
    >
      <Trash />
    </button>
  );
}

export default ClearAll;
