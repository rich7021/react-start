import React from "react";
import Navbar from "./NavBar";
import HeroPage from "../pages/HeroPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { goPage } from "../actions/App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.goPage = this.goPage.bind(this);
  }
  goPage(page) {
    console.log(this.props);
    const actions = this.props.actions;
    actions.goPage(page);
  }
  render() {
    console.log(this.props);
    const { actions, page } = this.props;
    return (
      <div id="body-container">
        <Navbar goPage={this.goPage} />
        <div id="body">{page}</div>
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
