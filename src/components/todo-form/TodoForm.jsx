import React, { useState } from 'react';
import styles from './todoForm.module.css'

const TodoForm = ({addTodoHandler, edit}) => {
    const [todo, setTodo] = useState("") 
    
    const changeHandler = event => {
        setTodo(event.target.value)
    }
    const submitHandler = event => {
        event.preventDefault()
        //send todo for append to the todos list
        if(!todo){
            alert('Please enter your todo!')
            return
        }
        addTodoHandler(todo)
        setTodo("")
    }

    return (
        <form onSubmit={submitHandler} className={styles.formContainer}>
            {
                edit ? 
                    <>
                        <input type="text" value={todo} onChange={changeHandler} placeholder='update todo...' />
                        <button type='submit'>update</button>
                    </> :
                    <>
                        <input type="text" value={todo} onChange={changeHandler} placeholder='add todo..' />
                        <button type='submit'>add item</button>
                    </> 
            }
        </form>
    );
};

export default TodoForm;