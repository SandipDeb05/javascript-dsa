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

// TODO Object.Create()
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
