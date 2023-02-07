const string = "JavaScript";

// TODO .length -> The length property returns the number of characters in a string.
console.log(string.length);

// TODO str.replace(pattern, replacement) -> The replace() method returns a new string with the specified string/regex replaced.
let str1 = "ball bat, bell";
let res1 = str1.replace("b", "c");
console.log(res1);

// TODO str.indexOf(searchValue, fromIndex) -> The string indexOf() method returns the index of the first occurence of the substring in a string.
let str2 = "javascript is fun";
console.log(str2.indexOf("i"));

// TODO str.lastIndexOf(searchValue, fromIndex) -> The lastIndexOf() method returns the last index of occurence of a given substring in the string.
let str3 = "javascript is cool";
console.log(str3.lastIndexOf("i"));

// TODO str.startsWith(searchString, position)-> The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.
const str4 = "javascript is great";
console.log(str4.startsWith("j")); // true
console.log(str4.startsWith("k")); // false

// TODO str.endsWith(searchString, length) -> The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.
const str5 = "node is new";
console.log(str5.endsWith("w")); // true
console.log(str5.endsWith("t")); // false

// TODO str.toUpperCase() -> The toUpperCase() method returns the string converted to uppercase.
const str6 = "javaScript is old";
console.log(str6.toUpperCase());

// TODO str.toLowerCase() -> The toLowerCase() method returns the string converted to lowercase.
const str7 = "NODE js Is cool";
console.log(str7.toLowerCase());

// TODO str.includes(searchString, position) -> The includes() method checks if one string can be found inside another string.
const str8 = "javascript is best for web development";
console.log(str8.includes("java")); // true
console.log(str8.includes("webs")); // false

// TODO str.repeat(count) -> The repeat() method creates a new string by repeating the given string a specified number of times and returns it.
const str9 = "happy coding";
console.log(str9.repeat(3));

// TODO str.charAt(index) -> The charAt() method returns the character at the specified index in a string.
const str10 = "hello friend";
console.log(str10.charAt(4)); // o

// TODO str.charCodeAt(index) -> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
const str11 = "result pending";
console.log(str11.charCodeAt(2)); // s -> 115
