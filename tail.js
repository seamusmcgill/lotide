const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  // Check if array is empty
  if (!array.length) {
    return undefined;
  }
  // Create empty array to store tail values
  let arrayTail = [];
  // Add all values except the head
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

// TEST CASES
let words = ["Lighthouse", "Labs", "Web", "Development", "Bootcamp"];
let result = tail(words);
assertEqual(result.length, words.length - 1);
for (let j = 0; j < words.length - 1; j++) {
  assertEqual(result[j], words[j + 1]);
}