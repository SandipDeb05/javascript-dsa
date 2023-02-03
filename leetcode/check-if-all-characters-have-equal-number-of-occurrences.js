var areOccurrencesEqual = function (s) {
  if (s.length < 3) return true;
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    freq[s.charAt(i)] = (freq[s.charAt(i)] || 0) + 1;
  }
  const occ = freq[s.charAt(0)];
  for (let key in freq) {
    if (freq[key] !== occ) return false;
  }
  return true;
};

console.log(areOccurrencesEqual("aabbcc"));
