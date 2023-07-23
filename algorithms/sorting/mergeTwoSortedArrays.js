const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 3, 4, 5, 7, 9, 11, 13];

function mergeTwoSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

console.log(mergeTwoSortedArrays(arr1, arr2));
