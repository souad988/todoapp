import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoItem(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    };
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input className="input-text" type="text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={onChange} />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
