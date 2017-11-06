import React, { Component } from "react";
import ReactDOM from 'react-dom'

import HeroPage from "./HeroPage";
import About from "./About";
import Artist from "./Artist";

import HeaderBtn from "../Components/HeaderBtn";

class App extends React.Component {
  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("container"));
  }

  render() {
    return (
      <div>
        <div id="logo">
          <div className="col-4">
            <img id="logo-img" src={require("../images/logo.jpg")} alt="花享" onClick={() => this.renderContainer(<HeroPage />)} />
          </div>
        </div>
        <div id="nav">
          <HeaderBtn value="About" onClick={() => this.renderContainer(<About />)} />
          <HeaderBtn value="Artist" onClick={() => this.renderContainer(<Artist />)}/>
          <HeaderBtn value="Product" />
          <HeaderBtn value="booking" />
        </div>
      </div>
    );
  }
}

export default App;
