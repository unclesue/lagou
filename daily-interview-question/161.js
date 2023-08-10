// 第 161 题：用最精炼的代码实现数组非零非负最小值 index

// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小

function getIndex(arr) {
  return arr.findIndex(
    (item) => item === Math.min(...arr.filter((i) => i > 0))
  );
}

getIndex([10, 21, 0, -7, 35, 7, 9, 23, 18]);
