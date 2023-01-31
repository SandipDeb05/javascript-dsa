// [1,2,3,4], [4,1,9,16] -> true
// [1,2,1], [4,1,1] -> true
// [2,4,3] , [1,4,8] -> false
// [1,2,3], [4,9]-> false
// [1,2,1], [4,4,1]-> false

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1);
  }
  return true;
};

const res = same([1, 2, 1], [4, 4, 1]);
console.log(res);

const sameOptimize = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }
  for (let item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
};

const resOptimize = sameOptimize([1, 2, 2, 3], [1, 4, 4, 9]);
console.log(resOptimize);
