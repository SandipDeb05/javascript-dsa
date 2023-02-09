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

// TODO String.fromCharCode(num1, ..., numN) -> The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
const str12 = String.fromCharCode(115, 120, 106);
console.log(str12);

// TODO str.substring(indexStart, indexEnd) -> The substring() method returns a specified part of the string between start and end indexes.
const str13 = "this is a simple text";
console.log(str13.substring(0, 5));

// TODO str.padStart(targetLength, padString) -> The padStart() method pads the current string with another string to the start.
const str14 = "sleep";
console.log(str14.padStart(10, "$"));

// TODO str.padEnd(targetLength, padString)-> The padEnd() method pads the current string with another string to the end.
const str15 = "code";
console.log(str15.padEnd(10, "*"));

// TODO str.codePointAt(pos) -> The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.
const str16 = "sandip";
console.log(str16.codePointAt(0)); // s -> 115

// TODO String.fromCodePoint(num1, ..., numN) -> The fromCodePoint() method returns a string created by using the given sequence of unicode code points.
const str17 = String.fromCharCode(65, 68, 70, 72);
console.log(str17);

// TODO str.match(regexp) -> the match() method returns the result of matching a string against a regular expression.
const str18 = "JavaScript is a fun programming language";
console.log(str18.match("programming"));

// TODO str.matchAll(regexp) -> The matchAll() method returns an iterator of results after matching a string against a regular expression.
const str19 = "JavaScript1JavaScript2";
const regex = /JavaScript\d/g;
const res19 = str19.matchAll(regex);
for (let r of res19) {
  console.log(r);
}

// TODO str.localeCompare(compareStr, locales, options) -> The localeCompare() method checks if a given string comes before, after, or is equivalent as another string in sort order.
const res20 = "a".localeCompare("b"); // -1
const res21 = "b".localeCompare("a"); // 1
const res22 = "a".localeCompare("z"); // -1
const res23 = "a".localeCompare("a"); // 0
const res24 = "book".localeCompare("cook"); // -1
console.log(res20, res21, res22, res23, res24);

// TODO str.search(regexp) -> The search() method searches for a match between a given string and a regular expression.
const str20 = "I love to code in JavaScript.";
console.log(str20.search("code"));

// TODO str.replaceAll(pattern, replacement) -> The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
const str21 = "bbabb ccacc";
console.log(str21.replaceAll("b", "c")); // ccacc ccacc
console.log(str21.replace("b", "c")); // cbabb ccacc

// TODO str.concat(str1, ..., strN) -> The concat() method concatenates given arguments to the given string.
const str22 = "the";
const str23 = " javascript";
const str24 = str22.concat(str23, " is cool");
console.log(str24);

// TODO str.split(separator, limit) -> The split() method divides a string into a list of substrings and returns them as an array.
const str25 = "JavaScript:React:Node : mongodb";
console.log(str25.split(":"));
console.log(str25.split(":", 2));

// TODO str.trim() -> The trim() method removes whitespace from both ends of a string.
const str26 = "   plane simple    text    ";
console.log(str26.trim());

// TODO str.slice(beginIndex, endIndex) -> The slice() method extracts and returns a section of a string.
const str27 = "JavaScript is fun";
console.log(str27.slice(0, 10));
