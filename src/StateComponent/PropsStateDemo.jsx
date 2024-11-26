import React, { Component } from "react";
import PropsStateChild from "./PropsStateChild";

export default class PropsStateDemo extends Component {
  render() {
    return (
      <div>
        <h3>Props初始化State</h3>
        <PropsStateChild title="标题" />
      </div>
    );
  }
}
