import React, { Component } from "react";

import IntroImg from './IntroImg';
import Intro from './Intro';

class ArtistIntro extends React.Component {
  render() {
    return(
      <div className="container content-container">
        <IntroImg />
        <Intro />
      </div>
      // <div id="artist-intro" class="">
      //   <div >
      //     Artist Photos
      //   </div>
      //   <div>
      //   </div>
      // </div>
    );
  }
}

export default ArtistIntro;
