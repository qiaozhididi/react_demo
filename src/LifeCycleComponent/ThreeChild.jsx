import React, { Component } from "react";

const API = {
  count: 0,
  subScribe(cb) {
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count);
      cb(this.count);
    }, 1000);
  },
  unSubScribe() {
    clearInterval(this.interval);
    this.count = 0;
  },
  reset() {
    this.count = 0;
  },
};
export default class ThreeChild extends Component {
  componentDidMount() {
    API.subScribe((currentCount) => {
      console.log(currentCount);
    });
  }
  render() {
    return (
      <div>
        <h3>ThreeChild</h3>
      </div>
    );
  }
  componentWillUnmount() {
    console.log("组件卸载");
    API.unSubScribe(); // 清除定时器
  }
}
