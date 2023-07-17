function naiveStringSearch(lgStr, shStr) {
  let outer = 0;
  let count = 0;
  while (outer < lgStr.length) {
    let inner = 0;
    while (inner < shStr.length) {
      if (lgStr[outer] !== shStr[inner]) {
        break;
      }
      outer++;
      inner++;
    }
    if (inner === shStr.length) {
      count++;
      outer--;
    }
    outer++;
  }
  return count;
}

function naiveStringSearch2(lgStr, shStr) {
  let count = 0;
  for (let i = 0; i < lgStr.length; i++) {
    for (let j = 0; j < shStr.length; j++) {
      if (shStr[j] !== lgStr[i + j]) break;
      if (j === shStr.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch2("omgsomg", "omg"));
/**
 * omgsomg
 * omg
 *
 * lg=6
 * sh=3
 * i = 1
 * j = 1
 * count = 1
 *
 */
