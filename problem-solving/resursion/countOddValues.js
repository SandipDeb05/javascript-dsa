function countOddValues(arr) {
  let res = [];
  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) {
      res.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return res;
}

function countOddValuesPR(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(countOddValuesPR(arr.slice(1)));
  return newArr;
}

console.log(countOddValuesPR([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// [1,2,3,4,5] -> [1,3,5]
