function plusOne(digits) {
  if (digits.length < 1) return null;
  let i = digits.length - 1;
  while (i >= 0) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
    i--;
  }
  digits.unshift(1);
  return digits;
}

console.log(plusOne([9, 10])); // 100

// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
