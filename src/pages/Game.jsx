import { useState, useEffect } from "react";
import Ball from "../components/Ball";
import Result from "../components/Result";

const Game = () => {
  const [position, setPosition] = useState(50);
  const [jumping, setJumping] = useState(false);
  const [timeInGreenZone, setTimeInGreenZone] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const greenZoneStart = 40;
  const greenZoneEnd = 60;

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
    return () => {
      timerInterval && clearInterval(timerInterval);
    };
  }, [timeLeft]);

  useEffect(() => {
    const gravityInterval = setInterval(() => {
      setPosition((prev) => Math.min(prev + 2, 90));
    }, 100);

    if (timeLeft <= 0) {
      clearInterval(gravityInterval);
    }
    return () => {
      gravityInterval && clearInterval(gravityInterval);
    };
  }, [timeLeft]);

  useEffect(() => {
    let greenZoneInterval;

    if (position >= greenZoneStart && position <= greenZoneEnd) {
      greenZoneInterval = setInterval(() => {
        setTimeInGreenZone((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(greenZoneInterval);
    }
    if (timeLeft <= 0) {
      clearInterval(greenZoneInterval);
    }

    return () => {
      greenZoneInterval && clearInterval(greenZoneInterval);
    };
  }, [timeLeft, position]);

  const handleJump = () => {
    if (!jumping) {
      setJumping(true);
      setPosition((prev) => Math.max(prev - 20, 0));
      setTimeout(() => setJumping(false), 300);
    }
  };

  if (timeLeft <= 0) {
    return <Result result={timeInGreenZone} />;
  }

  return (
    <div className="container">
      <div className="green-zone" />
      <Ball position={position} />
      <button onClick={handleJump} className="jump-button">
        Jump
      </button>
      <div className="timer">
        Time inside the greenzone: {timeInGreenZone.toFixed(0)}s Time Left:{" "}
        {timeLeft}s
      </div>
    </div>
  );
};

export default Game;
