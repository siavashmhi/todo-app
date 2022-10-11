import React from 'react'
import styles from './mytodo.module.css'

function MyTodo({todo, onComplete, onDelete, onEdit}) {

  return (
      <div className={`${todo.isCompleted? styles.completed: styles.container}`}>
        <div>{todo.text}</div>
        <div>
          <button className={styles.editBtn} onClick={onEdit}>
            Edit
          </button>
          <button onClick={onComplete} className={styles.completeBtn}>
            {todo.isCompleted ? 'uncomplete' : 'complete'}
          </button>
          <button className={styles.removeBtn} onClick={onDelete}>
            delete
          </button>
        </div>
      </div>
  );
}

export default MyTodo