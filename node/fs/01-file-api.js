const fs = require("fs");

// readFile
// fs.readFile('data.txt', 'utf-8', (err, data) => {
//   console.log('err', err)
//   console.log('data', data)
// })

// writeFile
// fs.writeFile('data.txt', 'hello nodejs', (err) => {
//   if (!err) {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log('data', data)
//     })
//   }
// })
// fs.writeFile('data.txt', '喊', {
//   mode: 438,
//   flag: 'a+',
//   encoding: 'utf-8'
// }, (err) => {})

// appendFile
// fs.appendFile('data.txt', '中午'+"\n", (err) => {
//   console.log('err', err)
// })

// copyFile
// fs.copyFile("data.txt", "test.txt", (err) => {});

// watchFile
fs.watchFile('data.txt', (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})
