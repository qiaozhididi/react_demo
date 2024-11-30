import React, { Component } from "react";
import withUserData from "./withUserData";

class UView2 extends Component {
  render() {
    return (
      <div>
        <h3>UView2</h3>
        <p>用户信息：{this.props.userInfo.nickName}</p>
      </div>
    );
  }
}
export default withUserData(UView2);
