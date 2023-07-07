// const b1 = Buffer.alloc(10)
// const b2 = Buffer.allocUnsafe(10)
// console.log(b1, b2)


// const b1 = Buffer.from('12')
// console.log(b1);

// const b2 = Buffer.from([1, 2, 3, 'a'])
// console.log(b2);

// const b2 = Buffer.from('吊')
// console.log(b2);
// console.log(b2.toString());

const b1 = Buffer.alloc(3)
const b2 = Buffer.from(b1)
console.log(b1, b2);
b1[1] = 0b100
console.log(b1, b2);