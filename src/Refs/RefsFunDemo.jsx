import React, { Component } from "react";
import RefsFunChild from "./RefsFunChild";

export default class RefsFunDemo extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  componentDidMount() {
    console.log(this.child);
  }
  render() {
    return (
      <div>
        <h3>Refs & 函数组件</h3>
        <RefsFunChild ref={this.child}></RefsFunChild>
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}
