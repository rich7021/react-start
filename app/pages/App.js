
import React, { Component } from "react";
import ReactDOM from 'react-dom'

import HeaderBtn from "../Components/HeaderBtn";
import HeroPage from "./HeroPage";
import About from "./About";
import Artist from "./Artist";

class App extends React.Component {
  renderContainer(obj) {
    ReactDOM.render(obj, document.getElementById("container"));
  }

  render() {
    return (
      <div>
        <div id="logo">
          <div className="col-4">
            <img id="logo-img" src={require("../images/logo.jpg")} alt="花享" />
          </div>{" "}
        </div>{" "}
        <div id="nav">
          <HeaderBtn value="About" onClick={() => this.renderContainer(<About />)} />
          <HeaderBtn value="Artist" onClick={() => this.renderContainer(<Artist />)}/>
          <HeaderBtn value="Product" />
          <HeaderBtn value="booking" />
          {/* if not using JSX*/}{" "}
          {/*{React.createElement(HeaderBtn, {value:"about"})}
                {React.createElement(HeaderBtn, {value:"product"})}
                {React.createElement(HeaderBtn, {value:"beautician"})}
                {React.createElement(HeaderBtn, {value:"booking"})}*/}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
