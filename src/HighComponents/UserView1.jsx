import React, { Component } from "react";

export default class UserView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //用户信息
      userInfo: {},
    };
  }
  componentDidMount() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.setState({ userInfo });
  }
  render() {
    return (
      <div>
        <h3>UserView1</h3>
        <div>{this.state.userInfo.userName}</div>
      </div>
    );
  }
}
