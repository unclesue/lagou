const path = require('path')
const fs = require('fs')

function makeDirSync(dirPath) {
  const paths = dirPath.split(path.sep)
  for (let index = 1; index <= paths.length; index++) {
    const dir = paths.slice(0, index).join(path.sep)
    try {
      fs.accessSync(dir)
    } catch (error) {
      fs.mkdirSync(dir)
    }
  }
}

makeDirSync('a\\bc\\d')
