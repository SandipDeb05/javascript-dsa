// TODO Factory Function
const createStudent = (name, roll) => {
  const object = {
    name,
    roll,
    details() {
      console.log(`Name: ${name}, Roll: ${roll}`);
    },
  };
  return object;
};

const jame = createStudent("jame", 44);
const john = createStudent("john", 14);

console.log(jame);
console.log(john);
jame.details();
john.details();

// TODO Object.Create(object)
const createPhDStore = {
  details() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  },
  paperDetails() {
    console.log(`Working on ${this.paper}`);
  },
};
const createPhD = (name, roll, paper) => {
  const object = Object.create(createPhDStore);
  object.name = name;
  object.roll = roll;
  object.paper = paper;
  return object;
};

const jordon = createPhD("jordon", 101, "auth");

console.log(jordon);
jordon.details();
jordon.paperDetails();

// Constructor Function
function Teacher(name, id, subject) {
  this.name = name;
  this.id = id;
  this.subject = subject;
  this.details = function () {
    console.log(`Name: ${this.name}, Id: ${this.id}`);
  };
}
Teacher.prototype.printSubject = function () {
  console.log(this.subject);
};
Teacher.prototype.school = "KIIT";

const jonas = new Teacher("Jonas", 201, "Maths");

console.log(jonas);
jonas.details();
console.log(jonas.school);
jonas.printSubject();

// TODO Class
class Workers {
  constructor(name, work, age) {
    this.name = name;
    this.work = work;
    this.age = age;
  }
  #company = "Evil Corp";
  printDetails() {
    console.log(`Name: ${this.name}, Work: ${this.work}, Age: ${this.age}`);
  }
  setName(name = "Good Corp") {
    if (typeof name === "string") {
      this.#company = name;
    }
  }
  getName() {
    return this.#company;
  }
}

const willim = new Workers("Willim", "Cleaning", 39);
const albert = new Workers("Albert", "canteen", 27);

console.log(willim);
willim.printDetails();
albert.printDetails();

console.log(albert.company);
albert.setName("Avg Corp");
console.log(albert.getName());

// TODO Inheritance
class Helper extends Workers {
  constructor(name, work, age, task) {
    super(name, work, age);
    this.task = task;
  }
  printDetails() {
    console.log("Helper details is confidential");
  }
  printTask() {
    console.log(`Task ${this.task}`);
  }
}

const bill = new Helper("bill", "helping", 25, "Clean rooms");

console.log(bill);
bill.printDetails();
bill.printTask();

/**
 * TODO 4 PILLARS OF OOPS
 * Encapsulation: Wrap related code together (data & methods)
 * Abstraction: Hiding the complaxity from the user
 * Inheritance: Inherit code/feature from another class
 * Polymorphism: Many form, Ability the call the same methods on different object each object responding in different way
 *              Method_Overiding: When child class method overrides the parent class method
 *              Method_Overloading: Define same method with different parameters (FIXME: JS is dynamic, it limits the polymorphism)
 */
