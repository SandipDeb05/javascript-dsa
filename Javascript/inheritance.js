function a() {
  console.log("hello");
}

// console.log(a.__proto__.__proto__.__proto__);

const obj1 = {
  name: "sandip",
  printName: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "gaurav",
};

obj2.__proto__ = obj1; // BUG never do this, overwrite the obj2 __proto__

// console.log(obj1);
// obj2.printName();

// console.log([].__proto__.hasOwnProperty("map"));

let human = {
  mortal: true,
};

let sam = Object.create(human); // sam.__proto__ = human
// console.log(sam);
// console.log(human.isPrototypeOf(sam));

// console.log(a.prototype);
// console.log(Object.prototype);

Date.prototype.myBirthday = function () {
  return new Date().getFullYear() - 1998;
};

const date = new Date();

// console.log(date.getDate());
// console.log(date.myBirthday());

Array.prototype.map = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    callback(array.push(this[i]), i, this);
  }
};

// [1, 2, 3, 4, 5].map((el, index, array) => console.log(el, index, array));

function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function () {
  console.log("My name is", this.name);
};

const dog = new Animal("buddy");
const cat = new Animal("milly");

dog.printName();
cat.printName();

function Cat(name, eat) {
  Animal.call(this, name);
  this.eat = eat;
}
Cat.prototype = Object.create(Animal.prototype);

const kitten = new Cat("julia", "cat food");
console.log(kitten);
kitten.printName();
