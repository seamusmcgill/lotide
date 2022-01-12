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

const without = function(source, itemsToRemove) {
  // Loop through source and itemsToRemove arrays
  source.forEach((element, index) => {
    itemsToRemove.forEach(item => {
      // If element is in itemsToRemove splice it from the array
      if (element === item) {
        source.splice(index, 1);
      }
    });
  });
  return source;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["Hey", "there", "champ"], ["champ", 4, "3"]), ["Hey", "there"]);