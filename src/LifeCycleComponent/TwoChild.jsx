import React, { Component } from "react";

export default class TwoChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "QZ",
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <h3>Child</h3>
        {this.state.name}
        {this.props.title}
      </div>
    );
  }
}
