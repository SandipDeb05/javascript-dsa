function power(a, b) {
  if (b === 0) return a;
  return a * power(a, b - 1);
}

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function productOfArray(arr) {
  if (arr.length <= 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  let res = reverse(str);
  if (res === str) return true;
  return false;
}

function someRecursive(arr, callBack) {
  if (arr.length === 0) return false;
  if (callBack(arr[0])) return true;
  return someRecursive(arr.slice(1), callBack);
}

function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function capitalizeFirst(arr) {
  const res = arr.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
