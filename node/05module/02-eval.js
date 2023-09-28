const fs = require("fs");
const vm = require("vm");

// let age = 33

const content = fs.readFileSync("./02-eval.txt", "utf-8");

// eval
// eval(content);

// function
// const fn = new Function("age", "return age + 1");
// console.log(fn(13));

// vm
vm.runInThisContext(content)
console.log(age);
