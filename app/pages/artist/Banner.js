import React, { Component } from "react";

class Banner extends React.Component {
  getOriClass() {
    return "content-banner";
  }
  constructor(props) {
    super(props);
    this.state = { className: this.getOriClass() };
  }
  componentWillMount() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.setState({ className: this.getOriClass() + " small" });
    } else {
      this.setState({ className: this.getOriClass() });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll(event) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.setState({ className: this.getOriClass() + " small" });
    } else {
      this.setState({ className: this.getOriClass() });
    }
  }

  render() {
    return (
      <div id="artist-banner" className={this.state.className}>
        <div className="banner-title col-4">
          <p>Artist Photos</p>
        </div>
        <div className="banner-btn-div col-8">
          <img
            className="banner-btn"
            src={require("../../images/LuChi_profile.jpg")}
            alt="花享"
          />
          <img
            className="banner-btn"
            src={require("../../images/logo.jpg")}
            alt="花享"
          />
        </div>
      </div>
    );
  }
}

export default Banner;
