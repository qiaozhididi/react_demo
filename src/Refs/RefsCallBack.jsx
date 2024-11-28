import React, { Component } from "react";
import RefsCBChild from "./RefsCBChild";

export default class RefsCallBack extends Component {
  // constructor(props) {
  //   super(props);
  //   this.child = React.createRef();
  // }
  componentDidMount() {
    this.child.style.color = "red";
    this.customInfo.onLog();
  }
  setDivRef = (div) => {
    this.child = div;
  };
  setComponent = (custom) => {
    this.customInfo = custom;
  };

  render() {
    return (
      <div>
        <h3>Refs回调</h3>
        <div ref={this.setDivRef}>回调方法</div>
        <RefsCBChild ref={this.setComponent} />
      </div>
    );
  }
}
