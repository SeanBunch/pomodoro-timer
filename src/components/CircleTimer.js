import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleTimer = ({ key = 1, timer = 25, animate = true, children }) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 10}
      colors={["#780000", "#780000", "#A30000", "#A30000"]}
      strokeWidth={6}
      trailColor="#5f4e74"
    //   onComplete={()=> stopAnimate()}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default CircleTimer;
