var React = require("react");
var ReactDOM = require("react-dom");
//TODO how to make it as requrie?
import App from "./Components/App";
import Content from "./Components/Content";

require("./css/main.css")

ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<Content />, document.getElementById('content'));
