function countUniqueValues(arr) {
  if (arr.length < 1) return 0;
  let freq = [];
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return Object.keys(freq).length;
}

function countUniqueValuesOptimize(arr) {
  if (arr.length < 1) return 0;
  let i = 0,
    j = i + 1,
    count = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) count++;
    i++;
    j++;
  }
  return count;
}

function countUniqueValuesOptimize2(arr) {
  if (arr.length < 1) return 0;
  let i = 0,
    j = i + 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValuesOptimize2([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesOptimize2([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]));
console.log(countUniqueValuesOptimize2([1, 2, 3, 4, 7, 12, 13]));
console.log(countUniqueValuesOptimize2([]));
console.log(countUniqueValuesOptimize2([-2, -1, -1, 0, 1]));
