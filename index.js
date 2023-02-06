const obj1 = {
  name: "John doe",
  printName(on) {
    console.log(this);
  },
};

obj1.printName();
