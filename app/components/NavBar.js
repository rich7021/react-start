import React from "react";
import { connect } from "react-redux";

import HeroPage from "../pages/HeroPage";
import About from "../pages/About";
import Product from "../pages/Product";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navList = [
      { value: "Home", renderObj: <HeroPage /> },
      { value: "About", renderObj: <About /> },
      { value: "Product", renderObj: <Product /> },
      { value: "booking", renderObj: null }
    ];

    return (
      <div id="header">
        <div id="logo">
          <LogoImage />
        </div>
        <div id="nav">
          {navList.reverse().map((item, i) => {
            return (
              <HeaderBtn
                key={i}
                onClick={() => this.props.goPage(item.renderObj)}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;

class LogoImage extends React.Component {
  render() {
    return <img id="logo-img" src={require("../images/logo.jpg")} alt="花享" />;
  }
}

class HeaderBtn extends React.Component {
  render() {
    return (
      <div className="col-2 nav-btn">
        <p>
          <span onClick={this.props.onClick}>{this.props.value}</span>
        </p>
      </div>
    );
  }
}
