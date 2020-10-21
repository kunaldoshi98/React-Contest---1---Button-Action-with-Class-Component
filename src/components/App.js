import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    this.setState({ render: !this.state.render });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.sayHello}>
          Click
        </button>
        {this.state.render && (
          <p>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
