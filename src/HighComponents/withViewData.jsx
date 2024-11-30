import React from "react";

// export default function withViewData(WrappedComponent) {
//   //修改传入组件的效果
//   WrappedComponent.prototype.render = function () {
//     return <div>高阶组件修改后</div>;
//   };
//   return WrappedComponent;
// }

//组件组合
export default function withViewData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentView: "home",
      };
    }
    render() {
      return (
        <WrappedComponent title={this.state.currentView} {...this.props} />
      );
    }
  };
}
