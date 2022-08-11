const Vue = require("vue");
const fs = require("fs");
const express = require("express");
const { createBundleRenderer } = require("vue-server-renderer");
const setupDevServer = require("./build/setup-dev-server");

const server = express();
server.use("/dist", express.static("./dist"));

const isProd = process.env.NODE_ENV === "production";

let onReady;
let renderer;
if (isProd) {
  const serverBundle = require("./dist/vue-ssr-server-bundle.json");
  const template = fs.readFileSync("./index.template.html", "utf-8");
  const clientManifest = require("./dist/vue-ssr-client-manifest.json");
  renderer = createBundleRenderer(serverBundle, { template, clientManifest });
} else {
  // 开发模式
  onReady = setupDevServer(server, (serverBundle, template, clientManifest) => {
    renderer = createBundleRenderer(serverBundle, { template, clientManifest });
  });
}

const render = async (req, res) => {
  try {
    const html = await renderer.renderToString({
      url: req.url,
      title: "拉钩教育",
      meta: `<meta name="description" content="拉钩教育123"></meta>`,
    });
    res.setHeader("Content-Type", "text/html; charset=utf8");
    res.end(html);
  } catch (err) {
    return res.status(500).end("Internal Server Error.");
  }
};

server.get(
  "*",
  isProd
    ? render
    : async (req, res) => {
        await onReady;
        render(req, res);
      }
);

server.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
