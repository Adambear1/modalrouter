import React, { useState, useEffect } from "react";
// styles
import "./styles.css";
function OfflineButton({ children, message, setPopover, popover }) {
  return (
    <>
      <div class="popover__wrapper my-2 mx-auto btn">
        {children}
        <div class={popover ? "popover__content active" : "popover__content"}>
          <p class="popover__message">{message}</p>
        </div>
      </div>
    </>
  );
}

export default OfflineButton;
