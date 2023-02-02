const words = ["hello", "leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";

var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let fLetter = words[i][j],
        sLetter = words[i + 1][j];
      if (order.indexOf(fLetter) < order.indexOf(sLetter)) {
        break;
      } else if (order.indexOf(fLetter) === order.indexOf(sLetter)) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(isAlienSorted(words, order));
