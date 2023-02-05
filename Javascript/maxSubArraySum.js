function maxSubArraySum(array, target) {
  if (target > array.length) return null;
  let maxSum = -Infinity;
  for (let i = 0; i < array.length - target + 1; i++) {
    let temp = 0;
    for (let j = 0; j < target; j++) {
      temp += array[i + j];
    }
    if (temp > maxSum) {
      maxSum = temp;
    }
  }
  return maxSum;
}

function maxSubArraySumOptimize(array, target) {
  if (target > array.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < target; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = target; i < array.length; i++) {
    tempSum = tempSum - array[i - target] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySumOptimize([1, 2, 5, 2, 8, 2, 1], 3));
