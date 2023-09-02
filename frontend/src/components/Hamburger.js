import React from "react";
import "../styling/Hamburger.css";
import PopupModal from "../components/modal/PopupModal";

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
            <button className="bg-black bdr10 wt  h30 w100px ml20 mr20">
              Login
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Hamburger;
