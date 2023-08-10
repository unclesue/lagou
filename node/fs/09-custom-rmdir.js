const fs = require("fs");
const path = require("path");

function myRmdir(dirPath, cb) {
  fs.stat(dirPath, (err, stats) => {
    if (stats.isDirectory()) {
      fs.readdir(dirPath, (err, files) => {
        const dirs = files.map((i) => path.join(dirPath, i));
        let index = 0;
        function next() {
          if (index === dirs.length) return fs.rmdir(dirPath, cb);
          const current = dirs[index++];
          myRmdir(current, next);
        }
        next();
      });
    } else {
      fs.unlink(dirPath, cb);
    }
  });
}

myRmdir(".\\node\\fs\\tmp", () => {
  console.log("success");
});


// tmp
//  [ 'tmp\\1.txt', 'tmp\\a', 'tmp\\b' ]
// 'tmp\\1.txt'
