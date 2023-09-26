// 第 151 题：用最简洁代码实现indexOf方法


function indexOf (str, searchElement) {
  const reg = new RegExp(`${searchElement}`, 'gi')
  const matches = reg.exec(str)
  return matches ? matches.index : -1
};


const res = indexOf('123abc中abc', '中a')
console.log('res', res)
