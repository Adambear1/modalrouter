import React from "react";

function Loading() {
  return (
    <div class="text-center position-absolute" style={{ top: "50%" }}>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
