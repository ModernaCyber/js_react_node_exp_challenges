import React, { useMemo } from 'react';
import styles from './column.module.css';
import Task from './Task';
import { useStore } from '../store/store';
// import { shallow } from "zustand/shalow";
const Column = ({state}) => {
  // const tasks = useStore((store)=>store.tasks)

  // const filteredTasks = useMemo(()=>filter((task) => task.state === state),[tasks,state])
  // filter creates a new array
  //alternative
 const tasks = useStore(
  (store)=>store.tasks.filter((task) => task.state === state)
  //,
  // (prev,next) =>{
  //   const longest = prev.length > next.length ? prev.length : next.length;
  //   for(let i = 0; i < longest; i){
  //     if(!prev[i] || !next[i])return false;
  //     if(prev[i] !== next[i])return false;
  //   }
  //   return true;
  // }
  //only runs whenever state changes in store
  //alternative to this above function is to use shallow function to compare
  //  shallow
 )
  const addTask = useStore(store => store.addTask)

  return (
    <div className={styles.column}>
      <div className={styles.title_wrapper}>
      <p>{state}</p>
      <button onClick={()=>addTask('New',state)} className={styles.button}>Add</button>
      </div>
      {
        tasks.map((task,index)=>(
          <Task key ={index} title={task.title}/>
        ))
      }
    </div>
  )
}

export default Column