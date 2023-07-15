// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...

function fib(num) {
  if (n <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
