import React, { Component } from "react";

export default class ColorButton extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.color === this.props.color) {
      // 当颜色没有改变时，不更新子组件
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <h3 style={{ color: this.props.color }}>Child</h3>
      </div>
    );
  }
}
