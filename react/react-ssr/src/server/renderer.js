import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes";

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
  );
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