const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

// function mkDir(dirPath, cb) {
//   const parts = dirPath.split(path.sep);
//   let index = 1;
//   function next() {
//     if (index > parts.length) return cb && cb();
//     const dir = parts.slice(0, index++).join(path.sep);
//     fs.access(dir, (err) => {
//       err ? fs.mkdir(dir, next) : next();
//     });
//   }
//   next();
// }

// mkDir("a\\bc\\ddd");

const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)
async function myMkDir(dirPath, cb) {
  const parts = dirPath.split(path.sep)
  for (let index = 1; index <= parts.length; index++) {
    const dir = parts.slice(0, index).join(path.sep)
    try {
      await access(dir)
    } catch (error) {
      await mkdir(dir)
    }
  }
  cb && cb()
}

myMkDir('ab\\bc\\cd', () => {
  console.log('ok');
})
