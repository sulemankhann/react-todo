import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      title: "",
      isCompleted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ id: uuidv4(), title: "", isCompleted: false });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="title">New Todo </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="New Todo"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
