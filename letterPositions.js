const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // If any element isn't equal the array is not equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  // Check if arrays are equivalent or not
  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${array1} === ${array2}`);
  }
};

const letterPositions = function(sentence) {
  let output = {};
  // Loop through letter
  for (let i = 0; i < sentence.length; i++) {
    // Skip to end of loop if there's a space
    if (sentence[i] === " ") {
      continue;
    }
    // Add indices to letters in object
    if (output[sentence[i]]) {
      output[sentence[i]].push(i);
    } else {
      output[sentence[i]] = [i];
    }
  }
  return output;
};

console.log(letterPositions("lighthouse in the house")["h"]);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
assertArraysEqual([1,2,3], [1,2,3,4,5]);