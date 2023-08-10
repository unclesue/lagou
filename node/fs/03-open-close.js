const fs = require('fs')
const path = require('path')

fs.open(path.resolve('./data.txt'), 'r', (err, fd) => {
  console.log('fd', fd)
  fs.close(fd, err => {
    console.log('closed');
  })
})
