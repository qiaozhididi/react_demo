import React, { Component, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
// import LazyComponent from "./LazyComponent";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  clickHandler = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div>
        <h3>Layout</h3>
        <button onClick={this.clickHandler}>点击</button>
        {this.state.flag && (
          <ErrorBoundary>
            <Suspense fallback={<div>等待...</div>}>
              <LazyComponent />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    );
  }
}
