import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import todo from "./store/Todo";
import "./styles/index.css"

ReactDOM.render(
  <Provider todo={todo}>
    <App />
  </Provider>,
  document.getElementById("root")
);
