function carry() {
  let sum = 0;
  return function (num = 0) {
    sum += num;
    return sum;
  };
}

const sum = carry();
console.log(sum(5));
console.log(sum(10));
console.log(sum(15));
console.log(sum(20));
