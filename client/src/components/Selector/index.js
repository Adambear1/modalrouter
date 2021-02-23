import React, { useState } from "react";
import Buttons from "./Buttons";
import OfflineButton from "./OfflineButton";

function Selector({ state, setState }) {
  const values = ["Watches", "Books"];
  const [popover, setPopover] = useState(false);
  const message = "This Feature Requires Internet for Access";
  return (
    <>
      {values.map((item, index) => (
        <>
          {item === "Books" && !navigator.onLine ? (
            <OfflineButton
              key={index}
              message={message}
              popover={popover}
              setPopover={setPopover}
            >
              <Buttons
                key={index}
                value={item}
                state={state}
                setState={setState}
                message={message}
                popover={popover}
                setPopover={setPopover}
              />
            </OfflineButton>
          ) : (
            <Buttons
              popover={popover}
              setPopover={setPopover}
              key={index}
              value={item}
              state={state}
              setState={setState}
              message={message}
            />
          )}
        </>
      ))}
    </>
  );
}

export default Selector;
