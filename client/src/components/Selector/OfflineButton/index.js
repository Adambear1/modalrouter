import React, { useState, useEffect } from "react";
// utils
import { Popover, ArrowContainer } from "react-tiny-popover";
function OfflineButton({ children, message, setPopover, popover }) {
  const [positions, setPositions] = useState(null);
  useEffect(() => {
    setPositions(["bottom", "right", "left", "top"]);
  }, []);
  return (
    <>
      {positions && (
        <>
          <Popover
            onClick={() => setPopover(!popover)}
            isOpen={popover}
            padding={10}
            width={"100%"}
            marginTop={10}
            reposition={false}
            // position={positions && positions}
            onClickOutside={() => setPopover(false)}
            content={({ position, childRect, popoverRect }) => (
              <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                position={positions}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowColor={"blue"}
                arrowSize={10}
                arrowStyle={{ opacity: 0.7 }}
                className="popover-arrow-container"
                arrowClassName="popover-arrow"
              >
                <div
                  style={{ backgroundColor: "blue", opacity: 0.7 }}
                  // onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  Hi! I'm popover content. Here's my position: {position}.
                </div>
              </ArrowContainer>
            )}
          >
            {children}
          </Popover>
        </>
      )}
    </>
  );
}

export default OfflineButton;
