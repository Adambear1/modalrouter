import React from "react";
import { useDispatch } from "react-redux";

function OfflineConfirmation() {
  const dispatch = useDispatch();
  return (
    <div class="container">
      <p className="m-5 mx-auto">
        Uh oh! Looks like we currently do not have a stable internet
        connection...
        {<br />}
        Some features might not work as intended... {<br />}
        Would you like continue?
        {<br />}
        <button
          type="btn"
          className="btn btn-primary mt-5"
          onClick={() => dispatch({ type: "ONLINE_STATUS", payload: true })}
        >
          Continue
        </button>
      </p>
    </div>
  );
}

export default OfflineConfirmation;
