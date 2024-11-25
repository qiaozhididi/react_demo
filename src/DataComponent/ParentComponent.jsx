import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
export default class ParentComponent extends Component {
  getDataHandler(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <h3>ParentComponent</h3>
        <ChildComponent onCustonEvent={this.getDataHandler} />
      </div>
    );
  }
}
