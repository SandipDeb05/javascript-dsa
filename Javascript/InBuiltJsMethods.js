// TODO Arrays
const array1 = new Array(1); // BUG show empty.
Array = String; // BUG that's why always use array literals
const array2 = new Array(1, 2, 3); // BUG never use Array constructure for creating an array.
const array3 = [1, 2, 3]; // use array literals

console.log(array1[0]);
console.log(array2);
console.log(array3);

// TODO Objects
console.log("OBJECT");

const object = new Object(); // BUG bad

const obj1 = { name: "developer", age: 24 }; // GOOD practice
console.log(obj1);

/**
 * One problem in using the for...in method is that it loops through the properties in the prototype chain as well. Since the objects in JavaScript can inherit properties from their prototypes, the for...in statement will loop through those properties as well.

 * To avoid this problem, you have to explicitly check if the property belongs to the object by using the hasOwnProperty() method:
 */

for (let item in obj1) {
  console.log(item);
  console.log(obj1[item]);
}
for (const key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(`${key}: ${obj1[key]}`);
  }
}

console.log(Object.keys(obj1)); // ['name', 'age']
console.log(Object.values(obj1)); // ['developer', 24]
console.log(Object.entries(obj1)); // [['name','developer'], ['age', 24]]

// TODO Map
console.log("MAP");
const map = new Map([
  [1, "sam"],
  ["ok", "some value"],
  [true, "also value"],
  [true, "value"], // key should be unique
]);
console.log(map);

map.set("age", 24); // store a entry
console.log(map);

map.delete("ok"); // delete entry
console.log(map);

console.log(map.get("age")); // get the value of that key

console.log(map.size); // return the size of map

console.log(map.has(true)); // Returns true if a value exists

map.forEach((item) => console.log(item)); // we can iterate in map

console.log(map.entries()); // Returns an Iterator with the [value,value] pairs from a map

for (let item of map.keys()) {
  console.log("key", item);
}
for (let item of map.values()) {
  console.log("value", item);
}

map.clear(); // delete all entries
console.log(map);

// TODO Set
console.log("SET");
const set = new Set([4, 5, 6]);

set.add(1); // add item
console.log(set);

set.delete(2); // delete item
console.log(set);

set.forEach((item) => console.log(item)); // we can iterate in set

console.log(set.size); // returns size

console.log(set.has(3)); // Returns true if a value exists

for (let item of set.keys()) {
  console.log("val", item); // set.keys() is same as set.values()
}

console.log(set.entries()); // Returns an Iterator with the [value,value] pairs from a Set

set.clear(); // delete all item
console.log(set);

// TODO Weak Map
const weekMap = new WeakMap();
// TODO weekMap only has these follow properties
// TODO WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it. ( this mean there is no iteration)

// weakMap.get(key);
// weakMap.set(key, value);
// weakMap.delete(key);
// weakMap.has(key);
console.log(weekMap);

// TODO Weak Set
const weakSet = new WeakSet();
// TODO weakSet only has these follow properties

// weakSet.add(key);
// weakSet.delete(key);
// weakSet.has(key);
console.log(weakSet);
