import React, { Component } from "react";
import ReactDOM from "react-dom";
{
  /*pages*/
}
import HeroPage from "./HeroPage";
import About from "./About";
import Artist from "./Artist";

{
  /*components*/
}
import HeaderBtn from "../Components/HeaderBtn";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
  }

  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("body"));
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll(event) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.addSmallClass("small");
    } else {
      this.addSmallClass("");
    }
  }

  addSmallClass(className) {
    this.setState({ className: className });
    this._child.shrink(className);
  }

  render() {
    return (
      <div id="header" className={this.state.className}>
        <div id="logo">
          {/*ref us used to bind this component together with others*/}
          <LogoImage
            ref={child => {
              this._child = child;
            }}
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

class LogoImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
  }

  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("body"));
  }

  shrink(className) {
    this.setState({ className: className });
  }

  render() {
    return (
      <img
        id="logo-img"
        className={this.state.className}
        src={require("../images/logo.jpg")}
        alt="花享"
        onClick={() => this.renderContainer(<HeroPage />)}
      />
    );
  }
}

export default NavBar;
