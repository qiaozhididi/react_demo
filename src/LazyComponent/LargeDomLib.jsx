import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";

export default class LargeDomLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    let list = [];
    for (let i = 0; i < 50000; i++) {
      list.push(i);
    }
    this.setState({
      list,
    });
  }
  render() {
    return (
      <div>
        <h3>性能优化-虚拟列表</h3>
        <div style={{ hight: "200px", border: "1px solid red" }}>
          <AutoSizer disableHeight>
            {({ width }) => {
              return (
                <List
                  width={width}
                  height={200}
                  rowCount={this.state.list.length}
                  rowHeight={30}
                  rowRenderer={({ key, index, style }) => {
                    return (
                      <li key={key} style={style}>
                        这是第{index + 1}条数据
                      </li>
                    );
                  }}
                />
              );
            }}
          </AutoSizer>
        </div>
      </div>
    );
  }
}
