import React, { Component, StyleSheet } from "react";

import Banner from "./artist/Banner";
import ArtistIntro from "./artist/ArtistIntro";

class Artist extends React.Component {
  constructor(props) {
    let artists = [
      {
        img: require("../images/LuChi_profile.jpg"),
        textContent: "1234"
      },
      {
        img: require("../images/logo.jpg"),
        textContent: "2234"
      }
    ];

    super(props);
    this.state = {
      currentImg: artists[0].img,
      currentContext: artists[0].textContent,
      artists: artists,
      currentArtist: 0
    };
    this.handleArtsitBtnClick = this.handleArtsitBtnClick.bind(this);
  }
  handleArtsitBtnClick(i) {
    this.setState({
      currentImg: this.state.artists[i].img,
      currentContext: this.state.artists[i].textContent
    });
  }
  renderArtistIntro() {
    return (
      <ArtistIntro
        img={this.state.currentImg}
        textContent={this.state.currentContext}
      />
    );
  }
  render() {
    return (
      <div className="container content-container">
        <Banner
          onClick={this.handleArtsitBtnClick}
          bannerBtns={this.state.artists}
          currentBtnKey={this.state.currentArtist}
        />
        {this.renderArtistIntro()}
      </div>
    );
  }
}

export default Artist;
