var convert = function (s, numRows) {
  if (numRows < 2) return s;
  const res = [];
  for (let i = 0; i < numRows; i++) {
    let j = i;
    while (j < s.length) {
      res.push(s[j]);
      if (i !== 0 && i !== numRows - 1) {
        const k = (numRows - i) * 2 - 1 - 1 + j;
        if (k < s.length) {
          res.push(s[k]);
        }
      }
      j += numRows * 2 - 1 - 1;
    }
  }
  return res.join("");
};

console.log(convert("PAYPALISHIRING", 3));
// "PAHNAPLSIIGYIR"
