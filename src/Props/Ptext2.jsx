import React, { Component } from "react";
import Ptext3 from "./Ptext3";

export default class Ptext2 extends Component {
  render() {
    return (
      <div>
        <h3>Ptext2</h3>
        <Ptext3 text={this.props.text} />
      </div>
    );
  }
}
