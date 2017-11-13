import React, { Component } from "react";

class IntroImg extends React.Component {
  render() {
    return (
      <div className="col-6 intro-img-container">
        <img
          src={require("../../images/AboutPage.jpg")}
          alt="img"
        />
      </div>
    );
  }
}

export default IntroImg;
