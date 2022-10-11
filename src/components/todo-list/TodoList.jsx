import React from 'react'
import MyTodo from '../mytodo/MyTodo'
import styles from './todoList.module.css'

function TodoList({todos}) {
  
  return (
    <div className={styles.container}>
      {todos.map(todo => {
        return <div className={styles.todoContainer} key={todo.id}>
              <MyTodo todo={todo} />
        </div>
      })}
    </div>
  );
}

export default TodoList