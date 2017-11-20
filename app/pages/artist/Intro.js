import React, { Component } from "react";

class Intro extends React.Component {
  render() {
    return (
      <div className="col-6 intro-content-container">
        {this.props.textContent}
      </div>
    );
  }
}

export default Intro;
