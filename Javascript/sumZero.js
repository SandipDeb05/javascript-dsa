function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
}

function sumZeroOptimize(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) return [arr[i], arr[j]];
    else if (sum < 0) i++;
    else if (sum > 0) j--;
  }
  return undefined;
}

console.log(sumZeroOptimize([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroOptimize([-3, -2, -1, 0, 2, 5, 8]));
console.log(sumZeroOptimize([-2, 0, 1, 3]));
console.log(sumZeroOptimize([1, 2, 3]));
