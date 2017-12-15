import React, { Component } from "react";

class Intro extends React.Component {
  render() {
    return (
      <div className="col-6 intro-content-container">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <div>{this.props.content}</div>
      </div>
    );
  }
}

export default Intro;
