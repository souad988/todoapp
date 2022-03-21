/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChangeProps }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChange}/>
    ))}
  </ul>
);

export default TodosList;
