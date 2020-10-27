import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ todos: [...state.todos, todo] }));
  }

  removeTodo(id) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  updateTodo(todo) {
    this.setState((state) => {
      const todos = state.todos.map((el) => (el.id === todo.id ? todo : el));
      return { todos };
    });
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List</span>
        </h1>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              updateTodo={this.updateTodo}
              removeTodo={this.removeTodo}
              key={todo.id}
              {...todo}
            />
          ))}
        </ul>

        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
