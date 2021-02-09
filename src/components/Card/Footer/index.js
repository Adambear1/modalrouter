import React from 'react'

function Footer({label_1, label_2, onChange}) {
    return (
 
            <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {label_1}
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id={label_1.replace(/\s+/g, "-")}
          onChange={onChange}
        />
        <br />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {label_2}
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id={label_2.replace(/\s+/g, "-")}
          onChange={onChange}
        />
      </div>

    )
}

export default Footer
