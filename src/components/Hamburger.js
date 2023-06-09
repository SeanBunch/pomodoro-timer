import React from "react";
import "../styling/Hamburger.css";
import PopupModal from "../modal/PopupModal";

function Hamburger ({ setShowCircle, timer, setTimer, setDuration }) {


    return (
        <div>
        <section class="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
          <li>
            <PopupModal 
             setShowCircle={setShowCircle} 
             timer={timer} 
             setTimer={setTimer} 
             setDuration={setDuration}
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
    )
}

export default Hamburger;