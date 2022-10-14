import React, { useState, useEffect } from "react";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";
import SelectOption from "../select-option/SelectOption";
import Navbar from "../navbar/Navbar";
import styles from "./todoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([])
  const [selectValue, setSelectValue] = useState("All")

  useEffect(()=> {
    filterTodos(selectValue)
  }, [todos, selectValue])

  //create and add todo in application
  const addTodoHandler = (getTodo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: getTodo,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  //complete todo in application
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

  //remove todo in application
  const removeHandler = todoId => {
    const myFilteredTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(myFilteredTodos)
  }

  //edit todo in application
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

  //filter todo by complete and uncomplete in application
  const filterTodos = selectValue => {
    switch (selectValue) {
      case 'completed':
        const completedTodos = todos.filter(todo => todo.isCompleted)
        setFilteredTodos(completedTodos)
        break;
      case 'uncompleted':
        const uncompletedTodos = todos.filter(todo => !todo.isCompleted)
        setFilteredTodos(uncompletedTodos)
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <>
      <Navbar todos={todos}/>
      <div className={styles.container}>
        <TodoForm addTodoHandler={addTodoHandler} />
        <SelectOption  
        filterTodos={filterTodos}
        selectValue={selectValue}
        setSelectValue={setSelectValue}/>
        <div className={styles.todoListContainer}>
          <TodoList todos={filteredTodos} 
          onComplete={completeHandler} 
          onDelete={removeHandler} editHandler={editHandler} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
