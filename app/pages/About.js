import React, { Component } from "react";
import IntroImg from "./about/IntroImg";
import Intro from "./about/Intro";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <IntroImg />
        <Intro />
      </div>
    );
  }
}

export default About;
