import React, { Component } from "react";
import "./NavComponent.css";

export default class NavComponent extends Component {
  render() {
    //读取父元素传递的导航数据
    const { navs } = this.props;
    return (
      <div className="nav">
        <ul>
          {navs.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
