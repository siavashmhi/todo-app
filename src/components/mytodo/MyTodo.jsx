import React from 'react'
import styles from './mytodo.module.css'

function MyTodo({todo}) {

  return (
      <div className={styles.container}>
        <div>{todo.text}</div>
        <div>
          <button className={styles.editBtn}>Edit</button>
          <button className={styles.completeBtn}>complete</button>
        </div>
      </div>
  );
}

export default MyTodo