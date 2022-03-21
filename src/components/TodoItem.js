/* eslint-disable react/prop-types */
import React from 'react';
import styles from "./TodoItem.module.css"

const TodoItem = ({
  key, todo, handleChangeProps, deleteTodoProps,
}) =>{ 
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
    return(
  <li key={key} className={styles.item}>
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleChangeProps(todo.id)}
    />
    <span style={todo.completed ? completedStyle : null}>
    {todo.title}
    </span>
    <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
  
  </li>
)};

export default TodoItem;
