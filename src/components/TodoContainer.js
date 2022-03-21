import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: uuidv4(),
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const handleChange = (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
    };

    const delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    };
    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    };
    const { todos } = this.state;
    return (
      <div className="container">
          <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todos={todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} />
      </div></div>
    );
  }
}
export default TodoContainer;
