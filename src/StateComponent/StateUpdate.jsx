import React, { Component } from "react";

export default class StateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "DiDi",
    };
  }
  clickHandler() {
    // this.setState.name = "QZ";//千万不要直接修改
    this.setState(
      {
        name: "QZ",
      },
      () => {
        console.log(this.state.name);
      }
    );
    this.setState((state) => {
      console.log(state.name);
    });

    //ES7 中异步变同步的操作方案 async await
  }
  render() {
    return (
      <div>
        <h3>组件state更新</h3>
        <p>{this.state.name}</p>
        <button onClick={this.clickHandler.bind(this)}>更新</button>
      </div>
    );
  }
}
