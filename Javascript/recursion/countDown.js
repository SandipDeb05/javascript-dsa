function countDown(num) {
  if (num <= 0) return;
  console.log(num);
  countDown(num - 1);
}

function count(num) {
  if (num <= 0) return;
  count(num - 1);
  console.log(num);
}

count(5);
