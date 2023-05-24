import React from "react";
import CircleTimer from "./CircleTimer";
import "../App.css";

function App() {
  return (
    <main>
      {/* <div id="target">
        <div id="inside-target">
          <div id="top">
            <div id="top-bar">
              <div id="inside-topbar">
               <h2 className="red-bg-white-text">Pomodoro</h2>
               <span id="span">
                <button></button>
                <button></button>
               </span>

              </div>

            </div>
            <div id="timercard">
              <div id="top-timecard">

              </div>
              <div id="bottom-timecard">

              </div>

            </div>

          </div>

        </div>
      </div> */}
      {/* <div id='desktop-1' class='desktop-1'>
<div id='rectangle1' class='rectangle1'>
</div>
<div id='pomodoro' class='pomodoro'>
Pomodoro</div>
<button id='rectangle2' class='rectangle2'>
</button>
<button id='rectangle3' class='rectangle3'>
</button>
<div id='rectangle4' class='rectangle4'>
</div>
<div id='rectangle5' class='rectangle5'>
      <div id="circle" className="center-div">
        <CircleTimer />
      </div>
</div>
<div id='rectangle6' class='rectangle6'>
</div>
</div> */}

<div className="navbar-logo-left wf-section">
  <div data-animation="default" data-collapse="medium" data-duration="400">
    <div className="container">
      <div className="navbar-wrapper">
        <a href="#" className="navbar-brand w-nav-brand"><img src="#"></img></a>
        <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
          <ul role="list" className="nav-menu-two w-list-unstyled">
            <li className="mobile-margin-top-10">
              <a href="#" className="button-primary w-button">Setting</a>
              <a href="#" className="button-primary w-button">Login</a>
            </li>
          </ul>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-2 w-container">
    <div className="div-block">
      <div className="div-bock-2">
        <a href="#" className="button w-button">Pomodoro</a>
        <a href="#" className="button w-button">Short Break</a>
        <a href="#" className="button w-button">Long Break</a>
      </div>
      <div className="div-block-4"><CircleTimer /></div>
      <div className="div-block-3">
        <a href="#" className="button-3 w-button">+Add Task</a>
      </div>
    </div>
  </div>


</div>

    </main>
  );
}

export default App;
