var React = require("react");
var ReactDOM = require("react-dom");

require("./css/main.css");

//TODO how to make it as requrie?
import NavBar from "./pages/NavBar";
import HeroPage from "./pages/HeroPage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBody: <HeroPage />
    };
    document.documentElement.scrollTop = 0;
    this.renderBody = this.renderBody.bind(this);
  }

  renderBody(contentClass) {
    this.setState({ currentBody: contentClass });
  }

  render() {
    return (
      <div id="body-container">
        <NavBar renderBody={this.renderBody} />
        <div id="body">
          {this.state.currentBody}
        </div>
        <div id="footer" />
      </div>
    );
  }
}

{
  ReactDOM.render(<Index />, document.getElementsByTagName("body")[0]);
}
