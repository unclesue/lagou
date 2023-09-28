// 第 142 题：（算法题）求多个数组之间的交集

// const a = [1, 3, 4, 6]
// const b = [2, 3, 5, 4]
// const c = a.filter(i => b.includes(i))
// console.log('c', c)

function intersect(...args) {
  if (args.length === 0) return []

  if (args.length === 1) return args[0]

  return args.reduce((acc, cur) => {
    return acc.filter(i => cur.includes(i))
  })
}

const res = intersect([1, 3, 4, 6], [2, 3, 5, 4], [3, 7, 6, 9])
console.log('res', res)
