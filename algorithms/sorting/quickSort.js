function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    pivotIndex = pivot(arr, start, end);
    // left
    quickSort(arr, start, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

const arr = [3, 2, 1, 4];
console.log(quickSort(arr));

/**
 * [3,2,1,4]
 * [3,2,1,4]
 *
 * swapIdx = 1
 * i=2
 */
