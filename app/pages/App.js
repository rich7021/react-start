import React, { Component } from "react";
import HeaderBtn from "../Components/HeaderBtn";

class App extends React.Component {
  constructor(props) {
    super(props);
    {
      /*this.state = {};*/
    }
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
          <HeaderBtn value="About" />
          <HeaderBtn value="Artist" />
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
