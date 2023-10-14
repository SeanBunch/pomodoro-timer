import React from "react";
import "../styling/Hamburger.css";
import PopupModal from "../components/modal/PopupModal";
import LogInModal from "./modal/LogInModal";

function Hamburger({ setShowCircle }) {
  return (
    <div>
      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <PopupModal
              setShowCircle={setShowCircle}
            />
          </li>
          <li>
            <LogInModal
              setShowCircle={setShowCircle}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Hamburger;
