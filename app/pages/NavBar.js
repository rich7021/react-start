import React, { Component } from "react";
import ReactDOM from "react-dom";

import HeroPage from "./HeroPage";
import About from "./About";
import Artist from "./Artist";

import HeaderBtn from "../Components/HeaderBtn";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("body"));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 120) {
      this.setState({ className: "small" });
    } else {
      this.setState({ className: "" });
    }
  }

  render() {
    return (
      <div id="header" className={this.state.className}>
        <div id="logo">
          <img
            id="logo-img"
            src={require("../images/logo.jpg")}
            alt="花享"
            onClick={() => this.renderContainer(<HeroPage />)}
          />
        </div>
        <div id="nav">
          <HeaderBtn value="booking" />
          <HeaderBtn value="Product" />
          <HeaderBtn
            value="Artist"
            onClick={() => this.renderContainer(<Artist />)}
          />
          <HeaderBtn
            value="About"
            onClick={() => this.renderContainer(<About />)}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
