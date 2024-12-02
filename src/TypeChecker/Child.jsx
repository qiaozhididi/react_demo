import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Child extends Component {
  render() {
    return (
      <div>
        <h3>子组件</h3>
        <p>{this.props.title}</p>
        <ul>
          {this.props.name.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Child.propTypes = {
  title: PropTypes.string.isRequired, // 类型检查 必须选项
  name: PropTypes.array, // 类型检查
};
