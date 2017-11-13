import React, { Component, StyleSheet } from "react";

import Banner from "./artist/Banner";
import ArtistIntro from "./artist/ArtistIntro";

class Artist extends React.Component {
  render() {
    return (
      <div className="container content-container">
        <Banner />
        <ArtistIntro imgPath="../../images/LuChi_profile.jpg" />
      </div>
    );
  }
}

export default Artist;
