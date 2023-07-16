function capitalizedWords(arr) {
  let res = [];
  if (arr.length === 0) {
    return [];
  }
  res = [arr[0].toUpperCase()];
  res = res.concat(capitalizedWords(arr.slice(1)));
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
