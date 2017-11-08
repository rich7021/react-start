import React, { Component } from "react";

class HeroPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          id="hero-img"
          src={require("../images/HeroPage.jpg")}
          alt="img"
        />
      </div>
    );
  }
}

export default HeroPage;
