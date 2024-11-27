import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Ptext3 extends Component {
  //并不会影响Context中的数据更新，只会影响Ptext3的渲染
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div>
        <h3>Ptext3</h3>
        {/* <MyContext.Consumer>{(text) => <p>{text.name}</p>}</MyContext.Consumer> */}
        <p>{this.context.name}</p>
      </div>
    );
  }
}

//通过this.context获取context中的数据
Ptext3.contextType = MyContext;
