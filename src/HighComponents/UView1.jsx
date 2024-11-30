import React, { Component } from "react";
import withUserData from "./withUserData";

class UView1 extends Component {
  render() {
    return (
      <div>
        <h3>UView1</h3>
        <p>用户信息：{this.props.userInfo.userName}</p>
        <p>属性：{this.props.title}</p>
      </div>
    );
  }
}
export default withUserData(UView1);
