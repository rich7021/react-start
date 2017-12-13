import React from "react";
import NavBar from "../containers/NavBar";
import HeroPage from "../pages/HeroPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { actions, className } = this.props;
    return (
      <div id="body-container">
        <NavBar />
        <div id="body">
          <HeroPage />
        </div>
        <div id="footer" />
      </div>
    );
  }
}

export default App;
