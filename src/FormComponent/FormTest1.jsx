import React, { Component } from "react";

export default class FormTest1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  onChangeHandler(e) {
    //将收集到的信息赋值给state
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit = (e) => {
    //阻止表单默认提交行为
    e.preventDefault();
    console.log(this.state.username);
  };
  render() {
    return (
      <div>
        <h3>表单受控组件</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChangeHandler.bind(this)}
          />
          <input type="submit" value="登录" />
        </form>
      </div>
    );
  }
}
