import React from "react";
import { FilePlus } from "react-bootstrap-icons";
import "../styles.css"

function Card({ key, description, title, image, label_1, label_2, onChange }) {
  return (
    <div className="card item" style={{ width: "18rem" }} key={key}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text description">{description}</p>
       
      </div>
      <div className="fadeEffect"></div>
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {label_1}
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id={label_1.replace(/\s+/g, "-")}
          onChange={onChange}
        />
        <br />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {label_2}
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id={label_2.replace(/\s+/g, "-")}
          onChange={onChange}
        />
      </div>
      <div className="my-auto mx-auto">
      <FilePlus className="mx-auto" height="30" width="30"/>
      </div>
      
    </div>
  );
}

export default Card;
