import React, {useState} from "react";
import { BagCheck, FilePlus } from "react-bootstrap-icons";


function Buttons({ onClick, id, selected }) {
  return (
    <div className="row">
      <button className={ selected ? "btn w-25 mt-3 mx-auto btn-success" :"btn w-25 mt-3 mx-auto btn-secondary"} id={id} onClick={onClick} disabled={selected? true : false}>
        {
          
          selected ?
          <BagCheck
          className="mx-auto"
          height="30"
          width="30"
          id={id}/> :
          <FilePlus
          className="mx-auto"
          height="30"
          width="30"
          id={id}
        />
        }
        
      </button>
    </div>
  );
}

export default Buttons;
