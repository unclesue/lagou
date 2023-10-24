const { Transform } = require("stream");

class MyTransform extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback(null)
  }
}

const mt = new MyTransform()
mt.write('abc')

mt.on('data', chunk => {
    console.log('chunk', chunk.toString())
})