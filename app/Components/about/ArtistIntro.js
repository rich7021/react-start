import React, { Component } from "react";

import IntroImg from "../IntroImg";
import Intro from "../Intro";

class ArtistIntro extends React.Component {
  render() {
    return [
      <IntroImg img={this.props.img} />,
      <Intro
        title={this.props.title}
        subtitle={this.props.subtitle}
        content={this.props.content}
      />
    ];
  }
}

export default ArtistIntro;
