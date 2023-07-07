const path = require('path')

// console.log(path.resolve('/a', '../b'));

// console.log(path.dirname(__filename));

// console.log(path.basename(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse('./ab/c'));

// console.log(path.join('ab', '../c', 'index.html'));

// console.log(path.isAbsolute('/elementUI'));
// console.log(path.isAbsolute('./elementUI'));

// console.log(path.normalize('///b/./c'));
// console.log(path.normalize('//./b/../c'));

console.log(path.resolve('a', 'b'));
console.log(path.resolve('a', '/b'));
console.log(path.resolve('/a', '/b'));
console.log(path.resolve('/b'));
console.log(path.resolve('b'));
console.log(path.resolve('a', './b'));

