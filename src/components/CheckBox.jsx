import { useState } from "react";
import "./checkboxStyle.css";

export default function CheckBox({ showV, click }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  let classV = false;

  if (showV && !show) {
    classV = "show";
  } else if (show && !showV) {
    classV = "show";
  } else {
    classV = "";
  }

  return (
    <label className="neon-checkbox" tabIndex="0">
      <input type="checkbox" checked={show} onChange={handleToggle} />
      <div onClick={click} className={`neon-checkbox__frame ${classV}`}>
        <div className="neon-checkbox__box">
          <div className="neon-checkbox__check-container">
            <svg
              viewBox="0 0 24 24"
              className={`neon-checkbox__check ${showV || show ? "show" : ""}`}
            >
              <path d="M3,12.5l7,7L21,5" />
            </svg>
          </div>
          <div className="neon-checkbox__glow" />
          <div className="neon-checkbox__borders">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="neon-checkbox__effects">
          <div className="neon-checkbox__particles">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="neon-checkbox__rings">
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
          </div>
          <div className="neon-checkbox__sparks">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </label>
  );
}
