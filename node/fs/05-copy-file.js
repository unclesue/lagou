const fs = require("fs");

let buf = Buffer.alloc(10);

const bufferSize = buf.length;
let readOffset = 0;

fs.open("a.txt", "r", (err, rfd) => {
  fs.open("b.txt", "w", (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, bufferSize, readOffset, (err, bytesRead) => {
        if (!bytesRead) {
          fs.close(rfd);
          fs.close(wfd);
          console.log("写入完成");
          return;
        }
        readOffset += bytesRead;
        fs.write(wfd, buf, 0, bytesRead, (err, written) => {
          next()
        });
      });
    }
    next();
  });
});
