import React, { useState } from 'react';
import styles from './todos.module.css';
import Todo from './todo';

const sampleTodos = [{
    id: 1,
    title: 'Todo 1',
    status: 'complete', //active|complete
},
{
    id: 2,
    title: 'Todo 2',
    status: 'active', //active|complete
}, {
    id: 3,
    title: 'Todo 3',
    status: 'active', //active|complete
},
]
const Todos = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState(sampleTodos);
    const deleteTodo = (id) => {
        const newlist = todos.filter(todo => todo.id !== id);
        setTodos([...newlist]);

    }
    const updateTodo = (id) => {};
    const handleAddTodo = (e) => {
        e.preventDefault();

        if(title.length !== 0 ) {
            console.log(title);
            setTodos([...todos, { id: 34, title, status: 'active' }]);
            setTitle('')
        }else{
            console.log(title);
        }


    }   
    return (
        <div className={styles.container}>
            <form onSubmit={handleAddTodo} className={styles.form}>
                <input className={styles.input} type="text" placeholder='Add Todo' onChange={(e) => setTitle(e.target.value)} value={title} />
                <button className={styles.button} type='submit'>Add</button>
            </form>
            <div className={styles.summary}>
                <p className={styles.p_active}>Active: {todos.filter(todo=>todo.status==='active').length} </p>
                <p className={styles.p_complete}>Complete: {todos.filter(todo=>todo.status==='complete').length} </p>
            </div>
            <div className={styles.todos}>

                {
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={()=>updateTodo(todo.id)} />
                    ))
                }
            </div>

        </div>
    )
}

export default Todos