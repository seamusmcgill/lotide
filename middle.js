const eqArrays = function(array1, array2) {
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

const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  }
  let middle = ((array.length) - 1) / 2;
  if (!Number.isInteger(middle)) {
    output.push(array[middle - 0.5], array[middle + 0.5]);
  } else {
    output.push(array[middle]);
  }
  return output;
};

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);