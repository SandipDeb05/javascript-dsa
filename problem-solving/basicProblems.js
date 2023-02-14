const str = "Sandip 123 $$";

function countChar(str) {
  const res = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      res[char] = ++res[char] || 1;
    }
  }

  return res;
}

function largestElement(array) {
  let res = -Infinity;
  for (let item of array) {
    if (item > res) {
      res = item;
    }
  }
  return res;
}

function secondLargest(array) {
  let l = -Infinity;
  let sl = -Infinity;
  for (let item of array) {
    if (item > l) {
      l = item;
    }
  }
  for (let item of array) {
    if (item > sl && item != l) {
      sl = item;
    }
  }
  return sl;
}

function thirdLargest(array) {
  let l = -Infinity;
  let sl = -Infinity;
  let tl = -Infinity;
  for (let item of array) {
    if (item > l) {
      l = item;
    }
  }
  for (let item of array) {
    if (item > sl && item !== l) {
      sl = item;
    }
  }
  for (let item of array) {
    if (item > tl && item !== l && item !== sl) {
      tl = item;
    }
  }
  return tl;
}

function removeDuplicates(array) {
  let set = new Set(array);
  let res = [];
  set.forEach((item) => {
    res.push(item);
  });
  return res;
}

function reverseArray(array) {
  let l = 0,
    r = array.length - 1;
  while (l < r) {
    let temp = array[l];
    array[l] = array[r];
    array[r] = temp;
    l++;
    r--;
  }
  return array;
}

function replaceWithGreatest(array) {
  let num = array.at(-1);
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] < num) {
      array[i] = num;
    } else {
      num = array[i];
    }
  }
  return array;
}

function leaderInArray(array) {
  let num = -Infinity;
  let res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > num) {
      res.unshift(array[i]);
      num = array[i];
    }
  }
  return res;
}

console.log(leaderInArray([7, 5, 8, 9, 6, 8, 5, 7, 4, 6]));
