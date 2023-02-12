// TODO FP is all about seperation of concern (saperating data & function)
// TODO Pure function -> A function has to always returns the same o/p, given the same i/p and the function can't modify anything outside of itself (no side effect)

const arr = [1, 2, 3, 4, 5];

// FIXME Not a pure function, modify outside data (side effect)
function mutate(array) {
  array.pop();
}
console.log(arr);
mutate(arr);
console.log(arr);

// TODO Pure function, same i/p returns same o/p and not side effect
function removeLastElement(array) {
  const newArray = [].concat(array);
  newArray.pop();
  return newArray;
}
const resArray = removeLastElement(arr);
console.log(resArray);
console.log(arr);

// FIXME Not a pure function, console.log() is a window specific, it effecting the outside world (side effect)
function logging() {
  console.log("Hello There");
}
logging();

// TODO function currying
const multiply = (a) => (b) => {
  return a * b;
};
const mulBy5 = multiply(5);
const mulBy10 = multiply(10);

console.log(mulBy5(10));
console.log(mulBy10(10));

// TODO Memoization
let cache = {}; // polute the globale variable
function addTo100(num) {
  if (cache[num]) {
    return cache[num];
  }
  cache[num] = num + 100;
  return cache[num];
}
console.log(addTo100(50));
console.log(addTo100(50));

function addTo50Optimize() {
  let cache = {};
  return function (num) {
    if (n in cache) {
      return cache[num];
    } else {
      cache[num] = num + 50;
      return cache[num];
    }
  };
}
const addTo50 = addTo50Optimize();
console.log(addTo100(20));
console.log(addTo100(20));

// TODO Object.assign(targetObject, sourceObject, anyUpdateOnTheObject)
const sourceObject1 = { name: "Gorge", age: 17 };
const sourceObject2 = { age: 20 };
const resObj = Object.assign({}, sourceObject1, sourceObject2);
console.log(resObj);
