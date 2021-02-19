import React from "react";
import { useDispatch } from "react-redux";

function OfflineConfirmation() {
  const dispatch = useDispatch();
  return (
    <div>
      Uh oh! Looks like we currently do not have a stable internet connection...
      {<br />}
      Some features might not work as intended... {<br />}
      Would you like continue?
      <button
        type="btn"
        className="btn btn-primary"
        onClick={() => dispatch({ type: "ONLINE_STATUS", payload: true })}
      >
        Continue
      </button>
    </div>
  );
}

export default OfflineConfirmation;
