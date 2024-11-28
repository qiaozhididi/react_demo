import React, { Component } from "react";

export default class RefsClassChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "张三",
    };
  }
  onLog() {
    console.log(this.state.name);
  }
  render() {
    return <div>Refs Class Child</div>;
  }
}
