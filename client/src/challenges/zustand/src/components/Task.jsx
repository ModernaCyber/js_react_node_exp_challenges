import React from 'react'
import styles from './task.module.css';
import { useStore } from '../store/store';
const Task = ({title}) => {
  const task = useStore((store)=>store.tasks.find(task => task.title === title));
  const classStatus =()=>{
    if (task.state === 'PLANNED') {
      return styles.planned
    }
    if (task.state === 'ONGOING') {
      return styles.ongoing
    }
    if (task.state === 'DONE') {
      return styles.done
    }
  }
  return (
    <div className={styles.task}>
      <div>{title}</div>
      <div className={styles.bottom_wrapper}>
        <div></div>
        <div className={`${styles.status} ${classStatus()}`}>{task.state}</div>
      </div>
    </div>
  )
}

export default Task