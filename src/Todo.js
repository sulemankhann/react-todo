import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.title,
      id: this.props.id,
      isCompleted: this.props.isCompleted,
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
  }

  toggleTodoStatus() {
    this.props.updateTodo({
      id: this.props.id,
      title: this.props.title,
      isCompleted: !this.props.isCompleted,
    });
  }

  toggleEditForm() {
    this.setState((state) => ({ isEditing: !state.isEditing }));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo({
      id: this.state.id,
      title: this.state.title,
      isCompleted: this.state.isCompleted,
    });
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isEditing ? (
          <div className="Todo">
            <form onSubmit={this.handleSubmit} className="Todo-edit-form">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        ) : (
          <div className="Todo">
            <li
              onClick={this.toggleTodoStatus}
              className={
                this.props.isCompleted ? "Todo-task completed" : "Todo-task"
              }
            >
              {this.props.title}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.toggleEditForm}>
                <i className="fa fa-pen"></i>
              </button>
              <button onClick={() => this.props.removeTodo(this.props.id)}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Todo;
