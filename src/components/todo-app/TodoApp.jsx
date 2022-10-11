import React, { useState } from "react";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";
import styles from "./todoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (getTodo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: getTodo,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler} />
      <div className={styles.todoListContainer}>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoApp;
