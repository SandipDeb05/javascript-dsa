function areThereDuplicates(...args) {
  const freq = {};

  for (let item of args) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) return true;
  }
  return false;
}
/**
 * [1, 2, 3, 5, 4, 3]
 *
 * {1:1, 2:1, 3:2, 5:1, 4:1}
 *
 */
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
