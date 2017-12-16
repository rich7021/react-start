import React from "react";
import Navbar from "./header/Navbar";
import HeroPage from "./heroPage/HeroPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { goPage } from "../actions/App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.goPage = this.goPage.bind(this);
  }
  goPage(page) {
    const actions = this.props.actions;
    actions.goPage(page);
  }
  render() {
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
