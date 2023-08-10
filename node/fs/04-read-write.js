const fs = require("fs");
const path = require("path");

let buf = Buffer.alloc(10);

/**
 * fd: 当前打开的文件,
 * buffer: 缓冲区,
 * offset: 从buffer指定位置开始写入,
 * length: 写入字节长度,
 * position: 从文件指定位置开始读取
 */
// fs.open("data.txt", "r", (err, fd) => {
//   fs.read(fd, buf, 2, 5, 3, (err, bytesRead, buffer) => {
//     console.log(bytesRead);
//     console.log(buffer);
//     console.log(buffer.toString());
//   });
// });

buf = Buffer.from('1234567890')
/**
 * offset: 从buffer指定位置读取
 * length: 写入字节长度
 * position: 从文件指定位置写入
 */
fs.open("b.txt", 'w', (err, fd) => {
  fs.write(fd, buf, 3, 5, 1, (err, written, buffer) => {
    console.log(written);
    console.log(buffer);
    console.log(buffer.toString());
  })
})
