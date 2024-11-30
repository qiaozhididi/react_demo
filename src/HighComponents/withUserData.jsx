import React from "react";

// 高阶组件
//参数是函数类型
// 高阶组件是函数式
export default function withUserData(WrappedComponent) {
  return class extends React.Component {
    //组件内部结构：把公共逻辑抽离出来
    constructor(props) {
      super(props);
      this.state = {
        //用户信息
        userInfo: {},
      };
    }
    componentDidMount() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.setState({ userInfo });
    }
    render() {
      // ...this.props 传递给当前组件的属性继续往下传递
      return (
        <WrappedComponent userInfo={this.state.userInfo} {...this.props} />
      );
    }
  };
}
