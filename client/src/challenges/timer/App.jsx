import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
function Timer() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const handleUpdateTime = () => {
    setTime(prev => prev = prev + 1);
  }
  useEffect(() => {
    let interval;
    let duration = 1000;
    if (active) {
      interval = setInterval(
        handleUpdateTime,
        duration
      )
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [active])

  const handleReset = () => {
    setTime(0);
    setActive(false);
  }
  const handleStart = () => {
    setActive(true);
  };
  const handleStop = () => {
    setActive(false);
  };


  return (
    <div className={styles.timer}>
      <div className={styles.timercontainer}>
        <h1 className={styles.value}>{Math.floor(time / 60)} mins {time % 60}secs</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.button} ${styles.reset}`} onClick={handleReset} >Reset</button>
        <button className={`${styles.button} ${styles.start}`} onClick={handleStart} >Start</button>
        <button className={`${styles.button} ${styles.stop}`} onClick={handleStop} >Stop</button>
      </div>
    </div>
  )
}

export default Timer
