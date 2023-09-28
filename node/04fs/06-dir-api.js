const fs = require('fs')
const path = require('path')

// fs.mkdir('a', (err) => {
//   console.log(err)
// })

// fs.stat('a.txt', (err, stats) => {
//   console.log(stats.size);
//   console.log(stats.isDirectory());
//   console.log(stats.isFile());
// })

// fs.readdir('a', (err, files) => {
//   console.log(files);
// })

// fs.access('b.txt', (err) => {
//   console.log(err);
// })

// fs.unlink('a.txt', (err) => {
//   console.log(err);
// })

// fs.rmdir('a', { recursive: true }, err => {
//   console.log(err);
// })
fs.rm('a', { recursive: true }, err => {
  console.log(err);
})
