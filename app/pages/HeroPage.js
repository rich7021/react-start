import React, { Component } from "react";

class HeroPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="hero-img-container">
          <img
            id="hero-img"
            src={require("../images/HeroPage.jpg")}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default HeroPage;
