// // 创建包含 4 个线程的线程池
// const workers = [];
// for (let i = 0; i < 4; ++i) {
//   workers.push(new Worker("./worker.js"));
// }
// // 在最后一个工作者线程完成后打印最终值
// let responseCount = 0;
// for (const worker of workers) {
//   worker.onmessage = () => {
//     if (++responseCount == workers.length) {
//       console.log(`Final buffer value: ${view[0]}`);
//     }
//   };
// }
// // 初始化 SharedArrayBuffer
// const sharedArrayBuffer = new SharedArrayBuffer(4);
// const view = new Uint32Array(sharedArrayBuffer);
// view[0] = 1;
// // 把 SharedArrayBuffer 发给每个线程
// for (const worker of workers) {
//   worker.postMessage(sharedArrayBuffer);
// }
// //（期待结果为 4000001）
// // Final buffer value: 4000001

const totalFloats = 1e8;
const numTasks = 20;
const floatsPerTask = totalFloats / numTasks;
const numWorkers = 4;
// 创建线程池
const pool = new WorkerPool(numWorkers, "./worker.js");
// 填充浮点值数组
let arrayBuffer = new SharedArrayBuffer(4 * totalFloats);
let view = new Float32Array(arrayBuffer);
for (let i = 0; i < totalFloats; ++i) {
  view[i] = Math.random();
}
let partialSumPromises = [];
for (let i = 0; i < totalFloats; i += floatsPerTask) {
  partialSumPromises.push(
    pool.enqueue({
      startIdx: i,
      endIdx: i + floatsPerTask,
      arrayBuffer: arrayBuffer,
    })
  );
}
// 等待所有期约完成，然后求和
Promise.all(partialSumPromises)
  .then((partialSums) => partialSums.reduce((x, y) => x + y))
  .then(console.log);