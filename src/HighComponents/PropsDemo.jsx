import React, { Component } from "react";
import withPropsData from "./withPropsData";

class componentName extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.age}</p>
        <ul>
          {this.props.name.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default withPropsData(componentName);
