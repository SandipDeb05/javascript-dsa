import addToNumbers from "./util.js";

function sqrt(num) {
  let res = 1;
  while (res * res <= num) {
    res++;
  }
  return res - 1;
}

console.log(sqrt(25));
console.log(sqrt(8));
console.log(sqrt(0));

console.log(addToNumbers(20, 30));
