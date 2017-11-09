import React, { Component } from "react";
import ReactDOM from "react-dom";

import HeroPage from "./HeroPage";
import About from "./About";
import Artist from "./Artist";

import HeaderBtn from "../Components/HeaderBtn";

class NavBar extends React.Component {
  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("body"));
  }

  render() {
    return (
      <div>
        <div id="logo">
          <div className="col-4">
            <img
              id="logo-img"
              src={require("../images/logo.jpg")}
              alt="花享"
              onClick={() => this.renderContainer(<HeroPage />)}
            />
          </div>
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
