import React from 'react'
import MyTodo from '../mytodo/MyTodo'
import styles from './todoList.module.css'

function TodoList({todos, onComplete}) {

  if(todos.length === 0) return <p className={styles.message}>Please add some todo!</p>
  
  return (
    <div className={styles.container}>
      {todos.map(todo => {
        return <div className={styles.todoContainer} key={todo.id}>
              <MyTodo todo={todo} onComplete={() => onComplete(todo.id)} />
        </div>
      })}
    </div>
  );
}

export default TodoList