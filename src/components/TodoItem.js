/* eslint-disable react/prop-types */
import React from 'react';
import styles from "./TodoItem.module.css"

const TodoItem = ({
  key, todo, handleChangeProps, deleteTodoProps,
}) => (
  <li key={key} className={styles.item}>
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleChangeProps(todo.id)}
    />
    {todo.title}
    <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
  </li>
);

export default TodoItem;
