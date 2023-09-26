// 第 152 题：实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

function normalize(str) {
  const result = [];
  str
    .split(/[\[\]]/g)
    .filter(Boolean)
    .reduce((prev, curr, index, array) => {
      prev.value = curr;
      if (index !== array.length - 1) {
        return (prev.children = {});
      }
    }, result);
  return result;
}

function normalize1(str) {
  let arr = str.match(/\w+/g);
  let obj;
  let temp = {};
  while (arr.length) {
    let item = arr.pop();
    temp.value = item;
    obj && (temp.children = obj);
    if (arr.length) {
      obj = { ...temp };
    } else {
      obj = temp;
    }
  }
  return obj;
}

console.log(normalize1("[abc[bcd[def]]]"));
