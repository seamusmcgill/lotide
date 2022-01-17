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

module.exports = countLetters;

// assertEqual(countLetters("lighthouse in the house")["h"], 4);
// assertEqual(countLetters("LHL")["L"], 2);
// assertEqual(countLetters("Giannis Antetokounmpo")["n"], 4);
// assertEqual(countLetters("Seamus")["x", undefined]);