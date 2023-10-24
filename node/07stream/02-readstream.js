const { Readable } = require("stream");

const source = ["abc", "cdef", "efabc"];

class MyReadable extends Readable {
  constructor(source) {
    super();
    this.source = source;
  }

  _read() {
    const data = this.source.shift() || null;
    this.push(data);
  }
}

const rd = new MyReadable(source);
// rd.on('readable', () => {
//     let data = null
//     while ((data = rd.read(3)) !== null) {
//         console.log('data', data.toString())
//     }
// })

rd.on("data", (chunk) => {
  console.log("chunk", chunk.toString());
});
