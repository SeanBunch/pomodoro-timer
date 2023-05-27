import React, { useState } from "react";
import CircleTimer from "./CircleTimer";
import PopupModal from "../modal/PopupModal";
import "../App.css";

function App() {

  const [ showCircle, setShowCircle ] = useState(true)


  return (
    <main>
      <div className="container column">
        <div className="container row even-space mw50 mb50 bg-dkred h50 bdr10">
          <h2 className="btn-lg dk-red wt ml20">Pomodoro</h2>
          <div className="container grow row left">
            <PopupModal setShowCircle={setShowCircle}/>
            {/* <button className="bg-black bdr10 wt h30 w100px">Settings</button> */}
            <button className="bg-black bdr10 wt  h30 w100px ml20 mr20">
              Login
            </button>
          </div>
        </div>
        <div className="container mw50 column">
          <div className=" container mb20 w100 even row">
            <button className="bdr10 bg-purple wt h30 w100px">Pomodoro</button>
            <button className="bdr10 bg-purple wt h30 w100px">
              Short Break
            </button>
            <button className="bdr10 bg-purple wt h30 w100px">
              Long Break
            </button>
          </div>
          <div className="div-block-4 mb20">
            {showCircle ? <CircleTimer /> : null}
          </div>
          <div className="mw50">
            <button className="bdr10 bg-purple wt w100 h30">+Add Task</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
