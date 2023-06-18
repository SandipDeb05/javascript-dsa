function math() {
  let a = 10;
  function add(b) {
    return a + b;
  }
  return add;
}

const sum = math();

console.log(sum(5));

const abc = () => {
  console.log(this);
};
abc();
