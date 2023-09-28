Buffer.prototype.split = function (sep) {
  let len = Buffer.from(sep).length;
  let ret = [];
  let start = 0;
  let offset = 0;
  while ((offset = this.indexOf(sep, start)) !== -1) {
    ret.push(this.slice(start, offset));
    start = offset + len;
  }
  ret.push(this.slice(start));
  return ret;
};
const b1 = Buffer.from("我有钱，我很有钱，钱是好东西，我的钱用不完！钱");
const res = b1.split("钱");
res.forEach((item) => {
  console.log(item.toString());
});
