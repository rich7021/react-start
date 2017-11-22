import React, { Component } from "react";

import IntroImg from "../IntroImg";
import Intro from "../Intro";

class ArtistIntro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container content-container">
        <IntroImg img={this.props.img} />
        <Intro textContent={this.props.textContent} />
      </div>
    );
  }
}

export default ArtistIntro;
