import React, { Component } from "react";

/**
 * State
 * 1.管理组件内部状态（数据）
 * 2.State 是组件私有的
 */
export default class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: "Qzfrato",
      time: new Date(),
    };
  }
  clickHandler() {
    //修改state
    this.setState({
      name: "qiaozhi",
    });
  }
  render() {
    return (
      <div>
        <h3>组件状态State</h3>
        <p>名字：{this.state.name}</p>
        <button onClick={this.clickHandler.bind(this)}>修改数据</button>
        <p>当前时间：{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
