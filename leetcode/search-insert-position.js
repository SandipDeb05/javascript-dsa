var searchInsert = function (nums, target) {
  if (nums.length === 1 && nums[0] < target) return 1;
  if (nums.length === 1 && nums[0] >= target) return 0;

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] > target) return i;
    if (nums[j] < target) return j + 1;

    if (nums[i] < target) i++;
    if (nums[j] < target) j--;
    if (nums[i] === target) return i;
    if (nums[j] === target) return j;
  }
};
console.log(searchInsert([1, 3, 4], 6));
