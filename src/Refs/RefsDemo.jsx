import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    console.log(this.divRef.current);
    this.divRef.current.style.color = "red";
  };

  componentDidMount() {
    console.log(this.inputRef.current.value);
    const node = this.inputRef.current;
    node.focus();
  }

  render() {
    return (
      <div>
        <h3>Refs&DOM</h3>
        <div ref={this.divRef}>
          <p>这是一个div</p>
        </div>
        <button onClick={this.clickHandler}>获取div</button>
        <br />
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
