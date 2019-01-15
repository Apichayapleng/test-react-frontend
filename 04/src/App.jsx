/* eslint-disable */

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // state = {
  //   todos: ["ซื้อเต้าหู้", "แก้บัค"],
  //   current: ""
  // };

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
    // this.state.current = e.target.value;
    this.setState({ current: e.target.value });
  };

  haddleSubmit = e => {
    event.preventDefault();
    this.setState({ current: e.target.value });
    // alert(`TODOs: ${current}`);
    // console.log("current", this.state.current);
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
          {/* const checkCurrent = this.state.current; 
          const checkTodo =this.state.todos; */}
          {checkCurrent !== null
            ? checkTodo.map((todo, index) => <li key={index}>{todo}</li>)
            : checkCurrent}
          {checkCurrent === null
            ? checkTodo.map((todo, index) => <li key={index}>{todo}</li>)
            : checkCurrent}
        </ul>
        <form onSubmit={this.handleSubmit} onReset={this.handleDelete}>
          <input
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
