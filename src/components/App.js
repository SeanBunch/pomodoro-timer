import React, { useState } from "react";
import CircleTimer from "./CircleTimer";
import PopupModal from "../components/modal/PopupModal";
import AddTaskModal from "../components/modal/AddTaskModal";
import TaskList from "./TaskList";
import "../styling/App.css";
import Hamburger from "./Hamburger";
import { useSelector, useDispatch } from "react-redux";
import { setAnimate, setDuration, setKeyValue } from "./circleTimerSlice";

function App() {

  const timer = useSelector((state) => state.circleTimer.value);
  const dispatch = useDispatch();

  const [showCircle, setShowCircle] = useState(true);
  const [key, setKey] = useState(0);
  const [taskList, setTaskList] = useState({
    0: {
      task: "",
      complete: false,
    },
  });

  const timerBtnHandler = (btnName) => {
    dispatch(setAnimate(false));

    if (btnName === "pomoTime") {
      dispatch(setDuration(timer.pomoTime));
      dispatch(setKeyValue());
    } else if (btnName === "shortBreak") {
      dispatch(setDuration(timer.shortBreak));
      dispatch(setKeyValue());
    } else if (btnName === "longBreak") {
      dispatch(setDuration(timer.longBreak));
      dispatch(setKeyValue());
    };
  };

  const startHandler = () => {
    if (!timer.animate) {
      dispatch(setAnimate(true));

    } else {
      dispatch(setAnimate(false));
    };
  };

  return (
    <main>
      <div className="container column">
        <div className="container row even-space mw50 mb50 bg-dkred h50 bdr10">
          <h2 className="btn-lg dk-red wt ml20">Pomodoro</h2>
          <div className="container grow row left">
            <Hamburger
              setShowCircle={setShowCircle}
              setDuration={setDuration}
            />
          </div>
        </div>
        <div className="container mw50 column">
          <div className=" container mb20 w100 even row">
            <button
              className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
              onClick={() => {
                timerBtnHandler("pomoTime");
              }}
            >
              Pomodoro
            </button>
            <button
              className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
              onClick={() => {
                timerBtnHandler("shortBreak");
              }}
            >
              Short Break
            </button>
            <button
              className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
              onClick={() => {
                timerBtnHandler("longBreak");
              }}
            >
              Long Break
            </button>
          </div>
          <div className="div-block-4 mb100">
            {showCircle ? (<CircleTimer />) : null}
            <button
              className={
                timer.animate
                  ? "bdr10 bg-ltred wt w100 h50 mt20 btnborder-blk"
                  : "bdr10 bg-dkred wt w100 h50 mt20 btnborder-blk"
              }
              onClick={startHandler}
            >
              {timer.animate ? "PAUSE" : "START"}
            </button>
          </div>
          <div className="mw50 mb50">
            <AddTaskModal taskList={taskList} setTaskList={setTaskList} />
          </div>
          <div>
            <TaskList taskList={taskList} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
