import React from "react";
import { Wifi, WifiOff } from "react-bootstrap-icons";
function ConnectionStatusIcon({ status }) {
  return (
    <div
      style={{ position: "fixed", bottom: 10, right: 10 }}
      title={status ? "Connection detected!" : "No Connection Detected!"}
    >
      {status ? (
        <Wifi color={"green"} size={40} />
      ) : (
        <WifiOff color={"red"} size={40} />
      )}
    </div>
  );
}

export default ConnectionStatusIcon;
