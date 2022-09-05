import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./api/server");
  worker.start();
}

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
