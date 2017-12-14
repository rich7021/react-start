import React from "react";
import { connect } from "react-redux";

import HeaderBtn from "../components/HeaderBtn";
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
            return <HeaderBtn key={i} value={item.value} />;
          })}
        </div>
      </div>
    );
  }
}

class LogoImage extends React.Component {
  render() {
    return <img id="logo-img" src={require("../images/logo.jpg")} alt="花享" />;
  }
}

export default NavBar;
