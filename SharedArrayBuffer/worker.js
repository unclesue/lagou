// self.onmessage = ({ data }) => {
//   const view = new Uint32Array(data);
//   // 执行 100 万次加操作
//   for (let i = 0; i < 1e6; ++i) {
//     Atomics.add(view, 0, 1);
//     // view[0] += 1;
//   }
//   self.postMessage(null);
// };
self.onmessage = ({ data }) => {
  let sum = 0;
  let view = new Float32Array(data.arrayBuffer);
  // 求和
  for (let i = data.startIdx; i < data.endIdx; ++i) {
    // 不需要原子操作，因为只需要读
    sum += view[i];
  }
  // 把结果发送给工作者线程
  self.postMessage(sum);
};
// 发送消息给 TaskWorker
// 通知工作者线程准备好接收任务了
self.postMessage("ready");
