import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer =()=> {
  
  const getInitialTodos=()=> {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    console.log('saved todos',savedTodos)
    return savedTodos || []
  }
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])  

    const handleChange = (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }));
    }

    const delTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
             todos.map(todo => {
              if (todo.id === id) {
                todo.title = updatedTitle
              }
              return todo
            }))
      }

    return (
      <div className="container">
          <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todos={todos} setUpdate={setUpdate} handleChangeProps={handleChange} deleteTodoProps={delTodo} />
      </div></div>
    );
  }

export default TodoContainer;
