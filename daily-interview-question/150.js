let arr = [1, 2, 5, 5];
let target = 5;

function binarySearchLeft(arr, target) {
  let left = 0;
  let right = arr.length - 1
  while(left <= right) {
    let mid = (left + right) >>> 1
    if (arr[mid] === target) {
      right = mid - 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return arr[left] == target ? left : -1;
}

function binarySearchRight(arr, target) {
  let left = 0
  let right = arr.length - 1
  while(left <= right) {
    let mid = (left + right) >>> 1
    if (arr[mid] === target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return arr[right] == target ? right : -1;
}

const search = 5
const left = binarySearchLeft(arr, search)
const right = binarySearchRight(arr, search)
console.log('left', left)
console.log('right', right)

