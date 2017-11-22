import React, { Component, StyleSheet } from "react";

import Banner from "./artist/Banner";
import ArtistIntro from "./artist/ArtistIntro";

class Artist extends React.Component {
  constructor(props) {
    let artists = [
      {
        img: require("../images/LuChi_profile.jpg"),
        name: "林璐旂",
        summary: "我是來自台灣的香港職人",
        content: "在這繁忙的生活步調下，慶幸能踏入另一片慢優雅世界"
      },
      {
        img: require("../images/logo.jpg"),
        name: "甲乙丙",
        summary: "測試slogan",
        content: "測試內容"
      }
    ];
    super(props);
    this.state = {
      artists: artists,
      curImg: artists[0].img,
      curTitle: artists[0].name,
      curSubtitle: artists[0].summary,
      curContent: artists[0].content,
      curArtistIdx: 0
    };

    this.handleArtsitBtnClick = this.handleArtsitBtnClick.bind(this);
  }
  handleArtsitBtnClick(i) {
    this.setState({
      curImg: this.state.artists[i].img,
      curTitle: this.state.artists[i].name,
      curSubtitle: this.state.artists[i].summary,
      curContent: this.state.artists[i].content,
      curArtistIdx: i
    });
  }
  renderArtistIntro() {
    return (
      <ArtistIntro
        img={this.state.curImg}
        title={this.state.curTitle}
        subtitle={this.state.curSubtitle}
        content={this.state.curContent}
      />
    );
  }
  render() {
    return (
      <div className="container content-container">
        <Banner
          onClick={this.handleArtsitBtnClick}
          bannerBtns={this.state.artists}
          currentBtnKey={this.state.curArtistIdx}
        />
        {this.renderArtistIntro()}
      </div>
    );
  }
}

export default Artist;
