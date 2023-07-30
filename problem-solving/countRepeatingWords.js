// The cat and the cat bat

function countRepeat(str) {
  if (!str) return null;

  const strArr = str.split(" ");
  const freq = {};
  let count = 0;

  for (let el of strArr) {
    const char = el.toLowerCase();
    freq[char] = ++freq[char] || 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) count++;
  }

  return count;
}

const str = "THe th";
console.log(countRepeat(str));
