function averagePair(array, target) {
  if (array.length < 1) return false;

  let l = 0,
    r = array.length - 1;
  while (l < r) {
    if (array[l] + array[r] / 2 === target) {
      return true;
    } else if (array[l] + array[r] / 2 < target) {
      l++;
    } else {
      r--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
