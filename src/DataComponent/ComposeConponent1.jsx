import React, { Component } from "react";

export default class ComposeComponent1 extends Component {
  render() {
    return (
      <div className="ComposeComponent">
        <h3>组件组合</h3>
        {this.props.children}
      </div>
    );
  }
}
