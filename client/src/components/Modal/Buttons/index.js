import React from "react";
import ClearAll from "./ClearAll";
import Filter from "./Filter";
import "./styles.css";
function Button() {
  return (
    <div style={{ margin: "auto", maxWidth: "300px" }}>
      <Filter />
      <ClearAll />
    </div>
  );
}

export default Button;
