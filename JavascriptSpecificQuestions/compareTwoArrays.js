let a = [1, 2, 3, 4, 5];
let b = [2, 1, 3, 4, 5];

let c = [
  [1, 2],
  [3, 4],
];
let d = [
  [1, 2],
  [4, 3],
];

function isEqualArray(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2); // BUG is the order is changed then it will show wrong value
}

// console.log(isEqualArray(a, b));

function customIsEqualArray(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  let result;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      result = customIsEqualArray(arr1[i], arr2[i]);
    } else if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
    if (!result) {
      break;
    }
  }

  return result;
}

const res = customIsEqualArray(a, b);
// console.log(res);

function isDeepEqualArray(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;

  let tempArr1 = [...arr1].sort().toString();
  let tempArr2 = [...arr2].sort().toString();

  console.log(tempArr1);
  console.log(tempArr2);

  return tempArr1 === tempArr2;
}

const res2 = isDeepEqualArray(d, d);
console.log(res2);
