import React from "react";

function Footer({ label_1, label_2, ref_1, ref_2 }) {
  return (
    <div className="form-check form-switch">
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {label_1}
      </label>
      <input
        className="form-check-input ml-3"
        type="checkbox"
        id={label_1.replace(/\s+/g, "-")}
        ref={ref_1}
      />
      <br />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {label_2}
      </label>
      <input
        className="form-check-input ml-3"
        type="checkbox"
        id={label_2.replace(/\s+/g, "-")}
        ref={ref_2}
      />
    </div>
  );
}

export default Footer;
