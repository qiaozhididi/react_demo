import React, { Component } from "react";

export default class FragMentDemo extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <React.Fragment>
          <h3>Hello World</h3>
        </React.Fragment>
      </React.Fragment>
    //   <>
    //     <h1>Hello World</h1>
    //     <h2>Hello World</h2>
    //   </>
    );
  }
}
