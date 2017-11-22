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
        <Intro
          title={this.props.title}
          subtitle={this.props.subtitle}
          content={this.props.content}
        />
      </div>
    );
  }
}

export default ArtistIntro;
