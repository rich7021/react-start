import React, { Component } from "react";

class HeroPage extends React.Component {
  render() {
    let heroPageData = {
      img: "url(" + require("../images/HeroPage.jpg") + ")",
      intro: "花享。花想, 將帶你一起走入這寧靜多彩的境地"
    };
    let intro = heroPageData.intro.split(", ");

    let portfolioItems = [];
    for (let i = 0; i < 4; i++) {
      portfolioItems.push(require("../images/logo.jpg"));
    }

    return [
      <div
        key={1}
        id="hero-img-container"
        className="container"
        style={{ backgroundImage: heroPageData.img }}
      >
        <div id="hero-intro-container">
          {intro.map((item, i) => {
            return <h2 key={i}>{item}</h2>;
          })}
        </div>
      </div>,
      <div key={2} className="container">
        <div className="container-banner">
          <h1>About</h1>
        </div>
        <span className="col-6 container-box">
          <div id="about-img-div">
            <img
              id="about-img"
              className="circle-image"
              src={require("../images/logo.jpg")}
              alt="花享"
              onClick={() => this.props.renderBody(<HeroPage />)}
            />
          </div>
        </span>
        <span className="col-6 container-box">
          <div id="about-intro-div">
            yoyoyo<br />
            <br /> hehehehehehehe<br />ehehehxhxhskal<br />a1234slslslllsl<br />s234u7uf9a8h9<br
            />j32897vajho9dshf
          </div>
        </span>
      </div>,
      <div key={3} className="container" id="heropage-portfolio">
        <div className="container-banner">
          <h1>Portfolio</h1>
        </div>
        <div className="col-12 container-box">
          {portfolioItems.map((item, i) => {
            return (
              <span key={i} className="col-3 portfolio-span">
                <img
                  id="portfolio-img"
                  className="circle-image"
                  src={item}
                  alt="花享"
                  onClick={() => this.props.renderBody(<HeroPage />)}
                />
              </span>
            );
          })}
        </div>
      </div>
    ];
  }
}

export default HeroPage;
