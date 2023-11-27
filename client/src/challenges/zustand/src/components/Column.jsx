import React, { useEffect, useMemo, useState } from 'react';
import styles from './column.module.css';
import Task from './Task';
import { useStore } from '../store/store';
// import classNames from 'classnames'
// import { shallow } from "zustand/shalow";
const Column = ({ state }) => {
  // const tasks = useStore((store)=>store.tasks)

  // const filteredTasks = useMemo(()=>filter((task) => task.state === state),[tasks,state])
  // filter creates a new array
  //alternative
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state)
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
    //alternative to this above function is to use shallow function from zustand/shallow to compare
    //  shallow
  )
  const addTask = useStore(store => store.addTask)
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore(store => store.draggedTask);
  const moveTask = useStore(store => store.moveTask);
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const [updatedClasses, setUpdatedClasses] = useState(`${styles.column} ${drop ? styles.drop : styles.outdrop}`)

  useEffect(()=>{
    let classes = `${styles.column} ${ drop ? styles.drop : styles.outdrop}`
    // console.log(classes)
    setUpdatedClasses(classes)
  },[drop])

  return (
    <div className={updatedClasses}
      // <div className={classNames(styles.column,{drop: styles.drop})}
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDrop={(e) => {
        moveTask(draggedTask, state)
        setDraggedTask(null);
        setDrop(false)

      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
    
    >
      <div className={styles.title_wrapper}>
        <p>{state}</p>
        <button onClick={() => setOpen(true)} className={styles.button}>Add</button>
      </div>
      {
        tasks.map((task, index) => (
          <Task key={index} title={task.title} />
        ))
      }
      {
        open && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
              <button onClick={() => {
                addTask(text, state);
                setText('');
                setOpen(false);
              }} >Add Task</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Column