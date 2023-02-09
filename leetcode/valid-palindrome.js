function validPalindrome(str) {
  if (str === " ") return true;
  const newStr = str.toLowerCase();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = newStr.charCodeAt(i);
    let charCheck = char >= 97 && char <= 122;
    let numberCheck = char >= 48 && char <= 57;
    if (charCheck || numberCheck) {
      res += newStr.charAt(i);
    }
  }
  let i = 0,
    j = res.length - 1;
  while (i <= j) {
    if (res.charAt(i) !== res.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
}
// console.log(validPalindrome("A man, a plan, a canal: Panama"));
// console.log(validPalindrome("race a car"));
// console.log(validPalindrome(" "));
console.log(validPalindrome("ab2a"));
