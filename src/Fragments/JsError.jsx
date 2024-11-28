import React, { Component } from "react";

export default class JsError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  onClickHandler = () => {
    // this.setState({
    //   error: true,
    // });
    // console.log(a);
    try {
      throw new Error("错误边界无法捕捉");
    } catch (e) {
      console.log(e);
    }
    // throw new Error("错误边界无法捕捉");
  };
  render() {
    return (
      <div>
        <h3>错误边界无法捕捉</h3>
        <button onClick={this.onClickHandler}>产生错误</button>
        {this.state.error && <h3>错误边界无法捕捉</h3>}
      </div>
    );
  }
}
