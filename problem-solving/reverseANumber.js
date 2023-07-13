function reverseANumber(num) {
  let rev = 0;
  let temp = num;
  if (num < 0) temp = Math.abs(num);

  while (temp > 0) {
    let lastNum = temp % 10;
    rev = rev * 10 + lastNum;
    temp = Math.floor(temp / 10);
  }

  if (num < 0) return -rev;
  return rev;
}

console.log(reverseANumber(12345));
console.log(reverseANumber(-12345));

/*
12345

rev = 0
lastNum = 5, 4
rev = 5*10 + 0 = 50, 50 + 4*10

*/
