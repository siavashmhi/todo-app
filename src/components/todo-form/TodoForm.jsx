import React, { useState, useEffect, useRef } from 'react';
import styles from './todoForm.module.css'

const TodoForm = ({addTodoHandler, edit}) => {
    const [todo, setTodo] = useState(edit ? edit.text : "") 
    const inputRef = useRef(null)

    useEffect(() => {inputRef.current.focus()},[])

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
            <div className={`${edit && styles.updateTodo}`}>
                <input type="text" value={todo}
                    onChange={changeHandler}
                    placeholder={edit ? 'update todo...' : 'add todo...'} 
                    ref={inputRef} />
                <button type='submit'>
                    {edit ? 'Update' : 'Add item'}
                </button>
            </div> 
        </form>
    );
};

export default TodoForm;