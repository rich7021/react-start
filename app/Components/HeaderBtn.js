import React, { Component } from "react";

class HeaderBtn extends React.Component {
  render() {
    return (
      <div className="col-2 nav-btn">
        <p>
          <span onClick={this.props.onClick}>{this.props.value}</span>
        </p>
      </div>
    );
  }
}

export default HeaderBtn;
