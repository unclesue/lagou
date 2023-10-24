const { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor(source) {
    super();
    this.source = source;
  }
  _read() {
    const data = this.source.shift() || null;
    this.push(data);
  }
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk);
    process.nextTick(callback);
  }
}

const source = ["abc", "1ad", "测试"];
const md = new MyDuplex(source);

// md.on("data", (chunk) => {
//   console.log("chunk", chunk.toString());
// });

md.write('写入测试.', 'utf-8', () => {
    console.log('写入完成')
})
