import React, { Component } from "react";

class HeaderBtn extends React.Component {
  clickHandler(value) {
    alert(value);
  }

  render() {
    return (
      <div
        className="col-2"
        onClick={() => this.clickHandler(this.props.value)}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default HeaderBtn;
