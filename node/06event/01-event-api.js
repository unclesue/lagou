const Event = require("events");
const ev = new Event();

// ev.on('事件1', function(...args) {
//   console.log('事件1', args)
// })
// ev.emit('事件1', 1, 2, 3)
// ev.emit('事件1', 1, 2, 3)

// ev.once("事件1", (...args) => {
//   console.log("事件1", args);
// });
// ev.emit('事件1', 1, 2, 3)

const fn = function(...args) {
  console.log('事件1', args)
}
ev.on('事件1', fn)
ev.emit('事件1', 1, 2, 3)
ev.off('事件1', fn)
ev.emit('事件1', 1, 2, 3)
