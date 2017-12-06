import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);

    const data = {
      introBackground: "./HeroPage.jpg",
      productData: [
        { img: "./HeroPage.jpg", title: "product 1" },
        { img: "./HeroPage.jpg", title: "product 2" },
        { img: "./HeroPage.jpg", title: "product 3" },
        { img: "./HeroPage.jpg", title: "product 4" }
      ]
    };
    this.preloadContext = require.context("../images", false);

    this.state = {
      introBackground: data.introBackground,
      data: data.productData
    };
  }

  render() {
    return [
      <Product_Intro
        backgroundImage={this.preloadContext(this.state.introBackground)}
      />,
      <Product_List
        preloadContext={this.preloadContext}
        data={this.state.data}
      />
    ];
  }
}

class Product_Intro extends React.Component {
  render() {
    return (
      <div
        id="product-intro"
        className="container"
        style={{ backgroundImage: "url(" + this.props.backgroundImage + ")" }}
      >
        <div id="product-intro-content">
          <span>
            為了防止世界被破壞<br />
            為了守護世界的和平<br />
            貫徹愛與真實的邪惡<br />
            可愛又迷人的反派角色<br />
            我們是穿梭在銀河中的火箭隊<br />
            白洞、白色的明天正等著我們 <br />
          </span>
        </div>
      </div>
    );
  }
}

class Product_List extends React.Component {
  render() {
    return (
      <div className="container content-container">
        {this.props.data.map((item, i) => {
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
