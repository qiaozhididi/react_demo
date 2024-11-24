import React, { Component } from "react";
//类组件中的this指向类的实例，在render函数中可以通过this访问该类的实例的属性和方法
class ClassEventDemo extends Component {
  //在 JavaScript 中，class 的方法默认不会绑定this
  sum(a, b) {
    console.log(a + b);
  }
  clickHandler1() {
    console.log("1");
    this.sum(10, 20); //如果没修改指向会报错
  }
  /**
   * 改变this指向的方案
   * 1.call(1,2,3)
   * 2.apply(1,2,3)
   * 3.bind()
   */

  //使用构造函数
  constructor() {
    super();
    this.clickHandler2 = this.clickHandler2.bind(this);
  }
  clickHandler2() {
    console.log("2", this);
  }

  //箭头函数
  clickHandler3 = () => {
    console.log("3", this);
  };
  render() {
    return (
      <div>
        <h3>Class组件中的事件</h3>
        <button onClick={this.clickHandler1.bind(this)}>
          Class事件1(bind)
        </button>
        <button onClick={this.clickHandler2}>Class事件2(构造函数)</button>
        <button onClick={this.clickHandler3}>Class事件3(箭头函数)</button>
      </div>
    );
  }
}

export default ClassEventDemo;
