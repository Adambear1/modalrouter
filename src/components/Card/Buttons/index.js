import React, {useState} from "react";
import { BagCheck, FilePlus } from "react-bootstrap-icons";


function Buttons({ onClick, id, setSelected, selected }) {

  return (
    <div className="row">
      <button className={ selected ? "btn w-25 mt-3 mx-auto btn-secondary" : "btn w-25 mt-3 mx-auto btn-success"} id={id}>
        {
          selected ?<FilePlus
          className="mx-auto"
          height="30"
          width="30"
          onClick={onClick}
          id={id}
        /> :
        <BagCheck
          className="mx-auto"
          height="30"
          width="30"
          disabled={true}
          id={id}/>
        }
        
      </button>
    </div>
  );
}

export default Buttons;
