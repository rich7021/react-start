import React, { Component } from "react";

class HeaderBtn extends React.Component {
  render() {
    return (
      <div className="col-2" onClick={this.props.onClick}>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default HeaderBtn;
