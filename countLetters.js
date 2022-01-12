const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  // Create empty output object
  let output = {};
  // Create a new string with spaces removed
  let words = sentence.replace(" ", "");
  for (const letter of words) {
    // Add letter count to output object
    if (output[letter]) {
      output[letter]++;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("Giannis Antetokounmpo")["n"], 4);