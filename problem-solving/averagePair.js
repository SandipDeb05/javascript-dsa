function averagePair(arr, target) {
  if (arr.length < 1) return false;

  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    let avg = (arr[i] + arr[j]) / 2;

    if (avg > target) {
      j--;
    } else if (avg < target) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
