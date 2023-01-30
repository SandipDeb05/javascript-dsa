const nthTribonacciNumber = (num) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  let a = 0,
    b = 1,
    c = 1,
    d = 0;
  for (let i = 3; i <= num; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return c;
};

const res = nthTribonacciNumber(4);
console.log(res);
