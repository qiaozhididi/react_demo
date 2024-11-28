import React, { Component } from "react";

export default class MyError extends Component {
  constructor(props) {
    // super(props);
    this.state = {
      hasError: false,
    };
  }
  render() {
    return (
      <div>
        <h3>这是一个错误的组件</h3>
      </div>
    );
  }
}
