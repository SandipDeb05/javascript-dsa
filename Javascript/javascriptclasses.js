// TODO before ES6, functions were used to replicate class.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printDetails = function () {
    console.log(this.name + " " + this.age);
  };
}
Person.prototype.getBirthYear = function () {
  return 2023 - this.age;
};
const sandip = new Person("Sandip", 25);
console.log(sandip);

// after ES6, class are introduced
class Student {
  constructor(name, roll, age) {
    this.name = name;
    this.roll = roll;
    this.age = age;
  }
  printDetails() {
    console.log(this.name + " " + this.roll + " " + this.age);
  }
  static getBirthYear() {
    console.log(2023 - this.age);
  }
}

const gaurav = new Student("Gaurav", 5, 24);
gaurav.printDetails();
gaurav.getBirthYear();
