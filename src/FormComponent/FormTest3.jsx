import React, { Component } from "react";

export default class FormTest3 extends Component {
  constructor(props) {
    super(props);
    //赋予username操作DOM权限
    this.username = React.createRef();
    this.password = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  };
  render() {
    return (
      <div>
        <h3>非受控组件</h3>
        <form onSubmit={this.onSubmit}>
          <input type="text" defaultValue="默认" name="username" ref={this.username} />
          <input type="password" defaultValue="123" name="password" ref={this.password} />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
