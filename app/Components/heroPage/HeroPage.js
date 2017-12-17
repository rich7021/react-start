import React, { Component } from "react";

class HeroPage extends React.Component {
  render() {
    return [<HeroPage_Home />, <HeroPage_About />, <HeroPage_Portfolio />];
  }
}

class HeroPage_Home extends React.Component {
  render() {
    let heroPageData = {
      img: "url(" + require("../../images/HeroPage.jpg") + ")",
      intro: "FIND YOUR FLORA"
    };
    let intro = heroPageData.intro.split(", ");
    return [
      <div
        key={1}
        id="hero-img-container"
        className="container opacity-bg-container"
        style={{ backgroundImage: heroPageData.img }}
      >
        <div id="hero-intro-container" className="opacity-bg-content">
          {intro.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
          <div id="portfolio-btn">SEE PORTFOLIO</div>
        </div>
      </div>,
      <div className="opacity-bg-opacity-layer" />
    ];
  }
}

class HeroPage_About extends React.Component {
  render() {
    return (
      <div id="about-container" className="container">
        <div className="container-banner">About</div>
        <div className="container-box">
          <div className="col-6" id="about-img-div">
            <img
              id="about-img"
              className="circle-image"
              src={require("../../images/logo.jpg")}
              alt="花享"
              onClick={() => this.props.renderBody(<HeroPage />)}
            />
            <div>067</div>
          </div>
          <div className="col-6" id="about-intro-div">
            Seize the moment<br />
            <br />理工背景的067意外接觸到了<br />將美好畫面<br />凍結成永恆的領域<br
            />將做著夢將這份喜悅分享出去<br />
            <br />陪著你客製化你的夢想時刻
          </div>
        </div>
        <div className="container-footer">
          <div className="btn">more...</div>
        </div>
      </div>
    );
  }
}

class HeroPage_Portfolio extends React.Component {
  render() {
    let portfolioItems = [];
    for (let i = 0; i < 4; i++) {
      portfolioItems.push(require("../../images/logo.jpg"));
    }
    return (
      <div key={3} className="container" id="heropage-portfolio">
        <div className="container-banner">Portfolio</div>
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
        <div className="container-footer">
          <div className="btn">more...</div>
        </div>
      </div>
    );
  }
}

export default HeroPage;
