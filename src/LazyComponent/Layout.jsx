import React, { Component } from "react";
// import LazyComponent from "./LazyComponent";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h3>Layout</h3>
        <LazyComponent />
      </div>
    );
  }
}
