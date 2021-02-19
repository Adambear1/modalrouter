import React from "react";
// Styles
import "./styles.css";
function Body({ image, title, description }) {
  return (
    <>
      {console.log(description.length)}
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p
          className={
            description.length >= 100
              ? "card-text description-reg"
              : "card-text description-abv"
          }
        >
          {description}
        </p>
      </div>
      <div className="fadeEffect"></div>
    </>
  );
}

export default Body;
