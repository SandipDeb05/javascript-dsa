/* 5! = 5*4*3*2*1 */

function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

function factorialRecursive(num) {
  if (num < 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(5));
console.log(factorialRecursive(10));
