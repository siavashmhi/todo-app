import React, { useState } from "react";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";
import Navbar from "../navbar/Navbar";
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

  const completeHandler = todoId => {
    //find index todo
    const indexTodo = todos.findIndex(todo => todo.id === todoId)
    //cloning object, because we have not mutate
    const selectedTodo = {...todos[indexTodo]}
    selectedTodo.isCompleted = !selectedTodo.isCompleted
    //cloning all objects in array
    const updatedTodos = [...todos]
    //add selectedtodo
    updatedTodos[indexTodo] = selectedTodo
    setTodos(updatedTodos)
  }

  const removeHandler = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId)
    setTodos([...filteredTodos])
  }

  const editHandler = (id, newValue) => {
    // console.log(id, newValue);
    const indexTodo = todos.findIndex(todo => todo.id === id)
    const selectedTodo = {...todos[indexTodo]}
    // console.log(selectedTodo);
    selectedTodo.text = newValue
    // console.log(selectedTodo);
    const updatedTodos = [...todos]
    updatedTodos[indexTodo] = selectedTodo
    setTodos(updatedTodos)
  }

  return (
    <>
      <Navbar todos={todos} />
      <div className={styles.container}>
        <TodoForm addTodoHandler={addTodoHandler} />
        <div className={styles.todoListContainer}>
          <TodoList todos={todos} 
          onComplete={completeHandler} 
          onDelete={removeHandler} editHandler={editHandler} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
