import React, { useState, useEffect } from "react";
// styles
import "./styles.css";
function OfflineButton({ children, message, setPopover, popover }) {
  return (
    <>
      <div className="popover__wrapper my-2 mx-auto">
        {children}
        <div
          className={popover ? "popover__content active" : "popover__content"}
        >
          <p className="popover__message">{message}</p>
        </div>
      </div>
    </>
  );
}

export default OfflineButton;
