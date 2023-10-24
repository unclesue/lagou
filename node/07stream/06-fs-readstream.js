const fs = require("fs");

const rs = fs.createReadStream("./test.txt", {
  flags: "r",
  encoding: null,
  fd: null,
  mode: 438,
  autoClose: true,
  start: 3,
  //   end: 5,
  highWaterMark: 6,
});

// rs.on("data", (chunk) => {
//   console.log("chunk", chunk.toString());
//   rs.pause();
//   setTimeout(() => {
//     rs.resume();
//   }, 1000);
// });

// rs.on("readable", () => {
//   let data;
//   while ((data = rs.read(3)) !== null) {
//     console.log("data", data.toString());
//     console.log('----------', rs._readableState.length)
//   }
// });

rs.on("open", (fd) => {
  console.log(fd, "文件打开了");
});

rs.on("close", () => {
  console.log('close', "文件关闭了");
});

let bufferArr = [];
rs.on("data", (chunk) => {
  bufferArr.push(chunk);
});

rs.on("end", () => {
  console.log('end', Buffer.concat(bufferArr).toString());
});

rs.on("error", (err) => {
  console.log('error', "出错了");
});
