import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";
import Routes from "./Routes";
import { ConnectedRouter } from "connected-react-router";
import "./style.css";
import AnotherStore from "./anotherStore";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
