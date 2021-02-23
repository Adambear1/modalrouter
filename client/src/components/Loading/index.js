import React from "react";
// styles
import "./styles.css";
function Loading() {
  return (
    <div className="text-center loader">
      <div
        className="spinner-border text-primary"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
