import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h3>Parent组件</h3>
        子组件:
        <Child />
      </div>
    );
  }
}

