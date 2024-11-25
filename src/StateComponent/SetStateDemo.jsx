import React, { Component } from "react";
import SetStateChild from "./SetStateChild";

export default class SetStateDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: "QZ",
    };
  }
  clickHandler() {
    this.setState(
      {
        name: "DD",
      },
      () => {
        console.log("重新渲染组件");
      }
    );
  }
  render() {
    return (
      <div>
        <h3>重新渲染组件根子组件</h3>
        <p>{this.state.name}</p>
        <button onClick={this.clickHandler.bind(this)}>重新渲染</button>
        <SetStateChild />
      </div>
    );
  }
}
