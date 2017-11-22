import React, { Component } from "react";

class Banner extends React.Component {
  getOriClass() {
    return "content-banner";
  }
  constructor(props) {
    super(props);
    this.state = {
      className: this.getOriClass(),
      bannerBtns: props.bannerBtns,
      currentBtnKey: props.currentBtnKey
    };
  }
  componentWillMount() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop != 0) {
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
    if (scrollTop != 0) {
      this.setState({ className: this.getOriClass() + " small" });
    } else {
      this.setState({ className: this.getOriClass() });
    }
  }
  render() {
    let btns = this.state.bannerBtns.slice();
    return (
      <div id="artist-banner" className={this.state.className}>
        <div className="banner-title col-4">
          <p>Artist Photos</p>
        </div>
        <div className="banner-btn-div col-8">
          {this.state.bannerBtns.map((btn, i) => {
            return (
              <img
                key={i}
                className="banner-btn"
                src={btn.img}
                alt={btn.title}
                onClick={() => this.props.onClick(i)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Banner;
