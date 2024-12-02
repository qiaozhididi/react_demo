import React, { Component } from "react";
import Child from "./Child";

export default class PropTypesTest extends Component {
  render() {
    return (
      <div>
        <h3>PropTypes类型检查</h3>
        <Child title={"测试数据"} name={["qz","dd"]}/>
      </div>
    );
  }
}
