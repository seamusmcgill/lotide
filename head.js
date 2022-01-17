const assertEqual = require("./assertEqual");

const head = function(array) {
  // Check if array is empty
  if (!array.length) {
    return undefined;
  }
  // Return first value in array
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), "Array");