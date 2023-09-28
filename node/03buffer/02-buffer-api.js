const buf = Buffer.alloc(6)

// fill
// buf.fill('123456')
// console.log(buf);
// console.log(buf.toString());

// write
// buf.write('123', 4, 3)
// console.log(buf);
// console.log(buf.toString());

// toString
// const bf = Buffer.from('人生如梦')
// console.log(bf);
// console.log(bf.toString('utf8', 3, 9));

// slice
// const b1 = Buffer.from('喝酒吃肉')
// const b2 = b1.slice(3, 6)
// console.log(b2);
// console.log(b2.toString());

// indexOf
// const b1 = Buffer.from('zz1z哈你，哈儿，不哈，哈哈哈了!')
// console.log(b1);
// console.log(b1.indexOf('哈', 5))

// copy
// let b1 = Buffer.alloc(9)
// let b2 = Buffer.from('拉钩1')
// b2.copy(b1, 2, 0, 7)
// console.log(b1, b1.toString());
// console.log(b2, b2.toString());