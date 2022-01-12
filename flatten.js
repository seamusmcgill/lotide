const eqArrays = function(array1, array2) {
  // Check if the arrays are different lengths
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

const flatten = function(array) {
  // Create empty flattened array
  let flattenedArray = [];
  // Loop through array elements
  for (const element of array) {
    // Check if element is a subarray
    if (Array.isArray(element)) {
      // Loop through subarray and push each element to flattened array
      for (const subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);