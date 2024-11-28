import React, { Component } from "react";

export default class RefsCBChild extends Component {
  onLog() {
    console.log("回调子组件");
  }
  render() {
    return (
      <div>
        <h3>CallBackChild</h3>
      </div>
    );
  }
}
