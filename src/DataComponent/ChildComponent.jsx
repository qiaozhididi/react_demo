import React, { Component } from "react";

export default class ChildComponent extends Component {
  onChange(e) {
    this.props.onCustonEvent(e.target.value);
  }
  render() {
    // const { onCustonEvent } = this.props;
    // onCustonEvent("我是Child数据");
    return (
      <div>
        <h3>ChildComponent</h3>
        <input type="text" onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
