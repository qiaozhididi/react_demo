import React, { Component } from "react";

export default class PropsClass extends Component {
  render() {
    //结构赋值
    const { age, arr, user } = this.props;
    return (
      <div>
        <h3>类组件Props</h3>
        <p>接收：{this.props.title}</p>
        <p>年龄：{age}</p>
        <p>数组：{arr}</p>
        <p>姓名：{user.name}</p>
      </div>
    );
  }
}
