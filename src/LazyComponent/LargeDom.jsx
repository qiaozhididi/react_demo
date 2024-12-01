import React, { Component } from "react";

export default class LargeDom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.preList = new Array(10000).fill(1);
    this.sliceTime(0);
  }

  //时间分片
  sliceTime = (times) => {
    if (times == 400) {
      return;
    }
    setTimeout(() => {
      const sliceList = this.preList.slice(times * 100, (times + 1) * 100);
      this.setState({ list: this.state.list.concat(sliceList) });
      this.sliceTime(times + 1);
    }, 0);
  };
  render() {
    return (
      <div>
        <h3>LargeDom</h3>
        {this.state.list.map((item, index) => (
          <li key={index}>这是第{index + 1}条数据</li>
        ))}
      </div>
    );
  }
}
