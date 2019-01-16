/* eslint-disable */

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: ["ซื้อเต้าหู้", "แก้บัค"],
      test: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.haddleSubmit = this.haddleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  haddleSubmit = () => {
    this.state.todos.push(this.state.value);
    this.setState(this.state);
    this.state;
    console.log(this.state.todos);
  };

  handleDelete = e => {
    event.preventDefault();
    this.setState({ todos: [], value: "" });
  };

  render() {
    const checkvalue = this.state.value;
    const checkTodo = this.state.todos;
    return (
      <div className="App">
        <header>
          <h1>WONGNAI TODOs</h1>
        </header>
        <ul>
          {checkvalue !== null
            ? checkTodo.map(todo => <li key={todo}>{todo}</li>)
            : checkvalue}
          {checkTodo.length > 5
            ? alert("You gotta clear your TODO list")
            : this.state.test}
        </ul>
        <form>
          <input
            // ref={a => (this._inputElement = a)}
            type="text"
            placeholder="type todo list"
            className="text"
            // value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            onClick={this.haddleSubmit}
            disabled={!this.state.value}
          >
            บันทึก
          </button>
          <button type="button" onClick={this.handleDelete}>
            รีเซ็ท
          </button>
        </form>
      </div>
    );
  }
}

export default App;
