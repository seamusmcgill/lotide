const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  // Check if arrays are equivalent or not
  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${array1} === ${array2}`);
  }
};

module.exports = assertArraysEqual;