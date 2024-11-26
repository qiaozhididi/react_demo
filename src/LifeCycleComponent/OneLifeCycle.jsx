import React, { Component } from "react";

export default class OneLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor","初始化操作");
    this.state = {
      name: "QZ",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps","静态改变状态");
    return state;
  }

  render() {
    console.log("render","渲染");
    return <div>组件挂载时</div>;
  }

/** 必须熟记
 * 1. 函数名字如何编写
 * 2. 什么时候执行： 挂载时，组件被调用时就会执行
 * 3. 意义：只要此生命周期函数执行了，代表DOM渲染完成，挂载完成
 */
  componentDidMount() {
    console.log("componentDidMount","DOM渲染完成， 挂载完成");
  }
}
