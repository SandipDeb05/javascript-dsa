const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array = [1, 3, 5, 7, 9];

// TODO .length
console.log(array.length);

// TODO .reverse()
console.log(array.reverse());

// TODO .sort()
console.log(array.sort());
console.log(array.sort((a, b) => a - b));

// TODO .fill()
const arr1 = new Array(10);
console.log(arr1.fill(0));

// TODO .join()
console.log(array.join(""));

// TODO .toString()
console.log(array.toString());

// TODO forEach()
array.forEach((item, i) => console.log(i, item));

// TODO .keys()
for (let item of array.keys()) {
  console.log(item);
}

// BUG .toLocalString()
let resultArray = array.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(resultArray);

// TODO pop()
console.log(array.pop());
console.log(array);
// TODO shift()
console.log("shift", array.shift());
console.log(array);
// TODO push()
array.push(999);
console.log(array);
// TODO unshift()
array.unshift(1);
console.log(array);

// TODO concat()
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8, 9, 10];
console.log("concat", arr1.concat(arr2, arr3));

// TODO splice(start, deleteCount, item1, item2,...,itemN)
array.splice(2, 1);
array.splice(3, 0, "1", "2");
console.log("after", array);

// TODO some() -> true if one item condition matches
const res = array.some((item) => item % 2 == 0);
console.log(res);

// TODO values()
for (let value of array.values()) {
  console.log(value);
}

// TODO .flat()
const arr4 = [1, 2, [3, [4]], 5, 6];
console.log(arr4.flat(2));

// TODO lastIndexOf()
const arr5 = [1, 2, 1, 4, 5, 6, 9];
console.log("lastIndexOF", arr5.lastIndexOf(1));

// TODO indexOf()
console.log(arr5.indexOf(1));

// TODO of()
console.log(Array.of(3, 5, 6, 7));

// TODO slice()
console.log(arr5.slice(0));
console.log(arr5.slice(1, 3));
console.log(arr5.slice(0, -2));

// TODO findIndex() -> return the index that 1st matches with the condition
console.log(array.findIndex((item) => item === 5));

// TODO find() -> return the value that 1st matches with the condition
console.log(array.find((item) => item === 5));

// TODO every() -> true if all true
console.log(array.every((item) => item % 2 == 0));

// TODO from()
const arr6 = Array.from("SANDIP", (item) => item.concat("$"));
console.log(arr6);

// BUG flatMap() -> flat() + map()
const arr7 = [1, 2, [3, 4], 5];
console.log(arr7.flatMap((item) => item));

// TODO arr.includes(valueToFind, fromIndex)
const arr8 = [1, 2, 3, 4, 5, 6];
console.log(arr8.includes(1, 1));

// TODO arr.reduceRight(callback(accumulator, currentValue), initialValue)
const arr9 = [1, 2, 3, 4, 5]; // 5+4+3+2+1 (count from right)
const sumArr9 = arr9.reduceRight((acc, currVal) => acc + currVal, 0);
console.log(sumArr9);

// TODO arr.reduce(callback(accumulator, currentValue), initialValue)
const arr10 = [1, 2, 3, 4, 5]; // 1+2+3+4+5 (count from left)
const sumArr10 = arr10.reduce((acc, currVal) => acc + currVal, 0);
console.log(sumArr10);

// TODO Array.isArray(array)
console.log(Array.isArray([1, 2, 3, 4]));
console.log(Array.isArray("abc"));

// TODO filter(callcack(item))
const arr11 = [1, 2, 3, 4, 5, 6];
const resArr11 = arr11.filter((item) => item % 2 == 0);
console.log(resArr11);

// TODO map(callback(item))
const arr12 = [5, 4, 3, 2, 1];
const resArr12 = arr12.map((item) => item ** 2);
console.log(resArr12);

// TODO arr.entries() -> [index, value]
const arr13 = [11, 22, 33, 44, 55];
for (let item of arr13.entries()) {
  console.log(item);
}

// BUG arr.copyWithin(target, start, end)
const arr14 = [10, 20, 30, 40, 50];
arr14.copyWithin(0, 1, 5);
console.log(arr14);
