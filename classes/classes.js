class Student {
  numberOfInstances = 0;
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.absence = 0;
    this.numberOfInstances++;
  }

  print() {
    console.log(this.firstName + " " + this.lastName);
  }
  markLate() {
    this.absence++;
    console.log(this.firstName + " is late " + this.absence + " times");
  }
  static getNumberOfInstances() {
    console.log(this.numberOfInstances);
  }
}

const sandip = new Student("Sandip", "Deb", 3.2);
const gav = new Student("Sandip", "Deb", 3.2);
sandip.markLate();
sandip.markLate();
sandip.markLate();
console.log(sandip);
console.log(gav);
Student.getNumberOfInstances();
