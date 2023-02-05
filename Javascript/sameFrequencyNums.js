function sameFrequencyNums(num1, num2) {
  const num1Freq = getFrequency(num1);
  const num2Freq = getFrequency(num2);

  for (let key in num1Freq) {
    if (!(key in num2Freq)) return false;
    if (num1Freq[key] !== num2Freq[key]) return false;
  }

  return true;
}

function getFrequency(num) {
  const freq = {};

  const numArray = String(num)
    .split("")
    .map((item) => Number(item));

  for (let item of numArray) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return freq;
}

// console.log(sameFrequencyNums(182, 281)); // true
// console.log(sameFrequencyNums(34, 14)); // false
// console.log(sameFrequencyNums(3589578, 5879385)); // true
// console.log(sameFrequencyNums(22, 222)); // false
console.log(sameFrequencyNums(987654, 456789)); // true
