import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes";

ReactDom.hydrate(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById("root")
);
