import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme"

console.log(theme)
// 设置默认颜色模式
theme.config.initialColorMode = "light"
// 使用操作系统使用的颜色模式
// theme.config.useSystemColorMode = true

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
