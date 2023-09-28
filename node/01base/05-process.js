// const fs = require('fs')
// fs.createReadStream('./01-event-driven.js').pipe(process.stdout)
// process.stdin.pipe(process.stdout)

// process.stdin.setEncoding('utf-8')
// process.stdin.on('readable', () => {
//     let chunk = process.stdin.read()
//     if (chunk) {
//         process.stdout.write('data ' + chunk)
//     }
// })

process.on("exit", (code) => {
  console.log("exit " + code);
//   setTimeout(() => {
//     console.log('exit async');
//   }, 1000);
});

process.on("beforeExit", (code) => {
  console.log("beforeExit " + code);
//   setTimeout(() => {
//     console.log('before exit async');
//   }, 1000);
});

console.log('砍死他，光之剑')

// process.exit() // beforeExit就不执行啦