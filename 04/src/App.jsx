/* eslint-disable */

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["ซื้อเต้าหู้", "แก้บัค"],
      current: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.haddleSubmit = this.haddleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange = e => {
    this.setState({ current: e.target.value });
  };

  haddleSubmit = e => {
    event.preventDefault();
    this.setState({ current: e.target.value });
  };

  handleDelete = e => {
    event.preventDefault();
    this.setState({ current: e.target.value });
  };

  render() {
    const checkCurrent = this.state.current;
    const checkTodo = this.state.todos;
    return (
      <div className="App">
        <header>
          <h1>WONGNAI TODOs</h1>
        </header>
        <ul>
          {checkCurrent !== null
            ? checkTodo.map((todo, index) => <li key={index}>{todo}</li>)
            : checkCurrent}
          {checkCurrent === null
            ? checkTodo.map((todo, index) => <li key={index}>{todo}</li>)
            : checkCurrent}
          {checkCurrent >= 5
            ? alert("You gotta clear your TODO list")
            : checkCurrent}
        </ul>
        <form onSubmit={this.handleSubmit} onReset={this.handleDelete}>
          <input
            ref={a => (this._inputElement = a)}
            type="text"
            placeholder="type todo list"
            value={this.state.current}
            onChange={this.handleInputChange}
          />
          <button type="submit">บันทึก</button>
          <button type="reset">รีเซ็ท</button>
        </form>
      </div>
    );
  }
}

export default App;
