import React from 'react'
import styles from './app.module.css';
import Column from './src/components/Column';
const Zustand = () => {
  return (
    <div className={styles.app}>
      <Column state="PLANNED"/>
      <Column state="ONGOING"/>
      <Column state="DONE"/>
    </div>
  )
}

export default Zustand