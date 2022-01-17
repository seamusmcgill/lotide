const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CASES

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([], []));
console.log(eqArrays(["hello", 2, "four"], ["hello", 2, "four"]));
console.log(eqArrays([1, "2", 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, [2, [3, 4, 5, [1], 2], 33], 4], [1, [2, [3, 4, 5, [1], 2], 33], 4]), true);