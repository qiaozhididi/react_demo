import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
