import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import HeroPage from "../heroPage/HeroPage";
import About from "../about/About";
import Product from "../product/Product";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navList = [
      { value: "Home" },
      { value: "About" },
      { value: "Product" },
      { value: "booking" }
    ];

    return (
      <div id="header">
        <div id="logo">
          <LogoImage />
        </div>
        <div id="nav">
          {navList.reverse().map((item, i) => {
            return (
              <Link to={"/" + item.value}>
                <HeaderBtn key={i} value={item.value} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;

class LogoImage extends React.Component {
  render() {
    return (
      <img id="logo-img" src={require("../../images/logo.jpg")} alt="花享" />
    );
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
