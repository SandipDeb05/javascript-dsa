function collectOddValues(arr) {
  let res = [];

  function helper(helperInput) {
    if (helperInput.length < 1) return;
    if (helperInput[0] % 2 !== 0) {
      res.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return res;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

function collectOddValuesPureRecursion(arr) {
  let resArr = [];

  if (arr.length < 1) return resArr;

  if (arr[0] % 2 !== 0) resArr.push(arr[0]);

  resArr = resArr.concat(collectOddValuesPureRecursion(arr.slice(1)));

  return resArr;
}
