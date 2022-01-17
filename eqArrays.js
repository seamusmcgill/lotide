const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // Check if the arrays are different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // Check if the array item is an array
    if (!Array.isArray(array1[i])) {
      // Check if array items are equal
      if (array1[i] !== array2[i]) {
        return false;
      }
      // Skip to end of loop
      continue;
    }
    
    // Run recursive function on array elements
    if (!eqArrays(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
};

// TEST CASES

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([], []));
console.log(eqArrays(["hello", 2, "four"], ["hello", 2, "four"]));
console.log(eqArrays([1, "2", 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, [2, [3, 4, 5, [1], 2], 33], 4], [1, [2, [3, 4, 5, [1], 2], 33], 4]), true);