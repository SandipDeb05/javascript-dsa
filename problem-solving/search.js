function search(array, target) {
  if (array.length < 1) return -1;
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
console.log(search([], 4)); // -1
