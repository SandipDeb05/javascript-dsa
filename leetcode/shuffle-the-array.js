function shuffle(nums, n) {
  const result = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[n + i];
  }
  return result;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4));
