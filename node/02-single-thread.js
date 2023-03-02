const http = require("http");

const sleepTime = (time) => {
  const sleep = Date.now() + time * 1000;
  while (Date.now() < sleep) {}
  return;
};

sleepTime(4)

const app = http.createServer((req, res) => {
  res.end("server running...");
});

app.listen(8081, () => {
  console.log("服务启动了");
});
