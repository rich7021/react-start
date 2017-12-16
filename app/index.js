import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import App from "./components/App";
import { reducers } from "./reducers";

require("./css/main.css");

{
  const middleware = applyMiddleware(createLogger());

  let store = createStore(reducers, middleware);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
