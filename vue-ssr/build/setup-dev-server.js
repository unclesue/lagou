const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware")
const resolve = (file) => path.resolve(__dirname, file);

module.exports = (server, callback) => {
  let ready, serverBundle, template, clientManifest;
  const onReady = new Promise((resolve) => (ready = resolve));

  const update = () => {
    if (serverBundle && template && clientManifest) {
      ready();
      callback(serverBundle, template, clientManifest);
    }
  };

  // 构建template -> 调用update -> 更新renderer
  const templatePath = resolve("../index.template.html");
  template = fs.readFileSync(templatePath, "utf-8");
  update();
  chokidar.watch(templatePath).on("change", () => {
    template = fs.readFileSync(templatePath, "utf-8");
    update();
  });

  // 构建serverBundle -> 调用update -> 更新renderer
  const serverConfig = require("./webpack.server.config");
  const serverCompiler = webpack(serverConfig);
  const serverDevMiddleware = devMiddleware(serverCompiler, {
    logLevel: "silent",
  });
  serverCompiler.hooks.done.tap("server", () => {
    serverBundle = JSON.parse(
      serverDevMiddleware.fileSystem.readFileSync(resolve("../dist/vue-ssr-server-bundle.json"), "utf-8")
    );
    // console.log(serverBundle);
    update();
  });

  // 构建clientManifest -> 调用update -> 更新renderer
  const clientConfig = require("./webpack.client.config");
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  clientConfig.entry.app = [
    'webpack-hot-middleware/client?quiet=true&reload=true',
    clientConfig.entry.app
  ]
  clientConfig.output.filename = '[name].js'
  const clientCompiler = webpack(clientConfig);
  const clientDevMiddleware = devMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    logLevel: "silent",
  });
  clientCompiler.hooks.done.tap("client", () => {
    clientManifest = JSON.parse(
      clientDevMiddleware.fileSystem.readFileSync(resolve("../dist/vue-ssr-client-manifest.json"), "utf-8")
    );
    update();
  });
  server.use(hotMiddleware(clientCompiler, { log: false }))

  server.use(clientDevMiddleware)

  return onReady;
};
