import React, { Component } from "react";
import ThreeChild from "./ThreeChild";

export default class ThreeLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  clickHandler() {
    this.setState({
      isShow: false,
    });
  }


  render() {
    return (
      <div>
        <h3>组件卸载时</h3>
        <button onClick={this.clickHandler.bind(this)}>卸载</button>
        {this.state.isShow ? <ThreeChild /> : null}
      </div>
    );
  }
}
