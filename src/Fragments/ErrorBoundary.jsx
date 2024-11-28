import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
    };
  }
  //   static getDerivedStateFromError(error) {
  //     return { hasError: true };
  //   }
  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>错误</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.info.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
