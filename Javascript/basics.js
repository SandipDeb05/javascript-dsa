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

console.log(countChar(str));
