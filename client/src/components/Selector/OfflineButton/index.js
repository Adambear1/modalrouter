import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
function OfflineButton({ children, message, setPopover, popover }) {
  return (
    <Popover
      className="my-2 mx-auto btn"
      onClick={() => setPopover(!popover)}
      isOpen={popover}
      positions={["bottom", "right", "left", "top"]}
      content={<div>{message}</div>}
    >
      {children}
    </Popover>
  );
}

export default OfflineButton;
