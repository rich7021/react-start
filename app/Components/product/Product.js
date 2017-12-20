import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Utils from "../../util/Utils";

import { showModal } from "../../actions/App";
import { showProductDetails } from "../../actions/Product";

class Product extends Component {
  constructor(props) {
    super(props);
    this.preloadContext = require.context("../../images", false);
  }

  render() {
    return [
      <Product_Intro preloadContext={this.preloadContext} />,
      <Product_List preloadContext={this.preloadContext} />
    ];
  }
}

class Product_Intro extends React.Component {
  constructor(props) {
    super(props);
    //TODO call api get page setting
    var data = {
      bgImg: "./HeroPage.jpg",
      description: "Find your own flora here, if you didn't, tell us"
    };

    this.state = {
      bgImg: data.bgImg,
      desciption: Utils.breakLine(data.description)
    };
  }

  render() {
    return [
      <div
        id="product-intro"
        className="container opacity-bg-container"
        style={{
          backgroundImage:
            "url(" + this.props.preloadContext(this.state.bgImg) + ")"
        }}
      >
        <div id="product-intro-content" className="opacity-bg-content">
          <div>{this.state.desciption}</div>
        </div>
      </div>,
      <div className="opacity-bg-opacity-layer product-intro" />
    ];
  }
}

class Product_List extends React.Component {
  constructor(props) {
    super(props);
    //TODO call api get product list
    var productList = [
      { img: "./HeroPage.jpg", title: "product 1" },
      { img: "./HeroPage.jpg", title: "product 2" },
      { img: "./HeroPage.jpg", title: "product 3" },
      { img: "./HeroPage.jpg", title: "product 4" },
      { img: "./HeroPage.jpg", title: "product 5" },
      { img: "./HeroPage.jpg", title: "product 6" },
      { img: "./HeroPage.jpg", title: "product 7" },
      { img: "./HeroPage.jpg", title: "product 8" },
      { img: "./HeroPage.jpg", title: "product 9" }
    ];
    this.state = {
      productList: productList
    };
  }

  render() {
    return (
      <div className="container content-container">
        {this.state.productList.map((item, i) => {
          return (
            <span key={i} className="col-4 product">
              <div className="col-12 product-img">
                <img
                  key={item}
                  className="product-list-img"
                  src={this.props.preloadContext(`${item.img}`)}
                  alt="img"
                  onClick={() => this.props.actions.showProductDetails()}
                />
              </div>
              <div className="col-12 product-title">{item.title}</div>
            </span>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { showProductDetails: showProductDetails },
      dispatch
    )
  };
}

Product_List = connect(null, mapDispatchToProps)(Product_List);

export default Product;
