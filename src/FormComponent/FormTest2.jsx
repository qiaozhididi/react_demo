import React, { Component } from "react";

export default class FormTest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  userNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChange = (e) => {
    this.setState({
      //es6+ 对象新特性 动态获取表单元素的name属性
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h3>受控组件处理多个输入</h3>
        <form onSubmit={this.onSubmit}>
          {/* <input
          
            type="text"
            name="username"
            value={username}
            onChange={this.userNameChange.bind(this)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.passwordChange.bind(this)}
          />
          <input type="submit" value="登录" /> */}
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
          <input type="submit" value="登录" />
        </form>
      </div>
    );
  }
}
