function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(5));

/**
 * 5 -> 5+(4) -> 4+(3)-> 3+(2)-> 2+(1)-> 2+1
 */
