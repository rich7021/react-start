import React, { Component } from "react";
import ReactDOM from "react-dom";
{
  /*pages*/
}
import HeroPage from "./HeroPage";
import About from "./About";

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
    let navList = [
      { value: "Home", renderObj: <HeroPage /> },
      { value: "About", renderObj: <About /> },
      { value: "Product", renderObj: null },
      { value: "booking", renderObj: null }
    ];
    return (
      <div id="header" className={this.state.className}>
        <div id="logo">
          {/*ref us used to bind this component together with others*/}
          <LogoImage
            ref={child => {
              this._child = child;
            }}
            renderBody={this.props.renderBody}
          />
        </div>
        <div id="nav">
          {navList.reverse().map((item, i) => {
            return (
              <HeaderBtn
                key={i}
                value={item.value}
                onClick={() => this.props.renderBody(item.renderObj)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class LogoImage extends React.Component {
  shrink(className) {
    this.setState({ className: className });
  }
  render() {
    return (
      <img
        id="logo-img"
        className={this.props.className}
        src={require("../images/logo.jpg")}
        alt="花享"
        onClick={() => this.props.renderBody(<HeroPage />)}
      />
    );
  }
}

export default NavBar;
