import React, { Component } from "react";

export default class KeyDemo extends Component {
  constructor() {
    super();
    this.state = {
      names: ["qz", "qzfrato"],
    };
  }
  clickHandler() {
    this.setState({
      names: this.state.names.concat(["qzdd"]),
    });
  }
  render() {
    return (
      <div>
        <h3>key详细说明</h3>
        <button onClick={() => this.clickHandler()}>添加数据</button>
        <ul>
          {this.state.names.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
