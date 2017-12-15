import React, { Component } from "react";
import Utils from "../util/Utils";

class Product extends Component {
  constructor(props) {
    super(props);
    this.preloadContext = require.context("../images", false);
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
      description:
        "為了防止世界被破壞, 為了守護世界的和平, 貫徹愛與真實的邪惡, 可愛又迷人的反派角色, 我們是穿梭在銀河中的火箭隊, 白洞、白色的明天正等著我們"
    };

    this.state = {
      bgImg: data.bgImg,
      desciption: Utils.breakLine(data.description)
    };
  }

  render() {
    return (
      <div
        id="product-intro"
        className="container"
        style={{
          backgroundImage:
            "url(" + this.props.preloadContext(this.state.bgImg) + ")"
        }}
      >
        <div id="product-intro-content">
          <span>{this.state.desciption}</span>
        </div>
      </div>
    );
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
      { img: "./HeroPage.jpg", title: "product 4" }
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


export default Product;
