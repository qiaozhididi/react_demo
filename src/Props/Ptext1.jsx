import React, { Component } from "react";
import Ptext2 from "./Ptext2";

export default class Ptext1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
    };
  }
  render() {
    return (
      <div>
        <h2>Props</h2>
        <h3>Ptext1</h3>
        <Ptext2 text={this.state.text} />
      </div>
    );
  }
}
