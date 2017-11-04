import React, { Component } from "react";

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-6 img-background">
          <img src="http://lorempixel.com/500/650/" alt="img" />
        </div>
        <div className="col-6 shop-background">
          <p>about the shop</p>
        </div>
      </div>
    );
  }
}

export default Content;
