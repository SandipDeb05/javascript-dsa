function sameFrequencyNums(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < num1Str.length; i++) {
    freq1[num1Str[i]] = ++freq1[num1Str[i]] || 1;
    freq2[num2Str[i]] = ++freq2[num2Str[i]] || 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

console.log(sameFrequencyNums(182, 281)); // true
console.log(sameFrequencyNums(34, 14)); // false
console.log(sameFrequencyNums(3589578, 5879385)); // true
console.log(sameFrequencyNums(22, 222)); // false
console.log(sameFrequencyNums(987654, 456789)); // true
