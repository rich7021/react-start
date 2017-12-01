import React, { Component } from "react";

class HeroPage extends React.Component {
  render() {
    let heroPageData = {
      img: "url(" + require("../images/HeroPage.jpg") + ")"
    };
    return (
      <div className="container">
        <div
          id="hero-img-container"
          style={{ backgroundImage: heroPageData.img }}
        >
          <div id="hero-intro-container">
            <h2>
              花享。花想<br />將帶你一起走入這寧靜多彩的境地
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroPage;
