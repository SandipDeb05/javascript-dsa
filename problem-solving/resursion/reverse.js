function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str.charAt(0);
}

console.log(reverse(""));
console.log(reverse("abcdef"));
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));

/**
 * (abc)
 *     (bc) + a
 *             (c) + b
 *                    () + c
 *                     ""
 */

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
