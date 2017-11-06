var React = require("react");
var ReactDOM = require("react-dom");

require("./css/main.css");

//TODO how to make it as requrie?
import App from "./pages/App";
import HeroPage from "./pages/HeroPage";

{
  ReactDOM.render(<App />, document.getElementById("header"));
  ReactDOM.render(<HeroPage />, document.getElementById("container"));
}
