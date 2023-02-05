function areThereDuplicates(...args) {
  const freq = {};

  for (let item of args) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
