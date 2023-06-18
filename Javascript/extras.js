// TODO Symbol

// const sym = Symbol("name");
// const obj = {};
// obj[sym] = "sandip";
// console.log(obj);

// TODO  Generators and Iterator

// function* getFruitsIterator() {
//   yield "Banana";
//   yield "Apple";
//   yield "Mango";
// }
// const iterator = getFruitsIterator();
// console.log(iterator.next());

function iterator(values) {
  let nextIndex = 0;
  return {
    next: function () {
      if (values.length > nextIndex) {
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const looper = iterator([1, 2, 3, 4, 5]);
console.log(looper.next());
console.log(looper.next());
console.log(looper.next());
console.log(looper.next());
console.log(looper.next());
console.log(looper.next());
