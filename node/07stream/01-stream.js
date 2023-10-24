const fs = require('fs')

const rs = fs.createReadStream('./test.txt')
const ws = fs.createWriteStream('./test-copy.txt')

rs.pipe(ws)