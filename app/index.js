var React = require("react");
var ReactDOM = require("react-dom");
import { Router, Route, hashHistory, IndexRoute } from "react-router";

require("./css/main.css");

//TODO how to make it as requrie?
import App from "./pages/App";
import About from "./pages/About";

{
  ReactDOM.render(<App />, document.getElementById("header"));
  ReactDOM.render(<About />, document.getElementById("content"));
}
