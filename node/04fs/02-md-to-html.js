const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const browserSync = require("browser-sync");
const chokidar = require("chokidar");

const mdPath = path.join(__dirname, process.argv[2]);
const cssPath = path.resolve("style.css");
const htmlPath = mdPath.replace(path.extname(mdPath), ".html");

const temp = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>{{style}}</style>
  </head>
  <body>
    {{content}}
  </body>
</html>
`;

const parseFile = () => {
  fs.readFile(mdPath, "utf-8", (err, data) => {
    if (!err) {
      const content = marked.parse(data);
      fs.readFile(cssPath, "utf-8", (err, data) => {
        if (!err) {
          // 替换html中的占位符
          const htmlStr = temp
            .replace("{{style}}", data)
            .replace("{{content}}", content);
          // 生成html文件
          fs.writeFile(htmlPath, htmlStr, "utf-8", (err) => {
            console.log("html写入成功");
          });
        }
      });
    }
  });
};

// 监听文件变化
chokidar.watch([mdPath, cssPath]).on("change", (path) => parseFile());

browserSync.init({
  // browser: 'google chrome',
  server: __dirname,
  watch: true,
  index: "index.html",
});
