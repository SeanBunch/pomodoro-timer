import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleTimer = ({ keyValue, timer, animate, children, duration }) => {


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="font25 wt">Break Time...</div>;
    }
  
    return (
      <div className="timer">
        <div className="font80 wt">{remainingTime}</div>
      </div>
    );
  };
  return (
    <CountdownCircleTimer
      key={keyValue}
      isPlaying={animate}
      duration={duration}
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
