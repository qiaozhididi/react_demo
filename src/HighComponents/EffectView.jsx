import React, { Component } from "react";
import withViewData from "./withViewData";

class EffectView extends Component {
  render() {
    return (
      <div>
        <h3>当前组件</h3>
        <p>属性：{this.props.title}</p>
      </div>
    );
  }
}
export default withViewData(EffectView);
