import React, { useState } from "react";
import CircleTimer from "./CircleTimer";
import PopupModal from "../modal/PopupModal";
import AddTaskModal from "../modal/AddTaskModal";
import TaskList from "./TaskList";
import "../App.css";

function App() {

  const [ showCircle, setShowCircle ] = useState(true);
  const [ startAnimation, setStartAnimation ] = useState(false);
  const [ btnActive, setBtnActive ] = useState(false);
  const [ key, setKey ] = useState(0);
  const [ duration, setDuration ] = useState(25);
  const [ timer, setTimer ] = useState({
    pomoTime: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [ taskList, setTaskList ] = useState([{
    id: 0, 
    task: "", 
    complete: false
  },]);

  
  const timerBtnHandler = (btnName) => {
    setBtnActive(false);
    setStartAnimation(false);
    
    if(btnName === "pomoTime") {
      setDuration(timer.pomoTime)
      setKey(prevKey => prevKey + 1);
    } else if (btnName ==="shortBreak") {
      setDuration(timer.shortBreak)
      setKey(prevKey => prevKey + 1);
    } else if (btnName === "longBreak") {
      setDuration(timer.longBreak)
      setKey(prevKey => prevKey + 1);
    };

  }
  
  const startHandler = () => {
    if (!startAnimation) {
      setBtnActive(true);
      setStartAnimation(true);
    } else {
      setBtnActive(false);
      setStartAnimation(false);
    };
  } 

  return (
    <main>
      <div className="container column">
        <div className="container row even-space mw50 mb50 bg-dkred h50 bdr10">
          <h2 className="btn-lg dk-red wt ml20">Pomodoro</h2>
          <div className="container grow row left">
            <PopupModal 
            setShowCircle={setShowCircle} 
            timer={timer} 
            setTimer={setTimer} 
            setDuration={setDuration}
            />
            {/* <button className="bg-black bdr10 wt h30 w100px">Settings</button> */}
            <button className="bg-black bdr10 wt  h30 w100px ml20 mr20">
              Login
            </button>
          </div>
        </div>
        <div className="container mw50 column">
          <div className=" container mb20 w100 even row">
            <button 
            className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
            onClick={()=>{timerBtnHandler("pomoTime")}}
            >
              Pomodoro
            </button>
            <button 
            className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
            onClick={()=>{timerBtnHandler("shortBreak")}}
            >
              Short Break
            </button>
            <button 
            className="bdr10 bg-purple wt h30 w100px btnborder-blk btnfocus"
            onClick={()=>{timerBtnHandler("longBreak")}}
            >
              Long Break
            </button>
          </div>
          <div className="div-block-4 mb100">
            {showCircle ? <CircleTimer animate={startAnimation} timer={timer} keyValue={key} duration={duration}/>  : null}
            <button 
            className={btnActive ? "bdr10 bg-ltred wt w100 h50 mt20 btnborder-blk" :"bdr10 bg-dkred wt w100 h50 mt20 btnborder-blk"} 
            onClick={startHandler}
            >
              {startAnimation ? "PAUSE" : "START" }
            </button>
          </div>
          <div className="mw50">
            <AddTaskModal taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
            <TaskList taskList={taskList}/>
         </div>
        </div>
      </div>
    </main>
  );
}

export default App;
