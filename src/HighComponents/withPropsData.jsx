import React from "react";

export default function withPropsData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "我是高阶组件",
      };
    }
    render() {
      return <WrappedComponent title={this.state.title} {...this.props} />;
    }
  };
}
