import React, { Component } from "react";
import ColorButton from "./ColorButton";

export default class ColorButtonParent extends Component {
  constructor() {
    super();
    this.state = {
      color: "#ccc",
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    return (
      <div>
        <h3>性能优化-shouldComponentUpdate</h3>
        <button
          onClick={() => this.setState({ color: "red" })}
          style={{ color: this.state.color }}
        >
          变色
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          计数
        </button>
        <p>计数：{this.state.count}</p>
        <ColorButton color={this.state.color} />
      </div>
    );
  }
}
