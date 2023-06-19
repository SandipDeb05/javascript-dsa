function math() {
  let a = 10;
  function add(b) {
    return a + b;
  }
  return add;
}

const sum = math();

// console.log(sum(20));

// uses of closure
function heavyDuty() {
  const heavyTask = Array(1000).fill(5);

  return function (index) {
    return heavyTask[index];
  };
}

const eff = heavyDuty();

// console.log(eff(20));

let view;

function init() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "Hello world";
      console.log("view sent");
      called++;
    }
  };
}

const once = init();
// once();
// once();
// once();

// FIXME
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// TODO
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// TODO
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 0);
  })(i);
}
