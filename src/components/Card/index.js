import React from "react";

function Card({ description, title, image, label_1, label_2, onChange }) {
  return (
    <div className="card" styles={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault" id={label_1.replace(/\s+/g, '-')} onChange={onChange}>
          {label_1}
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault" id={label_2.replace(/\s+/g, '-')} onChange={onChange}>
          {label_2}
        </label>
      </div>
    </div>
  );
}

export default Card;
