import React from "react";
import { useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleTimer = () => {

  const timer = useSelector((state) => state.circleTimer.value);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      if (timer.btnSelected === "pomoTime") {
        return <div className="font25 wt">Break Time...</div>;
      } else if (timer.btnSelected === "shortBreak") {
        return <div className="font25 wt">Back to Work...</div>;
      } else if (timer.btnSelected === "longBreak") {
        return <div className="font25 wt">Back to Work...</div>;
      };
    };
  
    return (
      <div className="timer">
        <div className="font65 wt">
          {
          remainingTime%60 < 10 ? `${parseInt(remainingTime / 60)}:0${parseInt(remainingTime % 60)}` : 
          `${parseInt(remainingTime / 60)}:${parseInt(remainingTime % 60)}`
          }
        </div>
      </div>
    );
  };
  return (
    <CountdownCircleTimer
      key={timer.keyValue}
      isPlaying={timer.animate}
      duration={Number(timer.duration * 60)}
      colors={["#780000", "#780000", "#A30000", "#A30000"]}
      strokeWidth={6}
      trailColor="#b46d6d"
      // onComplete={()=> stopAnimate()}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default CircleTimer;
