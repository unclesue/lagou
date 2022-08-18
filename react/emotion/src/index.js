import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#409EFF",
    success: "#67C23A",
    warning: "#E6A23C",
    danger: "#F56C6C",
    info: "#909399",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
