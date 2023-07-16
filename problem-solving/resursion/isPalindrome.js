function isPalindrome(str) {
  if (str.length === 0) return null;
  if (str[0] !== str[str.length - 1]) return false;

  isPalindrome(str.slice(1), str.slice(str.length - 1));
  return true;
}

console.log(isPalindrome("")); //  null
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

/**
 * (a,b,a)
 *        (b)
 */
