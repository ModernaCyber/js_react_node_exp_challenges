import React from 'react';
import styles from './app.module.css';

function Counter() {

  const [counter, setCounter] = React.useState(0);

  const handleReset = () => {
    setCounter(0)
  };
  const handleIncrement = () => {
    // console.log('Increment', counter)
    setCounter(prev => prev += 1)

  };
  const handleDecrement = () => {
    setCounter(prev => prev -= 1)
  };

  return (
    <div className={styles.counter}>
      <div className={styles.valuebox}>
        <h1 className={styles.value}>{counter}</h1>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.reset}`} onClick={handleReset}>Reset</button>
        <button className={`${styles.button} ${styles.increment}`} onClick={handleIncrement}>+</button>
        <button className={`${styles.button} ${styles.decrement}`} onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
