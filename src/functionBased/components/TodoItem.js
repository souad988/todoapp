/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from "./TodoItem.module.css"

const TodoItem = ({
   todo, handleChangeProps, deleteTodoProps, setUpdate
}) =>{

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

    const [editing,setEditing]=useState(false); 
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

    let viewMode = {}
    let editMode = {}
      
    if (editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }    

    const handleEditing = () => {
        setEditing(true);
      }
      const handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
          setEditing(false);
        }
      }  
    return(
  <li className={styles.item}>
    <div onClick={handleEditing} style={viewMode} >
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={todo.completed}
      onChange={()=>handleChangeProps(todo.id)}
    />
    
    <span style={todo.completed ? completedStyle : null}>
    {todo.title}
    </span>
    <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
    </div>
    <input style={editMode} type="text" 
           className={styles.textInput}
           value={todo.title}
           onChange={(e) => {
              setUpdate(e.target.value, todo.id);
            }}
            onKeyDown={handleUpdatedDone}
            />
  </li>
)};

export default TodoItem;
