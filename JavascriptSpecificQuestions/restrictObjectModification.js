const obj = {
  a: 10,
  d: {
    name: "Gaurav",
  },
};

// Object.seal(obj);
// obj.a = 20; // We can modify
// delete obj.a; // this is restricted
// console.log(obj.a);

// delete obj.d.name; // can delete
// console.log(obj.d.name);

function deepSeal(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] = value && typeof value === "object" ? deepSeal(value) : value;
  }

  return Object.seal(object);
}

deepSeal(obj);
obj.d.name = "sandip"; // still we can modified
delete obj.d.name; // but we can't delete
console.log(obj.d.name);

const obj2 = {
  b: 20,
  c: {
    name: "Sandip",
  },
};

// Object.freeze(obj2);
// obj2.b = 30; // can't modify
// delete obj2.b; // can't delete
// console.log(obj2.b);

// delete obj2.c.name; // can delete
// console.log(obj2.c.name);

function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
}

deepFreeze(obj2);
obj2.c.name = "Gaurav";
console.log(obj2.c.name);
