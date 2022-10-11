import React from 'react'
import styles from './mytodo.module.css'

function MyTodo({todo, onComplete}) {

  return (
      <div className={`${todo.isCompleted? styles.completed: styles.container}`}>
        <div>{todo.text}</div>
        <div>
          <button className={styles.editBtn}>Edit</button>
          <button onClick={onComplete} className={styles.completeBtn}>
            {todo.isCompleted ? 'uncomplete' : 'complete'}
          </button>
        </div>
      </div>
  );
}

export default MyTodo