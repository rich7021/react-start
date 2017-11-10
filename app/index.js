var React = require("react");
var ReactDOM = require("react-dom");

require("./css/main.css");

//TODO how to make it as requrie?
import NavBar from "./pages/NavBar";
import HeroPage from "./pages/HeroPage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.documentElement.scrollTop = 0;
  }

  render() {
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

{
  ReactDOM.render(<Index />, document.getElementsByTagName("body")[0]);
}
