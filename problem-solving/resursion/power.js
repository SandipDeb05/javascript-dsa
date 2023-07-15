function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

console.log(power(3, 2));

/*
2,3

2 * pow(2,2) 
    2 * pow(2,1)
        2 * pow(2,1)
            2 * pow(2,0)

*/
