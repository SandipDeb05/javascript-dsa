function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let item of str1) {
    freq1[item] = (freq1[item] || 0) + 1;
  }
  for (let item of str2) {
    freq2[item] = (freq2[item] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

function anagramOptimize(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    freq[letter] ? (freq[letter] += 1) : (freq[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!freq[letter]) {
      return false;
    } else {
      freq[letter] -= 1;
    }
  }

  return true;
}
console.log(anagramOptimize("zaa", "aaz"));
