import React, { Component } from "react";

class IntroImg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-6 intro-img-container">
        <img src={this.props.img} alt="img" />
      </div>
    );
  }
}

export default IntroImg;
