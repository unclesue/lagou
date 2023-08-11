// 第 158 题：如何模拟实现 Array.prototype.splice

/* start
    从 0 开始计算的索引，表示要开始改变数组的位置，它会被转换成整数。

    负索引从数组末尾开始计算——如果 start < 0，使用 start + array.length。
    如果 start < -array.length，使用 0。
    如果 start >= array.length，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
    如果 start 被省略了（即调用 splice() 时不传递参数），则不会删除任何元素。这与传递 undefined 不同，后者会被转换为 0。

  deleteCount 可选
    一个整数，表示数组中要从 start 开始删除的元素数量。

    如果省略了 deleteCount，或者其值大于或等于由 start 指定的位置到数组末尾的元素数量，那么从 start 到数组末尾的所有元素将被删除。但是，如果你想要传递任何 itemN 参数，则应向 deleteCount 传递 Infinity 值，以删除 start 之后的所有元素，因为显式的 undefined 会转换为 0。

    如果 deleteCount 是 0 或者负数，则不会移除任何元素。在这种情况下，你应该至少指定一个新元素（请参见下文）。
*/
Array.prototype._splice = function (start, deleteCount, ...addList) {
  const length = this.length;
  if (start < 0) {
    if (start < -length) {
      start = 0;
    } else {
      start = start + length;
    }
  }

  if (deleteCount === undefined) {
    deleteCount = length - start;
  }

  const removeList = this.slice(start, start + deleteCount);

  const right = this.slice(start + deleteCount);

  addList.concat(right).forEach((item) => {
    this[start++] = item;
  });
  this.length = length - removeList.length + addList.length;

  return removeList;
};

const arr = [1, 2, 3, 4, 5];
const res = arr._splice(-1, 9, 9, 8, 7);
console.log("res", res);
console.log("arr", arr, arr.length);
