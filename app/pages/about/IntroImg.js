import React, { Component } from "react";

class IntroImg extends React.Component {
  render() {
    return (
      <div className="col-6 img-background">
        <img
          src={require("../../images/AboutPage.jpg")}
          style={{ width: 500 }}
          alt="img"
        />
      </div>
    );
  }
}

export default IntroImg;
