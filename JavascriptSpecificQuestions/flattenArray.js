const temp = [1, [2, [3], [4]], [[[5], [6]]], [7, [8]]];

// TODO By using ES8 flat(depth);
console.log(temp.flat(2));
console.log(temp.flat(Infinity));

// TODO By using ES6 reduce method

function flatten(array) {
  return array.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flatten(temp));

// TODO polyfill

function flattenOptimize(array, result = []) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (Array.isArray(value)) {
      flattenOptimize(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}

console.log(flattenOptimize(temp));
