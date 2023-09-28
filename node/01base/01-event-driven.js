const event = require("events");
const myEvent = new event();

myEvent.on("e1", () => {
  console.log("e1 run");
});

myEvent.on("e1", () => {
  console.log("e1 run run");
});

myEvent.emit("e1");
