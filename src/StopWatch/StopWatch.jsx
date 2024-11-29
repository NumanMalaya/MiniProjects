import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import './StopWatch.css'

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [runStatus, setRunStatus] = useState(false);

  useEffect(() => {
    let interval;
    if (runStatus) {
      interval = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [runStatus]);

  const displayTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <>
      <Header />
      <div className="stopWatch">
        <div className="timer">
          <h1>{displayTime(time)}</h1>
        </div>
        <div className="controls">
          <button onClick={() => setRunStatus(true)} className="bg-success">
            Start
          </button>
          <button onClick={() => setRunStatus(false)} className="bg-danger">
            Stop
          </button>
          <button
            onClick={() => {
              setRunStatus(false);
              setTime(0);
            }}
            className="bg-info"
          >
            Reset
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
