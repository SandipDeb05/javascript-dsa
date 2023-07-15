function factorialIteratively(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}

function factorialRecursively(num) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return num * factorialRecursively(num - 1);
}

console.log(factorialRecursively(5));

// 4! = 4 * 3 * 2 * 1
