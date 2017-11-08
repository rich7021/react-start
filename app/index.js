var React = require("react");
var ReactDOM = require("react-dom");

require("./css/main.css");

//TODO how to make it as requrie?
import NavBar from "./pages/NavBar";
import HeroPage from "./pages/HeroPage";

{
  ReactDOM.render(<NavBar />, document.getElementById("header"));
  ReactDOM.render(<HeroPage />, document.getElementById("body"));
}
