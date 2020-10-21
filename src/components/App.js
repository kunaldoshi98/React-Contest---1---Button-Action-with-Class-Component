import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick() {
    this.setState({ render: true });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleclick}>
          Click
        </button>
        {this.state.render && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
