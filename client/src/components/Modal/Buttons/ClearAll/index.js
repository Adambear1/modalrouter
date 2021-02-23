import React from "react";
import { Trash } from "react-bootstrap-icons";
import LocalStorage from "../../../../api/LocalStorage";
import { clearLocalStorage } from "../../../../utils";
function ClearAll({ sendDispatch }) {
  return (
    <button
      type="button"
      class="btn btn-light btn-3x"
      title="Clear All"
      onClick={() => {
        LocalStorage.clear().then(({ data }) => {
          clearLocalStorage();
          sendDispatch(data);
        });
      }}
    >
      <Trash />
    </button>
  );
}

export default ClearAll;
