// 第 159 题：实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
Promise.retry = function (fn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await fn();
        resolve(res);
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};

function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000);
  });
}

Promise.retry(getProm)
  .then((res) => {
    console.log('res', res)
  })
  .catch((error) => {
    console.log('error', error)
  });
