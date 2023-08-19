import React from "react";
import { useSelector } from "react-redux";
// import { setDuration } from "./circleTimerSlice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleTimer = ({ timer, children }) => {

  const duration = useSelector((state) => state.circleTimer.duration)
  const keyValue = useSelector((state) => state.circleTimer.keyValue)
  const animate = useSelector((state) => state.circleTimer.animate)

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="font25 wt">Break Time...</div>;
    }
  
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
      key={keyValue}
      isPlaying={animate}
      duration={Number(duration * 60)}
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
