import React, { Component } from "react";
import Ptext2 from "./Ptext2";
import MyContext from "./MyContext";

export default class Ptext1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        name: "Ptext1",
      },
    };
  }
  render() {
    return (
      <div>
        <h2>Context</h2>
        <h3>Ptext1</h3>
        <MyContext.Provider value={this.state.text}>
          <Ptext2 />
        </MyContext.Provider>
      </div>
    );
  }
}
