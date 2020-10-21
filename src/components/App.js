import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        {
          <button id="click" onClick={this.sayHello}>
            Click
          </button>
        }
        <p>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      </div>
    );
  }
}

export default App;
