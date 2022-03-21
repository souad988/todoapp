/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = ({ key, todo, handleChangeProps }) => (
  <li key={key}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => console.log('clicked')}
    />
    {todo.title}
  </li>
);

export default TodoItem;
