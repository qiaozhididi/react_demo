import React, { Component } from "react";
import RefsClassChild from "./RefsClassChild";

export default class RefsClassDemo extends Component {
  constructor(props) {
    super(props);
    this.classRefs = React.createRef();
  }
  componentDidMount() {
    console.log(this.classRefs);
    console.log(this.classRefs.current);
  }

  render() {
    return (
      <div>
        <h3>Refs & 类组件</h3>
        <RefsClassChild ref={this.classRefs} />
        <button
          onClick={() => {
            this.classRefs.current.onLog();
          }}
        >
          按钮
        </button>
      </div>
    );
  }
}
