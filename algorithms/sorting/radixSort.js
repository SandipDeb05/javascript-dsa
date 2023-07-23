function getDigit(num, place) {
  let digit;
  while (place > -1) {
    digit = num % 10;
    num = Math.floor(num / 10);
    place--;
  }
  return digit;
}
function digitCount(num) {
  if (!num) return 0;
  let numberOfDigits = 1;
  while (num > 1) {
    num = Math.floor(num / 10);
    numberOfDigits++;
  }
  return numberOfDigits;
}

function getDigitOptimize(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
function digitCountOptimize(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function getMostDigits(numsArray) {
  let mostDigits = 0;
  for (let i = 0; i < numsArray.length; i++) {
    noOfDigits = digitCountOptimize(numsArray[i]);
    mostDigits = Math.max(mostDigits, noOfDigits);
  }
  return mostDigits;
}

function radixSort(nums) {
  let maxDigitCount = getMostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigitOptimize(nums[j], i);
      digitsBucket[digit].push(nums[j]);
    }
    nums = [].concat(...digitsBucket);
  }
  return nums;
}

console.log(radixSort([12345, 12, 421, 531133421, 13434, 222444]));
console.log(getMostDigits(1234569));
console.log(getMostDigits(1));
