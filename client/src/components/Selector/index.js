import React, { useState } from "react";
import Buttons from "./Buttons";
import OfflineButton from "./OfflineButton";

function Selector({ state, setState }) {
  const values = ["Watches", "Books"];
  const [popover, setPopover] = useState(false);
  const message = "This Feature Requires Internet for Access";
  return (
    <>
      {values.map((item, id) => (
        <>
          {item === "Books" && !navigator.onLine ? (
            <OfflineButton
              message={message}
              popover={popover}
              setPopover={setPopover}
            >
              <Buttons
                key={id}
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
              key={id}
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
