const { Writable } = require("stream");

class MyWritable extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString() + "\n");
    process.nextTick(callback);
  }
}

const wr = new MyWritable();
wr.write("abcdef123", "utf-8", () => {
  console.log("end");
});
