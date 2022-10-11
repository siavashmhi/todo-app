import React, { useState } from 'react'
import TodoForm from '../todo-form/TodoForm'
import MyTodo from '../mytodo/MyTodo'
import styles from './todoList.module.css'

function TodoList({todos, onComplete, onDelete, editHandler}) {
  const [edit, setEdit] = useState({id: null, text: "", isCompleted: false})
  const editTodo = newValue => {
    editHandler(edit.id, newValue)
    setEdit({id: null, text: "", isCompleted: false})
  }

  if(todos.length === 0) return <p className={styles.message}>Please add some todo!</p>
  
  return (
    <div className={styles.container}>
      {edit.id ? <TodoForm addTodoHandler={editTodo} edit={edit} /> : 
        todos.map(todo => {
          return <div className={styles.todoContainer} key={todo.id}>
                  <MyTodo todo={todo} onComplete={() => onComplete(todo.id)}
                  onDelete={() => onDelete(todo.id)} onEdit={() => setEdit(todo)}/>
          </div>
        })
      }
    </div>
  );
}

export default TodoList