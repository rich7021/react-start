import React, { Component } from "react";

class IntroImg extends React.Component {
  render() {
    return (
      <div className="col-6" id="img-background">
        <img
          src={require("../../images/AboutPage.jpg")}
          style={{ height: 'calc(100% - 30px)' }}
          alt="img"
        />
      </div>
    );
  }
}

export default IntroImg;
