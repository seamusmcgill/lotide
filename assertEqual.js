const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Seamus", "Seamus");
assertEqual(10, 12);

module.exports = assertEqual;