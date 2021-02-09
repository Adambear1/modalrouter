import React from "react";
import { FilePlus } from "react-bootstrap-icons";


function Buttons({ onClick, id }) {
  return (
    <div className="row">
      <button className="btn btn-secondary w-25 mt-3 mx-auto" id={id.replace(/\s+/g, "-")}>
        <FilePlus
          className="mx-auto"
          height="30"
          width="30"
          onClick={onClick}
          id={id.replace(/\s+/g, "-")}
        />
      </button>
    </div>
  );
}

export default Buttons;
