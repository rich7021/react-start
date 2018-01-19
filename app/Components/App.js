import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import ProductDetails from "./product/ProductDetails";
import Navbar from "./header/Navbar";
import HeroPage from "./heroPage/HeroPage";
import About from "./about/about";
import Product from "./product/Product";

import { goPage } from "../actions/App";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, page } = this.props;
    return (
      <Router>
        <ScrollToTop>
          <BodyComponent />
        </ScrollToTop>
      </Router>
    );
  }
}

class BodyComponent extends React.Component {
  render() {
    return (
      <div id="body-container">
        <ProductDetails />
        <Navbar />
        <div id="body">
          <Route exact path="/" component={HeroPage} />
          <Route path="/home" component={HeroPage} />
          <Route path="/about" component={About} />
          <Route path="/Product" component={Product} />
        </div>
        <div id="footer" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { page: state.App.page };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ goPage: goPage }, dispatch)
  };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
