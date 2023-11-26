import React from 'react';
import styles from './todos.module.css';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
    return (
        <div className={styles.todo}>

            <div className={styles.title}>
                <input type='checkbox' disabled={todo.status === 'complete'} onChange={updateTodo} className={styles.checkbox} />
                <p>{todo.title}</p>
            </div>
            <div onClick={() => deleteTodo(todo.id)} className={styles.delete}>x</div>
        </div>
    )
}

export default Todo