import React, { Component } from "react";
import TwoChild from "./TwoChild";

export default class TwoLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      text: "测试文本",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate");
    return false;
  }
  clickHandler() {
    this.setState({
      name: "QZFrato",
    });
  }
  render() {
    console.log("render渲染");
    return (
      <div>
        <h3>TwoLifeCycle</h3>
        <TwoChild title="测试" />
        <button onClick={this.clickHandler.bind(this)}>修改</button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate","DOM更新前执行");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate","DOM更新后执行");
  }
}
