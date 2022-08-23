import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../share/pages/Home";

export default () => {
  const content = renderToString(<Home />);
  return `
  <html>
    <head>
      <title>react ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
